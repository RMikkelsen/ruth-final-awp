import React from 'react';

function AddVotes(props){
    const{comment, post}= props;

    async function postData(){
        const comments = post.comment.map((a) => {

            if (a._id === comment._id) {
                a.vote = a.vote +1;
            }
            return a;
        })

        post.comments = comments;
    }
return (
    <>
    <button onClick = {postData}>Vote </button>
    </>

)

}
export default AddVotes;

