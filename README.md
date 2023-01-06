# hour-admin

## Util commands

Iniciar programa: el cual solo muestra la suma de las horas trabajadas
```bash
deno run ./main.ts
```

Testing: para asegurarse que la funcion principal funcione como se espera
```bash
deno test
```

## Util file

En el archivo `hours.ts` hay un array que contiene una estructura de datos
simple la cual se procesa para calcular las horas trabajadas

- `init`: tiempo en el que se empezó a trabajar
- `finish`: tiempo en el que terminó el trabajo
- `comentary`: observación simple de lo que se realizó en las horas trabajadas
- `module`: (**Proximamente**) deja el registro del módulo trabajado para despues filtrar horas por modulo

