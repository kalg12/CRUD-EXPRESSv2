const DB = [
  { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30, sexo: "M" },
  { id: 2, nombre: "Ana", apellido: "Méndez", edad: 26, sexo: "F" },
  { id: 3, nombre: "Gabriela", apellido: "Garcia", edad: 35, sexo: "F" },
  { id: 4, nombre: "Pedro", apellido: "Valdez", edad: 30, sexo: "M" },
];

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

const obtenerTodosLosAlumnos = () => {
  return DB;
};

const obtenerAlumnoPorSexo = (tipo) => {
  return DB.filter((x) => x.sexo === tipo);
};

const obtenerAlumnoPorId = (id) => {
  return DB.find((x) => x.id === id);
};

const crearUnAlumno = (nombre, apellido, edad, sexo) => {
  const id = DB.length + 1;
  const agregarADB = {
    id,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    sexo: sexo,
  };

  DB.push(agregarADB);

  return agregarADB;
};

const actualizarAlumno = (id, sexo, edad) => {
  const alumno = obtenerAlumnoPorId(id);

  if (sexo !== undefined) {
    alumno.sexo = sexo;
  }
  if (edad !== undefined) {
    alumno.edad = edad;
  }

  return alumno;
};

const eliminarAlumno = (id) => {
  const posicionEnArreglo = DB.findIndex((x) => x.id === id);
  DB.splice(posicionEnArreglo, 1);
};

module.exports = {
  obtenerTodosLosAlumnos,
  obtenerAlumnoPorSexo,
  obtenerAlumnoPorId,
  crearUnAlumno,
  actualizarAlumno,
  eliminarAlumno,
};