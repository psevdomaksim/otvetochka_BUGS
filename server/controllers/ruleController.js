const ApiError = require("../error/error");
const { Rule } = require("../models/models");

class ruleController {
  async getAllRules(req, res, next) {
    Rule.findAll({ raw: true })
      .then((rules) => {
        res.send(rules);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async getOneRule(req, res, next) {
    const { id } = req.params;
    const rule = await Rule.findOne({
      where: { id },
    });
    return res.json(rule);
  }

  async createNewRule(req, res) {
    const { title, body } = req.body;

    const rule = await Rule.create({
      title,
      body,
    });
    return res.json({ rule });
  }

  async deleteRule(req, res, next) {
    const { id } = req.params;

    Rule.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        return res.json({ message: "Rule has been deleted." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async updateRule(req, res, next) {
    try {
      const { id } = req.params;
      const { title, body } = req.body;

      await Rule.findOne({ where: { id } }).then(async (data) => {
        if (data) {
          let newVal = {};
          title ? (newVal.title = title) : false;
          body ? (newVal.body = body) : false;

          await Rule.update(
            {
              ...newVal,
            },
            { where: { id } }
          ).then(() => {
            return res.json("Rule has been updated");
          });
        } else {
          return res.json("Error 404");
        }
      });
    } catch (e) {
      return res.json(e);
    }
  }
}

module.exports = new ruleController();
