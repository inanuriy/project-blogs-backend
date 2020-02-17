const { connection } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    try {
      connection.query(`SELECT * FROM Blogs`, (error, results, fields) => {
        if (error) {
          res
            .status(500)
            .send({ message: `there is some problems: ${error.sqlMessage}` });
        } else {
          res.status(200).send({
            message: "show all data from Blogs",
            data: results
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  getByID: (req, res) => {
    try {
      const { id } = req.params;
      connection.query(`SELECT * FROM Blogs WHERE Blogs.ID = ${id}`, (error, results, fields) => {
        if (error) {
          res
            .status(500)
            .send({ message: `There's some problem: ${error.sqlMessage}` })
        } else {
          res.status(200)
            .send({
              message: `Show data by id ${id}`, data: results
            })
        }
      });
    } catch (error) {
      console.log(error)
    }
  },

  getByEmail: (req, res) => {
    try {
      const { email } = req.params;
      connection.query(`SELECT Blogs.ID, Blogs.Title, Blogs.Picture, Blogs. Description, Blogs.Date, Blogs.AuthorID FROM Blogs INNER JOIN Author ON Blogs.AuthorID = Author.ID WHERE Author.Email = "${email}"`, (
        error,
        results,
        fields
      ) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: `Show User by email ${email}`, data: results
          });
        };
      });
    } catch (error) {
      console.log(error)
    }
  },

  addData: (req, res) => {
    try {
      connection.query("INSERT INTO Blogs SET ?", req.body, function(
        error,
        results,
        fields
      ) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: "New Blog is successfully added", data: results
          });
        }
      });
    } catch (error) {
        console.log(error)
    }
  },

  updateOne: (req,res) => {
    try {
        const {id} = req.params;
        connection.query(`UPDATE Blogs SET ? WHERE ID = ${id}`, req.body, function(
          error,
          results,
          fields
        ) {
          if (error) {
            console.log(error);
          } else {
            res.status(200).send({
              message: `Update Blog with id ${id} is succeeded`, data: results
            });
          }
        });
      } catch (error) {
          console.log(error)
      }
  },

  deleteOne: (req, res) => {
    try {
      const {id} = req.params;
      connection.query(`DELETE from Blogs WHERE id = ${id}`, function(error, results, fields) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: `Blog with id ${id} is deleted`
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

};