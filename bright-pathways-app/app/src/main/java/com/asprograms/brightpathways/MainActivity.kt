package com.asprograms.brightpathways

import android.content.Intent
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.google.firebase.FirebaseApp

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        FirebaseApp.initializeApp(this)
        window.statusBarColor = Color.parseColor("#FFFFFF")
    }

    fun switchToLogin(view: View) {
        startActivity(Intent(this, LoginActivity::class.java))
    }

    fun switchToSignUp(view: View) {
    startActivity(Intent(this, SignUpActivity::class.java))
    }
}