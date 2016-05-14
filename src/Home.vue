<template>
  <div class="view">
      <div class="header header--shadow bg-deep-purple text-white">
          <div class="header__title">Weeze</div>
          <div class="header__buttons">
              <button class="button button--icon"><i class="icon mdi mdi-bell-outline"></i></button>
          </div>
      </div>
      <div class="content has-header">
          <ul class="list">
              <li class="list__subheader">Updates</li>
              <li class="list__item" v-for="post in posts" track-by="$index" @click="openMedia(post)">
                  <div class="list__primary">
                      <img v-bind:src="post.media.small" class="img-circle">
                  </div>
                  <div class="list__content">
                      <div class="name">
                          {{ post.user.name }}
                      </div>
                      <div class="list__caption">
                          {{ post.description }}
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <button class="button button--fab button--fab-floating ripple bg-white text-deep-purple">
          <i class="icon mdi mdi-pencil"></i>
      </button>
  </div>
</template>

<script>
import PostService from './services/posts.js'

export default {
    data() {
            return {
                posts: []
            }
        },

        created() {
            PostService.getPosts().then((posts) => this.posts = posts);
        },

        // methods
        methods: {
          openMedia(post) {
              this.$pushPage('media', {
                  post: post
              })
          }
        }
}

</script>
