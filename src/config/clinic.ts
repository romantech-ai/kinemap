export const clinic = {
  name: "Kinemap",
  logo: "/images/logo.png",
  tagline: "Tu fisioterapia de confianza en Ciudad Real",
  description: "Kinemap es tu clínica de fisioterapia en Ciudad Real con valoración de 5 estrellas y 66 reseñas. Especialistas en fisioterapia manual, tratamiento de cervicales y lumbares, suelo pélvico y atención para embarazadas. Nuestro equipo de profesionales te ofrece atención personalizada, flexibilidad para urgencias y un seguimiento continuo hasta tu completa recuperación.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "640 20 16 79",
  whatsapp: "+34640201679",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. María Auxiliadora, 19, 13500 Puertollano, Ciudad Real, España",
    city: "Ciudad Real",
    province: "Toledo",
    postalCode: "13500",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=782157530913477010&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Kinemap%20%4038.6871%2C-4.09954&z=16&output=embed",
  coordinates: {
    lat: 38.6871,
    lng: -4.09954
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–14:00, 16:00–21:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 66,
    url: "https://maps.google.com/?cid=782157530913477010&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Maria del Pilar Simarro Sánchez",
        rating: 5,
        text: "Estoy muy contenta con la clínica y en especial con mi fisio Adri, la recuperación está siendo lenta pero estoy en las mejores manos. Problemas de cervicales a raíz de un golpe en los karts. Dolores, inmovilidad. Contracturas, migrañas, tensión, problemas para dormir, para concentrarme, mareos, todo va reduciéndose poco a poco.",
        date: "Hace 4 semanas"
      },
      {
        author: "Nerea Fernández Espada",
        rating: 5,
        text: "Le pongo 10/10. Fui de un día para otro porque me hicieron un hueco sin pensarlo, y se lo agradezco muchísimo. Estuve con Adri que se nota que le encanta su trabajo y eso marca la diferencia: es un gran profesional, atento, cuidadoso y siempre explicando todo con claridad. Salí como nueva. Totalmente recomendable.",
        date: "Hace 1 mes"
      },
      {
        author: "Carmen Garcia Dominguez",
        rating: 5,
        text: "Solo tengo buenas palabras. Es una suerte contar con un equipo de profesionales. Buen trabajo, amabilidad, resultados eficaces al 100% . Destacar que cuando he tenido alguna urgencia de lesión o pinzamiento han sacado un hueco para atenderme. Agradecida.",
        date: "Hace 3 meses"
      },
      {
        author: "Jana Cabrera",
        rating: 5,
        text: "Son un equipo de muy buenos profesionales. Estaba muy pillada de la zona lumbar y salí como nueva! Además de revisar que la rotura del dedo haya quedado del todo recuperada.\nMuchas gracias en especial a María Pérez por el trato, la adoro!",
        date: "Hace 6 meses"
      },
      {
        author: "joana muñoz nuñez",
        rating: 5,
        text: "Super contenta con las clases reducidas específicas para embarazadas Elena nuestra fisio es una gran profesional formada especificamente en suelo pelvico y tratamiento para embarazadas siempre pendiente de ti clases super personalizadas",
        date: "Hace 3 semanas"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas para tratar contracturas, tensión muscular y problemas de movilidad. Nuestros fisioterapeutas aplican métodos personalizados que han demostrado resultados eficaces en el alivio del dolor y la recuperación funcional.",
      benefits: [
        "Alivio efectivo de contracturas y tensión muscular",
        "Mejora de la movilidad y flexibilidad articular",
        "Tratamiento personalizado según tu lesión"
      ],
      icon: "Hand"
    },
    {
      id: "tratamiento-cervicales",
      name: "Tratamiento de Cervicales",
      description: "Especialistas en problemas cervicales derivados de golpes, malas posturas o estrés. Tratamos dolores, inmovilidad, migrañas, mareos y problemas de concentración relacionados con lesiones cervicales con seguimiento continuo.",
      benefits: [
        "Reducción progresiva de dolores y migrañas",
        "Recuperación de la movilidad cervical",
        "Mejora del sueño y la concentración"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-lumbar",
      name: "Tratamiento Lumbar",
      description: "Atención especializada para problemas de zona lumbar, pinzamientos y dolor de espalda baja. Aplicamos técnicas efectivas que te permitirán recuperar tu movilidad y volver a tu vida normal sin limitaciones.",
      benefits: [
        "Alivio inmediato de pinzamientos lumbares",
        "Recuperación completa de la movilidad",
        "Prevención de futuras lesiones"
      ],
      icon: "Target"
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Tratamiento especializado del suelo pélvico con fisioterapeutas formadas específicamente en esta área. Atención para embarazadas con clases reducidas y personalizadas que se adaptan a cada etapa de tu embarazo.",
      benefits: [
        "Profesionales especializadas en suelo pélvico",
        "Clases reducidas y personalizadas",
        "Preparación específica para embarazadas"
      ],
      icon: "Heart"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación de lesiones deportivas y rehabilitación de traumatismos. Tratamos desde roturas de dedos hasta lesiones más complejas, asegurando una recuperación completa para que vuelvas a tu actividad física.",
      benefits: [
        "Recuperación completa de lesiones deportivas",
        "Seguimiento hasta la vuelta a la actividad",
        "Prevención de recaídas"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación adaptados a tu lesión específica con seguimiento continuo. Desde la primera sesión hasta tu recuperación total, estaremos contigo en cada paso del proceso.",
      benefits: [
        "Plan de tratamiento individualizado",
        "Seguimiento continuo de tu evolución",
        "Resultados eficaces al 100%"
      ],
      icon: "Activity"
    },
    {
      id: "atencion-urgencias",
      name: "Atención de Urgencias",
      description: "Entendemos que las lesiones no avisan. Por eso ofrecemos flexibilidad horaria para atender urgencias, sacando hueco cuando más lo necesitas. Tu dolor no puede esperar y nosotros estaremos ahí.",
      benefits: [
        "Atención rápida en casos urgentes",
        "Flexibilidad para sacarte hueco",
        "Respuesta inmediata a tu necesidad"
      ],
      icon: "Zap"
    },
    {
      id: "tratamiento-migranas",
      name: "Tratamiento de Migrañas",
      description: "Abordaje fisioterapéutico de migrañas y dolores de cabeza tensionales relacionados con problemas cervicales. Tratamos la causa del problema para reducir la frecuencia e intensidad de tus migrañas.",
      benefits: [
        "Reducción de frecuencia de migrañas",
        "Tratamiento de la causa raíz",
        "Mejora de la calidad de vida"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 640 20 16 79 o escríbenos por WhatsApp. Si tienes una urgencia, haremos lo posible por sacarte hueco el mismo día porque entendemos que tu dolor no puede esperar."
    },
    {
      step: 2,
      title: "Valoración Personalizada",
      description: "En tu primera visita realizaremos una evaluación completa de tu lesión o dolencia. Explicaremos con claridad qué te ocurre y diseñaremos un plan de tratamiento adaptado a tu situación específica."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Aplicamos las técnicas más efectivas para tu caso: fisioterapia manual, tratamiento cervical, lumbar o el servicio que necesites. Cada sesión está enfocada en tu recuperación progresiva con atención cuidadosa."
    },
    {
      step: 4,
      title: "Seguimiento Continuo",
      description: "No te dejamos solo en el proceso. Hacemos seguimiento continuo de tu evolución hasta tu completa recuperación, ajustando el tratamiento según tus progresos. Estaremos contigo hasta que salgas como nuevo."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5 Estrellas",
      description: "Contamos con una puntuación perfecta de 5 estrellas en Google respaldada por 66 reseñas reales de pacientes satisfechos. Nuestros resultados hablan por sí solos: recuperaciones efectivas, atención profesional y un equipo que realmente se preocupa por tu bienestar.",
      icon: "Award"
    },
    {
      title: "Atención de Urgencias",
      description: "Sabemos que el dolor no avisa. Por eso ofrecemos flexibilidad horaria y hacemos lo posible por atenderte cuando más lo necesitas. Si tienes una urgencia, sacamos hueco para que no tengas que esperar días con tu lesión o dolor.",
      icon: "Clock"
    },
    {
      title: "Equipo Especializado",
      description: "Profesionales formados específicamente en cada área: fisioterapia manual, tratamiento cervical y lumbar, suelo pélvico para embarazadas y rehabilitación deportiva. Cada miembro del equipo ama su trabajo y eso marca la diferencia en tu recuperación.",
      icon: "Users"
    },
    {
      title: "Seguimiento Personalizado",
      description: "No te dejamos solo en el proceso. Desde la primera valoración hasta tu completa recuperación, hacemos seguimiento continuo de tu evolución. Explicamos todo con claridad, ajustamos el tratamiento según tus progresos y estamos contigo en cada paso.",
      icon: "Target"
    }
  ],
  team: [
    {
      name: "Adri",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Kinemap nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "María Pérez",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Kinemap nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Elena",
      role: "Fisioterapeuta Especialista en Suelo Pélvico",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Kinemap nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Kinemap - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "Kinemap - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Cómo puedo pedir cita en Kinemap?",
      answer: "Puedes solicitar tu cita llamando directamente al 640 20 16 79 o escribiéndonos por WhatsApp al mismo número. Si tienes una urgencia o necesitas atención rápida, haremos todo lo posible por sacarte hueco lo antes posible, incluso el mismo día si es necesario."
    },
    {
      question: "¿Qué tipo de lesiones tratáis en Kinemap?",
      answer: "En Kinemap tratamos una amplia variedad de lesiones: problemas cervicales y lumbares, contracturas, pinzamientos, lesiones deportivas, rehabilitación post-traumática, migrañas tensionales y disfunciones de suelo pélvico. Nuestro equipo está especializado en fisioterapia manual y tratamientos personalizados para cada tipo de dolencia."
    },
    {
      question: "¿Ofrecéis tratamiento especializado para embarazadas?",
      answer: "Sí, contamos con fisioterapeutas especializadas en suelo pélvico y tratamiento para embarazadas. Ofrecemos clases reducidas y personalizadas que se adaptan a cada etapa del embarazo, siempre con profesionales formadas específicamente en esta área y pendientes de tus necesidades."
    },
    {
      question: "¿Cuánto dura el proceso de recuperación?",
      answer: "La duración depende del tipo y gravedad de tu lesión. Algunos pacientes notan mejora desde la primera sesión, mientras que otros requieren un proceso más gradual. En Kinemap hacemos un seguimiento continuo y te explicamos con claridad los tiempos estimados. Lo importante es que estaremos contigo hasta tu completa recuperación."
    },
    {
      question: "¿Podéis atenderme si tengo una urgencia?",
      answer: "Absolutamente. En Kinemap entendemos que las lesiones y el dolor agudo no pueden esperar. Ofrecemos flexibilidad horaria y hacemos todo lo posible por sacar hueco cuando tienes una urgencia, ya sea un pinzamiento lumbar, una lesión deportiva o cualquier dolencia que requiera atención inmediata."
    },
    {
      question: "¿Qué diferencia a Kinemap de otras clínicas?",
      answer: "Kinemap cuenta con una valoración de 5 estrellas en Google con 66 reseñas de pacientes reales. Nuestros clientes destacan la profesionalidad del equipo, la atención personalizada, los resultados eficaces y sobre todo la flexibilidad para atender urgencias. Además, nos tomamos el tiempo de explicar todo con claridad y hacer seguimiento hasta tu recuperación completa."
    },
    {
      question: "¿Dónde está ubicada la clínica Kinemap?",
      answer: "Kinemap está ubicada en Ciudad Real, con servicios también en Toledo. Puedes contactarnos en el 640 20 16 79 para conocer nuestra dirección exacta y horarios de atención. Estaremos encantados de recibirte y comenzar tu proceso de recuperación."
    },
    {
      question: "¿Explicáis en qué consiste cada tratamiento?",
      answer: "Por supuesto. En Kinemap nos caracterizamos por explicar todo con claridad. Desde la primera valoración te contaremos qué te ocurre, qué tratamiento vamos a aplicar y por qué. Queremos que entiendas tu proceso de recuperación y te sientas seguro en cada paso del tratamiento."
    }
  ],
  seo: {
    titleTemplate: "%s | Kinemap",
    defaultTitle: "Kinemap - Fisioterapia en Ciudad Real | 5★ en Google",
    defaultDescription: "Clínica de fisioterapia en Ciudad Real con 5 estrellas. Especialistas en tratamiento cervical, lumbar, suelo pélvico y lesiones deportivas. Atención de urgencias. ☎ 640 20 16 79",
    keywords: [
      "fisioterapia Ciudad Real",
      "fisioterapeuta Ciudad Real",
      "Kinemap",
      "tratamiento cervicales Ciudad Real",
      "tratamiento lumbar Ciudad Real",
      "suelo pélvico Ciudad Real",
      "fisioterapia embarazadas Ciudad Real",
      "fisioterapia deportiva Ciudad Real",
      "clínica fisioterapia Ciudad Real",
      "fisioterapia urgencias Ciudad Real",
      "rehabilitación Ciudad Real",
      "fisioterapia Toledo"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Kinemap",
    cif: "",
    registeredAddress: "C. María Auxiliadora, 19, 13500 Puertollano, Ciudad Real, España, Ciudad Real, Toledo"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Ciudad Real"
  ],
  heroDescription: "En Kinemap encontrarás un equipo de fisioterapeutas profesionales comprometidos con tu recuperación. Tratamos desde lesiones cervicales y lumbares hasta rehabilitación deportiva y suelo pélvico. Atendemos urgencias con flexibilidad horaria porque tu bienestar no puede esperar.",
  specialty: "Fisioterapia Manual Especializada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita de valoración y comienza tu recuperación con un equipo que ha ayudado a más de 66 pacientes satisfechos. Atendemos urgencias con flexibilidad horaria.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
