const {
    obtenerTodosLosProfesores,
    obtenerProfesoresPorSexo,
    obtenerProfesorPorId,
    crearUnProfesor,
    actualizarProfesor,
    eliminaProfesor,
    obtenerProfesorAlumnoDos,
  } = require("../bussinesLogic/profesoresBL");

  const respuesta = {
    messages: "",
    status: true,
    data: [],
    errors: [],
  };

  const obtenerProfesores = (req, res) => {
    const respuesta = obtenerTodosLosProfesores();

    if (respuesta === undefined) {
      respuesta.messages = "Alumno no encontrado";
      respuesta.status = false;
      respuesta.data = [];
      return res.status(404).json(respuesta);
    }

    respuesta.messages = "Success";
    respuesta.data = [];
    res.json(respuesta);
  };

  const creaUnNuevoProfesor = (req, res) => {
    const resultado = crearUnProfesor(
      req.body.nombre,
      req.body.apellido,
      req.body.edad,
      req.body.sexo,
      req.body.idAlumno
    );
    respuesta.messages = "Profesor Creado Correctamente";
    respuesta.data = resultado;

    return res.status(201).json(respuesta);
  };

  const actualizaProfesor = (req, res) => {
    const validarSiExiste = obtenerProfesorPorId(req.body.id);
    if (!validarSiExiste) {
      respuesta.messages = "El profesor no existe";
      respuesta.status = false;
      respuesta.data = [];

      return res.status(404).json(respuesta);
    }

    respuesta.data = actualizarProfesor(
      req.body.id,
      req.body.nombre,
      req.body.apellido,
      req.body.edad,
      req.body.sexo
    );
    respuesta.messages = "Se actualizo el profesor correctamente";
    return res.json(respuesta);
  };

  const eliminarProfesor = (req, res) => {
    const validoSiExiste = obtenerProfesorPorId(req.body.id);

    if (!validoSiExiste) {
      respuesta.messages = "El Profesor no Existe";
      respuesta.status = false;
      respuesta.data = [];

      return res.status(404).json(respuesta);
    }

    eliminaProfesor(req.body.id);
    respuesta.messages = "Profesor Eliminado Correctamente";
    respuesta.data = [];

    return res.json(respuesta);
  };

    const obtenerProfesorAlumnoDosCtrl = (req, res) => {
    const respuesta = obtenerProfesorAlumnoDos();

    respuesta.messages = "Success";
    respuesta.data = [];
    res.json(respuesta);
  };

  module.exports = {
    obtenerProfesores,
    creaUnNuevoProfesor,
    actualizaProfesor,
    eliminarProfesor,
    obtenerProfesorAlumnoDosCtrl,
  };