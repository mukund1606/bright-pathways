package com.asprograms.brightpathways

import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Path

interface ApiService {
    @GET("posts/{postId}")
    suspend fun getPost(@Path("postId") postId: Int): Post
}
