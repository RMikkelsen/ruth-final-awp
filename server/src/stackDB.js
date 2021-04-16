module.exports = (mongoose) => {
    const stackSchema = new mongoose.Schema({
      questionTitle: String,
      questionDescription: String,
      questionDate: Date,
      questionPoster: String,
      answer:
      [{

        answerPoster: String,
        answerDescription: String,
        answerDate: Date,
        vote: Number,
       
        }]
    });
    const questionModel = mongoose.model('question', stackSchema);
    // const answerModel = mongoose.model('answer', stackSchema);
  
    

    async function getQuestions() {
        try {
          return await questionModel.find();
        } catch (error) {
          console.error("getQuestions", error.message);
          return {};
        }
      }


      async function getQuestion() {
        try {
          return await questionModel.find();
        } catch (error) {
          console.error("getQuestion", error.message);
          return {};
        }
      }

 async function createQuestion(text) {
    let question = new questionModel({questionTitle: text});
    return question.save();
   }


  async function bootstrap(count = 10) {
    let l = (await getQuestions()).length;
    console.log("Question collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newQuestion = new questionModel({name: `Question number ${i}`});
        promises.push(newQuestion.save());
      }
      return Promise.all(promises);
    }
  }


  return {
   
    getQuestions,
    getQuestion,
    createQuestion,
    bootstrap
  }

}
