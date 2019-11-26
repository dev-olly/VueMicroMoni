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
                    <tr>
                      <td>Adewole Ampitan</td>
                      <td>ampitanade@gmail.com</td>
                      <td>07 April 2018</td>
                      <td>
                        <button class="tertiary-btn" type="submit">
                          Send Invite
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Adewole Ampitan</td>
                      <td>ampitanade@gmail.com</td>
                      <td>07 April 2018</td>
                      <td>
                        <button class="tertiary-btn" type="submit">
                          Send Invite
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Adewole Ampitan</td>
                      <td>ampitanade@gmail.com</td>
                      <td>07 April 2018</td>
                      <td>
                        <button class="tertiary-btn" type="submit">
                          Send Invite
                        </button>
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
export default {
  name: "Invite"
};
</script>
