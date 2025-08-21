<template>
  <div>
    <Header />
    <center>
         <img class="logo" src="../assets/restrologo.jpg" />
        <h1>Hello {{ name }}, Welcome on Home Page</h1>
         <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in restaurant" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.address }}</td>
          <td>
            <router-link :to="'/update/' + item.id">Update</router-link>
            <button @click="deleteRestaurant(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </center>
    

   
  </div>

  <footer>
  <p>
    &copy; 2025 Project made by <b>Suzen Kumar Mohanty</b> | 
    Technology used: HTML, CSS, JavaScript, Bootstrap
  </p>
</footer>

</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  methods: {
   async deleteRestaurant(id) {
  if (!confirm("Are you sure you want to delete this restaurant?")) {
    return;
  }
  try {
    const result = await axios.delete(`http://localhost:3000/restsurant/${id}`);
    if (result.status === 200) {
      this.loadData();
    }
  } catch (error) {
    console.error("Delete failed:", error);
  }
},

async loadData() {
  const user = localStorage.getItem("user-info");
  if (!user) {
    this.$router.push({ name: "Signup" });
    return;
  }

  this.name = JSON.parse(user).name;

  try {
    const result = await axios.get("http://localhost:3000/restsurant");
    this.restaurant = result.data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
},

  },
  mounted() {
    this.loadData();
  },
};



</script>

<style>
td,
th {
  width: 160px;
  height: 40px;
  padding: 8px;
  text-align: center;
}
table {
  border-collapse: collapse;
  margin-top: 20px;
}
button {
  margin-left: 10px;
  cursor: pointer;
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
