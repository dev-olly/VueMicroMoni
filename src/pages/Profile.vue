<template>
  <div>
    <AppHeader :name="'Profile'" />
    <main>
      <div class="blue-bg"></div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div
          class="col-lg-10 w-80 ml-auto border-radius-5 white-bg margin-top-2"
        >
          <section class="profile">
            <div class="container">
              <div class="profile--image"></div>

              <div class="row mt-3">
                <div class="col-sm-6 mt-2">
                  <h5>Profile Information</h5>

                  <div class="profile-info" role="list">
                    <div class="info" role="listitem">
                      <span class="d-block label">Name</span>
                      <span class="d-block">{{ user.full_name }}</span>
                    </div>
                    <div class="info" role="listitem">
                      <span class="d-block label">Phone Number</span>
                      <span class="d-block">{{ user.user_phone }}</span>
                    </div>
                    <div class="info" role="listitem">
                      <span class="d-block label">Email Address</span>
                      <span class="d-block">{{ user.user_email }}</span>
                    </div>
                    <div class="info" role="listitem">
                      <span class="d-block label">Date of Birth</span>
                      <span class="d-block">{{ user.date_of_birth }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-2">
                  <h5>Bank Information</h5>

                  <div class="profile-info" role="list">
                    <div class="info" role="listitem">
                      <span class="d-block label">Bank Name</span>
                      <span class="d-block">{{
                        user.bank_name || "not yet provided"
                      }}</span>
                    </div>
                    <div class="info" role="listitem">
                      <span class="d-block label">Account Name</span>
                      <span class="d-block">{{
                        user.account_name || "not yet provided"
                      }}</span>
                    </div>
                    <div class="info" role="listitem">
                      <span class="d-block label">Account Number</span>
                      <span class="d-block">{{
                        user.account_number || "not yet provided"
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="main-action mt-3">
                <router-link
                  to="edit-profile"
                  class="btn btn-lg btn-block main-button"
                  >Edit Information</router-link
                >
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
    ...mapGetters(["user"])
  }
};
</script>
