const { connection } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    try {
      connection.query(`SELECT * FROM Author`, (error, results, fields) => {
        if (error) {
          res
            .status(500)
            .send({ message: `there is some problems: ${error.sqlMessage}` });
        } else {
          res.status(200).send({
            message: "show all data from Author",
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
      connection.query(`SELECT * FROM Author WHERE Author.ID = ${id}`, (error, results, fields) => {
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
      connection.query(`SELECT Author.ID, Author.Name, Blogs.Title, Blogs.Picture, Blogs. Description, Blogs.Date FROM Author INNER JOIN Blogs ON Author.ID = Blogs.AuthorID WHERE Author.Email = "${email}"`, (
        error,
        results,
        fields
      ) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: `Show Blogs by email ${email}`, data: results
          });
        };
      });
    } catch (error) {
      console.log(error)
    }
  },

  addData: (req, res) => {
    try {
      connection.query("INSERT INTO Author SET ?", req.body, function(
        error,
        results,
        fields
      ) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: "New Author is successfully added", data: results
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
        connection.query(`UPDATE Author SET ? WHERE ID = ${id}`, req.body, function(
          error,
          results,
          fields
        ) {
          if (error) {
            console.log(error);
          } else {
            res.status(200).send({
              message: `Update Author with id ${id} is succeeded`, data: results
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
      connection.query(`DELETE from Author WHERE id = ${id}`, function(error, results, fields) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: `Author with id ${id} is deleted`
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
};
