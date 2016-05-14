<template>

  <div class="view media" v-bind:style="{ 'background-image': 'url('+params.post.media.big+')' }" @click="closeCurrentPage">
      <video loop v-bind:poster="params.post.media.big" id="bgvid" preload="metadata" webkit-playsinline>
          <source type="video/mp4" src="http://www.w3schools.com/html/mov_bbb.mp4"></source>
          <source type="video/ogg" src="http://www.w3schools.com/html/mov_bbb.ogg"></source>
          Your browser does not support HTML5 video.
      </video>
  </div>

</template>

<script>

export default {
    props: ['params'],
    created() {},

    ready() {
        var vid = this.$el.querySelector("#bgvid");
        vid.play();
    },

    methods: {
        closeCurrentPage() {
            this.$closeCurrentPage();
        }
    }

}

</script>

<style>

.media {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

video#bgvid {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
}

</style>
