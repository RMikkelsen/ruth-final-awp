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
    const questionModel = mongoose.model('stack', stackSchema);
   
  
    

    async function getQuestions() {
        try {
          return await questionModel.find();
        } catch (error) {
          console.error("getQuestions", error.message);
          return {};
        }
      }


      async function getQuestion(id) {
        try {
          return await questionModel.findById(id);
        } catch (error) {
          console.error("getQuestion", error.message);
          return {};
        }
      }

 async function createQuestion(questionTitle, questionDescription, questionDate, questionPoster) {
    let question = new questionModel({questionTitle: questionTitle,  questionDescription: questionDescription, questionDate: questionDate, questionPoster: questionPoster });
    return question.save();
   }


  async function bootstrap(count = 10) {
    let l = (await getQuestions()).length;
    console.log("Question collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newQuestion = new questionModel({
          questionTitle: `Title ${i}`,
          questionDescription: `Description ${i}`,
          questionDate: `Date ${i}`,
          questionPoster: `Author ${i}`
      });
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
