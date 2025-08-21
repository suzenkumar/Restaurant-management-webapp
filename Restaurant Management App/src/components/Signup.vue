<template>
  <div class="container">
    <img class="logo" src="../assets/restrologo.jpg" />

    <div class="register">
      <h1 class="head"><b>Sign Up</b></h1>
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <center>
        <button v-on:click="signUp">Sign Up</button>
      </center>
      <p>
        <router-link to="/Login.vue" id="login">Existing User? Login In</router-link>
      </p>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (!this.name || !this.email || !this.password) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        const result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        console.warn(result);

        if (result.status === 201 || result.status === 200) {
          alert("Sign-up successful!");
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "Home" });

          // Clear inputs
          this.name = "";
          this.email = "";
          this.password = "";
        }
      } catch (error) {
        console.error("Sign-up failed:", error);
        alert("Sign-up failed. Please try again.");
      }
    },
  },
};
</script>





<style scoped>
/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  justify-content: flex-start; /* keep at top */
  min-height: 100vh;
  padding-top: 40px; /* top spacing */
  background: #f9f9f9; /* optional background */
}

/* Logo */
.logo {
  width: 200px;
  margin-bottom: 20px;
}

/* Register box */
.register {
  background: #fff;
  padding: 30px;
  border: 1px solid red;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Inputs */
.register input {
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

#login{
    text-decoration: none;
}
 #login:hover{
   color:red;
}
</style>
