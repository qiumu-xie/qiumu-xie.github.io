var posts=["2024/12/14/hello-world/","2025/04/03/达梦主备搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };