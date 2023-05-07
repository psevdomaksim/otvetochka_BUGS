const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    fullname: {type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    avatarImage: { type: DataTypes.STRING, defaultValue: "default_image.jpg", allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "", allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER", allowNull: false },
  });

  const Answer = sequelize.define("answer", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    body: {type: DataTypes.STRING(3000), allowNull: false},
    userId: { type: DataTypes.INTEGER, allowNull: false },
    questionId: { type: DataTypes.INTEGER, allowNull: false },
  });

  const Question = sequelize.define("question", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {type: DataTypes.STRING(1500), allowNull: false},
    body: {type: DataTypes.STRING(3000), allowNull: false},
    userId: { type: DataTypes.INTEGER, allowNull: false },
    categoryId: { type: DataTypes.INTEGER, allowNull: false },
  });

  const Category = sequelize.define("category", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: {type: DataTypes.STRING, allowNull: false},
  });

  const Report = sequelize.define("report", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    answerId: { type: DataTypes.INTEGER},
    questionId: { type: DataTypes.INTEGER},
  });

  const AnswerLike = sequelize.define("answer_like", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    answerId: { type: DataTypes.INTEGER, allowNull: false },
  });

  const Ban = sequelize.define("ban", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    ruleId: { type: DataTypes.INTEGER, allowNull: false },
  });

  const Rule = sequelize.define("rule", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: {type: DataTypes.STRING(1500), allowNull: false},
    body: {type: DataTypes.STRING(3000), allowNull: false},
  });

  const BanRule = sequelize.define("ban_has_rule", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ruleId: { type: DataTypes.INTEGER, allowNull: false },
    banId: { type: DataTypes.INTEGER, allowNull: false },
  });


  User.hasMany(Answer);
  Answer.belongsTo(User);

  User.hasMany(Question);
  Question.belongsTo(User);

  User.hasMany(AnswerLike);
  AnswerLike.belongsTo(User);

  User.hasMany(Report);
  Report.belongsTo(User);

  User.hasOne(Ban);
  Ban.belongsTo(User);

  Question.hasMany(Report);
  Report.belongsTo(Question);

  Answer.hasMany(Report);
  Report.belongsTo(Answer);

  Answer.hasMany(AnswerLike);
  AnswerLike.belongsTo(Answer);

  Question.hasMany(Answer);
  Answer.belongsTo(Question);

  Category.hasMany(Question);
  Question.belongsTo(Category);

  Rule.hasMany(Ban);
  Ban.belongsTo(Rule);

  Rule.belongsToMany(Ban, {through: BanRule});
  Ban.belongsToMany(Rule, {through: BanRule});  

  module.exports = {
    User,
    Answer,
    Question,
    Category,
    Report,
    Rule,
    Ban,
    BanRule,
    AnswerLike
}