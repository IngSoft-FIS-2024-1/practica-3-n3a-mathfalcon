[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15254926&assignment_repo_type=AssignmentRepo)
# Práctica integradora Library

## Objetivos
* Implementar nuevas funciones de lógica de dominio
* Codificar test unitarios en paralelo a la implementación
* Usar un linter para detectar problemas de codificacion
* Modificar la interfaz de usuario para usar las nuevas funciones

### Aspectos a tener en cuenta 

* Los comentarios `// TODO` deben ser reemplazados por código para implementar las nuevas funciones.
* Puede agregar nuevas funciones y tests, así como agregar parámetros en funciones existentes.
* Si necesita realizar supuestos sobre la implementación, agregue comentarios para explicarlos.
* Los test unitarios se deben codificar en los archivos correspondientes `*.test.js`.
* La cobertura de los test unitarios debe alcanzar 100 % de sentencias y ramas.
* Ejecute el linter con `npm run lint` para eliminar errores y warnings.

> Recuerde al finalizar cada parte: 
> * realizar commit / push
> * subir un issue con screenshots

### Parte A

1. En la clase `Book` agegar el campo `words` que representa el número de palabras del libro. El campo no es obligatorio y debe ser un número. Implementar las funciones `getWords()` y `setWords()` validando que el parámetro recibido es un número. Modificar la función `toString()` agregando el valor del campo.
Codificar los test unitarios para las nuevas funciones, incluyendo casos de error.

2. En la clase `Book` implementar la función `wordsPerPage()` que retorna el promedio de palabras por página del libro. 
Codificar test unitarios para la función `wordsPerPage()`.

3. En la clase `Library` implementar la función `totalWords()` que suma el total de palabras de los libros de la biblioteca.
Codificar test unitarios para la función `totalWords()`.

4. Subir un issue 'Parte A' con un screenshot de la terminal con el resumen de los tests unitarios y cobertura.

### Parte B

5. Ejecute el linter con `npm run lint` para eliminar errores y warnings. 
6. Subir un issue 'Parte B' con un screenshot de la terminal del linter sin detectar problemas de código.

### Parte C

7. Agregar elementos a la intefaz de usuario para usar las nuevas funciones.
    * Campo 'Palabras' en el panel 'Nuevo libro'.
    * Mostrar 'Palabras totales' en el panel 'Biblioteca'.
8. Subir un issue 'Parte C' con screenshot de la página en el navegador (paneles Biblioteca, Nuevo libro e Inventario).