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
      title: 'Tu Giffy',
      img: {
        webp:'/assets/projects/tu-giffy.webp', 
        alt:'Web: El Tente'
      }, 
      description: {
        text: 'Web buscador de gifs con register/login, función de añadir favoritos, clasificar por edad y revisar tendencias. Para esto me he servido de la API de Giphy. Algunas dependencias: React Helmet, Formik, Wouter.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.react,
          ICONS.fire,
        ]
      },
      url: {
        github: 'https://github.com/rogel-matias/proyect-giffy',
        deploy: 'https://tu-giffy.vercel.app/'
      }
    },
    {
      id: 2,
      title: 'El Tente',
      img: {
        webp:'/assets/projects/el-tente.webp', 
        alt:'Web: El Tente'
      },
      description: {
        text: 'Mi primer proyecto profesional para un cliente dedicado a una empresa de branding, fotografía, diseño y video. Contiene formulario manejado con Formik y enviado partir del servicio Email JS, React Helmet, Toastify, etc.',
        icons: [
          ICONS.html,
          ICONS.sass,
          ICONS.react,
        ]
      },
      url: {
        deploy: 'www.eltente.com'
      }
    },
    {
      id: 3,
      title: 'Tu Tabaco',
      img: {
        webp:'/assets/projects/tu-tabaco.webp', 
        alt:'Web: Tu Tabaco'
      },
      description: {
        text: 'E-commerce tabaquería estilado con la librería Tailwind CSS. Contiene manejo de base de datos a partir de Firebase, carrito de compras, clasificación de mercadería, manejo de stock y más.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.react,
          ICONS.fire,
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
        alt:'Web: Open Drink Store'
      },
      description: {
        text: 'E-commerce de bebidas realizado con HTML, CSS, Javascript Vanilla y LocalStorage para el guardado de datos. Contiene carrito de compras, posibilidad de eliminar productos del mismo, manejo de stock y demás característica.',
        icons: [
          ICONS.html,
          ICONS.css,
          ICONS.react,
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
        alt:'Web: Joyeria Gold'
      }, 
      description: {
        text: 'Web estática de tienda de joyerías realizada con HTML y SASS. Fué mi primer proyecto como developer donde entendí que comenzaba la pasión.',
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
  ]
}
