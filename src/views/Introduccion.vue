<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-1.col-3.col-md-2.mb-3
        img(src='@/assets/curso/portada/img01.svg', alt='')
      .col-lg-11
        p El presente componente formativo brinda al aprendiz las bases metodológicas para evaluar soluciones energéticas de forma integral, aplicando los principios de sostenibilidad desde una perspectiva técnica, económica y ambiental. Su estructura facilita la identificación y cuantificación de  impactos ambientales, el análisis de eficiencia energética y la valoración económica de tecnologías, además del estudio del potencial de las energías renovables según el contexto geográfico.
      .col-lg-12
        p La apropiación de estos contenidos permitirá elaborar diagnósticos sólidos como insumo para el Plan de Gestión Sostenible Energética (PGSE), fortaleciendo la capacidad del aprendiz para tomar decisiones informadas que contribuyan a la reducción de la huella ecológica y al impulso de una transición energética responsable.
    
    .row.justify-content-center.align-items-center(data-aos="zoom-in-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
