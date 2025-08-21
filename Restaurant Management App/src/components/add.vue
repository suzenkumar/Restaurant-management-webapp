<template>

    <Header></Header>
    
    <center>
         <img class="logo" src="../assets/restrologo.jpg" />
        <h1>Hello User,Welcome on Add Resturant Page</h1>
           <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="Address" placeholder="Enter Your Address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
        <button type="button" v-on:click="addResturant">Add new Resturant</button>

    </form>
    </center>
      <footer>
  <p>
    &copy; 2025 Project made by <b>Suzen Kumar Mohanty</b> | 
    Technology used: HTML, CSS, JavaScript, Bootstrap
  </p>
</footer>
 
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Add',
    components: {
        Header
    },

    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }

        }
    },


    methods: {
        async addResturant() {
            console.log(this.restaurant)
            const result = await axios.post("http://localhost:3000/restsurant", {

                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,

            });
            if (result.status == 201) {
                this.$router.push({ name: 'Home' });
            }
            console.warn("result", result)


        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'Signup' })
        }
    }
}

</script>

<style scoped>
.add input {
    width: 300px;
    height: 40px;
    padding-left: 15px;
    margin-bottom: 20px;
    border: 1px solid red;
    border-radius: 5px;
    display: block;
}

/* Button */
button {
    width: 300px;
    height: 40px;
    border: none;
    background-color: red;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: darkred;
}

/* Logo */
.logo {
  width: 200px;
  margin-bottom: 20px;
}

footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
  font-size: 14px;
}
footer b {
  color: #ff4d4d; /* highlight your name */
}

</style>