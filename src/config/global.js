export default {
  global: {
    Name: 'Plan de acción ambiental y de eficiencia energética',
    Description:
      'Es una guía que organiza estrategias para reducir impactos ambientales y optimizar el uso de energía en una organización. Establece metas, acciones y criterios de seguimiento para promover el ahorro energético, el uso responsable de los recursos y el cumplimiento de la normativa ambiental, impulsando prácticas sostenibles y mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco teórico y fases de la planificación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición estratégica y objetivos del proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Diseño de la visión y misión del Plan de Gestión de Seguridad Energética (PGSE)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Formulación de medidas: tipos y priorización',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Desarrollo de actividades y plan de acción detallado',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Metas de desempeño y viabilidad ambiental',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA3_22230062_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },

  glosario: [
    {
      termino: 'Adaptación climática',
      significado:
        'Estrategias que permiten a comunidades y ecosistemas ajustarse a los efectos actuales o futuros del cambio climático.',
    },
    {
      termino: 'Biocapacidad',
      significado:
        'Capacidad de los ecosistemas para regenerar recursos naturales y absorber los residuos generados por la actividad humana.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de especies de flora, fauna y microorganismos que coexisten en un ecosistema y mantienen su equilibrio.',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'Conjunto de etapas de un producto desde la obtención de materias primas hasta su disposición final.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Modelo que integra lo social, económico y ambiental para asegurar recursos presentes y futuros.',
    },
    {
      termino: 'Disposición final',
      significado:
        'Etapa donde los residuos son gestionados mediante reciclaje, tratamiento o eliminación definitiva.',
    },
    {
      termino: 'Economía circular',
      significado:
        'Modelo que busca reducir residuos y mantener materiales y productos en uso mediante reutilización y reciclaje.',
    },
    {
      termino: 'Economía lineal',
      significado:
        'Sistema tradicional basado en extraer, producir, consumir y desechar, con flujo unidireccional de recursos.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'Uso responsable y optimizado de la energía para obtener el mismo resultado con menor consumo.',
    },
    {
      termino: 'Emisiones de GEI',
      significado:
        'Liberación de gases de efecto invernadero como CO₂ y CH₄ que contribuyen al calentamiento global.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'Indicador que mide el consumo de recursos naturales respecto a la capacidad del planeta para regenerarlos.',
    },
    {
      termino: 'Impactos ambientales',
      significado:
        'Consecuencias de las actividades humanas sobre el entorno natural.',
    },
    {
      termino: 'Mitigación',
      significado:
        'Acciones orientadas a reducir o evitar emisiones y efectos del cambio climático.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'Proceso mediante el cual los residuos se transforman nuevamente en materiales útiles.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Equilibrio entre economía, sociedad y medio ambiente para asegurar bienestar presente y futuro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión Mundial sobre Medio Ambiente y Desarrollo (1987). Nuestro futuro común (Informe Brundtland)',
      link: '',
    },
    {
      referencia:
        'Global Footprint Network. Huella Ecológica: Conceptos, Medición y Aplicaciones',
      link: '',
    },
    {
      referencia:
        'Ellen MacArthur Foundation (2017). Introducción a la economía circular',
      link: '',
    },
    {
      referencia:
        'Agencia Internacional de la Energía (IEA) (2023). World Energy Outlook 2023',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS) de Colombia (2019). Guía de evaluación ambiental estratégica',
      link: '',
    },
    {
      referencia:
        'UNEP & GRID-Arendal (2018). Measuring Progress: Water-related ecosystems and the SDGs',
      link: '',
    },
    {
      referencia:
        'U.S. Department of Energy (DOE). Federal Energy Management Program (FEMP) (2022). Advanced Energy Performance Indicator (EnPI) Tool Training',
      link: '',
    },
    {
      referencia:
        'Foro de Economía Digital Business School (2025). Objetivos SMART, definición y ejemplos prácticos',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Milena Cristancho Cruz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
