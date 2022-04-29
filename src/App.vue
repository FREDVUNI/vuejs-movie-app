<template>
  <header>
    <router-link to="/" class="home">
      <h1><span>vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
// import Home from "./views/Home.vue"
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
.router-link-exact-active{
  color: #42b983;
}
*{  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::selection{
  background: transparent(#42b883,0.5);
}
body{
  font-family: 'Poppins', sans-serif;
  background-color: #000;
}
header .home{
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #222222;
  box-shadow: 0px 0px 6px rgba(0, 0, 0.1);
}
h1{
  color: #fff;
  font-size: 28px;
}
span{
  color:#42b883 ;

}
</style>
