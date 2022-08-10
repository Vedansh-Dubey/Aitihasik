import Quiz from "../Models/quizSchema.js"

const getQuizes=async(req,res,next)=>{
    const quiz= await Quiz.find();
    next()  
    console.log(quiz); 
    return res.status(200).send(quiz);
}

export default getQuizes;