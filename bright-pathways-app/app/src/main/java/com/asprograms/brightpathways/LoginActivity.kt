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

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        window.statusBarColor = Color.parseColor("#FFFFFF")

    }

    fun loginUser(view: View) {
        val auth = Firebase.auth
//        findViewById<CardView>(R.id.loginLoadingScreen).animate().alpha(1f).setDuration(500)
        auth.signInWithEmailAndPassword(
            findViewById<EditText>(R.id.userEmail).text.toString(),
            findViewById<EditText>(R.id.userPassword).text.toString()
        ).addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val user = findViewById<EditText>(R.id.userEmail).text.toString().split("@")[0].replace(".", "")
                startActivity(Intent(this, LandingActivity::class.java).putExtra("userName", user))
                finish()
            } else {
                val exception = task.exception.toString()
                Toast.makeText(applicationContext, ("Login Failed :(\nCheck your credentials!"), Toast.LENGTH_LONG).show()
//                findViewById<CardView>(R.id.loginLoadingScreen).animate().alpha(0f).setDuration(500)
            }
        }
    }

    fun switchToSignUp(view: View) {
        startActivity(Intent(this, SignUpActivity::class.java))
        finish()
    }

}