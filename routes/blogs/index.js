const express = require("express")
const router = express.Router()
const {upload} = require("../../config");

router.get("/", require("./controller").getAll);
router.get("/email/:email", require("./controller").getByEmail);
router.get("/id/:id", require("./controller").getByID);
router.post("/", require("./controller").addData);
router.put("/id/:id", require("./controller").updateOne);
router.delete("/id/:id", require("./controller").deleteOne);

module.exports = router;