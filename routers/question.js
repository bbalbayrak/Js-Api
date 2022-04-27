const express = require("express");
const { askNewQuestion, getAllQuestions, getSingleQuestions, editQuestion, deleteQuestion, likeQuestion, unlikeQuestion } = require("../controllers/question");
const { getAccessToRoute, getQuestionOwnerAccess } = require("../middlewares/authorization/auth");
const { checkQuestionExist } = require("../middlewares/database/databaseErrorHelpers");
const answer = require("./answer");

const router = express.Router();

router.get("/:id/like",[getAccessToRoute,checkQuestionExist],likeQuestion);
router.get("/:id/unlike",[getAccessToRoute,checkQuestionExist],unlikeQuestion);
router.post("/ask",getAccessToRoute,askNewQuestion);
router.get("/",checkQuestionExist,getSingleQuestions);
router.get("/:id",getAllQuestions);
router.put("/:id/edit",[getAccessToRoute,
    checkQuestionExist,
    getQuestionOwnerAccess],
    editQuestion);
    router.delete("/:id/edit",[getAccessToRoute,
        checkQuestionExist,
        getQuestionOwnerAccess],
        deleteQuestion);
        
        router.use("/:question_id/answers",checkQuestionExist,answer);
        

module.exports = router;