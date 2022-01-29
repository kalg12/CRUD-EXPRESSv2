const { obtenerAlumnoPorId } = require("./alumnosBL.js");

const DBProfesor = [
  {
    id: 1,
    nombre: "Roberto",
    apellido: "Pérez",
    edad: 30,
    sexo: "M",
    idAlumno: 1,
  },
  {
    id: 2,
    nombre: "Erika",
    apellido: "Méndez",
    edad: 26,
    sexo: "F",
    idAlumno: 2,
  },
  {
    id: 3,
    nombre: "Pablo",
    apellido: "Garcia",
    edad: 35,
    sexo: "F",
    idAlumno: 1,
  },
  {
    id: 4,
    nombre: "Alberto",
    apellido: "Valdez",
    edad: 30,
    sexo: "M",
    idAlumno: 3,
  },
];

const obtenerTodosLosProfesores = () => {
  return DBProfesor;
};

const obtenerProfesoresPorSexo = (tipo) => {
  return DBProfesor.filter((x) => x.sexo === tipo);
};

const obtenerProfesorPorId = (id) => {
  return DBProfesor.find((x) => x.id === id);
};

const crearUnProfesor = (nombre, apellido, edad, sexo, idAlumno) => {
  const id = DBProfesor.length + 1;
  const agregarADB = {
    id,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    sexo: sexo,
    idAlumno: idAlumno,
  };

  DBProfesor.push(agregarADB);

  return agregarADB;
};

const actualizarProfesor = (id, sexo, edad) => {
  const profesor = obtenerProfesorPorId(id);

  if (sexo !== undefined) {
    profesor.sexo = sexo;
  }
  if (edad !== undefined) {
    profesor.edad = edad;
  }

  return profesor;
};

const eliminaProfesor = (id) => {
  const posicionEnArreglo = DBProfesor.findIndex((x) => x.id === id);
  DBProfesor.splice(posicionEnArreglo, 1);
};

const obtenerProfesorAlumnoDos = () => {
  const profesores = DBProfesor.map((x) => ({
    ...x,
    alumno: obtenerAlumnoPorId(x.idAlumno),
  }));

  return profesores;
};

module.exports = {
  obtenerTodosLosProfesores,
  obtenerProfesoresPorSexo,
  obtenerProfesorPorId,
  crearUnProfesor,
  actualizarProfesor,
  eliminaProfesor,
  obtenerProfesorAlumnoDos,
};