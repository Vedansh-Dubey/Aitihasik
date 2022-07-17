import Quiz from "../Models/quizSchema.js"

const getQuizes=async(req,res)=>{
    const quiz= await Quiz.find();  
    console.log(quiz); 
    return res.status(200).send(quiz);
}

export default getQuizes;