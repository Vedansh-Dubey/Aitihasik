import mongoose from "mongoose";

const { Schema } = mongoose

const quizSchema = Schema({
    questionText: {
        type: String,
    },
    questionImg: {
        type: String,
    },
    answerText: {
        type: String,
    },
    isCorrect: {
        type: String,
    },
})

const Quiz= mongoose.model( "quiz", quizSchema);
export default Quiz