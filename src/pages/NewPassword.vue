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
          <h5>Set New Password</h5>
          <form action="POST" @submit.prevent="submit">
            <p class="error">{{ message }}</p>
            <div class="form-group">
              <label for="email">New Password</label>
              <input
                type="password"
                class="form-control"
                name="userEmail"
                v-model="newPassword"
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
  name: "newPassword",
  data() {
    return {
      newPassword: "",
      isLoading: false,
      message: "",
      token: ""
    };
  },
  methods: {
    async submit() {
      this.isLoading = true;
      try {
        if (this.token && this.newPassword !== "") {
          let headers = {
            "x-access-token": this.token
          };
          let reqData = {
            newPassword: this.newPassword
          };

          let response = await this.$http.put("/change_password", reqData, {
            headers: headers
          });

          const { error, message } = response.data;

          if (error === 0) {
            this.$toast.success("Successful");
            this.$router.push("login");
          } else {
            this.$toast.error(message);
          }
        } else {
          this.$toast.error("Fill all parameters");
        }
      } catch (error) {
        this.$toast.error("Sorry, something went wrong");
      }
      this.isLoading = false;
    }
  },
  created() {
    let token = this.$route.query.u;

    if (!token) {
      this.token = token;
      this.$router.replace("login");
    }
  }
};
</script>

<style lang="scss">
section {
  align-items: center;
}
</style>
