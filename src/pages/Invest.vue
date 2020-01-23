<template>
  <div>
    <AppHeader :name="'Invest'" />
    <main>
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-10 w-80 ml-auto margin-top-2">
          <section class="container">
            <div class="sponsor-form">
              <h4 class="form-heading mb-3">
                Investor's Form
              </h4>
              <div class="form-group">
                <p class="error-message">{{ amountMsg }}</p>
                <label for="amount">Amount (Minimum Amount of N20, 000)</label>
                <input
                  type="text"
                  name="userAmount"
                  class="form-control"
                  placeholder="Enter Amount"
                  v-model="amount"
                  @change.prevent="
                    confirmAmount();
                    calculateReturns();
                  "
                  required
                />
              </div>
              <div class="form-group">
                <p class="roi" v-if="display">
                  Your return On Investment <b class="purple-text">&#8358;</b
                  ><span class="amount fw-600 purple-text">{{ returns }}</span>
                  which will be due on
                  {{ new Date() | moment("add", `${duration} months`) }}
                </p>
                <label for="duration">Duration</label>
                <select
                  class="form-control"
                  v-model="duration"
                  @change.prevent="calculateReturns"
                >
                  <option value selected>Default select</option>
                  <option value="3">3 months(8.5%)</option>
                  <option value="6">6 months(18%)</option>
                  <option value="9">9 months(26%)</option>
                </select>
              </div>
              <p>
                By continuing you accept our
                <a href="https://micromoni.com/Terms_and_conditions.html"
                  >Terms</a
                >
                of Use
              </p>
              <Rave
                v-if="
                  amount !== '' &&
                    duration !== '' &&
                    parseFloat(amount) >= 20000
                "
                style-class="btn btn-primary btn-lg"
                :email="user.user_email"
                :amount="parseFloat(amount)"
                :reference="reference"
                :rave-key="raveKey"
                :callback="callback"
                :close="close"
                :metadata="meta"
                :redirectUrl="redirect"
                :customerFirstname="user.full_name"
                paymentOptions="card,barter,account,ussd"
                hostedPayemt="1"
                customTitle="Micromoni"
                currency="NGN"
                country="NG"
                ><i>Proceed to payment</i></Rave
              >
              <button
                class="btn btn-primary btn-lg"
                @click="fillAllInfo"
                v-else
              >
                Proceed to payment
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Rave from "vue-ravepayment";
import { mapGetters } from "vuex";

export default {
  name: "Invest",
  components: {
    Rave
  },
  computed: {
    ...mapGetters(["user", "token"]),
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  data() {
    return {
      amount: "0",
      duration: "",
      raveKey: "FLWPUBK-7265f9a68d3580ca7e608191dc304320-X",
      meta: [
        {
          metaname: "Micromoni",
          metavalue: "Micromoni"
        }
      ],
      redirect: "http://localhost:8080/#/invest",
      amountMsg: "",
      display: false,
      returns: 0
    };
  },
  methods: {
    callback: function(response) {
      if (
        response.tx.chargeResponseCode === "00" ||
        response.tx.chargeResponseCode == "0"
      ) {
        let orderData = {
          txRef: response.tx.txRef,
          amount: response.tx.amount,
          duration: this.duration,
          start_date: new Date(),
          end_date: "04/08/2020"
        };

        let headers = {
          "x-access-token": this.token
        };

        this.$http
          .post("create_investment", orderData, { headers: headers })
          .then(data => {
            if (data.error === 0) {
              this.$router.push("/");
            } else {
              this.$toast.error(data.message);
            }
          })
          .catch(err => {
            console.error(err);
            this.$toast.error("sorry something went wrong");
          });
      }
    },
    close: function() {
      console.log("Payment closed");
    },
    confirmAmount() {
      this.amountMsg = "";
      if (parseFloat(this.amount) < 20000) {
        this.amountMsg = "Sorry, the minimum is 20,000";
        return;
      }
      return;
    },
    calculateReturns() {
      if (parseInt(this.amount) >= 20000) {
        let amount = parseFloat(this.amount);
        if (this.duration === "3") {
          this.returns = Math.floor(amount + amount * 0.085);
        } else if (this.duration === "6") {
          this.returns = Math.floor(amount + amount * 0.18);
        } else if (this.duration === "9") {
          this.returns = Math.floor(amount + amount * 0.26);
        } else {
          return;
        }
      }
      this.display = true;
      return;
    },
    fillAllInfo() {
      this.$toast.error("fill all info");
    }
  }
};
</script>
