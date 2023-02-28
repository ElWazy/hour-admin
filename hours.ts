import { TimeRange } from "./main.ts";

export const hours: Array<TimeRange> = [
  // semana 1
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
  // Semana 2
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
  // Semana 3
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
  // Semana 4
  {
    init: new Date(2023, 0, 23, 10, 30, 0),
    finish: new Date(2023, 0, 23, 18, 0, 0),
    comentary: "routing pages",
  },
  {
    init: new Date(2023, 0, 25, 15, 15, 0),
    finish: new Date(2023, 0, 25, 23, 0, 0),
    comentary: "s3 file button",
  },
  {
    init: new Date(2023, 0, 26, 10, 30, 0),
    finish: new Date(2023, 0, 26, 18, 30, 0),
    comentary: "file button validations & filed dashboard and ticket view",
  },
  {
    init: new Date(2023, 0, 27, 13, 0, 0),
    finish: new Date(2023, 0, 27, 21, 0, 0),
    comentary: "SendGrid integration and filters",
  },
  // Semana 5
  {
    init: new Date(2023, 0, 30, 12, 30, 0),
    finish: new Date(2023, 0, 30, 20, 30, 0),
    comentary: "Filtros",
  },
  {
    init: new Date(2023, 0, 31, 10, 0, 0),
    finish: new Date(2023, 0, 31, 18, 0, 0),
    comentary: "pre produccion fixes & start hour viewer",
  },
  {
    init: new Date(2023, 1, 1, 12, 30, 0),
    finish: new Date(2023, 1, 1, 20, 30, 0),
    comentary: "hour viewer component",
  },
  {
    init: new Date(2023, 1, 2, 13, 0, 0),
    finish: new Date(2023, 1, 2, 21, 0, 0),
    comentary: "hour viewer filters & start ticket viewer",
  },
  {
    init: new Date(2023, 1, 3, 9, 30, 0),
    finish: new Date(2023, 1, 3, 17, 30, 0),
    comentary: "ticket viewer update",
  },
  // Semana 6
  {
    init: new Date(2023, 1, 6, 10, 0, 0),
    finish: new Date(2023, 1, 6, 18, 0, 0),
    comentary: "module creator & company creator",
  },
  {
    init: new Date(2023, 1, 7, 10, 0, 0),
    finish: new Date(2023, 1, 7, 18, 0, 0),
    comentary: "martes",
  },
  {
    init: new Date(2023, 1, 8, 10, 0, 0),
    finish: new Date(2023, 1, 8, 18, 0, 0),
    comentary: "miercoles",
  },
  {
    init: new Date(2023, 1, 9, 10, 0, 0),
    finish: new Date(2023, 1, 9, 18, 0, 0),
    comentary: "jueves",
  },
  {
    init: new Date(2023, 1, 10, 10, 0, 0),
    finish: new Date(2023, 1, 10, 18, 0, 0),
    comentary: "viernes!",
  },
  // Semana 7
  {
    init: new Date(2023, 1, 13, 10, 0, 0),
    finish: new Date(2023, 1, 13, 18, 0, 0),
    comentary: "lunes",
  },
  {
    init: new Date(2023, 1, 14, 10, 0, 0),
    finish: new Date(2023, 1, 14, 18, 0, 0),
    comentary: "martes",
  },
  {
    init: new Date(2023, 1, 15, 10, 0, 0),
    finish: new Date(2023, 1, 15, 18, 0, 0),
    comentary: "miercoles",
  },
  {
    init: new Date(2023, 1, 16, 10, 0, 0),
    finish: new Date(2023, 1, 16, 18, 0, 0),
    comentary: "jueves",
  },
  {
    init: new Date(2023, 1, 17, 10, 0, 0),
    finish: new Date(2023, 1, 17, 18, 0, 0),
    comentary: "viernes",
  },
  // Semana 8
  {
    init: new Date(2023, 1, 20, 10, 0, 0),
    finish: new Date(2023, 1, 20, 18, 0, 0),
    comentary: "creacion de reporte pdf con script y template",
  },
  {
    init: new Date(2023, 1, 21, 10, 0, 0),
    finish: new Date(2023, 1, 21, 18, 0, 0),
    comentary: "varios fixes, relacionados con arreglar formularios",
  },
  {
    init: new Date(2023, 1, 22, 10, 0, 0),
    finish: new Date(2023, 1, 22, 18, 0, 0),
    comentary: "miercoles",
  },
  {
    init: new Date(2023, 1, 23, 10, 0, 0),
    finish: new Date(2023, 1, 23, 18, 0, 0),
    comentary: "jueves",
  },
  {
    init: new Date(2023, 1, 24, 10, 0, 0),
    finish: new Date(2023, 1, 24, 18, 0, 0),
    comentary: "viernes",
  },
  // Semana 9
  {
    init: new Date(2023, 1, 27, 10, 0, 0),
    finish: new Date(2023, 1, 27, 18, 0, 0),
    comentary: "lunes",
  },
  {
    init: new Date(2023, 1, 28, 10, 0, 0),
    finish: new Date(2023, 1, 28, 18, 0, 0),
    comentary: "martes",
  },
];
