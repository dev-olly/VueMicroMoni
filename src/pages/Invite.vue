<template>
  <div>
    <AppHeader />
    <main class="pattern">
      <div class="blue-bg"></div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-10 w-80 ml-auto margin-top-2">
          <section class="white-bg border-radius-5 ">
            <div class="row">
              <div
                class="col-sm-12 no-padding card-shadow card-radius d-sm-block table-responsive-xl"
              >
                <div class="text-center mb-3">
                  <h6>Invite</h6>
                </div>
                <table class="table border-radius-5 table-borderless t-table">
                  <thead class="grey-bg">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Date</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(invite, i) in invites" :key="i">
                      <td>{{ invite.fullname }}</td>
                      <td>
                        {{ invite.email }}
                      </td>
                      <td>
                        {{ invite.date_added | moment("dddd, MMMM Do YYYY") }}
                      </td>
                      <td>
                        send invite
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-center">
                  <button class="btn btn-lg btn-primary">
                    Send Invite
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
  name: "Invite",
  computed: {
    ...mapGetters(["invites", "user"])
  },
  methods: {
    async fetch_invites() {
      if (this.invites.length !== 0) {
        return;
      }
      this.isLoading = true;
      try {
        let response = await this.$store.dispatch("fetchInvites");

        const { success, message } = response;

        if (success) {
          this.$toast.success(`Welcome back ${this.user.full_name}`);
        } else {
          this.$toast.error(message);
        }
      } catch (error) {
        console.error(error);
        this.$toast.error("Sorry something went wrong");
      }
      this.isLoading = false;
    }
  },

  mounted() {
    this.fetch_invites();
  }
};
</script>
