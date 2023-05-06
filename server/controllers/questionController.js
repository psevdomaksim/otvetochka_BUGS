const ApiError = require("../error/error");
const { Question } = require("../models/models");
const jwt = require("jsonwebtoken");

class questionController {
  async getAllQuestions(req, res, next) {
    let { categoryId, userId } = req.query;

    let questions;

    if (!categoryId && !userId) {
      questions = await Question.findAndCountAll();
    }

    if (categoryId && !userId) {
      questions = await Question.findAndCountAll({
        where: { categoryId },
      });
    }
    if (!categoryId && userId) {
      questions = await Question.findAndCountAll({
        where: { userId },
      });
    }
    if (categoryId && userId) {
      questions = await Question.findAndCountAll({
        where: { categoryId, userId },
      });
    }

    return res.json(questions);
  }

  async getOneQuestion(req, res, next) {
    const { id } = req.params;
    const question = await Question.findOne({
      where: { id },
    })
      .then(() => {
        return res.json(question);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async createNewQuestion(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

      const { title, body, categoryId } = req.body;
      const question = await Question.create({
        title,
        body,
        userId: decoded.id,
        categoryId,
      });

      return res.json({ question });  
  }

  async deleteQuestion(req, res, next) {
    const id = req.params.id;
    Question.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.json({ message: "Question has been deleted successfully." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }
}

module.exports = new questionController();
