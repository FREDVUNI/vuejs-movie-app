<template>
   <div class="container mt-5">
        <div class="row">
            <div class="col-md-5 mb-5">
                <div class="card">
                    <img :src="`${movie.Poster !== 'N/A' ? movie.Poster:'https://via.placeholder.com/800' }`" alt="movie">
                </div>
            </div>
            <div class="col-md-7 mb-5">
                <div class="card bg-darky">
                    <div class="card-body">
                    <h4 class="card-title">{{ movie.Title }}</h4>   
                    <p class="card-text"><b>Year:</b> {{ movie.Year }}</p>
                    <p class="card-text"><b>Rated:</b> {{ movie.R }}</p>
                    <p class="card-text"><b>Released:</b> {{ movie.Released }}</p>
                    <p class="card-text"><b>Runtime:</b> {{ movie.Runtime }}</p>
                    <p class="card-text"><b>Genre:</b> {{ movie.Genre }}</p>
                    <p class="card-text"><b>Director:</b> {{ movie.Director }}</p>
                    <p class="card-text"><b>Writer:</b> {{ movie.Writer }}</p>
                    <p class="card-text"><b>Actors:</b> {{ movie.Actors }}</p>
                    <p class="card-text"><b>Plot:</b> {{ movie.Plot }}</p>
                    <p class="card-text"><b>Language:</b> {{ movie.Language }}</p>
                    <p class="card-text"><b>Country:</b> {{ movie.Country }}</p>
                    <p class="card-text"><b>Awards:</b> {{ movie.Awards }}</p>
                    <p class="card-text"><b>BoxOffice:</b> {{ movie.BoxOffice }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import {useRoute} from "vue-router";
    export default {
        name: 'Moviedetail',
        data() {
            return {
                movie:{}
            }
        },
        methods:{
            getMovie(){
                const route = useRoute();
                axios.post(`https://www.omdbapi.com/?i=${route.params.id}&apikey=thewdb`)
                    .then(resp=>{
                        this.movie = resp.data
                        console.log(resp.data);
                    })
                    .catch(err=>{
                        console.log(`something went wrong `+ err);
                    })
                },
        },
        mounted(){
            this.getMovie()
        }
    }
</script>
<style>
    .bg-darky{
        background-color:#000;
        color:#ccc;
    }
</style>