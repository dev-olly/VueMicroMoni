<template>
  <div class="container-fluid">
    <section>
      <div class="img-container text-center">
        <img src="../assets/undraw_Mail_sent_qwwx.svg" alt="" srcset="" />
        <p>
          You were registered successfully, proceed to login
        </p>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "success"
};
</script>

<style lang="scss">
section {
  //   align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: auto;
  }
  .img-container {
    margin-top: 5%;
    img {
      width: 40%;
    }
    p {
      //   width: 50ch;\
      margin-top: 5%;
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
    margin-top: 10%;

    .img-container p {
      margin-top: 5%;
    }
  }
}
</style>
