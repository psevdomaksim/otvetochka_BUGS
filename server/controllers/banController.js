const ApiError = require("../error/error");
const { Ban, User } = require("../models/models");
const jwt = require("jsonwebtoken");

class banController {
  async getAllBans(req, res, next) {
    Ban.findAll({ raw: true })
      .then((bans) => {
        res.send(bans);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async getOneBan(req, res, next) {
    const { id } = req.params;
    const ban = await Ban.findOne({
      where: { id },
    });
    return res.json(ban);
  }

  async createNewBan(req, res, next) {
    const { userId, ruleId } = req.body;

     await User.findOne({
      where: { id: userId },
    }).then( async (user) =>{
      if(user.role=="ADMIN"){
        return next(ApiError.errorRequest("No access"));
      }
    });

    await Ban.findAndCountAll({
      where: { userId },
    }).then(async (count) => {
      if (count !== 0) {
        return next(ApiError.errorRequest("You have already banned this user"));
      } else {       
         const ban = await Ban.create({
           userId,
           ruleId,
         });
        return res.json({ ban });
      }
    });
  }

  async deleteBan(req, res, next) {
    const { id } = req.params;
    //const { userId } = req.body;
    Ban.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        return res.json({ message: "User has been unbanned." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }
}

module.exports = new banController();
