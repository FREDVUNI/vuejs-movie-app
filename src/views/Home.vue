<template>
  <div class="home">
      <div class="featured-card">
          <router-link to="/movie/1">
            <img src="/images/photo1.png" alt="image poster" class="featured-img">
            <div class="container">
                <div class="detail">
                    <h3>Naruto</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis qui quod, earum sequi 
                        reiciendis distinctio tempore deserunt ducimus, recusandae nisi ipsum aperiam 
                        voluptatibus. Voluptatum exercitationem vero architecto. Reprehenderit, laboriosam voluptatem?
                    </p>
                </div>
            </div>
          </router-link>
      </div>
      <div class="container col-md-6 d-flex flex-column justify-content-center mt-4">
            <form @submit.prevent="submitForm()">
                <input type="text" class="form-control" placeholder="what are you looking for ?" v-model="search">
                <button type="submit" class="btn btn-success btn-lg btn-block">SEARCH</button>
            </form>
           <div class="mt-4 movies-list" v-if="this.movies.length > 0">
              <div class="movie" v-for="movie in movies" :key="movie.id">
                  <router-link :to="`/movie/${movie.catid}`" class="movie-link">
                    <div class="product-image">
                        <img :src="`./images/poster-3.jpg`" alt="movie">
                        <div class="type">{{ movie.category }}</div>
                    </div>
                <div class="details">
                    <p class="">{{ movie.date_created }}</p>
                    <h3>{{ movie.product }}</h3>
                </div>
                  </router-link>  
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
            axios.post('http://localhost/scolaza/api/search',data)
            .then(response=>{
                this.movies = response.data
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
}
.form-control{
    width: 100%;
    color: #fff;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 0px;
    margin-bottom: 15px;
    transition: 0.4s;
    background-color: #496583;
    border-color: #496583;
    outline: none;
}
.form-control::placeholder{
    color: #f3f3f3;
}
.form-control:focus{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    background-color: #496583;
    color: #fff;
}
.form-control:active{
    background-color: #3B8070;;
}
.movies-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px;
}
.movies-list .movie{
    max-width: 48%;
    flex: 1 1 50%;
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