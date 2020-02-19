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
      const result = await Blogs.findOne({ where: { ID: id } });

      res.status(200).send(
        {
          message: `Show data Blog by id ${id}`,
          data: result
        }
        // const { Email } = req.params;
        // sequelize.query(
        // `SELECT Blogs.ID, Blogs.Title, Blogs.Picture, Blogs.Description, Blogs.Date, Authors.Name FROM Blogs INNER JOIN Authors ON Blogs.AuthorID=Authors.ID WHERE Authors.Email = ${Email}`,
        // (error, result, fields) => {
        //   if (error) {
        //     res.status(500).send({
        //       message: `There is some probloms: ${error.sqlMessage}`
        //     });
        //   } else {
        //     res.status(200).send({
        //       message: `Show data Blog by Email ${Email}`,
        //       data: result
        //     });
        //   }}
      );
    } catch (error) {
      console.log(error);
    }
  },

  getByEmail: async (req, res) => {
    try {
      const { Email } = req.params;
      sequelize.query(
        `SELECT Blogs.ID, Blogs.Title, Blogs.Picture, Blogs.Description, Blogs.Date, Authors.Name FROM Blogs INNER JOIN Authors ON Blogs.AuthorID=Authors.ID WHERE Authors.Email = ${Email}`,
        (error, result, fields) => {
          if (error) {
            res.status(500).send({
              message: `There is some probloms: ${error.sqlMessage}`
            });
          } else {
            res.status(200).send({
              message: `Show data Blog by Email ${Email}`,
              data: result
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  },

  addData: async (req, res) => {
    try {
      const data = req.body;
      const file = req.file;

      const result = await Blogs.create({
        ...data,
        Picture: file === undefined ? null : file.path
      });

      res.status(200).send({
        message: `Blog is successfully added`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Blogs.update(req.body, { where: { ID: id } });

      res.status(200).send({
        message: `Blog with id ${id} is successfully updated`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Blogs.destroy({ where: { ID: id } });

      res.status(200).send({
        message: `Blog with id ${id} is successfully deleted`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
