const { Blogs } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Blogs.findAll();

      res.status(200).send({
        message: "Show all Blogs",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Blogs.findOne({where: { ID: id}});

      res.status(200).send({
        message: `Show data Blog by id ${id}`,
        data: result
      })
    } catch (error) {
      console.log(error)
    }
  },

  getByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const result = await Authors.findOne({where: {Email: email}} );

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
      const result = await Blogs.create(req.body);

      res.status(200).send({
        message: `Blog is successfully added`,
        data: result
      })
    } catch (error) {
        console.log(error)
    }
  },

  updateOne: async (req,res) => {
    try {
        const {id} = req.params;
        const result = await Blogs.update(req.body, {where: {id}});

        res.status(200).send({
          message: `Blog with id ${id} is successfully updated`, data: result
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