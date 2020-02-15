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
  }

  // getOne: (req, res) => {
  //   try {
  //     const {id} = req.params;
  //     connection.query(`SELECT Blogs.id, Blogs.Title, Blogs.description Blogs.Author FROM Blogs INNER JOIN Users ON Blogs.Author=Users.Name WHERE Blogs.Name = ${id}`, (error, results, fields) => {
  //       if (error) {
  //         res
  //           .status(500)
  //           .send({ message: `there is some problems: ${error.sqlMessage}` });
  //       } else {
  //         res.status(200).send({
  //           message: "show all data tokoh",
  //           data: results
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // addData: (req, res) => {
  //   try {
  //     connection.query("INSERT INTO Blogs SET ?", req.body, function(
  //       error,
  //       results,
  //       fields
  //     ) {
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         res.status(200).send({
  //           message: "New Blog is successfully added", data: results
  //         });
  //       }
  //     });
  //   } catch (error) {
  //       console.log(error)
  //   }
  // },

  // updateOne: (req,res) => {
  //   try {
  //       const {id} = req.params;
  //       connection.query(`UPDATE Blogs SET ? WHERE id=?`, req.body, id, function(
  //         error,
  //         results,
  //         fields
  //       ) {
  //         if (error) {
  //           console.log(error);
  //         } else {
  //           res.status(200).send({
  //             message: `Update Blogs with id ${id} is succeeded`, data: results
  //           });
  //         }
  //       });
  //     } catch (error) {
  //         console.log(error)
  //     }
  // },

  // deleteOne: (req, res) => {
  //   try {
  //     const {id} = req.params;
  //     connection.query(`DELETE from Blogs WHERE id = ${id}`, function(error, results, fields) {
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         res.status(200).send({
  //           message: `Delete Blog with id ${id} is succeeded`
  //         })
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },

  // showByEmail: (req,res) => {
  //   try {
  //       const {email} = req.params;
  //       connection.query(`SELECT Email FROM Users WHERE Email = ${email}`, req.body, function(
  //         error,
  //         results,
  //         fields
  //       ) {
  //         if (error) {
  //           console.log(error);
  //         } else {
  //           res.status(200).send({
  //             message: `Show total tokoh with CountryID ${id} is succeeded`, data: results
  //           });
  //         };
  //       });
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
};
