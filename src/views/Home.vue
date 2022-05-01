<template>
  <div class="home">
      <div class="featured-card">
          <router-link to="/movie/1">
            <img src="/images/imaage.jpg" alt="image poster" class="featured-img">
            <div class="container">
                <div class="detail">
                    <h3>OMDb API</h3>
                    <p>
                        The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
                    </p>
                </div>
            </div>
          </router-link>
      </div>
      <div class="container col-md-6 d-flex flex-column justify-content-center mt-4 mb-5">
            <form @submit.prevent="submitForm()" class="in-line">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="what are you looking for ?" autofocus="" v-model="search">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-dark bg-darks">SEARCH</button>
                    </div>
                </div>
            </form>
        </div>
      <div class="container">
        <div class="row">
            <div class="col-md-3 mb-5" v-for="movie in movies" :key="movie.imdbID">
                <div class="card h-100 text-white bg-darks">
                    <img class="card-img-top" :src="`${movie.Poster !== 'N/A' ? movie.Poster:'https://via.placeholder.com/800' }`" alt="movie">
                    <div class="card-body">
                    <h5 class="card-title">{{ movie.Title }}</h5>  
                    <p class="card-text"><b>Year:</b> {{ movie.Year }}</p>
                    <router-link :to="`/movie/${movie.imdbID}`" class="btn btn-outline-light btn-sm">more details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Home',
  data(){
      return{
          search:"",
          movies:[]
      }
  },
  components: {
    
  },
  methods:{
      submitForm(){
        if(this.search != ""){
            let data = new FormData();
            data.append("searchQuery",this.search)
            axios.post(`https://www.omdbapi.com/?s=${this.search}&apikey=thewdb`,data)
            .then(response=>{
                this.movies = response.data.Search
            })
            .catch(error=>{
                console.log(`something went wrong `+ error);
            })
        }
      }
  }
}
</script>
<style>
.home .featured-card{
    position: relative;
}
.home .featured-img{
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
    z-index: 0;
}
.home .detail{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0,0.6);
    padding: 16px;
    z-index: 1;
}
.home .detail h3{
    color: #fff;
    margin-bottom: 16px;
}
.home .detail p{
    color: #fff;
    font-size: 20px;
}
.btn{
    border:none;
    color: #ccc;
    cursor:pointer;
}
.form-control{
    width: 100%;
    color: #fff;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 0px;
    margin-bottom: 15px;
    transition: 0.4s;
    background-color: #222222;
    border-color: #222222;
    outline: none;
}
.form-control::placeholder{
    color: #ccc;
}
.bg-darks{
    background-color:#222222;
}
.form-control:focus{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    background-color: #222222;
    color: #fff;
    border-color: #222222;
}
.form-control:active{
    background-color: #222222;;
}
.movies-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px;
}
.movies-list .movie{
    max-width: 48%;
    flex: 1 25%;
    padding: 8px;
    margin-left: 5px;

}
.movies-list .movie-link{
   display: flex;
   flex-direction: column;
   height: 100%;
}
.product-image{
    position: relative;
    display: block;
}
.product-image img{
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
}
.product-image .type{
    position: absolute;
    padding: 8px 16px;
    background-color: #42B883;
    color: #fff;
    bottom: 16px;
    left: 0px;
    text-transform: capitalize;
}
.details{
    background-color: #496583;
    padding: 16px 8px;
    flex: 1 1 100%;
    border-radius: 0px 0px 8px 8px ;
    
}
.details p{
    margin-bottom: 0px;
    color: #aaa;
    font-size: 14px;
}
.details h3{
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}
</style>