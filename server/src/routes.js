module.exports = (stackDB) => {
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
    const questions = await stackDB.getQuestions(); 
    res.json(questions);
  });

  router.get('/:id', async (req, res) => {
    const question = await stackDB.getQuestion(req.params.id);
    res.json(question);
  });

  

   router.post('/', async (req, res) => {
    // TODO: Implement!
    const question = await stackDB.createQuestion(
      req.body.title,
      req.body.description,
      req.body.date,
      req.body.poster
    ); 
    res.json(question);
 });

 router.put('/answer', async (req, res) => {
const question = await stackDB.updateQuestion(
  req.body.adesc,
  req.body.adate,
  req.body.aposter
);
res.json(question);
 })


  return router;
}
