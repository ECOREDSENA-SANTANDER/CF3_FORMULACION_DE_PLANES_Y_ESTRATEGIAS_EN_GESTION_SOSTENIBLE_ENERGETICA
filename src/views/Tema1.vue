<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Marco teórico y fases de la planificación estratégica
        
      .row.justify-content-center.mb-2(data-aos="zoom-in-left")
        .col-lg-2.mb-3.col-8.col-md-6
          img(src='@/assets/curso/Tema1/img01.svg', alt='')
        .col-lg-10
          p Este tema es fundamental, ya que establece las bases metodológicas para la formulación del #[b Plan de gestión sostenible energética (PGSE)]. El aprendiz debe comprender que la implementación de medidas de eficiencia energética no corresponde a acciones aisladas, sino a un proceso estructurado que requiere planificación formal para asegurar su efectividad, seguimiento y coherencia con los objetivos de sostenibilidad institucional.

      p El PGSE se desarrolla bajo un enfoque de gestión de proyectos y se estructura en cinco fases principales, derivadas del ciclo de vida de proyectos:

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8.mb-4
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Fase de inicio (justificación)")
              .col-md-12.mb-4.mb-md-0
                p Se define el problema energético - ambiental a intervenir con base en el déficit ecológico y la viabilidad económica identificada previamente. Se formulan los objetivos generales del plan.
            .row(numero="2" titulo="Fase de planificación (estrategia)")
              .col-md-12.mb-4.mb-md-0
                p Constituye el eje central del PGSE. En esta fase se transforman los resultados del análisis de impacto en un plan de acción estructurado, priorizando medidas de prevención y reducción. Se establece cronograma, responsables, recursos y metas específicas.
            .row(numero="3" titulo="Fase de ejecución (implementación)")
              .col-md-12.mb-4.mb-md-0
                p Se ponen en marcha las acciones propuestas, incluyendo la instalación de tecnologías de eficiencia energética y los cambios operacionales requeridos.
            .row(numero="4" titulo="Fase de monitoreo y control")
              .col-md-12.mb-4.mb-md-0
                p Se realiza el seguimiento del PGSE mediante indicadores clave de desempeño (KPI) que evalúan la reducción de GEI, el ahorro energético y el uso eficiente de recursos naturales.
            .row(numero="5" titulo="Fase de cierre (evaluación)")
              .col-md-12.mb-4.mb-md-0
                p Se verifica el cumplimiento de metas, se documentan los resultados y se registran las lecciones aprendidas para retroalimentar futuras estrategias y asegurar la mejora continua.
            
        .col-lg-4.col-8.col-md-6
          img(src='@/assets/curso/Tema1/img01.png', alt='')

      p.mb-4 Para gestionar adecuadamente la complejidad del PGSE, se requieren herramientas de planificación que faciliten la organización del trabajo:

      h3.bg1.p-2.mb-4(data-aos="zoom-in-left") Estructura de desglose del trabajo (EDT - Estructura de Desglose del Trabajo)
      p.mb-4 Permite dividir el objetivo general del PGSE en paquetes de trabajo específicos y controlables, facilitando la asignación de responsabilidades, la estimación de recursos y el orden lógico de ejecución.
      h5.mb-4 Ejemplo sencillo aplicado a un PGSE
      p.mb-4 Objetivo general: implementar un sistema de energía solar en la empresa.
      .row.justify-content-center(data-aos="flip-up")  
        .col-lg-4.col-md-6.mb-5
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/11.svg', alt='tema1')
            .p-2.mb-4
              p #[b Paquete de trabajo 1:] estudio técnico.
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  |Análisis de demanda energética.
                li
                  i.fas.fa-check-circle
                  |Evaluación del sitio de instalación.
        .col-lg-4.col-md-6.mb-5
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/12.svg', alt='tema1')
            .p-2.mb-4
              p #[b Paquete de trabajo 2:] adquisición del sistema.
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  |Selección del proveedor.
                li
                  i.fas.fa-check-circle
                  |Compra de equipos.
        .col-lg-4.col-md-6.mb-5
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/13.svg', alt='tema1')
            .p-2.mb-4
              p #[b Paquete de trabajo 3:] instalación y puesta en marcha.
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  |Montaje del sistema.
                li
                  i.fas.fa-check-circle
                  |Pruebas de funcionamiento.    

      h3.bg1.p-2.mb-4(data-aos="zoom-in-left") Diagrama de Gantt: 
      p.mb-4 Su uso es vital para visualizar la línea de tiempo del PGSE. Esta herramienta permite programar las actividades de mitigación y corrección, identificar la ruta crítica del proyecto y asegurar que la ejecución se mantenga dentro de los plazos establecidos.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='La tabla muestra un diagrama de Gantt con la programación de actividades para implementar un sistema solar fotovoltaico en cinco semanas. Se incluyen tres fases principales: estudio técnico, adquisición del sistema e instalación, cada una dividida en tareas específicas con tiempos estimados representados mediante barras de duración.')
        h5 Tabla 1.
        span  #[em Implementación de sistema solar fotovoltaico ]
      
      .tabla-b.color-acento-contenido.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th Actividad
              th Semana 1
              th Semana 2
              th Semana 3
              th Semana 4
              th Semana 5
          tbody
            tr
              td 1. Estudio técnico
              td
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
              td
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
              td
              td
              td
            tr
              td 1.1 Análisis de demanda energética
              td
                span.bloque
                span.bloque
                span.bloque
              td
                span.bloque
                span.bloque
                span.bloque
              td
              td
              td
            tr
              td 1.2 Evaluación del sitio
              td
              td
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
              td
              td
              td
            tr
              td 2. Adquisición del sistema
              td
              td
              td
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
              td
              td
            tr
              td 2.1 Selección de proveedor
              td
              td
              td
                span.bloque
                span.bloque
                span.bloque
              td
              td
            tr
              td 2.2 Compra de equipos
              td
              td
              td
              td
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
              td
            tr
              td 3. Instalación y puesta en marcha
              td
              td
              td
              td
              td
                span.bloque
                span.bloque
                span.bloque
                span.bloque
                span.bloque
            tr
              td 3.1 Montaje del sistema
              td
              td
              td
              td
              td
                span.bloque
                span.bloque
                span.bloque
            tr
              td 3.2 Pruebas y operación
              td
              td
              td
              td
              td
                span.bloque

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-4.col-11.mb-3.col-md-10
          img(src='@/assets/curso/Tema1/img02.png', alt='')
        .col-lg-8
          .row.mb-2 
            .col-lg-1.mb-3.col-3.col-md-2
              img(src='@/assets/curso/Tema1/img03.svg', alt='')
            .col-lg-12
              p El PGSE debe concebirse de manera holística para evitar la transferencia de impactos, es decir, solucionar un problema en una fase del proceso energético generando otro en una etapa diferente o en un medio ambiental distinto. Por ello, es fundamental articular el plan con las cinco etapas del análisis de ciclo de vida (ACV), garantizando coherencia y sostenibilidad a lo largo del proceso.

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-12
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/001.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-10.col-md-11
                  h2.bg3.p-1.text-center.text-black Prevención en la fuente
              p Las acciones priorizadas deben orientarse a las etapas iniciales (extracción y procesamiento), incentivando prácticas de economía circular desde la cadena de suministro. Un ejemplo de ello es establecer requisitos a los proveedores de materia prima para reducir residuos y optimizar el uso de recursos.
            
            .col-md.tarjeta.bg2.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/002.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-10.col-md-11
                  h2.bg4.p-1.text-center.text-black Corrección y cierre de ciclo  
              p El plan debe contemplar medidas para la etapa de disposición final, como la logística inversa y el manejo responsable de residuos tecnológicos. Estas acciones son clave para asegurar la equidad intergeneracional, reflejando cómo cada intervención contribuye a un resultado sostenible y de mínimo impacto global.

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1 Definición estratégica y objetivos del proyecto

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-8
          p Cuando la estructura del proyecto está establecida, es necesario convertir el enfoque estratégico en metas ambientales y operativas precisas. Para ello, se emplea la metodología #[em #[b SMART]], un criterio que permite formular objetivos #[b específicos, medibles, alcanzables, relevantes y con un plazo definido], garantizando claridad y orientación al resultado. Esta metodología actúa como estándar dentro del #[b Plan de gestión sostenible energética (PGSE).]
          p.bg5.p-4(data-aos="zoom-in-left") Los objetivos planteados deben responder de manera directa a las problemáticas identificadas en las etapas de diagnóstico, particularmente aquellas relacionadas con los impactos ambientales y el déficit ecológico. De este modo, se asegura coherencia entre el análisis previo y las acciones planificadas, fortaleciendo la efectividad del plan.
        .col-lg-4.col-8
          img(src='@/assets/curso/Tema1/img04.png', alt='') 

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1. 
        span #[em SMART]

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-12
          img(src='@/assets/curso/Tema1/fig1.svg', alt='Describe el método SMART para crear objetivos: específico, medible, alcanzable, realista y con tiempo definido.') 
          figcaption #[b Fuente:] Foro de Economía Digital Business School. (2025).

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-1.col-3.col-md-2
          img(src='@/assets/curso/Tema1/img04.svg', alt='') 
        .col-lg-11
          p Se indica que los objetivos deben expresar de forma cuantificable la reducción del impacto. Por ejemplo, en lugar de plantear un objetivo general como "mejorar la sostenibilidad", el PGSE debe formular metas SMART, tales como: "reducir la huella hídrica en un 20 % durante la fase de procesamiento de energía en los próximos 18 meses" o "incrementar la generación propia de energía renovable en 500 MWh en el periodo de un año". La precisión y la cuantificación permiten que la fase de monitoreo y control evalúe el cumplimiento y los avances del proyecto.

      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2 Diseño de la visión y misión del Plan de Gestión de Seguridad Energética (PGSE)

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-4.mb-3.col-9.col-md-7
          img(src='@/assets/curso/Tema1/img05.png', alt='')
        .col-lg-8.mb-3
          p.mb-0 Este numeral desarrolla el componente estratégico y comunicacional del PGSE, esencial para asegurar el compromiso institucional y la alineación entre las áreas involucradas.
          p La misión del PGSE debe ser una declaración breve y precisa que describa el propósito del plan y su alcance operativo. Por ejemplo: "garantizar una gestión energética eficiente, responsable y alineada con la economía circular, minimizando el impacto sobre el aire y el agua en la operación de la infraestructura". Esta misión orienta las acciones diarias y define el sentido del plan dentro de la organización.
          p Por su parte, la visión debe proyectar el estado futuro deseado tras la implementación exitosa del PGSE. Esta debe ser inspiradora y ambiciosa, integrando elementos como la economía circular, la reducción del déficit ecológico y la transición energética responsable. La visión funciona como una herramienta de movilización interna, facilitando el compromiso de la alta dirección y comunicando el valor estratégico del plan a los grupos de interés (accionistas, colaboradores y comunidad).
        .col-lg-12 
          p Además, el PGSE debe contar con una justificación sólida, fundamentada en el valor estratégico del plan más allá del ahorro económico. Dicha justificación debe construirse sobre los tres pilares de la sostenibilidad:

      .row.justify-content-center(data-aos="flip-up")  
        .col-lg-4.col-md-6.mb-5
          .h-100.bg6.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/1.png', alt='tema1')
            .p-2.mb-4
              h5.text-center Pilar social y ético
              p.text-center El plan debe respaldarse con argumentos relacionados con el principio de equidad intergeneracional, garantizando un uso responsable de los recursos naturales para no comprometer a las futuras generaciones. Asimismo, debe evidenciar la viabilidad social, destacando cómo contribuye a mejorar la calidad de vida de las comunidades (por ejemplo, mediante la reducción de contaminantes) y al cumplimiento de la normativa de participación ciudadana.
       

        .col-lg-4.col-md-6.mb-5
          .h-100.bg6.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/2.png', alt='tema1')
            .p-2.mb-4
              h5.text-center Pilar ambiental
              p.text-center Es necesario demostrar cómo el PGSE contribuye a la mitigación del cambio climático mediante la reducción de GEI y la conservación de recursos esenciales. Los objetivos energéticos deben vincularse directamente con la disminución de la huella ecológica de la organización.
        
        .col-lg-4.col-md-6.mb-5
          .h-100.bg6.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/3.png', alt='tema1')
            .p-2.mb-4
              h5.text-center Pilar económico
              p.text-center Aunque el análisis de viabilidad se desarrolló en la AA2, aquí se refuerza la justificación económica a largo plazo. Se debe argumentar cómo el plan reduce riesgos regulatorios, mejora la reputación corporativa y fortalece la resiliencia operativa ante la escasez de recursos y la variabilidad de los precios energéticos.

      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3 Formulación de medidas: tipos y priorización

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-4.col-10.mb-3.col-md-8
          img(src='@/assets/curso/Tema1/img06.png', alt='tema1')
        .col-lg-8
          p La formulación de medidas dentro del Plan de Gestión Sostenible Energética (PGSE) requiere un análisis estratégico que permita seleccionar acciones efectivas para reducir los impactos ambientales del proceso energético. Para ello, no basta con identificar problemáticas; es necesario clasificar y priorizar las intervenciones según su capacidad para prevenir, reducir o corregir el impacto, y solo en última instancia compensarlo. La correcta priorización asegura que las decisiones sean eficientes, sostenibles y alineadas con el ciclo de vida (ACV), evitando la transferencia de impactos a otras etapas o recursos.

      h3.bg1.p-2.mb-4 Diferenciación de medidas de mitigación: prevención, reducción, corrección y compensación
      p.mb-4 Para formular un Plan de Gestión Sostenible Energética (PGSE) efectivo, es fundamental comprender la jerarquía de mitigación y aplicarla de forma priorizada. Un plan estratégico debe enfocarse primero en evitar el impacto, antes de corregir o compensar el daño. Las medidas se clasifican en cuatro niveles:
      .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='Compara los cuatro tipos de medidas del PGSE: prevención, reducción, corrección y compensación, con sus descripciones y ejemplos.')
        h5 Tabla 2.
        span  #[em Tipos de medidas de mitigación en el PGSE]

      .tabla-b.color-acento-contenido.mb-4
        table
          thead
            tr
              th.w-25 Tipo de medida
              th Descripción
              th Ejemplos de aplicación
          tbody
            tr
              td Prevención
              td Acciones implementadas antes de que el impacto ocurra. Eliminan la causa del problema y son las más eficientes y económicas.
              td Selección de materiales de bajo impacto; rediseño de procesos para evitar generación de residuos peligrosos.
            tr
              td Reducción
              td Acciones para disminuir la magnitud o intensidad del impacto cuando no es posible prevenirlo completamente.
              td Optimización del consumo energético de motores; medidas de eficiencia energética para reducir emisiones.
            tr
              td Corrección
              td Intervenciones orientadas a restaurar o reparar el daño ambiental ya generado.
              td Instalación de sistemas de tratamiento de agua; rehabilitación de áreas degradadas.
            tr
              td Compensación
              td Acciones que equilibran los impactos irreversibles o no eliminables. Se aplican solo como última alternativa.
              td Programas de reforestación; compensaciones ambientales por uso de suelo.

      h3.bg1.p-2.mb-4 Criterios para la selección de medidas (costo - beneficio, viabilidad y urgencia)
      p.mb-4 La selección de medidas no debe basarse en criterios subjetivos, sino en una evaluación técnica que garantice su efectividad ambiental. La prevención y reducción siempre tendrán prioridad en la jerarquía.
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='Muestra los criterios para evaluar medidas: costo-beneficio, viabilidad técnica, urgencia legal y alineación con el ACV, cada uno con ejemplos prácticos.')
        h5 Tabla 3.
        span #[em Criterios para la evaluación y selección de medidas en el PGSE]

      .tabla-b.color-acento-contenido.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.w-25 Criterio de evaluación
              th Descripción
              th Ejemplo aplicado
          tbody
            tr
              td Costo - beneficio ambiental y económico
              td La inversión se justifica comparando costos frente al beneficio ambiental. El beneficio ambiental tiene prioridad sobre el económico.
              td Comparar costo de instalar un sistema eficiente vs. reducción de CO₂ y ahorro energético.
            tr
              td Viabilidad técnica y operativa
              td La medida debe ser aplicable, realista y escalable según las condiciones tecnológicas y geográficas del proceso.
              td Implementación de tecnología acorde al tipo de operación y disponibilidad técnica local.
            tr
              td Urgencia regulatoria
              td Se evalúa si la medida es obligatoria para cumplir normativa ambiental. Es un criterio no negociable.
              td Aplicación de requisitos legales para emisiones, vertimientos o residuos.
            tr
              td Alineación con el ciclo de vida (ACV)
              td La medida no debe generar impactos negativos en otra etapa o medio ambiental, evitando la transferencia de impactos.
              td Un filtro que reduce emisiones no debe generar residuos peligrosos que contaminen el suelo.
            
      h3.bg1.p-2.mb-4(data-aos="zoom-in-left") Aplicación de la jerarquía: priorización de medidas preventivas y de reducción
      p.mb-4 El PGSE debe evidenciar que su diseño privilegia las acciones proactivas sobre las reactivas. La jerarquía se aplica así:
      .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='Organiza los principios de priorización en el PGSE: prevención y reducción, corrección circular y compensación justificada, con ejemplos aplicados.')
        h5 Tabla 4.
        span #[em Aplicación de la jerarquía de mitigación en el PGSE]

      .tabla-b.color-acento-contenido.mb-4
        table
          thead
            tr
              th.w-25 Principio de aplicación
              th Descripción
              th Ejemplo aplicado
          tbody
            tr
              td Prevención y reducción primero
              td Se priorizan las acciones que evitan o disminuyen el impacto desde la fuente. Constituyen la opción más eficiente y sostenible.
              td Rediseñar un sistema para reducir el uso de refrigerante en vez de compensar emisiones por captura de GEI.
            tr
              td Corrección con enfoque circular
              td En la etapa de disposición final se deben aplicar estrategias de economía circular, logística inversa y valorización de residuos.
              td Recuperación y reutilización de materiales críticos en baterías solares.
            tr
              td Compensación solo con justificación
              td La compensación se usa únicamente cuando prevenir, reducir o corregir no es viable. Debe justificarse claramente en el PGSE.
              td Reforestación para equilibrar impactos inevitables en uso de suelo.


      separador
      #t_1_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.4 Desarrollo de actividades y plan de acción detallado

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.col-9.mb-3.col-md-8
          img(src='@/assets/curso/Tema1/img07.png', alt='tema1')
        .col-lg-7
          .row
            .col-lg-2.mb-3.col-3.col-md-2.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/img07.svg', alt='tema1')
            .col-lg-12
              p En esta etapa, el Plan de Gestión Sostenible Energética (PGSE) pasa de la formulación teórica a la ejecución práctica. Para lograrlo, cada medida seleccionada debe transformarse en actividades concretas, con responsables, tiempos, recursos y metas verificables. El plan de acción permite organizar la implementación de manera ordenada, secuencial y medible, garantizando que las acciones propuestas sean realizables y alineadas con los objetivos estratégicos del proyecto. A través de esta estructuración se facilita el seguimiento, el control de avances y la toma de decisiones oportunas durante la ejecución del PGSE.

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-1.col-3.mb-3.col-md-2
          img(src='@/assets/curso/Tema1/img08.svg', alt='tema1')
        .col-lg-11
          h3.bg1.p-3 Descripción de las actividades a desarrollar por cada fase de un proyecto en eficiencia energética (diagnóstico, diseño, adquisición, implementación y verificación)

      p Una vez definidas y priorizadas las medidas de mitigación, el enfoque se traslada hacia su ejecución práctica. Para ello, es necesario detallar de forma organizada las tareas que permitirán implementar las estrategias de eficiencia energética y uso de energías renovables. Estas actividades se estructuran en fases operacionales que facilitan el orden, la trazabilidad del proceso y el control del avance del proyecto.

      .fondo01.p-4
        .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
          .col-lg-9
            .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='El plan de acción se estructura por fases que permiten avanzar de forma ordenada: iniciar con el diagnóstico técnico, diseñar y seleccionar soluciones, adquirir e instalar los equipos, y finalmente verificar su funcionamiento y los resultados obtenidos.')
              h5 Tabla 5.
              span #[em Fases y actividades del proyecto en eficiencia energética]

            .tabla-b.color-acento-contenido.mb-4
              table
                thead
                  tr
                    th.w-25 Fase
                    th Actividades principales
                tbody
                  tr
                    td Diagnóstico técnico
                    td Recopilación de datos de consumo para la línea base, aplicación de lista de chequeo y análisis preliminar de costos de inversión.
                  tr
                    td Diseño e ingeniería
                    td Selección definitiva de equipos eficientes, elaboración de planos o esquemas de instalación y solicitud / cotización final para asegurar la viabilidad económica.
                  tr
                    td Adquisición e instalación
                    td Compra y logística de equipos, montaje y puesta física de sistemas (motores, paneles fotovoltaicos, iluminación, etc.) y capacitación al personal encargado de la operación.
                  tr
                    td Verificación y puesta en marcha
                    td Pruebas de funcionamiento, monitoreo inicial del desempeño y medición de reducción de GEI y ahorro de recursos alcanzados.
      h3.bg1.p-2.mb-4(data-aos="zoom-in-left") Elaboración del plan de acción del proyecto de gestión ambiental (asignación de responsables, cronograma y recursos)
      p.mb-4 La planificación de actividades se organiza en una #[b matriz del plan de acción], la cual funciona como la hoja de ruta operativa del PGSE, permitiendo convertir los objetivos estratégicos en acciones concretas y ejecutables. Esta matriz debe incorporar los elementos esenciales para cada actividad de mitigación, garantizando claridad en la ejecución, seguimiento y evaluación de resultados.
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='Organiza las acciones del proyecto de gestión ambiental, asignando responsables, recursos, tiempos y productos esperados para cada actividad. Su función es facilitar la ejecución y el seguimiento del plan, asegurando que cada tarea cuente con responsables definidos y metas verificables.')
            h5 Tabla 6.
            span #[em Matriz del plan de acción]

          .tabla-b.color-acento-contenido.mb-4
            table
              thead
                tr
                  th.w-25 Elemento
                  th Descripción
              tbody
                tr
                  td Descripción detallada de la tarea
                  td Indicar de manera precisa la actividad a ejecutar. Ejemplo: instalación del sistema de iluminación LED en bodega 3.
                tr
                  td Responsable
                  td Área o persona encargada de llevar a cabo la actividad. Ejemplo: departamento de mantenimiento.
                tr
                  td Plazo y duración
                  td Fechas de inicio y fin, vinculadas al cronograma / diagrama de Gantt.
                tr
                  td Recursos requeridos
                  td Materiales, presupuesto, personal y tiempo necesario para ejecutar la tarea. Ejemplo: $3.000 USD, 2 técnicos, 50 horas - hombre.
                tr
                  td Producto esperado
                  td Entregable que demuestre la finalización de la actividad. Ejemplo: certificado de instalación.

        .col-lg-4.col-11.col-md-9
          img.mb-3(src='@/assets/curso/Tema1/img09.png', alt='tema1')
          p La correcta elaboración de esta matriz demuestra la capacidad del profesional para #[b gestionar y controlar] la implementación del proyecto.

      h3.bg1.p-2.mb-4(data-aos="zoom-in-left") Integración de la economía circular como actividad de corrección y disposición de residuos
      p.mb-4 El plan de acción debe incorporar de manera explícita el enfoque de economía circular como estrategia de corrección y manejo responsable de residuos. Esto implica establecer actividades orientadas a la gestión adecuada de equipos y materiales que sean reemplazados durante la implementación de medidas de eficiencia energética.

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-lg-12
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/003.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-10.col-md-11
                  h2.bg3.p-1.text-center.text-black Logística inversa
              p Se describen las acciones necesarias para garantizar que los residuos generados (como luminarias en desuso o baterías agotadas) sean retornados al fabricante o a gestores autorizados, asegurando su valorización y recuperación de materiales.
            
            .col-md.tarjeta.bg2.p-5
              .row.mb-2.align-items-end
                .col-3.col-md-5.col-lg-2.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/004.svg', alt='Texto que describa la imagen')          
                .col-9.col-lg-10.col-md-11
                  h2.bg4.p-1.text-center.text-black Reutilización y reciclaje
              p Se definen las tareas para la reutilización interna de componentes funcionales y la correcta segregación de residuos, promoviendo su inclusión en programas de reciclaje. Con ello se evita que estos elementos generen impactos negativos en recursos como el suelo.

      p Esta integración permite cerrar el ciclo de vida de los productos, alineando el PGSE con el enfoque del ACV y fortaleciendo el compromiso con la sostenibilidad y la preservación de los recursos para futuras generaciones.

      separador
      #t_1_5.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.5 Metas de desempeño y viabilidad ambiental

      p La efectividad del Plan de Gestión Sostenible Energética (PGSE) se evalúa a partir del cumplimiento de las metas establecidas. Estas metas deben ser cuantificables, específicas y directamente relacionadas con el proceso energético intervenido. Se recomienda formular metas más allá del ahorro económico, priorizando indicadores operativos y ambientales. Por ejemplo, en lugar de medir solo el consumo total, es preferible emplear indicadores de intensidad energética (como MWh por unidad producida o kWh / m² climatizado), permitiendo una medición real del desempeño. Las metas deben ser ambiciosas, pero alcanzables, tomando como referencia la línea base definida en la AA2.
      p Sin embargo, definir metas no es suficiente; es indispensable evaluar su viabilidad. Para ello se analizan factores que pueden facilitar o limitar su cumplimiento.
      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.col-9.mb-4.col-md-7
          img(src='@/assets/curso/Tema1/img10.svg', alt='Texto que describa la imagen') 
        .col-lg-7
          .row.bg3.p-3.mb-3
            .col-lg-1.mb-3.col-3.col-md-2
              img(src='@/assets/curso/Tema1/77.svg', alt='Texto que describa la imagen') 
            .col-lg-12
              p #[b Factores operacionales:] consideran la capacidad técnica, disponibilidad de personal especializado, compatibilidad tecnológica y posibles ajustes en los procesos internos. Una meta de eficiencia no será viable si los equipos o tecnologías requeridas no pueden integrarse al sistema productivo existente.
          .row.bg7.p-3.mb-3
            .col-lg-1.mb-3.col-3.col-md-2
              img(src='@/assets/curso/Tema1/78.svg', alt='Texto que describa la imagen') 
            .col-lg-12
              p #[b Factores financieros y regulatorios:] se valora la capacidad económica de la organización para asumir la inversión, incluso si existe ahorro proyectado a futuro. También se revisan incentivos y restricciones normativas, como licencias o requisitos ambientales que puedan modificar plazos o condiciones de implementación.
      p.mb-0 La viabilidad debe quedar documentada para asegurar que las metas no sean solo declarativas, sino efectivamente alcanzables.
      p En esta etapa se consolida el vínculo entre desempeño técnico y sostenibilidad ambiental. El PGSE debe demostrar cómo el cumplimiento de las metas energéticas contribuye a la mitigación de impactos.

      TabsA.color-acento-botones.mb-4(data-aos="zoom-in-left")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Cuantificación ambiental directa")
          .row
            .col-lg-11
              p Cada meta de eficiencia debe asociarse con una reducción explícita en términos ambientales (ejemplo: "una reducción del 15 % de consumo eléctrico equivale a evitar 50 t de CO₂ / año"). Esto permite validar la disminución de GEI estimada en la AA2.
            .col-lg-1.col-3.col-md-2
              img(src='@/assets/curso/Tema1/79.svg', alt='Texto que describa la imagen') 

        .tarjeta.color-acento-botones--borde.p-4(titulo="Conservación de recursos naturales")
          .row
            .col-lg-11
              p Además de emisiones, se debe evidenciar cómo las metas disminuyen la presión sobre recursos clave, como agua o suelo, fortaleciendo la reducción del déficit ecológico.
            .col-lg-1.col-3.col-md-2
              img(src='@/assets/curso/Tema1/80.svg', alt='Texto que describa la imagen') 

      p De esta manera, el PGSE demuestra que las metas planteadas son medibles, viables y ambientalmente significativas.
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/bombillo.svg")
            h3.bg8.py-2.w-card-text.text-white Monitoreo, viabilidad social y normativa

      p.mb-4 El éxito del Plan de Gestión Sostenible Energética (PGSE) depende de un seguimiento continuo. Para ello, es indispensable definir #[b indicadores clave de desempeño (KPI - #[em Key Performance Indicators])] que permitan medir el avance, evaluar resultados y garantizar la trazabilidad del plan. Estos indicadores se clasifican en dos categorías:

      TabsB.color-primario.mb-5.escala-grises
        .py-4.py-md-5(titulo="KPI de desempeño energético" :icono="require('@/assets/curso/Tema1/81.svg')")
          .row
            .col-md-12.mb-4.mb-md-0.col-lg-7
              p.mb-0 Evalúan la eficacia de las acciones implementadas para mejorar la eficiencia energética.
              p Ejemplos:
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  |Índice de intensidad energética (MWh / unidad producida).

                li
                  i.fas.fa-check-circle
                  |Factor de carga del sistema.
                li
                  i.fas.fa-check-circle
                  |Porcentaje de energía renovable generada in situ.
            .col-md-7.col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/Tema1/img11.png', alt='Texto que describa la imagen')

        
        .py-4.py-md-5(titulo="KPI de desempeño ambiental y social" :icono="require('@/assets/curso/Tema1/84.svg')")
          .row
            .col-md-12.mb-4.mb-md-0.col-lg-7
              p.mb-0 Miden la mitigación del impacto ambiental y el alcance social del plan.
              p Ejemplos:
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  |Reducción de emisiones de CO₂ (t / año).
                li
                  i.fas.fa-check-circle
                  |Volumen de recursos naturales ahorrados (m³ de agua, L de combustible, etc.).
                li
                  i.fas.fa-check-circle
                  |Número de actividades de concertación ejecutadas.
            .col-md-7.col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/Tema1/img12.png', alt='Texto que describa la imagen')


      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          .cajon.color-acento-contenido.p-4
            p.mb-0 El monitoreo permanente de estos indicadores alimenta la fase de control, permitiendo realizar ajustes tempranos y asegurar el cumplimiento de los objetivos del PGSE.
       
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12.col-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/bombillo.svg")
            h3.bg8.py-2.w-card-text.text-white Estrategias de concertación y cumplimiento normativo

      p El componente social es un pilar esencial en la sostenibilidad del proyecto. En este numeral se establece la necesidad de demostrar la viabilidad social, garantizando la aceptación del plan por parte de los grupos de interés.
      
      .p-5.fondo2(data-aos="zoom-in-left").mb-4
        SlyderA(tipo="b").tarjeta.bg9.p-4
          .row.justify-content-center.align-items-center.py-4
            .col-md-12.mb-4.mb-md-0.col-lg-7
              h4 Estrategias de concertación social
              p Incluyen las acciones de comunicación, diálogo y participación ciudadana para fortalecer la relación con la comunidad.
              p Acciones sugeridas:
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle
                  |Realización de mesas de diálogo y socialización.
                li
                  i.fas.fa-check-circle
                  |Presentación clara de beneficios del plan (menor contaminación, ahorro, empleo local, etc.).
                li
                  i.fas.fa-check-circle
                  |Mecanismos de gestión de quejas y sugerencias.
              p El propósito es asegurar legitimidad, reducir conflictos y favorecer el involucramiento social.
            .col-md-7.col-lg-4
              img(src='@/assets/curso/Tema1/img13.png', alt='')
          
          .row.justify-content-center.align-items-center.py-4
            .col-md-12.mb-4.mb-md-0.col-lg-7
              h4 Cumplimiento de la normativa ambiental y comunitaria
              p El PGSE debe ajustarse a los requisitos legales de participación y licenciamiento ambiental vigentes. Esto garantiza que la implementación del plan respete el principio de #[b equidad intergeneracional] y cuente con respaldo institucional.
            .col-md-7.col-lg-4
              img(src='@/assets/curso/Tema1/img14.png', alt='')
      
      
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/Tema1/bombillo.svg")
            h3.bg8.py-2.w-card-text.text-white Consolidación presupuestal y recursos para la implementación

      p La etapa final del diseño del PGSE consiste en integrar los aspectos financieros y operativos que garantizarán su ejecución.
      
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-8.mb-4
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Presupuesto consolidado")
              .col-md-12.mb-4.mb-md-0
                p Debe incluir:
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle
                    | Costos de inversión en equipos eficientes y sistemas renovables.
                  li
                    i.fas.fa-check-circle
                    | Costos operativos y de mantenimiento.
                  li
                    i.fas.fa-check-circle
                    | Estimación del beneficio económico asociado al ahorro energético.
                p Este componente completa el análisis de viabilidad económica desarrollado previamente en la aa2.
            
            .row(numero="2" titulo="Estimación y disponibilidad de recursos")
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Se detallan los recursos necesarios (humanos, financieros y logísticos) para cada actividad del plan de acción.
                p Además, se identifican las fuentes de financiación:
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle
                    | Capital propio.
                  li
                    i.fas.fa-check-circle
                    | Crédito.
                  li
                    i.fas.fa-check-circle
                    | Incentivos estatales o fondos para energías renovables y eficiencia energética.
                  p Esta consolidación permite demostrar de manera documentada la #[b factibilidad técnica, social, operativa y financiera del PGSE.]
        .col-lg-4.col-8.col-md-6
          img(src='@/assets/curso/Tema1/img15.png', alt='')          

          
     

































  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta.color-primario
  background-color: #004B72
.escala-grises .tabs-b__tab
  &.tabs-b__tab--active .tabs-b__tab__icon
    filter: grayscale(0)
    transition: all 0.2s ease-out
  .tabs-b__tab__icon
    filter: grayscale(1)
    transition: all 0.2s ease-out
</style>
