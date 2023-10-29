package com.asprograms.brightpathways

import android.content.Intent
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class OrgLoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_org_login)
        window.statusBarColor = Color.parseColor("#ffffff")
    }

    fun switchToCustomerLogin(view: View) {
        startActivity(Intent(this, LoginActivity::class.java))
        finish()
    }


    fun loginOrg(view: View) {
        val auth = Firebase.auth
//        findViewById<CardView>(R.id.loginLoadingScreen).animate().alpha(1f).setDuration(500)
        auth.signInWithEmailAndPassword(
            findViewById<EditText>(R.id.userEmail).text.toString(),
            findViewById<EditText>(R.id.userPassword).text.toString()
        ).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val user = findViewById<EditText>(R.id.userEmail).text.toString().split("@")[0].replace(".", "").trim()
                startActivity(Intent(this, LandingActivity::class.java).putExtra("userName", user))
                finish()
            } else {
                val exception = task.exception.toString()
                Toast.makeText(applicationContext, ("Login Failed :(\nCheck your credentials!"), Toast.LENGTH_LONG).show()
//                findViewById<CardView>(R.id.loginLoadingScreen).animate().alpha(0f).setDuration(500)
            }
        }
    }

    fun switchToOrgRegistration(view: View) {
        startActivity(Intent(this, RegisterOrgActivity::class.java))
    }
}