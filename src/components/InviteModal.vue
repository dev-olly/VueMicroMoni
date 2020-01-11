<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click.self="close">
      <div
        class="custom-modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        ref="modal"
      >
        <h5 class="text-center">
          Share an invite with your friends on social media
        </h5>

        <slot name="body">
          <ul>
            <li class="card-shadow">
              <a
                :href="`https://www.facebook.com/sharer.php?u=${url}`"
                target="blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 9.9304C0 4.4548 4.4548 0 9.9304 0C15.4064 0 19.8608 4.4548 19.8608 9.9304C19.8608 15.4056 15.4056 19.8608 9.9304 19.8608C4.4548 19.8608 0 15.4056 0 9.9304ZM10.7844 10.28H12.4L12.6092 8.2452H10.7852V7.0492C10.7852 6.5996 11.0832 6.4948 11.2928 6.4948H12.5804V4.5192L10.8064 4.5124C8.8384 4.5124 8.3904 5.9856 8.3904 6.9284V8.2448H7.2524V10.28H8.3904V16.0384H10.7844V10.28Z"
                      fill="#0094FF"
                    />
                  </g>
                </svg>

                Facebook Invites
              </a>
            </li>
            <li class="card-shadow">
              <a
                class="twitter-share-button"
                :href="
                  `https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${tags}`
                "
                target="blank"
                rel="noopener noreferrer"
                data-size="large"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.9">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.8577 9.92885C19.8577 15.4124 15.4124 19.8577 9.92885 19.8577C4.4453 19.8577 0 15.4124 0 9.92885C0 4.4453 4.4453 0 9.92885 0C15.4124 0 19.8577 4.4453 19.8577 9.92885ZM14.6474 7.50885C15.1274 7.45186 15.5851 7.32425 16.0106 7.13558C15.6926 7.6115 15.2903 8.02938 14.8262 8.36389C14.8308 8.46549 14.8331 8.56796 14.8331 8.6708C14.8331 11.8073 12.4458 15.4235 8.08053 15.4235C6.74035 15.4235 5.49257 15.0308 4.44283 14.3572C4.62814 14.3793 4.81752 14.3904 5.00867 14.3904C6.12088 14.3904 7.14407 14.0112 7.95646 13.3745C6.9177 13.3552 6.04142 12.669 5.73947 11.7264C5.88425 11.754 6.03274 11.7687 6.18602 11.7687C6.40212 11.7687 6.61221 11.7398 6.81115 11.6853C5.72566 11.4674 4.90726 10.5083 4.90726 9.35841C4.90726 9.3485 4.90726 9.33841 4.90743 9.32832C5.22726 9.50655 5.59345 9.61327 5.9823 9.62549C5.34584 9.2 4.92655 8.47327 4.92655 7.65009C4.92655 7.21522 5.04372 6.80726 5.24796 6.45681C6.41858 7.8931 8.16743 8.83788 10.1398 8.93681C10.0991 8.76301 10.0781 8.58195 10.0781 8.39593C10.0781 7.08549 11.1409 6.02266 12.4513 6.02266C13.1343 6.02266 13.7512 6.3108 14.1841 6.77186C14.7244 6.66549 15.2326 6.46814 15.6912 6.19611C15.5136 6.75062 15.1375 7.21522 14.6474 7.50885Z"
                      fill="#83D0FB"
                    />
                  </g>
                </svg>

                Twitter Invites
              </a>
            </li>
            <li class="card-shadow cursor" @click="copyLink">
              <svg
                height="20"
                viewBox="-40 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m271 512h-191c-44.113281 0-80-35.886719-80-80v-271c0-44.113281 35.886719-80 80-80h191c44.113281 0 80 35.886719 80 80v271c0 44.113281-35.886719 80-80 80zm-191-391c-22.054688 0-40 17.945312-40 40v271c0 22.054688 17.945312 40 40 40h191c22.054688 0 40-17.945312 40-40v-271c0-22.054688-17.945312-40-40-40zm351 261v-302c0-44.113281-35.886719-80-80-80h-222c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h222c22.054688 0 40 17.945312 40 40v302c0 11.046875 8.953125 20 20 20s20-8.953125 20-20zm0 0"
                />
              </svg>
              <input
                type="text"
                class="d-none"
                id="copyLink"
                v-model="url"
              />Copy link
            </li>
          </ul>
        </slot>

        <slot name="footer"> </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
    copyLink() {
      let copyText = document.getElementById("copyLink");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.$toast.success("Copied");
    }
  },
  props: {
    url: String
  },
  data() {
    return {
      text: "Invest. Earn. Impact Lives",
      tags: "micromoni, smallbiz"
    };
  },
  created() {
    // console.log(this.url);
  }
};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-backdrop {
  position: fixed;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-modal {
  width: 40%;
  margin: auto;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 20px;
  display: block;
  color: #1b1464;
}

.custom-modal a,
a:hover {
  color: #1b1464;
  text-decoration: none;
}

.custom-modal ul {
  margin-top: 5px;
}
.custom-modal ul li {
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.09);
  margin-bottom: 5px;
}

ul .card-shadow button {
}

.custom-modal ul li svg {
  margin-right: 7px;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

@media screen and (max-width: 768px) {
  .custom-modal {
    width: 90%;
  }
}
</style>
