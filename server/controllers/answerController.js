const ApiError = require("../error/error");
const { Answer } = require("../models/models");
const jwt = require("jsonwebtoken");

class answerController {
  async getAllAnswers(req, res, next) {
    let { questionId, userId } = req.query;

    let answers;

    if (!questionId && !userId) {
      answers = await Answer.findAndCountAll();
    }

    if (questionId && !userId) {
      answers = await Answer.findAndCountAll({
        where: { categoryId },
      });
    }
    if (!questionId && userId) {
      answers = await Answer.findAndCountAll({
        where: { userId },
      });
    }
    if (questionId && userId) {
      answers = await Answer.findAndCountAll({
        where: { questionId, userId },
      });
    }

    return res.json(answers);
  }

  async getOneAnswer(req, res, next) {
    const { id } = req.params;
    const answer = await Answer.findOne({
      where: { id },
    })
      .then(() => {
        return res.json(answer);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async createNewAnswer(req, res) {
  
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const { body, questionId } = req.body;
    const answer = await Answer.create({
      body,
      userId: decoded.id,
      questionId,
    })
     return res.json( {answer} );
  }

  async deleteAnswer(req, res, next) {
    const id = req.params.id;
    Answer.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.json({ message: "Answer has been deleted successfully." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }
}

module.exports = new answerController();
