const ApiError = require("../error/error");
const { Question, User, Category } = require("../models/models");
const jwt = require("jsonwebtoken");
const sequelize = require("../db");

class questionController {
  async getAllQuestions(req, res) {
    let { categoryId, userId, limit, page } = req.query;

    page = page || 1;
    limit = +limit || 5;
    let offset = page * limit - limit;

    let questions;

    if (!categoryId && !userId) {
      questions = await Question.findAndCountAll({
        attributes: ["id", "title", "body", "createdAt",
        [sequelize.literal(
          "(SELECT COUNT(*) FROM answers WHERE answers.questionId = question.id)"
        ),
        "answersCount"]
      ],
        include: [
          { model: User, attributes: ["id", "fullname", "avatarImage"] },
          { model: Category, attributes: ["id","name"] },
        ],
        order: [["createdAt", "DESC"]], 
        limit,
        offset,
      });
    }

    if (categoryId && !userId) {
      questions = await Question.findAndCountAll({
        where: { categoryId },
        order: [["createdAt", "DESC"]],
        limit,
        offset,
      });
    }
    if (!categoryId && userId) {
      questions = await Question.findAndCountAll({
        where: { userId },
        order: [["createdAt", "DESC"]],
        limit,
        offset,
      });
    }
    if (categoryId && userId) {
      questions = await Question.findAndCountAll({
        where: { categoryId, userId },
        order: [["createdAt", "DESC"]],
        limit,
        offset,
      });
    }

    return res.json(questions);
  }

  async getOneQuestion(req, res, next) {
    const { id } = req.params;
    const question = await Question.findOne({
      where: { id },
      attributes: ["id", "title", "body", "createdAt",
      [sequelize.literal(
        "(SELECT COUNT(*) FROM answers WHERE answers.questionId = question.id)"
      ),
      "answersCount"]
    ],
      include: [
        { model: User, attributes: ["id", "fullname", "avatarImage"] },
        { model: Category, attributes: ["id","name"] },
      ],
    });
    return res.json(question);
  }

  async createNewQuestion(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const { title, body, categoryId } = req.body;

    if (!title || !body || !categoryId) {
      return next(ApiError.errorRequest("Uncorrect data"));
    }

    if (title.length < 10) {
      return next(ApiError.errorRequest("Too short question title"));
    }

    if (body.length < 10) {
      return next(ApiError.errorRequest("Too short question body"));
    }
    const question = await Question.create({
      title,
      body,
      userId: decoded.id,
      categoryId,
    });

    return res.json({
      question,
      message: "Question has been published successfully.",
    });
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
