<template>
   <div class="container col-md-6 d-flex flex-column justify-content-center mt-4">
        <div class="mt-4 movies-list" v-if="this.product.length > 0">
        <div class="movie" v-for="movie in product" :key="movie.id">
            <router-link :to="`/movie/${movie.id}`" class="movie-link">
                <div class="product-image">
                    <img :src="poster" alt="movie">
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
</template>

<script>
    import axios from "axios";
    import {useRoute} from "vue-router";
    export default {
        name: 'Moviedetail',
        data() {
            return {
                product:[]
                
            }
        },
        methods:{
            getproduct(){
                const route = useRoute();
                let catid = route.params.id;
                let data = new FormData();
                data.append("catid",catid)
                axios.post('http://localhost/scolaza/api/category',data)
                    .then(resp=>{
                        this.product = resp.data
                        console.log(resp.data);
                    })
                    .catch(err=>{
                        console.log(`something went wrong `+ err);
                    })
                },
        },
        mounted(){
            this.getproduct()
        },
        computed:{
            poster(){
                return '../images/poster-8.jpg';
            }
        }
    }
</script>