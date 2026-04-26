<template>
  <div v-show="!isEditMode">
    <h1>Player profile</h1>

    <img :src="image" />

    <span>Name: </span> <b id="name">{{ name }}</b>
    <hr />

    <span>Email: </span> <b id="email">{{ email }}</b>
    <hr />

    <span>Position: </span> <b id="position">{{ position }}</b>
    <hr />

    <button @click="handleEditProfile">Edit Profile</button>
  </div>

  <div v-show="isEditMode">
    <h1>Player profile</h1>

    <img :src="image" />

    <span>Name: </span>
    <input type="text" id="input-name" v-model="name" />
    <hr />

    <span>Email: </span>
    <input type="text" id="input-email" v-model="email" />
    <hr />

    <span>Position: </span>
    <input type="text" id="input-position" v-model="position" />
    <hr />

    <button @click="handleUpdateProfile">Update Profile</button>
  </div>
</template>

<script>
import image from "./bruno.jpg"
export default {
  name: "App",
  data() {
    return {
      image: image,
      name: "Bruno Fernandes",
      email: "bruno.fernandez@example.com",
      position: "Midfielder",
      isEditMode: false
    }
  },
  methods: {
    // This is what happens when you click the "Edit Profile" button
    handleEditProfile() {
      this.isEditMode = true
    },

    // This is what happens when you click the "Update Profile" button
    handleUpdateProfile() {
      this.isEditMode = false
    }
  }
}
</script>

<style>
img {
  width: 450px;
  display: block;
  margin-bottom: 50px;
}

div {
  margin: 50px auto;
  width: 80%;
}

hr {
  margin-left: 0;
  width: 550px;
  margin-top: 25px;
  margin-bottom: 25px;
}

button {
  width: 180px;
  font-size: 20px;
  height: 50px;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

input {
  width: 300px;
  font-size: 15px;
  padding: 10px;
}


</style>
