import React from 'react';

function AddVotes(props){
    const{answer, question}= props;

    async function postData(){
        const answers = question.answer.map((a) => {

            if (a._id === answer._id) {
                a.vote = a.vote +1;
            }
            return a;
        })

        question.answers = answers;
    }
return (
    <>
    <button onClick = {postData}>Vote </button>
    </>

)

}
export default AddVotes;

