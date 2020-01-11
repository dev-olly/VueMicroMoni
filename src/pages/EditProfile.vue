<template>
  <div>
    <Loader
      :fullPage="true"
      :color="'#00aced'"
      :bgColor="'#fff'"
      :type="'ripple'"
      v-if="isLoading"
    />
    <AppHeader />
    <main>
      <div class="blue-bg"></div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div
          class="col-lg-10 w-80 ml-auto border-radius-5 white-bg margin-top-2"
        >
          <section class="edit-profile p-3">
            <div class="container">
              <h4 class="mb-3 blue-text">Profile Information</h4>

              <div class="row">
                <div class="col-sm-6 form-group">
                  <label for="fullname">Fullname</label>
                  <input type="text" class="form-control" v-model="fullName" />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    v-model="phoneNumber"
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="date">Date of Birth</label>
                  <input type="date" class="form-control" v-model="dob" />
                </div>
                <div class="col-sm-12">
                  <h4 class="blue-text">Bank Details</h4>
                </div>

                <div class="col-sm-6 form-group">
                  <label for="fullname">Bank Name</label>
                  <input type="text" class="form-control" v-model="bankName" />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="accountName">Account Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="accountName"
                  />
                </div>
                <div class="col-sm-6 form-group">
                  <label for="accountNumber">Account Number</label>
                  <input type="text" class="form-control" v-model="accountNo" />
                </div>
                <div class="col-sm-6"></div>

                <div class="col-sm-6 main-action mt-3">
                  <button
                    class="btn btn-lg btn-block main-button"
                    @click="editProfile()"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user", "token"])
  },
  data() {
    return {
      fullName: "",
      phoneNumber: "",
      dob: "",
      bankName: "",
      accountName: "",
      accountNo: "",
      isLoading: false
    };
  },
  methods: {
    async editProfile() {
      this.isLoading = true;
      try {
        if (
          (this.fullName,
          this.phoneNumber,
          this.email,
          this.dob,
          this.bankName,
          this.accountName,
          this.accountNo !== "")
        ) {
          let reqData = {
            full_name: this.fullName,
            phone_number: this.phoneNumber,
            date_of_birth: this.dob,
            bank_name: this.bankName,
            account_name: this.accountName,
            account_number: this.accountNo
          };

          let headers = {
            "x-access-token": this.token
          };

          let response = await this.$http.put("/edit_profile", reqData, {
            headers: headers
          });

          const { error, message } = response.data;

          if (error === 0) {
            this.isLoading = false;
            this.$store.commit("editUser", reqData);
            this.$toast.success("Successful, your profile has been updated", {
              duration: 5000
            });
          } else {
            this.isLoading = false;
            this.$toast.error(message, {
              duration: 5000
            });
          }
        } else {
          this.isLoading = false;
          this.$toast.error("Please fill all fields", {
            duration: 5000
          });
        }
      } catch (error) {
        this.isLoading = false;
        this.$toast.error("Sorry, an error occurred, try again", {
          duration: 5000
        });
      }
    }
  },
  mounted() {
    this.fullName = this.user.full_name;
    this.phoneNumber = this.user.user_phone;
    this.email = this.user.user_email;
    this.bankName = this.user.bank_name;
    this.accountName = this.user.account_name;
    this.accountNo = this.user.account_number;
    this.dob = this.user.user_dob
  }
};
</script>
