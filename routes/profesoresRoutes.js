const { Router } = require("express");
const router = Router();

const {
  obtenerProfesores,
  creaUnNuevoProfesor,
  actualizaProfesor,
  eliminarProfesor,
  obtenerProfesorAlumnoDosCtrl,
} = require("../controllers/profesoresController");

router.get("/", obtenerProfesores);
router.get("/profesorAlumno", obtenerProfesorAlumnoDosCtrl);
router.post("/", creaUnNuevoProfesor);
router.put("/", actualizaProfesor);
router.delete("/", eliminarProfesor);

module.exports = router;