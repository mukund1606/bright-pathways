import com.asprograms.brightpathways.Post
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path

interface ApiService {
    @GET("posts/{id}")
    fun getPost(@Path("id") postId: Int): Call<Post>

    @POST("posts")
    fun createPost(@Body post: Post): Call<Post>
}
