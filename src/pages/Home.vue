<template>
  <div class="home">
    <Loader
      :fullPage="true"
      :color="'#00aced'"
      :bgColor="'#fff'"
      :type="'ripple'"
      v-if="isLoading"
    />
    <AppHeader />
    <main class="pattern">
      <div class="blue-bg"></div>
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-10 w-80 ml-auto margin-top-2">
          <section
            class="border-radius-5"
            v-if="investments.length != undefined"
          >
            <div class="row">
              <div class="col-sm-12 white-bg main-card d-none d-sm-block">
                <div class="card-items d-flex justify-content-between">
                  <div class="card-item">
                    <span class="d-block">Current Investment</span>
                    <span class="d-block">
                      <strong>NGN</strong> {{ total || "0" }}
                    </span>
                  </div>
                  <div class="card-item">
                    <span class="d-block">Investment Returns</span>
                    <span class="d-block">
                      <strong>NGN</strong> {{ totalReturns || "0" }}
                    </span>
                  </div>
                  <div class="card-item">
                    <span class="d-block">Investor's status</span>
                    <span class="d-block">
                      <strong>Active</strong>
                    </span>
                  </div>
                  <div class="card-item">
                    <span class="d-block">Investment Duration</span>
                    <span class="d-block">90 days</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-block d-sm-none">
              <div class="grid">
                <div class="main-card text-center">
                  <small class="d-block">Current Investment</small>
                  <span>
                    <em class="green-text">NGN</em> {{ total || "0" }}
                  </span>
                </div>
                <div class="main-card text-center">
                  <small class="d-block">Investment Return</small>
                  <span>
                    <em class="green-text">NGN</em> {{ totalReturns || "0" }}
                  </span>
                </div>
                <div class="main-card text-center">
                  <small class="d-block">Investor's Status</small>
                  <span class="green-text">Active</span>
                </div>
                <div class="main-card text-center">
                  <small class="d-block">Loan Duration</small>
                  <span class="green-text">90 Days</span>
                </div>
              </div>
              <div class="col-12"></div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-lg btn-primary" @click="goToinvest()">
                Invest
              </button>
            </div>
          </section>

          <section class="mt-4">
            <h5 class="ml-2">Lending History</h5>
            <div class="row">
              <div class="col-sm-8">
                <table
                  class="table responsive-table border-radius-5 table-borderless t-table m-auto"
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
                </p>
              </div>
              <div class="col-sm-4 d-none">
                <ul class="news" role="list">
                  <h5>News Update</h5>
                  <li class="news-card">
                    <p class="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi iusto magni accusantium nisi suscipit dolores ipsum,
                      vitae harum, ut non repellat impedit quisquam fuga quo
                      aut? Corporis at porro est.
                    </p>
                    <div class="d-flex justify-content-between">
                      <span>3: 30PM</span>
                      <a href="#">Read More</a>
                    </div>
                  </li>
                  <li class="news-card">
                    <p class="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi iusto magni accusantium nisi suscipit dolores ipsum,
                      vitae harum, ut non repellat impedit quisquam fuga quo
                      aut? Corporis at porro est.
                    </p>
                    <div class="d-flex justify-content-between">
                      <span>3: 30PM</span>
                      <a href="#">Read More</a>
                    </div>
                  </li>
                  <li class="news-card">
                    <p class="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi iusto magni accusantium nisi suscipit dolores ipsum,
                      vitae harum, ut non repellat impedit quisquam fuga quo
                      aut? Corporis at porro est.
                    </p>
                    <div class="d-flex justify-content-between">
                      <span>3: 30PM</span>
                      <a href="#">Read More</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["investments", "token", "user"])
  },
  data() {
    return {
      isLoading: false,
      total: 0,
      totalReturns: 0
    };
  },
  methods: {
    async fetch_investments() {
      if (this.investments.length !== 0) {
        this.total = this.investments
          .map(i => parseInt(i.amount))
          .reduce((acc, cv) => acc + cv);
        return;
      }
      this.isLoading = true;
      try {
        let response = await this.$store.dispatch("fetchInvestments");

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
    },
    goToinvest() {
      this.$router.push("invest");
    }
  },
  mounted() {
    this.fetch_investments();
  }
};
</script>

<style lang="scss">
.empty-message {
  font-size: 1.8rem;
  color: rgb(110, 109, 109);
}
</style>
