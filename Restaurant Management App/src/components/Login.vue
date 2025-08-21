<template>
  <div class="container">
    <img class="logo" src="../assets/restrologo.jpg" />
    <div class="login">
      <h1 class="head"><b>Login Page</b></h1>

      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />

      <center>
        <button @click="login">Login</button>
      </center>

      <p>
        <router-link to="/Signup.vue" id="signup">
          New To Uncle Master Chef? Create an account
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // ✅ Import Axios

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        alert("Please enter both email and password.");
        return;
      }

      try {
        const result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        );

        if (result.status === 200 && result.data.length > 0) {
          alert("Login successful!");
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home" }); // ✅ Make sure "Home" route is defined

          // Clear form
          this.email = "";
          this.password = "";
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        if (error.response) {
          alert("Login failed: " + error.response.statusText);
        } else if (error.request) {
          alert("No response from server. Check if API is running.");
        } else {
          alert("Error: " + error.message);
        }
      }
    }
  }
};
</script>

<style scoped>
/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 40px;
  background: #f9f9f9;
}

/* Logo */
.logo {
  width: 200px;
  margin-bottom: 20px;
}

/* Login box */
.login {
  background: #fff;
  padding: 30px;
  border: 1px solid red;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Inputs */
.login input {
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

/* Signup link */
#signup {
  text-decoration: none;
  color: black;
}

#signup:hover {
  color: red;
}
</style>
