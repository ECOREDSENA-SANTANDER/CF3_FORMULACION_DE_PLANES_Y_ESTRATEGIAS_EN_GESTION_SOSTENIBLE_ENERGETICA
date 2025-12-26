<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Marco teórico y fases de la planificación estratégica
        
      .row.justify-content-center.mb-2
        .col-lg-2.mb-3
          img(src='@/assets/curso/Tema1/img01.svg', alt='')
        .col-lg-10
          p Este tema es fundamental, ya que establece las bases metodológicas para la formulación del #[b Plan de gestión sostenible energética (PGSE)]. El aprendiz debe comprender que la implementación de medidas de eficiencia energética no corresponde a acciones aisladas, sino a un proceso estructurado que requiere planificación formal para asegurar su efectividad, seguimiento y coherencia con los objetivos de sostenibilidad institucional.

      p El PGSE se desarrolla bajo un enfoque de gestión de proyectos y se estructura en cinco fases principales, derivadas del ciclo de vida de proyectos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
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
            
        .col-lg-4
          img(src='@/assets/curso/Tema1/img01.png', alt='')

      p Para gestionar adecuadamente la complejidad del PGSE, se requieren herramientas de planificación que faciliten la organización del trabajo:

      h3.bg1.p-2 Estructura de desglose del trabajo (EDT - Estructura de Desglose del Trabajo)
      p Permite dividir el objetivo general del PGSE en paquetes de trabajo específicos y controlables, facilitando la asignación de responsabilidades, la estimación de recursos y el orden lógico de ejecución.
      h5 Ejemplo sencillo aplicado a un PGSE
      p Objetivo general: implementar un sistema de energía solar en la empresa.
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

      h3.bg1.p-2 Diagrama de Gantt: 
      p Su uso es vital para visualizar la línea de tiempo del PGSE. Esta herramienta permite programar las actividades de mitigación y corrección, identificar la ruta crítica del proyecto y asegurar que la ejecución se mantenga dentro de los plazos establecidos.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right', alt='La tabla muestra un diagrama de Gantt con la programación de actividades para implementar un sistema solar fotovoltaico en cinco semanas. Se incluyen tres fases principales: estudio técnico, adquisición del sistema e instalación, cada una dividida en tareas específicas con tiempos estimados representados mediante barras de duración.')
        h5 Tabla 1.
        span  #[em Implementación de sistema solar fotovoltaico ]
      
      .tabla-b.color-acento-contenido.mb-4
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

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          img(src='@/assets/curso/Tema1/img02.png', alt='')
        .col-lg-8
          .row.mb-2 
            .col-lg-1.mb-3
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
        h2 1.1 Huella ecológica












































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
</style>
