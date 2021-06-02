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

  

   router.post('/', async (req, res) => {
  
    const post = await postDB.addPost(

      req.body.title,
      req.body.topic,
      req.body.author,
    
    ); 
    console.log(post);
    res.json(post);
 });

 router.post('/addcomment', async (req, res) => {
const post = await postDB.addComment(

  req.body.text,
  req.body.author,
  req.body.id
  
);
console.log(post)
res.json(post);
 })


  return router;
}
