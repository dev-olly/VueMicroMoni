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
          <h5>Sign Up</h5>
          <form action="POST" @submit.prevent="registerUser">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input type="text" class="form-control" v-model="fullName" />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input type="tel" class="form-control" v-model="phoneNumber" />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" class="form-control" v-model="userEmail" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="userPassword"
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                v-model="confirmPassword"
              />
            </div>

            <button class="btn btn-primary btn-lg btn-block">Register</button>
          </form>
          <p class="mt-2">
            already have an account?
            <router-link to="/login">login</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      fullName: "",
      phoneNumber: "",
      userEmail: "",
      userPassword: "",
      confirmPassword: "",
      bankName: "",
      accountName: "",
      accountNo: "",
      inviterId: "",
      isLoading: false
    };
  },
  methods: {
    async registerUser() {
      this.isLoading = true;
      try {
        if (
          (this.fullName,
          this.userEmail,
          this.userPassword,
          this.phoneNumber !== "")
        ) {
          let userData = {
            full_name: this.fullName,
            email: this.userEmail,
            password: this.userPassword,
            phone_number: this.phoneNumber
          };

          if (this.inviterId !== "") {
            userData = { ...userData, invited_by: this.inviterId };
          }
          this.$store
            .dispatch("registerUser", userData)
            .then(data => {
              let { success, message } = data;

              if (success) {
                this.$router.replace({ name: "login" });
              } else {
                this.$toast.error(message);
              }
            })
            .catch(err => {
              this.$toast.error(err);
            });
        } else {
          this.$toast.error("Fill all parameters");
        }
      } catch (error) {
        this.$toast.error("Sorry something went wrong");
      }
    }
  },
  mounted() {
    let query = this.$route.params.invite_id;
    if (query) {
      this.inviterId = query;
    }
  }
};
</script>
