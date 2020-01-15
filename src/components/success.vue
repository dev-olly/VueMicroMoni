<template>
  <div class="container-fluid">
    <section>
      <div class="img-container text-center">
        <img src="../assets/undraw_Mail_sent_qwwx.svg" alt="" srcset="" />
        <p v-if="isRecoverPassword">
          An Email has been sent to you containing a link to reset your password
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "success",
  props: {
    isRecoverPassword: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
section {
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
}
</style>
