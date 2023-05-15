const ApiError = require("../error/error");
const { AnswerLike } = require("../models/models");
const jwt = require("jsonwebtoken");

class answerLikeController {
  async getAllAnswerLikes(req, res) {
    let { answerId, userId } = req.query;

    let answerLikes;

    if (!answerId && !userId) {
      answerLikes = await AnswerLike.findAndCountAll();
    }

    if (answerId && !userId) {
      answerLikes = await AnswerLike.findAndCountAll({
        where: { answerId },
      });
    }
    if (!answerId && userId) {
      answerLikes = await AnswerLike.findAndCountAll({
        where: { userId },
      });
    }
    if (answerId && userId) {
      answerLikes = await AnswerLike.findAndCountAll({
        where: { answerId, userId },
      });
    }

    return res.json(answerLikes);
  }
  async getOneQuestion(req, res, next) {
   
  }

  async getOneAnswerLike(req, res, next) {
    const { id } = req.params;
    const answerLike = await AnswerLike.findOne({
      where: { id },
    });
    return res.json(answerLike);
  }

  async createNewAnswerLike(req, res, next) {
    const { answerId } = req.body;

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    await AnswerLike.count({
      where: { userId: decoded.id, answerId },
    }).then(async count=>{
      if (count !== 0) {
        return next(ApiError.errorRequest("You have already liked this answer"));
      } else{z
        const like = await AnswerLike.create({
          userId: decoded.id,
          answerId,
        });
        return res.json({ like });;
      }
    });
  }

  async deleteAnswerLike(req, res, next) {
    const id = req.params.id;
    AnswerLike.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.json({ message: "Like has been deleted successfully." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }
}

module.exports = new answerLikeController();
