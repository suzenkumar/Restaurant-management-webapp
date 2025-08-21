<template>
<div class="nav">
    <router-link to="/">Home</router-link>
     <router-link to="/add.vue">Add Resturant</router-link>
      <!-- <router-link to="/update.vue">Update resturant</router-link> -->
       <a v-on:click="logout"href="#">Logout</a>


      



</div>
    </template>
    <script>
export default{
    name:'Header',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'login'})
        }
    }
}


</script>

<style scoped>
.nav{
    background-color: #e71212;
    overflow: hidden;
}

.nav a{
    text-decoration: none;
    color: white;
    float: left;
    padding:15px;
    text-align: center;
    font-size:17px;
    margin-right:5px;
}

.nav a:hover{
    background-color: aliceblue;
    color:black;
}

h2 {
  text-align: right;
}




</style>