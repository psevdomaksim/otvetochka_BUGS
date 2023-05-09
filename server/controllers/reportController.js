const ApiError = require("../error/error");
const { Report } = require("../models/models");
const jwt = require("jsonwebtoken");

class reportController {
  async getAllReports(req, res) {
    let { answerId, questionId, userId } = req.query;

    let reports;

    if (!answerId && !userId && !questionId) {
      reports = await Report.findAndCountAll();
    }

    if (!answerId && userId && !questionId) {
      reports = await Report.findAndCountAll({
        where: { userId },
      });
    }

    if (answerId && !userId && !questionId) {
      reports = await Report.findAndCountAll({
        where: { answerId },
      });
    }

    if (answerId && userId && !questionId) {
      reports = await Report.findAndCountAll({
        where: { answerId, userId },
      });
    }

    if (questionId && !userId && !answerId) {
      reports = await Report.findAndCountAll({
        where: { questionId },
      });
    }

    if (questionId && userId && !answerId) {
      reports = await Report.findAndCountAll({
        where: { questionId, userId },
      });
    }

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
      }).then(async count=>{
        if (count !== 0) {
          return next(
            ApiError.errorRequest("You have already reported this answer")
          );
        }else{
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
      }).then(async count=>{
        if (count !== 0) {
          return next(
            ApiError.errorRequest("You have already reported this question")
          );
        }else{
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
