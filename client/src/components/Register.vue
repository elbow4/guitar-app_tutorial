<template>
  <div>
    <h1>Register</h1>

<!-- v-model binds input -->
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email" />
    <br>
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password" />
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button
    @click="register">
    Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        // catch every response status different than 200
        // what gets returned from axios
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
