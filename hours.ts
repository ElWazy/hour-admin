import { TimeRange } from "./main.ts";

export const hours: Array<TimeRange> = [
  {
    init:   new Date(2023, 0, 1, 11, 30, 0),
    finish: new Date(2023, 0, 1, 14, 30, 0),
    comentary: 'Reunion de bienvenida y 1ra tarea, crear DER',
  },
  {
    init:   new Date(2023, 0, 1, 15, 30, 0),
    finish: new Date(2023, 0, 1, 17, 30, 0),
    comentary: 'Introduccion a tecnologias, stack AWS y Django',
  },
  {
    init:   new Date(2023, 0, 2, 12, 30, 0),
    finish: new Date(2023, 0, 2, 13, 30, 0),
    comentary: 'Revision DER',
  },
  {
    init:   new Date(2023, 0, 2, 13, 0, 0),
    finish: new Date(2023, 0, 2, 15, 25, 0),
    comentary: 'Creacion mockup no funcional',
  },
  {
    init:   new Date(2023, 0, 3, 10, 0, 0),
    finish: new Date(2023, 0, 3, 11, 0, 0),
    comentary: 'Prototipado de la app',
  },
  {
    init:   new Date(2023, 0, 3, 15, 0, 0),
    finish: new Date(2023, 0, 3, 17, 0, 0),
    comentary: 'Reunion presencial con el equipo',
  },
]
