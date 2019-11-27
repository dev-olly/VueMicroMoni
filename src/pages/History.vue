<template>
  <div>
    <AppHeader :name="'History'" />
    <main class="pattern">
      <div class="blue-bg"></div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-10 w-80 ml-auto margin-top-2">
          <section class="white-bg border-radius-5 ">
            <div class="row">
              <div
                class="col-sm-12 no-padding card-shadow card-radius d-none d-sm-block"
              >
                <div class="text-center mb-3">
                  <h6>Investment History</h6>
                </div>
                <table
                  class="table responsive-table border-radius-5 table-borderless t-table"
                  v-if="investments.length > 0"
                >
                  <thead class="grey-bg">
                    <tr>
                      <th scope="col">Amount</th>
                      <th scope="col">Start date</th>
                      <th scope="col">End date</th>
                      <th scope="col">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(invest, i) in investments" :key="i">
                      <td>NGN {{ invest.amount }}</td>
                      <td>
                        {{ invest.start_date | moment("dddd, MMMM Do YYYY") }}
                      </td>
                      <td>
                        {{
                          invest.start_date
                            | moment("add", `${invest.duration} months`)
                        }}
                      </td>
                      <td>NGN 10000</td>
                    </tr>
                  </tbody>
                </table>
                <p class="empty-message text-center" v-else>
                  Hi {{ user.full_name }}, you havent invested yet

                  <router-link to="/invest">
                    Invest Here
                  </router-link>
                </p>
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
  name: "History",
  computed: {
    ...mapGetters(["investments", "user"])
  }
};
</script>

<style lang="scss">
.empty-message {
  font-size: 2.2rem;
  color: rgb(110, 109, 109);
}
</style>
