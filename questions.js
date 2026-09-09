const penalties = [
  "🎤 ¡Demuestra tu talento! Canta el coro de tu canción favorita frente al micrófono durante 15 segundos.",
  "🤖 ¡Modo Inteligencia Artificial! Explica el proceso de matrícula hablando exactamente como un robot.",
  "📞 ¡Llamada relámpago! Haz una imitación rápida de cómo atenderías a un cliente muy acelerado en 20 segundos.",
  "🤣 ¡Momento de comedia! Cuenta un chiste malo (o un 'chiste de papá') a todo el equipo en Teams.",
  "💃 ¡Activa la energía! Haz un baile de victoria de 10 segundos frente a la cámara (o describe tu movimiento estrella).",
  "🎶 ¡Creador de marca! Invéntate un jingle o rima pegajosa de 10 segundos improvisada para la Universidad San Marcos.",
  "🤫 ¡Misterio absoluto! Trata de decir 'Universidad San Marcos es la mejor opción' sin mover los labios.",
  "🧘 ¡Cero estrés! Enciende el micrófono y haz que todo el equipo en Teams respire profundo 3 veces contigo."
];

const questions = [
  // --- CULTURA GENERAL MUNDIAL ---
  {
    question: "🌍 [Cultura General] ¿Cuál es el río más largo del mundo?",
    options: ["Río Nilo", "Río Amazonas", "Río Misisipi", "Río Yangtsé"],
    answer: 1,
    explanation: "El río Amazonas es el más largo y caudaloso del mundo."
  },
  {
    question: "🎨 [Cultura General] ¿Quién pintó 'La Noche Estrellada'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    answer: 1,
    explanation: "Vincent van Gogh creó esta pintura icónica en 1889."
  },
  {
    question: "🏛️ [Cultura General] ¿En qué país se encuentra el Taj Mahal?",
    options: ["Turquía", "Egipto", "India", "Tailandia"],
    answer: 2,
    explanation: "El Taj Mahal está ubicado en Agra, India."
  },
  {
    question: "🔬 [Cultura General] ¿Cuál es el elemento químico más abundante en la atmósfera de la Tierra?",
    options: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de Carbono"],
    answer: 2,
    explanation: "El nitrógeno compone cerca del 78% del aire terrestre."
  },
  {
    question: "🌊 [Cultura General] ¿Cuál es el océano más grande del planeta?",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    answer: 2,
    explanation: "El Océano Pacífico ocupa más de la tercera parte de la Tierra."
  },
  {
    question: "🎬 [Cultura General] ¿Qué película ganó el primer Óscar a la Mejor Película de Animación de la historia?",
    options: ["El Rey León", "Shrek", "Toy Story", "Buscando a Nemo"],
    answer: 1,
    explanation: "Shrek ganó el primer Óscar en esta categoría en la gala de 2002."
  },

  // --- ADMISIONES & BASE DE CONOCIMIENTOS USAM ---
  {
    question: "📄 [Admisiones] ¿Cuáles son los documentos mínimos requeridos para la admisión a un programa de Bachillerato?",
    options: [
      "Título de universidad, certificación de notas y cartas de recomendación.",
      "Foto personal fondo blanco, foto legible del título de colegio y foto de cédula por ambos lados.",
      "Copia de cédula únicamente.",
      "Hoja de vida y certificación laboral."
    ],
    answer: 1,
    explanation: "Requisitos de Bachillerato: foto personal fondo blanco, foto del título de colegio clara y foto de cédula por ambos lados."
  },
  {
    question: "🎓 [Admisiones] Un prospecto con licenciatura en Educación consulta por el MBA. ¿Qué aplica con los cursos nivelatorios?",
    options: [
      "Exención total por ser profesional.",
      "Debe cursar obligatoriamente los 4 cursos nivelatorios por provenir de educación.",
      "Solo requiere presentar examen de inglés.",
      "Solo hace 1 nivelatorio de contabilidad."
    ],
    answer: 1,
    explanation: "Graduados de carreras en Educación, Artes, Salud o Derecho deben llevar los 4 nivelatorios aprobados por CONESUP."
  },
  {
    question: "⏰ [Admisiones] ¿En qué horario y modalidad se imparten las materias con énfasis en Maestrías Presenciales?",
    options: [
      "Sábados presenciales en San José.",
      "Miércoles de 6:00 p. m. a 10:00 p. m. sincrónico vía Teams (asistencia obligatoria).",
      "Viernes por la noche asincrónico.",
      "Domingos en la mañana."
    ],
    answer: 1,
    explanation: "Las materias de énfasis se imparten los miércoles de 6:00 p.m. a 10:00 p.m. sincrónicamente por Teams."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el costo oficial de la Matrícula para Bachillerato y Licenciatura?",
    options: ["₡50.000", "₡70.350", "₡86.300", "₡156.000"],
    answer: 1,
    explanation: "El monto oficial vigente de matrícula es ₡70.350."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el costo regular por materia para programas de Maestría?",
    options: ["₡86.300", "₡120.000", "₡156.000", "₡210.000"],
    answer: 2,
    explanation: "El precio regular por materia de Maestría es ₡156.000."
  },
  {
    question: "🌟 [Becas] ¿Qué promedio ponderado exige el reglamento para mantener una Beca de Excelencia Académica?",
    options: ["70%", "80%", "85%", "90%"],
    answer: 3,
    explanation: "Las becas de Excelencia Académica requieren un promedio mínimo mantenido de 90%."
  },
  {
    question: "💻 [Plataformas] ¿Cuál es la plataforma LMS oficial usada por la USAM para el desarrollo de materias y aulas virtuales?",
    options: ["Moodle", "Canvas", "Blackboard", "Google Classroom"],
    answer: 1,
    explanation: "La USAM utiliza la plataforma educativa Canvas."
  },
  {
    question: "📜 [Trámites] Si un estudiante solicita retiro o congelamiento de materias ANTES de iniciar lecciones, ¿qué costo tiene?",
    options: ["Pago de una multa del 30%", "No tiene ningún costo", "Pierde la matrícula", "₡25.990 por gasto administrativo"],
    answer: 1,
    explanation: "Los cambios o retiros gestionados antes del inicio de lecciones no generan cobros."
  }
];

