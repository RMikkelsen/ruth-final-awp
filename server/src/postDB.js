module.exports = (mongoose) => {
  const postSchema = new mongoose.Schema({
    postTitle: String,
    postTopic: String,
    postAuth: String,
    postDate: {type: Date, default: new Date()},
    
    
    comment: [{

      commentText: String,
      commentAuth: String,
      commentDate: {type: Date, default: new Date()},
      vote: Number,

    }]
  });
  const postModel = mongoose.model('post', postSchema);


  async function getPosts() {
    try {
      return await postModel.find().sort('-postDate');
    } catch (error) {
      console.error("getPosts", error.message);
      return {};
    }
  }


  async function getPost(id) {
    try {
      return await postModel.findById(id);
    } catch (error) {
      console.error("getPost", error.message);
      return {};
    }
  }

  async function addPost(postTitle, postTopic, postAuth) {
    let post = new postModel({
      postTitle: postTitle,
    postTopic: postTopic,
    postAuth: postAuth,
  
    
    });
    return post.save();
  }

  async function addComment(text, author, id){
    const post = await postModel.findById(id);
   post.comment.push({commentText: text, commentAuth: author})
    console.log(post);
    return post.save();
    
  }
  async function bootstrap(count = 50) {
    let l = (await getPosts()).length;
    console.log("Post collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newPost = new postModel({
         postTitle: `Title ${i}`,
          postTopic: `Topic ${i}`,
          postAuth: `Author ${i}`,
          
        
        });
        promises.push(newPost.save());
      }
      return Promise.all(promises);
    }
  }


  return {

    getPosts,
    getPost,
    addPost,
    addComment,
    bootstrap,
  }
}