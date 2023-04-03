const { Router } = require("express");
const router = Router();
const {
  querySql,
} = require("../controllers/main");
const { nameNewLog, nameGetLog, nameDestroyLog} = require("../controllers/eoPersonaController");

// GET
router.get("/query", async (req, res) => {
  const rta = await querySql();
  res.json(rta);
});

router.get("/nameGetLog", async (req, res) => {
  const rta = await nameGetLog();
  res.json(rta);
});

// POST
router.post("/nameNewLog", async (req, res) => {
  const rta = await nameNewLog(req.body);
  res.json(rta);
});

// PUT
/*
router.put("/updateUser/:id", async (req, res) => {
  const name = req.body.name;
  console.log(name);
  await updateUser(req.params["id"], name);
  res.json({ update_records: name });
});
*/

// DELETE
router.delete("/nameDestroyLog/:id", async (req, res) => {
  const rta = await nameDestroyLog(req.params["id"]);
  res.json({ nameDestroyLog: rta });
});

module.exports = router;
