<template>
  <div class="container-fluid">
    <Loader
      :fullPage="true"
      :color="'#00aced'"
      :bgColor="'#fff'"
      :type="'ripple'"
      v-if="isLoading"
    />
    <section class="row mt-4">
      <div class="col-sm-6">
        <img
          src="./../assets/auth-image.svg"
          class="img-fluid main-image d-block"
          alt="authentication "
        />
        <h2 class="fw-500 pt-2 main-heading">
          Welcome to Investor’s dashboard. Feel free to register.
        </h2>
      </div>
      <div class="col-sm-6">
        <div class="auth-form">
          <h5>Login</h5>
          <form action="POST" @submit.prevent="submit">
            <p class="error">{{ message }}</p>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="form-control"
                name="userEmail"
                v-model="email"
              />
            </div>

            <button class="btn btn-primary btn-lg btn-block">Fetch Link</button>
          </form>
          <p class="mt-2">
            Dont have an account?
            <router-link to="register">Signup</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "forgetPassword",
  data() {
    return {
      email: "",
      isLoading: false,
      message: ""
    };
  },
  methods: {
    async submit() {
      try {
        if (this.email) {
          let reqData = {
            email: this.email
          };
          let response = await this.$http.post("/forget_password", reqData);

          const { error, message } = response.data;

          if (error === 0) {
            this.$toast.success(message);
          } else {
            this.$toast.error(message);
          }
        } else {
          this.$toast.error("Please enter your email");
        }
      } catch (error) {
        this.$toast.error("Sorry, something went wrong");
      }
    }
  }
};
</script>

<style lang="scss">
section {
  align-items: center;
}
</style>
