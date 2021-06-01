module.exports = (mongoose) => {
  const postSchema = new mongoose.Schema({
    postTitle: String,
    postTopic: String,
    postAuth: String,
    postDate: {type: Date, default: new Date()},
    
    
    comment: [{

      commentText: String,
      commentAuth: String,
      commentDate: Date,
      vote: Number,

    }]
  });
  const postModel = mongoose.model('post', postSchema);


  async function getPosts() {
    try {
      return await postModel.find();
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

  async function addPost(postTitle, postTopic, postDate, postAuth) {
    let post = new postModel({
      postTitle: postTitle,
    postTopic: postTopic,
    postAuth: postAuth,
    postDate: postDate,
    
    });
    return post.save();
  }

  async function updatePost(id, comments){
    const post = await postModel.findByIdAndUpdate(id,{comments});
    console.log(post);
    return post.save();
    
  }
  async function bootstrap(count = 10) {
    let l = (await getPosts()).length;
    console.log("Post collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newPost = new postModel({
         postTitle: `Title ${i}`,
          postTopic: `Topic ${i}`,
          postAuth: `Author ${i}`,
          postDate: `Date ${i}`,
        
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
    updatePost,
    bootstrap
  }
}