// archivo para definir las rutas de las máquinas
const express = require("express");
const router = express.Router();

const {
  createMachine,
  getMachines,
  getMachineById,
  updateMachine,
  deleteMachine
} = require("../controllers/machineController");

const { auth, isAdmin } = require("../middleware/authMiddleware");

// rutas públicas
router.get("/", getMachines);
router.get("/:id", getMachineById);


// rutas protegidas
router.post("/", auth, isAdmin, createMachine);
router.put("/:id", auth, isAdmin, updateMachine);
router.delete("/:id", auth, isAdmin, deleteMachine);

module.exports = router;