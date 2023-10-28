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

class SignUpActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up)
        window.statusBarColor = Color.parseColor("#FFFFFF")

    }


    fun signUpUser(view: View) {
        val name = findViewById<EditText>(R.id.userName)
        val auth = Firebase.auth

        auth.createUserWithEmailAndPassword(
            findViewById<EditText>(R.id.userEmail).text.toString(),
            findViewById<EditText>(R.id.userPassword).text.toString()
        ).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                // User registration successful
                Toast.makeText(applicationContext, "Welcome $name!", Toast.LENGTH_LONG).show()
                // You can do something with the user here
                Firebase.database.getReference(findViewById<EditText>(R.id.userEmail).text.toString().split("@")[0].replace(".", "") + "/Alive")
                    .setValue("Yes")
                Toast.makeText(applicationContext, "SignUp Successful!", Toast.LENGTH_LONG)
                    .show()
                finish()
                startActivity(
                    Intent(this, LandingActivity::class.java)
                        .putExtra("userEmail", findViewById<EditText>(R.id.userEmail).text.toString())
                        .putExtra("userPSWD",findViewById<EditText>(R.id.userPassword).text.toString()))
            } else {
                val exception = task.exception.toString()
                Toast.makeText(applicationContext, ("Registration Failed :(\n$exception"), Toast.LENGTH_LONG).show()
            }
        }
    }

    fun switchToLogin(view: View) {
        startActivity(Intent(this, LoginActivity::class.java))
        finish()
    }
}