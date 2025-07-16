var posts=["2025/07/10/hello-world/","2025/07/14/Hexo博客维护/","2025/07/11/我的第一篇博客文章/","2025/07/15/使用Github和PicGO来搭建图床/","2025/07/13/语雀文本编辑器试用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };