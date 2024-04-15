
const inicio=
  {
    title: "Inicio",
    classChange: "sub-menu-down",
    content: [
      { title: "Entrenamiento", to: "/home-2" },
      { title: "BodyBuilding", to: "/home-3" },
    ],
  };

  const otras= {
    title: "Otras",
    classChange: "sub-menu-down",
    content: [
      {
        title: "Acerca de nosotros",
        to: "/about-us",
      },
      {
        title: "Equipo",
        to: "/team",
      },
      {
        title: "Preguntas",
        to: "/faq",
      },
      // {
      //   title: "Precios",
      //   to: "/pricing",
      // },
      // {
      //   title: "Calculadora de precios",
      //   to: "/weight-calculator",
      // },
      // {
      //   title: "Citas",
      //   to: "/appointment",
      // },
      // {
      //   title: "Cronograma",
      //   to: "/schedule",
      // },
      {
        title: "Proximo evento",
        to: "/coming-soon",
      },
      // {
      //   title: "Error 404",
      //   to: "/error-404",
      // },
      // {
      //   title: "Bajo de mantenimiento",
      //   to: "/under-maintenance",
      // },
      // {
      //   title: "Asociacion con terceros",
      //   to: "/asociacion-terceros",
      // },
    ],
  };
  const calendario=
    {
      title: "Calendario",
      classChange: "sub-menu-down",
      content: [
        {
          title: "Cronograma",
          to: "/schedule",
        },
        {
          title: "Proximo evento",
          to: "/coming-soon",
        }
      ]
  
    };

 const   servicios= {
  title: "Servicios",
  classChange: "sub-menu-down",
  content: [
    {
      title: "Servicios",
      to: "/services"
    }
  ],
};


const asociados=

{
  title: "Asociados",
  classChange: "sub-menu-down",
  content: [
    { title: "Administrar seguimiento", to: "/AdministrarSeguimiento" },
    {
      title: "Registro de productos y servicios",
      to: "/product-services",
    },
    {
      title: "Cerrar session",
      to: "/close-session",
    }
  ],

};
const sugerencias=
{
  title: "Sugerencias",
  classChange: "sub-menu-down",
  content: [
    {
      title: "Tus recomendaciones",
      to: "/recomendaciones",
    },
    {
      title: "Tus planes  alimentarios, deportivos",
      to: "/recomendaciones-personales"
    },
    {
      title: "Seguimientos",
      to: "/seguimientos",
    }

  ]
};


const contactanos={
  title: "Contactanos",
  to: "/contact-us",
};
const miPerfil=
  {
    title: "Mi perfil",
    classChange: "sub-menu-down",
    content: [
      {
        title: "Perfil de usuario",
        to: "/user-profile",
      },
      
      {
        title: "Tu compras",
        to: "/carrito-compras",
      },
      {
        title: "Cerrar session",
        to: "/close-session",
      }
      
    ]
  }




export const MenuListUsuario = [
  inicio,
  otras,
  calendario,
  servicios,
  sugerencias,
  contactanos,
  miPerfil,
];
export const MenuListAsociado = [
  inicio,
  otras,
  asociados,
  contactanos
];

export const MenuListInvitado = [
  inicio,
  otras,
  calendario,
  contactanos
];