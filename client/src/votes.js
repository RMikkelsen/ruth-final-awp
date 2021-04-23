import React from 'react';

function AddVotes(props){
    const {answer, question}= props;

    async function putData(){
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
    <button onClick = {putData}>Vote </button>
    </>

)

}
export default AddVotes;