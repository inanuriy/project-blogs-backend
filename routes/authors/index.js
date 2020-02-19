const express = require("express")
const router = express.Router()

router.get("/", require("./controller").getAll);
router.get("/email/:email", require("./controller").getByEmail);
router.get("/id/:id", require("./controller").getByID);
router.post("/", require("./controller").signup);
router.post("/login", require("./controller").login);
router.put("/id/:id", require("./controller").updateOne);
router.delete("/id/:id", require("./controller").deleteOne);

module.exports = router;