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
    res.json({msg: "Not implemented :("});
 });

  return router;
}
