const express = require("express")
const router = express.Router()

router.get("/", require("./controller").getAll);
router.get("/:email", require("./controller").getByEmail);
router.get("/:id", require("./controller").getById);
router.post("/", require("./controller").addData);
router.put("/:id", require("./controller").updateOne);
router.delete("/:id", require("./controller").deleteOne);

module.exports = router;