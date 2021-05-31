module.exports = (postDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes 
  router.get('/', async (req, res) => {
    const kittens = await kittenDB.getKittens(); 
    res.json(kittens);
  });

  router.get('/:id', async (req, res) => {
    const kitten = await kittenDB.getKitten(req.params.id);
    res.json(kitten);
  });
****/


  router.get('/', async (req, res) => {
    const posts = await postDB.getPosts(); 
    res.json(posts);
  });

  router.get('/:id', async (req, res) => {
    const post = await postDB.getPost(req.params.id);
    res.json(post);
  });

  

   router.post('/', async (req, res) => {
    // TODO: Implement!
    const post = await postDB.addPost(
      req.body.title,
      req.body.topic,
      req.body.date,
      req.body.author
    ); 
    res.json(post);
 });

 router.put('/comment', async (req, res) => {
const post = await postDB.updatePost(
  req.body.text,
  req.body.date,
  req.body.author
);
res.json(post);
 })


  return router;
}
