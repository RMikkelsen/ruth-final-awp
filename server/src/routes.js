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

  

   router.post('/addQuestion', async (req, res) => {
    // TODO: Implement!
    const question = await stackDB.createQuestion(
      req.body.questionTitle,
      req.body.questionDescription,
      req.body.questionDate,
      req.body.questionPoster
    ); 
    res.json(question);
 });

 router.put('/answers', async (req, res) => {
const question = await stackDB.updateQuestion(
  req.body._id,
  req.body.answers
);

 })


  return router;
}
