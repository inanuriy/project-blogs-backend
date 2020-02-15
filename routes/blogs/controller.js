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

  getOne: (req, res) => {
    try {
      const {id} = req.params;
      connection.query(`SELECT tokoh.id, tokoh.name, tokoh.description, country.countryName, country.capital FROM tokoh INNER JOIN country ON tokoh.countryID=country.id WHERE country.id = ${id}`, (error, results, fields) => {
        if (error) {
          res
            .status(500)
            .send({ message: `there is some problems: ${error.sqlMessage}` });
        } else {
          res.status(200).send({
            message: "show all data tokoh",
            data: results
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  addData: (req, res) => {
    try {
      connection.query("INSERT INTO tokoh SET ?", req.body, function(
        error,
        results,
        fields
      ) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: "New tokoh is successfully added", data: results
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
        connection.query(`UPDATE tokoh SET ? WHERE id=?`, req.body, id, function(
          error,
          results,
          fields
        ) {
          if (error) {
            console.log(error);
          } else {
            res.status(200).send({
              message: `Update tokoh with id ${id} is succeeded`, data: results
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
      connection.query(`DELETE from tokoh WHERE id = ${id}`, function(error, results, fields) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).send({
            message: `Delete tokoh with id ${id} is succeeded`
          })
        }
      })
    } catch (error) {
      console.log(error)
    }
  },

  showByCountryID: (req,res) => {
    try {
        const {id} = req.params;
        connection.query(`SELECT COUNT(countryID) FROM tokoh WHERE countryID = ${id}`, req.body, function(
          error,
          results,
          fields
        ) {
          if (error) {
            console.log(error);
          } else {
            res.status(200).send({
              message: `Show total tokoh with CountryID ${id} is succeeded`, data: results
            });
          };
        });
      } catch (error) {
          console.log(error)
      }
  }
};
