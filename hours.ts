import { TimeRange } from "./main.ts";

export const hours: Array<TimeRange> = [
  {
    init: new Date(2023, 0, 3, 11, 30, 0),
    finish: new Date(2023, 0, 3, 14, 30, 0),
    comentary: "Reunion de bienvenida y 1ra tarea, crear DER",
  },
  {
    init: new Date(2023, 0, 3, 15, 30, 0),
    finish: new Date(2023, 0, 3, 17, 30, 0),
    comentary: "Introduccion a tecnologias, stack AWS y Django",
  },
  {
    init: new Date(2023, 0, 4, 12, 30, 0),
    finish: new Date(2023, 0, 4, 13, 30, 0),
    comentary: "Revision DER",
  },
  {
    init: new Date(2023, 0, 4, 13, 0, 0),
    finish: new Date(2023, 0, 4, 15, 25, 0),
    comentary: "Creacion mockup no funcional",
  },
  {
    init: new Date(2023, 0, 5, 10, 0, 0),
    finish: new Date(2023, 0, 5, 11, 0, 0),
    comentary: "Prototipado de la app",
  },
  {
    init: new Date(2023, 0, 5, 15, 0, 0),
    finish: new Date(2023, 0, 5, 17, 0, 0),
    comentary: "Reunion presencial con el equipo y Revision mockup",
  },
  {
    init: new Date(2023, 0, 6, 15, 0, 0),
    finish: new Date(2023, 0, 6, 17, 0, 0),
    comentary: "Setup frontend",
  },
  {
    init: new Date(2023, 0, 6, 20, 0, 0),
    finish: new Date(2023, 0, 6, 21, 0, 0),
    comentary: "Enrutamiento y navegacion de la app",
  },
  {
    init: new Date(2023, 0, 6, 20, 0, 0),
    finish: new Date(2023, 0, 6, 21, 0, 0),
    comentary: "Implementación de plantillas de Material UI",
  },
  {
    init: new Date(2023, 0, 9, 12, 30, 0),
    finish: new Date(2023, 0, 9, 13, 0, 0),
    comentary: "Reunion Revision IU web",
  },
  {
    init: new Date(2023, 0, 9, 15, 15, 0),
    finish: new Date(2023, 0, 9, 16, 30, 0),
    comentary: "Reunion: Introduccion a Litto",
  },
  {
    init: new Date(2023, 0, 9, 18, 0, 0),
    finish: new Date(2023, 0, 9, 21, 0, 0),
    comentary: "Implementacion del ORM Prisma",
  },
  {
    init: new Date(2023, 0, 10, 12, 0, 0),
    finish: new Date(2023, 0, 10, 14, 0, 0),
    comentary: "Finalizar el Setup del ORM y Terminar el Layout del Dashboard",
  },
  {
    init: new Date(2023, 0, 10, 15, 0, 0),
    finish: new Date(2023, 0, 10, 19, 0, 0),
    comentary: "Build del proyecto lito",
  },
  {
    init: new Date(2023, 0, 11, 13, 0, 0),
    finish: new Date(2023, 0, 11, 18, 0, 0),
    comentary:
      "Arreglo de cache e .gitignore, creacion de modelo y ruta de s3file, documentar la instalacion del proyecto",
  },
  {
    init: new Date(2023, 0, 12, 9, 30, 0),
    finish: new Date(2023, 0, 12, 12, 0, 0),
    comentary: "creacion de layout con rutas dinamicas y conexio con bd",
  },
  {
    init: new Date(2023, 0, 12, 13, 25, 0),
    finish: new Date(2023, 0, 12, 16, 0, 0),
    comentary: "creacion de layout con rutas dinamicas y conexio con bd",
  },
  {
    init: new Date(2023, 0, 12, 17, 0, 0),
    finish: new Date(2023, 0, 12, 18, 0, 0),
    comentary: "creacion bucket s3 y estudio de django-storage",
  },
  {
    init: new Date(2023, 0, 13, 16, 45, 0),
    finish: new Date(2023, 0, 13, 17, 0, 0),
    comentary: "termino de integracion django-storage",
  },
  {
    init: new Date(2023, 0, 16, 9, 35, 0),
    finish: new Date(2023, 0, 16, 13, 35, 0),
    comentary: "termino de integracion",
  },
  {
    init: new Date(2023, 0, 16, 14, 0, 0),
    finish: new Date(2023, 0, 16, 17, 0, 0),
    comentary: "revision integracion a s3 y nueva tarea: cambio de contraseña",
  },
  {
    init: new Date(2023, 0, 16, 18, 30, 0),
    finish: new Date(2023, 0, 16, 19, 30, 0),
    comentary: "Creacion de interfaz de dashboard",
  },
  {
    init: new Date(2023, 0, 17, 13, 15, 0),
    finish: new Date(2023, 0, 17, 20, 15, 0),
    comentary: "creacion de formularios",
  },
  {
    init: new Date(2023, 0, 17, 22, 0, 0),
    finish: new Date(2023, 0, 17, 23, 0, 0),
    comentary: "Refactor componentes",
  },
  {
    init: new Date(2023, 0, 18, 0, 0, 0),
    finish: new Date(2023, 0, 18, 2, 0, 0),
    comentary: "Refactor componentes",
  },
  {
    init: new Date(2023, 0, 18, 14, 15, 0),
    finish: new Date(2023, 0, 18, 18, 15, 0),
    comentary: "Caso de uso del login y seed de la bd",
  },
  {
    init: new Date(2023, 0, 19, 15, 0, 0),
    finish: new Date(2023, 0, 19, 22, 0, 0),
    comentary: "caso de uso crear ticket",
  },
  {
    init: new Date(2023, 0, 20, 14, 0, 0),
    finish: new Date(2023, 0, 20, 17, 0, 0),
    comentary: "Reunion objetivos",
  },
  {
    init: new Date(2023, 0, 20, 18, 0, 0),
    finish: new Date(2023, 0, 20, 22, 0, 0),
    comentary: "routing roles",
  },
];
