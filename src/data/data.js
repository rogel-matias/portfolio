const ICONS = {
  javascript: {
    svg: '/assets/skills/javascript.svg',
    alt: 'Javascript'
  },
  react: {
    svg: '/assets/skills/react.svg',
    alt: 'React'
  },
  sass: {
    svg: '/assets/skills/sass.svg',
    alt: 'SASS'
  },
  html: {
    svg: '/assets/skills/html5.svg',
    alt: 'Html5'
  },
  css: {
    svg: '/assets/skills/css3.svg',
    alt: 'Css3'
  },
  bootstrap: {
    svg: '/assets/skills/bootstrap.svg',
    alt: 'Bootstrap'
  },
  typescript: {
    svg: '/assets/skills/typescript.svg',
    alt: 'Typescript'
  },
  tailwind: {
    svg: '/assets/skills/tailwind.svg',
    alt: 'Tailwind CSS'
  },
  firebase: {
    svg: '/assets/skills/firebase.svg',
    alt: 'Firebase'
  },
  npm: {
    svg: '/assets/skills/npm.svg',
    alt: 'NPM'
  },
  git: {
    svg: '/assets/skills/git.svg',
    alt: 'Git'
  },
}

export const data = {
  projects: [
    {
      id: 1,
      title: 'El Tente',
      img: {
        webp:'/assets/projects/el-tente.webp', 
        alt:'El Tente'
      },
      description: {
        text: 'Proyecto real para cliente dedicado a empresa de branding, fotografía, diseño y video. Se utilió Formik para realizar un formulario, con servicio de envio de Email JS.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.sass,
          ICONS.javascript,
          ICONS.react,
        ]
      },
      url: {
        github: undefined,
        deploy: 'www.eltente.com'
      }
    },
    {
      id: 2,
      title: 'Tu Giffy',
      img: {
        webp:'/assets/projects/tu-giffy.webp', 
        alt:'Giffy App'
      }, 
      description: {
        text: 'Buscador de gifs con register/login, posibilidad de añadir favoritos, clasificar por edad y revisar tendencias. Me he servido de la API de Giphy para este proyecto.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.javascript,
          ICONS.react,
          ICONS.firebase,
        ]
      },
      url: {
        github: 'https://github.com/rogel-matias/proyect-giffy',
        deploy: 'https://tu-giffy.vercel.app/'
      }
    },
    {
      id: 3,
      title: 'Tu Tabaco',
      img: {
        webp:'/assets/projects/tu-tabaco.webp', 
        alt:'Tu Tabaco | Ecommerce'
      },
      description: {
        text: 'E-commerce Tabaquería. Contiene manejo de base de datos a partir de Firebase, carrito de compras, clasificación de mercadería, manejo de stock y más.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.tailwind,
          ICONS.react,
          ICONS.firebase,
        ]
      },
      url: {
        github: 'https://github.com/rogel-matias/ProyectoTuTabaco',
        deploy: 'https://proyecto-tu-tabaco.vercel.app/'
      }
    },
    {
      id: 4,
      title: 'Open Drink Store',
      img: {
        webp:'/assets/projects/open-drink-store.webp', 
        alt:'Open Drink Store | Ecommerce'
      },
      description: {
        text: 'E-commerce de bebidas simple, utilizando LocalStorage para el guardado de datos. Contiene carrito de compras, posibilidad de eliminar productos del mismo y manejo de stock.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.javascript,
        ]
      },
      url: {
        github: 'https://github.com/rogel-matias/open-drink-store',
        deploy: 'https://rogel-matias.github.io/open-drink-store/'
      }
    },
    {
      id: 5,
      title: 'Joyeria Gold',
      img: {
        webp:'/assets/projects/joyeria-gold.webp',
        alt:'Joyeria Gold'
      }, 
      description: {
        text: 'Web estática. Tienda de joyerías realizada con HTML y SASS. Fué mi primer proyecto como desarrollador y es importante para mi ya que con el comprendí que comenzaba mi pasión.',
        icons: [
          ICONS.html,
          ICONS.sass,
          ICONS.bootstrap,
        ]
      },
      url: {
        github: 'https://github.com/rogel-matias/joyeria-gold',
        deploy: 'https://rogel-matias.github.io/joyeria-gold/'
      }
    },
  ],
  skills: [
    ICONS.html,
    ICONS.css,
    ICONS.javascript,
    ICONS.typescript,
    ICONS.react,
    ICONS.npm,
    ICONS.git,
    ICONS.tailwind,
    ICONS.bootstrap,
    ICONS.firebase
  ],
  certificates: [
    '/assets/certificates/carrera-frontend.png',
    '/assets/certificates/react-js.png',
    '/assets/certificates/javascript.png',
    '/assets/certificates/desarrollo-web.png',
    '/assets/certificates/diseño-uxui.png',
    '/assets/certificates/reparacion-pc.png',
    '/assets/certificates/electronica-basica.png',
    '/assets/certificates/marketing.png',
  ]
}
