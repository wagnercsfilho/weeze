var posts = [];

for (var i = 0; i < 10; i++) {
  posts.push({
    id: new Date().getTime(),
    media: {
      small: 'http://lorempixel.com/60/60/people/'+i,
      big: 'http://lorempixel.com/500/500/people/'+i,
    },
    description: 'Lorem ipusim dolor valorid',
    user: { name: 'Fred Jeans' }
  })
}

export default {

  posts: posts,

  getPosts() {
      return new Promise((resolve, reject) => {
        resolve(posts);
      });
  }
  
}
