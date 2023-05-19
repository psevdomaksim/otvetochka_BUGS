const ApiError = require("../error/error");
const { Report, User, Answer, Question } = require("../models/models");
const jwt = require("jsonwebtoken");

class reportController {
  async getAllReports(req, res) {
    let { answerId, questionId, userId } = req.query;

    let reports;

    if (!answerId && !userId && !questionId) {
      reports = await Report.findAll({
        attributes: ["id", "createdAt"],
        include: [
          { model: User, attributes: ["id", "fullname"] },
          {
            model: Answer,
            attributes: ["id", "body"],
            include: [
              { model: User, attributes: ["id", "fullname"] },
            ],
          },
          {
            model: Question,
            attributes: ["id", "title"],
            include: [
              { model: User, attributes: ["id", "fullname"] },
            ],
          },
        ],
      });
      return res.json(reports);
    }

    if (!answerId && userId && !questionId) {
      reports = await Report.findAll({
        where: { userId },
      });
      return res.json(reports);
    }

    if (answerId && !userId && !questionId) {
      reports = await Report.findAll({
        where: { answerId },
      });
      return res.json(reports);
    }

    if (answerId && userId && !questionId) {
      reports = await Report.findAll({
        where: { answerId, userId },
      });
      return res.json(reports);
    }

    if (questionId && !userId && !answerId) {
      reports = await Report.findAll({
        where: { questionId },
      });
      return res.json(reports);
    }

    if (questionId && userId && !answerId) {
      reports = await Report.findAll({
        where: { questionId, userId },
      });
      return res.json(reports);
    }
  }

  async getQuestionsReports(req, res) {
  
      let reports = await Report.findAll({
        attributes: ["id", "createdAt"],
        include: [
          { model: User, attributes: ["id", "email"] },
          {
            model: Question,
            attributes: ["id", "title"],
            include: [
              { model: User, attributes: ["id", "email"] },
            ],
          },
        ],
        where:{
          answerId: null
      },
      });
      return res.json(reports);
  }


  async getAnswersReports(req, res) {
  
    let reports = await Report.findAll({
      attributes: ["id", "createdAt"],
      include: [
        { model: User, attributes: ["id", "email",] },
        {
          model: Answer,
          attributes: ["id", "body"],
          include: [
            { model: User, attributes: ["id", "email",] },
          ],
        },
      ],
      where:{
        questionId: null
    },
    });
    return res.json(reports);
}

  async getOneReport(req, res, next) {
    const { id } = req.params;
    const report = await Report.findOne({
      where: { id },
    })
      .then(() => {
        return res.json(report);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async createNewReport(req, res, next) {
    const { answerId, questionId } = req.body;

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (answerId && questionId) {
      return next(ApiError.internal("Error"));
    }

    if (answerId && !questionId) {
      await Report.count({
        where: { userId: decoded.id, answerId },
      }).then(async (count) => {
        if (count !== 0) {
          return next(
            ApiError.errorRequest("You have already reported this answer")
          );
        } else {
          const report = await Report.create({
            userId: decoded.id,
            answerId,
          });
          return res.json({ report });
        }
      });
    }

    if (!answerId && questionId) {
      await Report.count({
        where: { userId: decoded.id, questionId },
      }).then(async (count) => {
        if (count !== 0) {
          return next(
            ApiError.errorRequest("You have already reported this question")
          );
        } else {
          const report = await Report.create({
            userId: decoded.id,
            questionId,
          });
          return res.json({ report });
        }
      });
    }
  }

  async deleteReport(req, res, next) {
    const id = req.params.id;
    Report.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.json({ message: "Report has been deleted successfully." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }
}

module.exports = new reportController();
