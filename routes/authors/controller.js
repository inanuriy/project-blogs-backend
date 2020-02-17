const { Authors } = require("../../models");
const {hashPassword, comparedPassword}=require("../../helpers");
const jwt = 

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Authors.findAll();

      res.status(200).send({
        message: "Show all Authors data",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Authors.findOne({where: { ID: id}});

      res.status(200).send({
        message: `Show data Author by id ${id}`,
        data: result
      })
    } catch (error) {
      console.log(error)
    }
  },

  getByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const result = await Authors.findOne({where: {Email: email}});

      res.status(200).send({
        message: `Show data Author with email ${email}`,
        data: result
      });
    } catch (error) {
      console.log(error)
    }
  },

  addData: async (req, res) => {
    try {
      const data = req.body;
      const hash = await hashPassword(req.body.password);

      const result = await Authors.create({...data, password: hash});

      res.status(200).send({
        message: `Author is successfully added`,
        data: result
      })
    } catch (error) {
        console.log(error)
    }
  },

  login: async (req, res) => {
    try {
      const result = await Authors.findOne({email: req.body.email});

      const compared = await comparedPassword(
        req.body.password,
        result.password
      );

      if (compared === true) {
        
        const {Email, ID, Name} = result;

        const token = jwt.sign({Email, ID, Name}, "ITSASECRET", {expiresIn: "1d"});

        res.status(200).send({
          message: "You are successfully logged in", token: token
        })
      } else {
        res.status(403).send({
          message: "You are not a user, please register first"
        });
      }
    } catch (error) {
      console.log(error)
    }
  },

  updateOne: async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Authors.update(req.body, {where: {id}});

        res.status(200).send({
          message: `Author with id ${id} is successfully updated`, data: result
        })
      } catch (error) {
          console.log(error)
      }
  },

  deleteOne: async (req, res) => {
    try {
      const {id} = req.params;
      const result = await Authors.destroy({ where: {id}});

      res.status(200).send({
        message: `User with id ${id} is successfully deleted`, data: result
      })
    } catch (error) {
      console.log(error)
    }
  },

};
