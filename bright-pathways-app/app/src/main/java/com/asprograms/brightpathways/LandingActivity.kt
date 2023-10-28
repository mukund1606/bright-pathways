package com.asprograms.brightpathways

import ApiService
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.LinearLayout
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class LandingActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_landing_home)
        window.statusBarColor = Color.parseColor("#FFFFFF")
    }

    fun setCurrentToOldAge (view: View) {
        setContentView(R.layout.activity_landing_old_age)
        for ( i in 1..10 ) {
            val thisView = LayoutInflater.from(this).inflate(R.layout.layout_card_horizontal_scroll, null)
            findViewById<LinearLayout>(R.id.horizontal_cards_layout).addView(thisView)
        }
    }

    fun setCurrentToHome(view: View) {
        setContentView(R.layout.activity_landing_home)
    }

}