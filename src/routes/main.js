const { Router } = require("express");
const router = Router();
const {
  findAll,
  newUser,
  updateUser,
  deleteUser,
  querySql,
} = require("../controllers/main");
const { registerPerson } = require("../controllers/personsController");
const { nameNewLog, nameGetLog} = require("../controllers/eoPersonaController");

// GET
router.get("/", async (req, res) => {
  const rta = await findAll();
  res.json(rta);
});

router.get("/query", async (req, res) => {
  const rta = await querySql();
  res.json(rta);
});

router.get("/nameGetLog", async (req, res) => {
  const rta = await nameGetLog();
  res.json(rta);
});

// POST
router.post("/newUser", async (req, res) => {
  await newUser(req.body);
  res.json(req.body);
});

router.post("/registerPerson", async (req, res) => {
  await registerPerson(req.body);
  res.json(req.body);
});

router.post("/nameNewLog", async (req, res) => {
  const rta = await nameNewLog(req.body);
  res.json(rta);
});

// PUT
router.put("/updateUser/:id", async (req, res) => {
  const name = req.body.name;
  console.log(name);
  await updateUser(req.params["id"], name);
  res.json({ update_records: name });
});

// DELETE
router.delete("/deleteUser/:id", async (req, res) => {
  const rta = await deleteUser(req.params["id"]);
  res.json({ deleted_records: rta });
});

module.exports = router;
