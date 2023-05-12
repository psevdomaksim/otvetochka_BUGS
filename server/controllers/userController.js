const ApiError = require("../error/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const path = require("path");
const { User } = require("../models/models");

const generateJwt = (
  id,
  fullname,
  email,
  role,
  avatarImage,
  status,
  createdAt
) => {
  return jwt.sign(
    { id, fullname, email, role, avatarImage, status, createdAt },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
};
class userController {
  async registration(req, res, next) {
    const { fullname, email, password } = req.body;

    if (!email || !password || !fullname) {
      return next(ApiError.errorRequest("Uncorrect data"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.errorRequest("An account with this data is already exist")
      );
    }

    const hashPassword = await bcrypt.hash(password, 6);
    const user = await User.create({ fullname, email, password: hashPassword });
    const token = generateJwt(
      user.id,
      user.fullname,
      user.email,
      user.role,
      user.avatarImage,
      user.status,
      user.createdAt
    );

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(
        ApiError.errorRequest("An account with this login does not exist")
      );
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.errorRequest("Wrong password"));
    }
    const token = generateJwt(
      user.id,
      user.fullname,
      user.email,
      user.role,
      user.avatarImage,
      user.status,
      user.createdAt
    );
    return res.json({ token });
  }

  async checkAuth(req, res) {
    const token = generateJwt(
      req.user.id,
      req.user.fullname,
      req.user.email,
      req.user.role,
      req.user.avatarImage,
      req.user.status,
      req.user.createdAt
    );
    return res.json({ token });
  }

  async getOneUser(req, res, next) {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    return res.json(user);
  }

  async getAllUsers(req, res, next) {
    User.findAll({ raw: true })
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async deleteUser(req, res, next) {
    const id = req.params.id;
    User.destroy({
      where: {
        id: id,
      },
    })
      .then((res) => {
        return res.json({ message: "User has been deleted successfully." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { fullname, status } = req.body;

      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (id != decoded.id) {
        return res.json("No access");
      }

      await User.findOne({ where: { id } }).then(async (data) => {
        if (data) {
          let newVal = {};
          fullname ? (newVal.fullname = fullname) : false;
          status ? (newVal.status = status) : false;

          if (req.files) {
            const { img } = req.files;
            const type = img.mimetype.split("/")[1];
            let fileName = uuid.v4() + `.${type}`;
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            newVal.avatarImage = fileName;
          }

          await User.update(
            {
              ...newVal,
            },
            { where: { id } }
          ).then(async () => {
            await User.findOne({ where: { id } }).then((data) => {
              const token = generateJwt(
                data.id,
                data.fullname,
                data.email,
                data.role,
                data.avatarImage,
                data.status,
                data.createdAt
              );

              return res.json({ token });
            });
          });
        } else {
          return res.json("Error 404");
        }
      });
    } catch (e) {
      return res.json(e);
    }
  }

  async changeUserRole(req, res, next) {
    const { id } = req.params;
    const { role } = req.body;

    await User.findOne({ where: { id } }).then(async (data) => {
      if (data) {
        let newVal = {};
        role ? (newVal.role = role) : false;

        await User.update(
          {
            ...newVal,
          },
          { where: { id } }
        )
          .then(() => {
            return res.json("Role has been updated");
          })
          .catch((err) => {
            return next(ApiError.internal(err));
          });
      }
    });
  }
}

module.exports = new userController();
