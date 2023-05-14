const ApiError = require("../error/error");
const { Category } = require("../models/models");

class categoryController {
  async getAllCategories(req, res, next) {
    Category.findAll({ raw: true })
      .then((categories) => {
        res.send(categories);
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }

  async getOneCategory(req, res, next) {
    const { id } = req.params;
    const category = await Category.findOne({
      where: { id },
    });
    return res.json(category);
  }

  async createNewCategory(req, res) {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });
      return res.json({ category });

  }

  async deleteCategory(req, res, next) {
    const id = req.params.id;
    Category.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        return res.json({ message: "Category has been deleted successfully." });
      })
      .catch((err) => {
        return next(ApiError.internal(err));
      });
  }
}

module.exports = new categoryController();
