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
          <form action="POST" @submit.prevent="loginUser">
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
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="userPassword"
                v-model="password"
              />
            </div>

            <button class="btn btn-primary btn-lg btn-block">Login</button>
          </form>
          <p class="mt-2">
            Dont have an account?
            <router-link to="register">Signup</router-link>
          </p>
          <p class="mt-2">
            Forget Password?
            <router-link to="forget">Click here</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      message: ""
    };
  },
  methods: {
    loginUser() {
      this.message = "";
      try {
        if ((this.email, this.password !== "")) {
          let userData = {
            email: this.email,
            password: this.password
          };
          this.isLoading = true;

          this.$store
            .dispatch("loginUser", userData)
            .then(data => {
              const { success, message } = data;
              if (success) {
                this.$router.push("/");
                return;
              }
              this.message = message;
              this.isLoading = false;

              this.$toast.error(message);
              return;
            })
            .catch(err => {
              this.isLoading = false;
              this.message = "sorry,something went wrong";
              this.$toast.error("sorry,something went wrong");
            });
        } else {
          this.isLoading = false;

          this.$toast.error("Fill all fields");
        }
      } catch (error) {
        this.isLoading = false;

        this.$toast.error("sorry, something went wrong");
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
