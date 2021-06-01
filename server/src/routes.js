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

  

   router.post('/posts', async (req, res) => {
  
    const post = await postDB.addPost(

      req.body.title,
      req.body.topic,
      req.body.author,
      req.body.date,
    ); 
    console.log(addPost);
    res.json(post);
 });

 router.put('/comment', async (req, res) => {
const post = await postDB.updatePost(
  req.body.text,
  req.body.author,
  req.body.date
);
res.json(post);
 })


  return router;
}
