# PokeAPI - Aplicación de Detalles de Pokémon

Esta es una aplicación Angular que utiliza la PokeAPI para mostrar información de Pokémon. 

## Funcionamiento

1. Ingresa el ID de un Pokémon en el campo de entrada.
2. Haz clic en el botón "Obtener Detalles".
3. La aplicación consultará la PokeAPI y mostrará los detalles del Pokémon, incluyendo su nombre, imagen, altura y peso.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `src/app`: Contiene los componentes y servicios de la aplicación.
  - `app.component.ts`: Componente principal que actúa como contenedor raíz.
  - `app-routing.module.ts`: Configuración de las rutas de la aplicación.
  - `pokemon-details/`: Carpeta que contiene el componente de detalles de Pokémon.
    - `pokemon-details.component.ts`: Lógica del componente.
    - `pokemon-details.component.html`: Plantilla HTML del componente.
    - `pokemon-details.component.css`: Estilos CSS del componente.
  - `pokemon.service.ts`: Servicio para interactuar con la PokeAPI y obtener datos de Pokémon.
- `src/assets`: Carpeta para recursos estáticos como imágenes.

## Uso

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js y Angular CLI instalados.
3. Abre la terminal en el directorio del proyecto y ejecuta `ng serve` para iniciar el servidor de desarrollo de Angular.
4. Abre tu navegador y visita `http://localhost:4200/` para interactuar con la aplicación.

## Firma

Firmado por: David Leiva
Número de cuenta: T32211122

¡Disfruta explorando los detalles de tus Pokémon favoritos!
