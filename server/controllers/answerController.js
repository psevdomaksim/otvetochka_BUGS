const ApiError = require("../error/error");
const { Answer, User, AnswerLike, Question } = require("../models/models");
const jwt = require("jsonwebtoken");
const sequelize = require("../db");

class answerController {
  async getAllAnswers(req, res, next) {
    let { questionId, userId } = req.query;

    //answer.user = user.fullname;
    //answer.userAvatar = user.avatarImage;
    //answer.likeCount = likeCount.count;

    let answers;

    if (!questionId && !userId) {
      answers = await Answer.findAndCountAll({
        attributes: [
          "id",
          "body",
          "createdAt",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answerId = answer.id)"
            ),
            "likeCount",
          ],
        ],
        include: [
          { model: User, attributes: ["id", "fullname", "avatarImage"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    }

    if (questionId && !userId) {
      answers = await Answer.findAndCountAll({
        where: { questionId },
        attributes: [
          "id",
          "body",
          "createdAt",
          "questionId",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answerId = answer.id)"
            ),
            "likeCount",
          ],
        ],
        include: [
          { model: User, attributes: ["id", "fullname", "avatarImage"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    }
    if (!questionId && userId) {
      answers = await Answer.findAndCountAll({
        where: { userId },
        attributes: [
          "id",
          "body",
          "createdAt",
          "questionId",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answerId = answer.id)"
            ),
            "likeCount",
          ],
        ],
        include: [
          { model: User, attributes: ["id", "fullname", "avatarImage"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    }
    if (questionId && userId) {
      answers = await Answer.findAndCountAll({
        where: { questionId, userId },
        attributes: [
          "id",
          "body",
          "createdAt",
          "questionId",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answerId = answer.id)"
            ),
            "likeCount",
          ],
        ],
        include: [
          { model: User, attributes: ["id", "fullname", "avatarImage"] },
        ],
        order: [["createdAt", "DESC"]],
      });
    }

    return res.json(answers);
  }

  async getOneAnswer(req, res, next) {
    const { id } = req.params;
    const answer = await Answer.findOne({
      where: { id },
      attributes: [
        "id",
        "body",
        "createdAt",
        "questionId",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answerId = answer.id)"
          ),
          "likeCount",
        ],
      ],
      include: [{ model: User, attributes: ["id", "fullname", "avatarImage"] }],
    });

    return res.json(answer);
  }

  async createNewAnswer(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const { body, questionId } = req.body;

    if (!body || !questionId) {
      return next(ApiError.errorRequest("Uncorrect data"));
    }

    if (body.length < 5) {
      return next(ApiError.errorRequest("Too short answer body"));
    }

    await Answer.create({
      body,
      userId: decoded.id,
      questionId,
    }).then(async (data) => {
      const id = data.id;

      const answer = await Answer.findOne({
        where: { id },
        attributes: [
          "id",
          "body",
          "createdAt",
          "questionId",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answerId = answer.id)"
            ),
            "likeCount",
          ],
        ],
        include: [
          { model: User, attributes: ["id", "fullname", "avatarImage"] },
        ],
      });
      return res.json({
        answer,
        message: "Answer has been published successfully.",
      });
    });
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
