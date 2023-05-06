const ApiError = require("../error/error");
const { Report } = require("../models/models");
const jwt = require("jsonwebtoken");

class reportController {
  async getAllReports(req, res) {
    let { answerId, userId } = req.query;

    let reports;

    if (!answerId && !userId) {
      reports = await Report.findAndCountAll();
    }

    if (answerId && !userId) {
      reports = await Report.findAndCountAll({
        where: { answerId },
      });
    }
    if (!answerId && userId) {
      reports = await Report.findAndCountAll({
        where: { userId },
      });
    }
    if (answerId && userId) {
      reports = await Report.findAndCountAll({
        where: { answerId, userId },
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

  async createNewReport(req, res) {
      const { answerId } = req.body;

      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      await Report.findOne({
        where: { userId: decoded.id, answerId },
      })
        .then(() => {
          return res.json({ message: "You have already reported this user" });
        })

      const report = await Report.create({
        userId: decoded.id,
        answerId,
      });

      return res.json({ report, decoded });  
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
