const Machine = require('../models/machineModel');

const getMachines = async (req, res) => {       // para obtener todas las máquinas
  try {
    const machines = await Machine.find({ isActive: true });      // escondemos las que no están activas

    res.json(machines);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getMachineById = async (req, res) => {        // obtener máquina por ID
  try {
    const machine = await Machine.findById(req.params.id);

    if (!machine) {
      return res.status(404).json({ message: "No tenemos ninguna máquina registrada con ese ID." });
    }

    res.json(machine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMachine = async (req, res) => {                 // función para crear un nuevo registro de máquina
  try {
    const machine = await Machine.create(req.body);
    res.status(201).json(machine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateMachine = async (req, res) => {                 // función para actualizar máquina
  try {
    const machine = await Machine.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,                      // devuelve el actualizado
        runValidators: true             // valida el schema
      }
    );

    if (!machine) {
      return res.status(404).json({ message: "No tenemos ninguna máquina registrada con ese ID." });
    }

    res.json({
      message: "Máquina actualizada correctamente", 
      machine
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMachine = async (req, res) => {             // función para eliminar una máquina
  try {
    const machine = await Machine.findByIdAndUpdate(req.params.id,  
      { isActive: false },          // no eliminamos el registro de esa máquina, solo le cambiamos el estado a inactivo.
      { new: true }
    );

    if (!machine) {
      return res.status(404).json({ message: "No tenemos ninguna máquina registrada con ese ID." });
    }

    res.json({ message: "Máquina desactivada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createMachine, getMachines, getMachineById, updateMachine, deleteMachine };



