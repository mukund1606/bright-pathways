package com.asprograms.brightpathways

import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Color
import android.graphics.drawable.Drawable
import android.location.LocationManager
import android.location.LocationRequest
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.preference.PreferenceManager
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.animation.AnimationUtils
import android.widget.ImageButton
import android.widget.LinearLayout
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.location.LocationManagerCompat.requestLocationUpdates
import com.google.firebase.FirebaseApp
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.ValueEventListener
import com.google.firebase.database.ktx.database
import com.google.firebase.ktx.Firebase
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.osmdroid.config.Configuration
import org.osmdroid.tileprovider.tilesource.TileSourceFactory
import org.osmdroid.util.GeoPoint
import org.osmdroid.views.MapView
import org.osmdroid.views.overlay.Marker
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class LandingActivity : AppCompatActivity() {

    private var OrgNames = mutableListOf<String>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_landing_home)
        window.statusBarColor = Color.parseColor("#FFFFFF")

    }

    fun setCurrentToOldAge (view: View) {
        setContentView(R.layout.activity_landing_old_age)

        val mapView = findViewById<MapView>(R.id.osmMapView)
        mapView.setTileSource(TileSourceFactory.MAPNIK)
        mapView.setBuiltInZoomControls(true)
        mapView.setMultiTouchControls(true)

        val mapController = mapView.controller
        mapController.setZoom(20.2)
        mapController.setCenter(GeoPoint(28.4595, 77.0266))

        Configuration.getInstance().load(this, PreferenceManager.getDefaultSharedPreferences(this))


        val thisValueEventListener = object : ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                val children = snapshot.children
                for ( child in children ) {
                    findViewById<TextView>(R.id.helloText).text = "Hello ${child.value.toString()}!"
                }
            }

            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }

        }
        Firebase.database.getReference("${intent.getStringExtra("userName")}/").addValueEventListener(thisValueEventListener)

        FirebaseApp.initializeApp(this)

        // DYNAMICALLY LINKING THE DATABASE
        val valueEventListener = object : ValueEventListener {
            override fun onDataChange(dataSnapshot: DataSnapshot) {
                // Get all the children of the reference.
                val children = dataSnapshot.children

                OrgNames.clear()
                for ( child in children ) {
                    OrgNames.add(child.key.toString())
                }
                addCardsForTheseHeads(OrgNames)
//                findViewById<ProgressBar>(R.id.progressWheel).alpha = 0f
//                findViewById<TextView>(R.id.notificationText).alpha = 0f
            }

            override fun onCancelled(databaseError: DatabaseError) {
                // Handle any errors that occur.
            }
        }
        val myRef = Firebase.database.getReference("/Orgs/")
//        findViewById<TextView>(R.id.notificationText).text = "Fetching your data..."
        myRef.addValueEventListener(valueEventListener)
    }

    private fun addCardsForTheseHeads( thisList : MutableList<String> ) {
        Log.d("BUILDING", "Entered building the layouts")
        findViewById<LinearLayout>(R.id.horizontal_cards_layout).removeAllViews()
        for ( head in thisList ) {
            val view = LayoutInflater.from(this).inflate(R.layout.layout_card_horizontal_scroll, null)

            view.findViewById<TextView>(R.id.titleH1).text = head
//            view.setOnClickListener(View.OnClickListener {
//                Toast.makeText(this, "Edit Request - $head", Toast.LENGTH_LONG).show()
//                startActivity(Intent(this, EditHeaderActivity::class.java).putExtra("header", head).putExtra("userName", intent.getStringExtra("userName")))
//            })

//            view.findViewById<TextView>(R.id.headerText).setOnClickListener {
//                startActivity(Intent(this, EditHeaderActivity::class.java).putExtra("header", head).putExtra("userName", intent.getStringExtra("userName")))
//            }

//            view.findViewById<ImageButton>(R.id.editButton).setOnClickListener(View.OnClickListener {
//                startActivity(Intent(this, EditHeaderActivity::class.java).putExtra("header", head).putExtra("userName", intent.getStringExtra("userName")))
//            })

//            view.findViewById<ImageButton>(R.id.deleteButton).setOnClickListener {
//                val user = intent.getStringExtra("userName")
//                Firebase.database.getReference("/$user/$head").removeValue()
//                Toast.makeText(this, "Deleted - $head", Toast.LENGTH_LONG).show()
//            }
            Log.d("BUILDING", "Built - $head")
            findViewById<LinearLayout>(R.id.horizontal_cards_layout).addView(view)
        }
    }

    fun openDedicatedMap(view: View) {
        findViewById<View>(R.id.dedicatedMapView).animate().translationY(40f).setDuration(300L).setInterpolator( AnimationUtils.loadInterpolator(this,
            com.google.android.material.R.interpolator.m3_sys_motion_easing_emphasized_decelerate))

        val mapView = findViewById<MapView>(R.id.osmMapView2)
        val mapController = mapView.controller
        mapController.setZoom(20.2)
        mapController.setCenter(GeoPoint(28.4595, 77.0266))

        Configuration.getInstance().load(this, PreferenceManager.getDefaultSharedPreferences(this))

        val valueEventListener = object : ValueEventListener {
            override fun onDataChange(dataSnapshot: DataSnapshot) {
                // Get all the children of the reference.
                val children = dataSnapshot.children

                OrgNames.clear()
                for ( child in children ) {
                    OrgNames.add(child.key.toString())
                }
                addCardsForTheseHeads(OrgNames)
//                findViewById<ProgressBar>(R.id.progressWheel).alpha = 0f
//                findViewById<TextView>(R.id.notificationText).alpha = 0f
            }

            override fun onCancelled(databaseError: DatabaseError) {
                // Handle any errors that occur.
            }
        }
        val myRef = Firebase.database.getReference("/Orgs/")


        for ( orgName in OrgNames ) {
            val valueEventListener = object : ValueEventListener {
                override fun onDataChange(dataSnapshot: DataSnapshot) {
                    // Get all the children of the reference.
                    val children = dataSnapshot.children

                    for ( child in children ) {
                        if ( child.key.toString() == "location" ) {
                            val location = child.value.toString()
                            val thisMarker = Marker(mapView)
                            thisMarker.position = GeoPoint( location.split(",")[0].trim() as Double, location.split(",")[1].trim() as Double)
                            thisMarker.title = child.key.toString()
                            mapView.overlays.add(thisMarker)
                        }
                    }
                    addCardsForTheseHeads(OrgNames)
//                findViewById<ProgressBar>(R.id.progressWheel).alpha = 0f
//                findViewById<TextView>(R.id.notificationText).alpha = 0f
                }

                override fun onCancelled(databaseError: DatabaseError) {
                    // Handle any errors that occur.
                }
            }
            val myRef = Firebase.database.getReference("/Orgs/$orgName")
        }
//        findViewById<TextView>(R.id.notificationText).text = "Fetching your data..."
        myRef.addValueEventListener(valueEventListener)

        val marker = Marker(mapView)
        mapView.setTileSource(TileSourceFactory.MAPNIK)
        mapView.setBuiltInZoomControls(true)
        mapView.setMultiTouchControls(true)

        val secondaryMarker = Marker(mapView)
        secondaryMarker.position = GeoPoint(28.4600, 77.03) // Set the marker's location
        secondaryMarker.title = "Home 1"
        secondaryMarker.snippet = "High class old age home with all the necessary facilities"
        mapView.overlays.add(secondaryMarker)

        marker.position = GeoPoint(28.4595, 77.0266)
        marker.title = "You are here"
        mapView.overlays.add(marker)


        for ( i in 1..5 ) {
            val thisView = LayoutInflater.from(this).inflate(R.layout.layout_card_nearest_home, null)
            thisView.findViewById<TextView>(R.id.titleH1).text = "Home $i"

            findViewById<LinearLayout>(R.id.nearbyHomesContainer).addView(thisView)
        }
    }

    fun setCurrentToHome(view: View) {
        setContentView(R.layout.activity_landing_home)
    }

    fun setCurrentToSpecialSchools(view: View) {
        setContentView(R.layout.activity_landing_special_schools)
    }

    fun switchToOrgRegistration(view: View) {
        startActivity(Intent(this, RegisterOrgActivity::class.java))
        finish()
    }

    fun hideDedicatedMap(view: View) {
        findViewById<View>(R.id.dedicatedMapView).animate().translationY(2500f).setDuration(300L).setInterpolator( AnimationUtils.loadInterpolator(this,
            com.google.android.material.R.interpolator.m3_sys_motion_easing_emphasized_accelerate))
    }

}