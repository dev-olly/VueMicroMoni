<template>
  <header>
    <div class="small" :class="{ 'd-none': !toggle }">
      <div class="small__sidebar">
        <i class="material-icons cancel__icon pointer" @click="toggleMenu"
          >clear</i
        >

        <ul class="nav-links">
          <li class="nav-link active">
            <router-link to="/" class="nav-link active"> Home </router-link>
          </li>

          <li class="nav-link">
            <router-link to="/profile" class="nav-link"> Profile </router-link>
          </li>

          <li class="nav-link">
            <router-link to="/history" class="nav-link"> History </router-link>
          </li>

          <li class="nav-link">
            <router-link to="/invite" class="nav-link">
              Invite Others
            </router-link>
          </li>
          <!-- <li class="nav-link">About</li> -->
        </ul>
      </div>
    </div>

    <div class="big-nav d-none d-sm-block">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="container-fluid">
            <div class="row">
              <!-- Sidebar -->
              <div class="col-lg-2 col-md-2 sidebar bg-custom-color fixed-top">
                <a class="navbar-brand pb-12 mt-3" href="#">
                  <img
                    src="../assets/logo.png"
                    alt="Micro Moni"
                    class="brand_logo img-fluid"
                  />
                </a>

                <div class="line"></div>

                <ul class="navbar-nav flex-column mt-4 pb-3">
                  <li class="nav-item">
                    <router-link
                      to="/"
                      class="nav-link active-link mb-2 sidebar-link"
                    >
                      <i class="icon">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.728097">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.944 0C14.15 0 13.504 0.630813 13.504 1.40625C13.504 1.56028 13.5357 1.70591 13.5828 1.84472L7.64938 7.63956C7.33293 7.53709 7.06848 7.53672 6.75072 7.6395L5.68122 6.59478C5.72829 6.45597 5.76 6.31028 5.76 6.15625C5.76 5.38081 5.11405 4.75 4.32 4.75C3.52595 4.75 2.88 5.38081 2.88 6.15625C2.88 6.31028 2.91171 6.45597 2.95882 6.59478L1.88931 7.6395C1.7471 7.5935 1.59786 7.5625 1.44 7.5625C0.645952 7.5625 0 8.19331 0 8.96875C0 9.74419 0.645952 10.375 1.44 10.375C2.23405 10.375 2.88 9.74419 2.88 8.96875C2.88 8.6925 2.7951 8.43638 2.65366 8.21881L3.5519 7.34134C3.77472 7.47959 4.03699 7.5625 4.32 7.5625C4.60301 7.5625 4.86528 7.47959 5.0881 7.34134L5.98634 8.21881C5.8449 8.43638 5.76 8.6925 5.76 8.96875C5.76 9.74419 6.40595 10.375 7.2 10.375C7.99405 10.375 8.64 9.74419 8.64 8.96875C8.64 8.6925 8.5551 8.43644 8.41366 8.21887L14.1758 2.59134C14.3987 2.72959 14.661 2.8125 14.944 2.8125C15.738 2.8125 16.384 2.18169 16.384 1.40625C16.384 0.630813 15.738 0 14.944 0Z"
                              fill="#1B1464"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.80078 9.71094V15.9988H6.72078V11.5859L4.80078 9.71094Z"
                              fill="#1B1464"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.67969 11.5886V16.0015H9.62484V9.69531L7.67969 11.5886Z"
                              fill="#1B1464"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M1.10158 12.3861C1.01156 12.474 0.960938 12.593 0.960938 12.7175V15.53C0.960938 15.7891 1.17563 15.9988 1.44094 15.9988H3.84094V9.71094L1.10158 12.3861Z"
                              fill="#1B1464"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.624 8.7564V16.0001H12.4126V7.01599L10.624 8.7564Z"
                              fill="#1B1464"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.565 3.94988L13.3789 6.07847V16H15.9043C16.1697 16 16.3843 15.7904 16.3843 15.5313V4.28128C16.3843 3.86375 15.865 3.65485 15.565 3.94988Z"
                              fill="#1B1464"
                            />
                          </g>
                        </svg>
                      </i>
                      <span class="d-inline-block">Lending</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/history"
                      class="nav-link mb-2 sidebar-link"
                    >
                      <i class="icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0)">
                            <g opacity="0.9">
                              <g opacity="0.9">
                                <path
                                  opacity="0.9"
                                  d="M1.48301 4.30725L1.84122 4.66546L2.08593 4.22191C3.23849 2.1329 5.47319 0.76169 8 0.76169C11.7515 0.76169 14.8571 3.86732 14.8571 7.61883C14.8571 11.373 11.8251 14.476 8 14.476C5.00365 14.476 2.45524 12.5476 1.51002 9.90455H2.33328C3.27869 12.1215 5.40841 13.7141 8 13.7141C11.3342 13.7141 14.0952 10.953 14.0952 7.61883C14.0952 4.28463 11.3342 1.52359 8 1.52359C5.56065 1.52359 3.53162 2.90849 2.48106 4.92879L2.35225 5.1765L2.54967 5.37392L4.03268 6.85693H0.380952V3.2052L1.48301 4.30725ZM7.61905 7.39026V7.60595L7.804 7.71692L10.5213 9.34728L10.3105 9.68984L7.23809 7.85949V4.57121H7.61905V7.39026Z"
                                  stroke="#1B1464"
                                  stroke-width="0.761905"
                                />
                              </g>
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect width="15.2381" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </i>
                      History
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/profile"
                      class="nav-link mb-2 sidebar-link"
                    >
                      <i class="icon">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.14065 4.52903C5.14065 2.76701 6.56752 1.34014 8.32954 1.34014C10.0915 1.34014 11.5184 2.76701 11.5184 4.52903C11.5184 6.29104 10.0915 7.71792 8.32954 7.71792C6.56752 7.71792 5.14065 6.29104 5.14065 4.52903ZM1.25176 13.279C1.25176 12.8896 1.44128 12.4967 1.87676 12.0948C2.31699 11.6885 2.96026 11.322 3.72752 11.0146C5.26317 10.3994 7.11912 10.0901 8.32954 10.0901C9.53995 10.0901 11.3959 10.3994 12.9316 11.0146C13.6988 11.322 14.3421 11.6885 14.7823 12.0948C15.2178 12.4967 15.4073 12.8896 15.4073 13.279V15.4957H1.25176V13.279Z"
                            stroke="#C2CFE0"
                            stroke-width="1.4"
                          />
                        </svg>
                      </i>
                      Profile
                    </router-link>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link mb-2 sidebar-link">
                      <i class="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.2188 9.28125C13.7531 8.46562 14.0625 7.50938 14.0625 6.46875C14.0625 3.68438 11.7844 1.40625 9 1.40625C6.21563 1.40625 3.9375 3.68438 3.9375 6.46875C3.9375 7.50938 4.24688 8.46562 4.78125 9.28125C5.4 10.6031 5.87812 11.8406 5.625 12.6562H12.375C12.1219 11.8406 12.6 10.6031 13.2188 9.28125Z"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.6562 13.7812H5.34375C5.03437 13.7812 4.78125 13.5281 4.78125 13.2188C4.78125 12.9094 5.03437 12.6562 5.34375 12.6562H12.6562C12.9656 12.6562 13.2188 12.9094 13.2188 13.2188C13.2188 13.5281 12.9656 13.7812 12.6562 13.7812Z"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.0938 14.9062H5.90625C5.59687 14.9062 5.34375 14.6531 5.34375 14.3438C5.34375 14.0344 5.59687 13.7812 5.90625 13.7812H12.0938C12.4031 13.7812 12.6562 14.0344 12.6562 14.3438C12.6562 14.6531 12.4031 14.9062 12.0938 14.9062Z"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.15625 16.3125H7.03125C6.72187 16.3125 6.46875 16.0594 6.46875 15.75V15.4688C6.46875 15.1594 6.72187 14.9062 7.03125 14.9062H10.9688C11.2781 14.9062 11.5312 15.1594 11.5312 15.4688V15.75C11.5312 16.0594 11.2781 16.3125 10.9688 16.3125H9.84375"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.875 16.3125V16.5938H10.125V16.3125"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.84375 9.84375H8.15625V12.6562H9.84375V9.84375Z"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.9688 6.46875L9.84375 9.84375"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.15625 9.84375L7.03125 6.46875"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.03125 6.46875C7.36875 6.46875 7.36875 6.94688 7.67812 6.94688C8.01562 6.94688 8.01563 6.55312 8.325 6.55312C8.6625 6.55312 8.6625 6.94688 8.97187 6.94688C9.30937 6.94688 9.30938 6.55312 9.61875 6.55312C9.95625 6.55312 9.95625 6.94688 10.2656 6.94688C10.6031 6.94688 10.6031 6.46875 10.9125 6.46875"
                            stroke="#1B1464"
                            stroke-width="0.75"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </i>
                      Status
                    </a>
                  </li>
                  <li class="nav-item">
                    <router-link to="invite" class="nav-link mb-2 sidebar-link">
                      <i class="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.375 13.6605H12.75V13.2855V11.4067L13.35 10.9161V13.957C13.35 14.12 13.2181 14.2535 13.05 14.2535H2.925C2.75818 14.2535 2.625 14.1178 2.625 13.957V6.29648C2.625 6.13348 2.75689 6 2.925 6H6.01736C5.90762 6.09892 5.81097 6.19251 5.72732 6.27777C5.60363 6.40386 5.50805 6.51209 5.44035 6.59297H3.6H3.225V6.96797V13.2855V13.6605H3.6H12.375ZM11.625 7.875V7.5H11.25C9.73958 7.5 8.6375 7.7196 7.70832 8.30215C7.19097 8.62651 6.74176 9.05462 6.30984 9.59209C6.41311 9.25398 6.55014 8.89155 6.73172 8.53035C7.07406 7.8494 7.57 7.18203 8.28858 6.68471C9.0037 6.18978 9.9599 5.84883 11.25 5.84883H11.625V5.47383V4.12688L15.1248 6.76266L11.625 9.37383V7.875Z"
                            stroke="#1B1464"
                            stroke-width="0.75"
                          />
                        </svg>
                      </i>
                      Invite Friends
                    </router-link>
                  </li>

                  <!-- <div class="line"></div>
        
                                        <li class="nav-item mb-2">
                                            <a href="#" class="nav-link mt-2 sidebar-link">
                                                <i class="icon">
                                                    <svg class="setting-icons" width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.32975 0.751465C1.41309 0.751465 0.663086 1.50146 0.663086 2.41813C0.663086 3.3348 1.41309 4.0848 2.32975 4.0848C3.24642 4.0848 3.99642 3.3348 3.99642 2.41813C3.99642 1.50146 3.24642 0.751465 2.32975 0.751465ZM12.3298 0.751465C11.4131 0.751465 10.6631 1.50146 10.6631 2.41813C10.6631 3.3348 11.4131 4.0848 12.3298 4.0848C13.2464 4.0848 13.9964 3.3348 13.9964 2.41813C13.9964 1.50146 13.2464 0.751465 12.3298 0.751465ZM7.32975 0.751465C6.41309 0.751465 5.66309 1.50146 5.66309 2.41813C5.66309 3.3348 6.41309 4.0848 7.32975 4.0848C8.24642 4.0848 8.99642 3.3348 8.99642 2.41813C8.99642 1.50146 8.24642 0.751465 7.32975 0.751465Z" fill="#C2CFE0"/>
                                                    </svg>         
                                                </i>
                                                Settings
                                            </a>
                  </li>-->
                </ul>
              </div>

              <!-- Main navbar -->
              <div class="col-12 col-lg-10 col-md-10 ml-auto w-80 top-navbar">
                <div class="row">
                  <div class="col-md-5"></div>
                  <div class="col-md-4"></div>
                  <div class="col-md-3">
                    <ul class="navbar-nav align-center">
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M9.42002 20.4236C7.78314 20.4201 6.14646 20.4128 4.50977 20.4021C3.30452 20.3794 2.31246 19.0056 2.79771 17.8183C3.07727 17.1341 3.78433 16.6571 4.53264 16.6523H5.65896C5.65896 14.7535 5.65333 12.8546 5.65914 10.9558C5.68183 8.54889 7.17246 6.22689 9.38796 5.21589L9.40896 5.20652C9.40896 4.57014 9.38064 3.88108 9.57358 3.36208C9.95102 2.34789 10.9412 1.6457 12.0666 1.65245C13.4346 1.67795 14.6498 2.86164 14.659 4.27614V5.20652C14.7023 5.22602 14.7456 5.24589 14.7885 5.26633C16.9433 6.29889 18.4016 8.58527 18.409 10.9946V16.6523C19.0506 16.6523 19.7216 16.5625 20.2849 16.8088C21.3666 17.2821 21.75 18.8989 20.9066 19.8047C20.5624 20.1741 20.068 20.3925 19.5581 20.4021C17.9329 20.4128 16.3075 20.4199 14.6822 20.4236C14.6593 20.6854 14.5433 20.9785 14.4422 21.1948C14.0768 21.9778 13.2566 22.516 12.3709 22.5328C11.8765 22.536 11.3803 22.5572 10.93 22.3922C10.1106 22.0924 9.50777 21.3021 9.42002 20.4236ZM13.864 20.5898H10.204C10.3712 21.2567 11.0018 21.7693 11.7066 21.7828C12.1028 21.7855 12.4963 21.8233 12.8621 21.6945C13.3517 21.522 13.7372 21.0953 13.864 20.5898ZM12.0107 2.40245C11.0365 2.42064 10.1651 3.26345 10.159 4.27839V5.45477C10.1383 5.76695 10.0326 5.75102 9.72902 5.88489C7.78371 6.75677 6.42977 8.77745 6.40896 10.9605V17.0273C6.40896 17.0273 6.33058 17.3828 6.03396 17.4023C5.01283 17.4023 3.81471 17.2521 3.48189 18.1275C3.23008 18.7901 3.76221 19.6283 4.50471 19.6519C9.52333 19.7468 14.5446 19.747 19.5632 19.6519C20.4103 19.6251 21.0026 18.4375 20.3483 17.7512C20.1388 17.5313 19.8405 17.4043 19.5326 17.4023H18.034C17.8311 17.389 17.6768 17.3001 17.659 17.0273C17.659 15.0049 17.665 12.9827 17.6588 10.9603C17.6389 8.76395 16.2385 6.64914 14.1435 5.80239C14.1435 5.80239 13.926 5.71333 13.909 5.45477C13.909 4.59714 13.983 3.68233 13.4696 3.07127C13.1091 2.64227 12.6086 2.39889 12.0107 2.40245Z"
                                fill="black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>
                      <li class="nav-link logout" @click="logOut">Logout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="small-nav d-block d-sm-none">
      <nav>
        <i class="material-icons d-inline-block pointer" @click="toggleMenu()"
          >menu</i
        >
        <span class="d-inline-block logo">{{ name }}</span>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    logOut() {
      sessionStorage.removeItem("Micromoni");
      this.$router.go("login");
    },
    toggleMenu() {
      this.toggle = !this.toggle;
    }
  },
  props: {
    name: String
  }
};
</script>

<style lang="scss">
.logout {
  cursor: pointer;
}

.small .nav-link {
  color: rgb(128, 126, 126);
}
</style>
