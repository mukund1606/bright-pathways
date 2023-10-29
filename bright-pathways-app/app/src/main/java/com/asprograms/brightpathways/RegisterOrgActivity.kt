package com.asprograms.brightpathways

import android.content.Intent
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase
import com.google.firebase.storage.FirebaseStorage
import okhttp3.MediaType
import okhttp3.Request
import okhttp3.RequestBody
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RegisterOrgActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_org)
        window.statusBarColor = Color.parseColor("#ffffff")
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if ( requestCode == 1000 ) {

            if ( findViewById<EditText>(R.id.orgName).text.isEmpty() ) {
                Toast.makeText(this, "Please enter all fields first", Toast.LENGTH_SHORT).show()
            } else {

                showUploadingOverlay()
                val storage = FirebaseStorage.getInstance()
                val storageRef = storage.reference
                val fileUri = data?.data

                var fileRef = storageRef.child(
                    "${intent.getStringExtra("userName")}/${
                        findViewById<EditText>(R.id.orgName).text.toString()
                    }/"
                )

                fileRef.listAll().addOnSuccessListener { listResult ->
                    fileRef = fileRef.child("verifFile")
                    fileRef.putFile(fileUri!!)
                        .addOnSuccessListener { taskSnapshot ->
                            val downloadUrl = taskSnapshot.metadata?.reference?.downloadUrl
                            Toast.makeText(this, "Uploading Successful!", Toast.LENGTH_LONG).show()
                        }
                        .addOnFailureListener { exception ->
                            Toast.makeText(this, "Failed to upload...", Toast.LENGTH_LONG).show()
                        }
                    hideUploadingOverlay()
                }
            }
        }
    }

    fun registerOrg(view: View) {

        val auth = Firebase.auth
        // for adding the coordinates
//        dbRef.child("coordinates").setValue("${findViewById<>()}")

        val retrofit = Retrofit.Builder()
            .baseUrl("https://jsonplaceholder.typicode.com/") // Replace with your API's base URL
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val apiService = retrofit.create(ApiService::class.java)
//        val request = Request.Builder()
//            .url("https://bright-pathways-backend.onrender.com/mongo/organisation/search")
//            .post(RequestBody.create(MediaType.parse("application/json"), jsonData))
//            .build()



        auth.createUserWithEmailAndPassword(
            findViewById<EditText>(R.id.orgEmail).text.toString(),
            findViewById<EditText>(R.id.orgPassword).text.toString()
        ).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val name = findViewById<EditText>(R.id.orgName).text
                Toast.makeText(applicationContext, "Via $name!", Toast.LENGTH_LONG).show()

                var myRef = Firebase.database.getReference("/Orgs")
                myRef.child("$name").setValue("")
                myRef = Firebase.database.getReference("/Orgs/$name")
                myRef.child("type").setValue("oldAgeHome")
                myRef.child("address").setValue("${findViewById<EditText>(R.id.orgAddress).text}")
                myRef.child("email").setValue("${findViewById<EditText>(R.id.orgEmail).text}")
                myRef.child("location").setValue("${findViewById<EditText>(R.id.orgLocation)}")
                Toast.makeText(applicationContext, "SignUp Successful!", Toast.LENGTH_LONG)
                    .show()

                finish()
                startActivity(
                    Intent(this, LandingActivity::class.java)
                        .putExtra("userEmail", findViewById<EditText>(R.id.orgEmail).text.toString())
                        .putExtra("userPSWD",findViewById<EditText>(R.id.orgPassword).text.toString()))
            } else {
                val exception = task.exception.toString()
                Toast.makeText(applicationContext, ("Registration Failed :(\n$exception"), Toast.LENGTH_LONG).show()
            }
        }
    }
    fun uploadFile(view: View) {
        val intent = Intent(Intent.ACTION_GET_CONTENT)
        intent.type = "*/*"
        startActivityForResult(intent, 1000 )
    }

    private fun showUploadingOverlay(){
        findViewById<View>(R.id.uploadingOverlay).animate().alpha(1f).setDuration(300)
    }
    private fun hideUploadingOverlay() {
        findViewById<View>(R.id.uploadingOverlay).animate().alpha(0f).setDuration(300)
    }


    fun switchToHome(view: View){
        startActivity(Intent(this, LandingActivity::class.java))
        finish()
    }
}