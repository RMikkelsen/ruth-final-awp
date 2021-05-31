module.exports = (postDB) => {
  const express = require("express");
  const router = express.Router();


  router.get('/', async (req, res) => {
    const posts = await postDB.getPosts(); 
    res.json(posts);
  });

  router.get('/:id', async (req, res) => {
    const post = await postDB.getPost(req.params.id);
    res.json(post);
  });

  

   router.post('/addpost', async (req, res) => {
  
    const post = await postDB.addPost(

      req.body.postTitle,
      req.body.postTopic,
      req.body.postDate,
      req.body.postAuthor,
    ); 
    console.log(addPost);
    res.json(post);
 });

 router.put('/comment', async (req, res) => {
const post = await postDB.updatePost(
  req.body.commentText,
  req.body.commentDate,
  req.body.commentAuth
);
res.json(post);
 })


  return router;
}
