const express = require("express");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const { addNewAnswerToQuestion, 
    getAllAnswersByQuestion,
getSingleAnswer,
editAnswer,
deleteAnswer,likeAnswer, unlikeAnswer } = require("../controllers/answer");
const { checkQuestionAndAnswerExist } = require("../middlewares/database/databaseErrorHelpers");
const { getAnswerOwnerAccess } = require("../middlewares/authorization/auth");

const router = express.Router({mergeParams:true});// onceki routerdeki parametreleri de gecirmek icin


router.post("/",getAccessToRoute, addNewAnswerToQuestion);
router.get("/",getAllAnswersByQuestion);
router.get("/:answer_id",checkQuestionAndAnswerExist,getSingleAnswer);
router.get("/:answer_id/like",[checkQuestionAndAnswerExist,getAccessToRoute],likeAnswer);
router.get("/:answer_id/unlike",[checkQuestionAndAnswerExist,getAccessToRoute],unlikeAnswer);
router.put("/:answer_id/edit",[checkQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],editAnswer);
router.delete("/:answer_id/delete",[checkQuestionAndAnswerExist,
    getAccessToRoute,
    getAnswerOwnerAccess],
    deleteAnswer);


module.exports = router;