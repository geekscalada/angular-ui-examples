🎯 Objetivos Visuales
📏 Máximo ancho controlado

El contenido se limita a 1200px (max-width) para que no se expanda indefinidamente en pantallas grandes.

Esto respeta el diseño profesional de muchos layouts centrados.

🎯 Centrado horizontal perfecto

Se utiliza margin: 0 auto para centrar la container dentro del nav.

Esto asegura que el layout visual tenga simetría horizontal, sin desplazamientos.

📐 Margen lateral fluido

El padding: 0 1rem asegura que el contenido no se pegue a los bordes en pantallas pequeñas.

Esto mejora la legibilidad y la estética en móviles y tablets.

📦 Distribución controlada con Flexbox

El div.container usa display: flex y justify-content: space-between para repartir el contenido en tres bloques: izquierda, centro (absoluto) y derecha.

⚙️ Objetivos Funcionales
🔗 Modularidad

El centrador permite encapsular la lógica visual del navbar, de modo que el componente puede moverse o reutilizarse en cualquier parte de la app sin perder su consistencia visual.

📐 Compatibilidad responsive

La estructura preparada con max-width + width: 100% + padding es la base para media queries o breakpoints, y hace fácil adaptarlo a responsive.

🏗️ Base para layout más complejo

El centrador permite montar encima cualquier estructura: ítems alineados, dropdowns, hamburguesas, buscadores, etc.

🧘 Separación de responsabilidades

El nav se encarga del fondo y altura.

El container gestiona el layout interno y el centrado visual del contenido.
