<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El plan de acción ambiental y de eficiencia energética se desarrolla a través de diversas etapas que permiten estructurar y ejecutar estrategias sostenibles. Inicia con un marco teórico que define las fases del proyecto y herramientas de planificación; luego se establecen objetivos SMART con enfoque en viabilidad económica y equidad. Posteriormente, se formulan medidas priorizadas para la prevención y reducción de impactos, seguido de un plan detallado de actividades con responsables y recursos. Se plantean metas de desempeño basadas en indicadores de eficiencia energética y finalmente se integra un proceso  de monitoreo, participación comunitaria y cumplimiento normativo para asegurar la sostenibilidad del proyecto.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El Plan de acción ambiental y de eficiencia energética se desarrolla mediante etapas que orientan la gestión sostenible del proyecto. Inicia con la definición del marco teórico y la planificación basada en herramientas de seguimiento. Luego se formulan objetivos SMART y se priorizan medidas según su impacto preventivo o correctivo. Posteriormente, se diseña un plan detallado con responsables, recursos y tiempos para la implementación de acciones. Se establecen metas de desempeño para evaluar la eficiencia y, finalmente, se realiza el monitoreo y articulación social y normativa que aseguran la viabilidad y continuidad del plan.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
