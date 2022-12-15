<template>
  <div class="user-data">
    <form @submit.prevent="sendData" class="user-form">
      <label>
        Name:
        <input v-model="user.firstName" placeholder="Enter name" />
      </label>
      <label>
        Surname:
        <input v-model="user.lastName" placeholder="Enter surname" />
      </label>
      <label>
        Age:
        <input v-model.number="user.age" placeholder="Enter age" />
      </label>
      <label>
        Driver's license:
        <input type="checkbox" v-model="user.driverLessons" />
      </label>
      <select v-model="user.status">
        <option value="married">Married</option>
        <option value="not married">Not married</option>
      </select>
      <label>
        Js:
        <input type="checkbox" v-model="user.skills" value="Js" />
      </label>
      <label>
        Html:
        <input type="checkbox" v-model="user.skills" value="Html" />
      </label>
      <label>
        Css:
        <input type="checkbox" v-model="user.skills" value="Css" />
      </label>
      <label>
        React:
        <input type="checkbox" v-model="user.skills" value="React" />
      </label>
      <label>
        Vue:
        <input type="checkbox" v-model="user.skills" value="Vue" />
      </label>
      <label>
        Angular:
        <input type="checkbox" v-model="user.skills" value="Angular" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    user: {
      firstName: "",
      lastName: "",
      age: "",
      status: "",
      skills: [],
      driverLessons: false,
    },
  }),
  methods: {
    sendData() {
      console.log(this.user);
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.age = "";
      this.user.status = "";
      this.user.skills = [];
      this.user.driverLessons = false;
    },
  },
};
</script>

<style scoped>
.user-data {
  margin: 0 auto;
  max-width: 400px;
}

.user-form {
  display: flex;
  flex-direction: column;
}
</style>
