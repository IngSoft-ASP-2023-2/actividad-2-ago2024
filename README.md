# Actividad2

Usted se encuentra desarrollando una api que permita generar reportes de costos de viajes de uber. En particular, es de interés poder exponer servicios delimitando un rango de fechas y la divisa (pesos, dólares, euros) que se quiere obtener. Para ello, se solicita construir dicha funcionalidad a partir de async transactions y persistirlos en una bd (rds), dado un CSV que contiene dicha información.

A modo de corolario, es necesario exponer un servicio que permita preguntar por el estado del trabajo y si está completado, obtener el resultado.

**Consigna:**

Esta entrega requiere código fuente dentro del repositorio generado y crear un video de no más de 10min que muestren el flujo de generación de trabajos y sus respectivas respuestas 

**Parte 1: Despliegue de la aplicación**

El Despliegue la aplicación debe ser en elastic beanstalk y ser capaz a su vez de ejecutarse mediante docker-compose.

**Parte 2: Optimización de Tiempos de Respuesta**

Para el endpoint de consulta de estado de un trabajo y su resultado asociado -si corresponde- seleccione un tipo de prueba de rendimiento adecuado, justificando su elección, y genere un script de K6 para correr sobre la API.

La prueba debe validar que el tiempo de respuesta P(95) sea inferior a 2500 ms y que fallen menos del 1% de las solicitudes.


```
docker build -t pw-generator-app .
docker run -p 3000:3000 pw-generator-app

```
