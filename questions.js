const penalties = [
  "🎤 ¡Demuestra el talento del equipo! Canten el coro de una canción famosa juntos en Teams durante 15 segundos.",
  "🤖 ¡Modo Inteligencia Artificial! Respondan la siguiente duda de admisiones hablando exactamente como un robot.",
  "📞 ¡Llamada exprés! Un integrante debe simular atender una llamada comercial muy entusiasta en 20 segundos.",
  "🤣 ¡Momento de comedia! Cuenten un chiste malo (o un 'chiste de papá') a todo el grupo.",
  "💃 ¡Celebración de victoria! Hagan un pase de baile o movimiento estrella de 10 segundos en cámara.",
  "🎶 ¡Jingle comercial! Creen una rima improvisada de 10 segundos sobre la Universidad San Marcos.",
  "🧘 ¡Cero estrés! Enciendan el micrófono y hagan que todos en la reunión respiren profundo 3 veces."
];

const questions = [
  // --- CULTURA GENERAL MUNDIAL ---
  {
    question: "🌍 [Cultura General] ¿Cuál es el río más largo del mundo?",
    options: ["Río Nilo", "Río Amazonas", "Río Misisipi", "Río Yangtsé"],
    answer: 1,
    explanation: "El río Amazonas es el más largo y caudaloso del planeta Tierra."
  },
  {
    question: "🎨 [Cultura General] ¿Quién pintó 'La Noche Estrellada'?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    answer: 1,
    explanation: "Vincent van Gogh creó esta pintura en 1889."
  },
  {
    question: "🏛️ [Cultura General] ¿En qué país se encuentra la maravilla del Taj Mahal?",
    options: ["Turquía", "Egipto", "India", "Tailandia"],
    answer: 2,
    explanation: "El Taj Mahal está ubicado en Agra, India."
  },
  {
    question: "🔬 [Cultura General] ¿Cuál es el elemento químico más abundante en la atmósfera terrestre?",
    options: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de Carbono"],
    answer: 2,
    explanation: "El nitrógeno compone aproximadamente el 78% del aire terrestre."
  },
  {
    question: "🌊 [Cultura General] ¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    answer: 2,
    explanation: "El Océano Pacífico ocupa más de la tercera parte de la Tierra."
  },
  {
    question: "🎬 [Cultura General] ¿Qué película ganó el primer Óscar a la Mejor Película de Animación?",
    options: ["El Rey León", "Shrek", "Toy Story", "Buscando a Nemo"],
    answer: 1,
    explanation: "Shrek ganó el primer Óscar en esta categoría en la gala de 2002."
  },

  // --- BASE DE CONOCIMIENTO USAM ---
  {
    question: "📄 [Admisiones] ¿Cuáles son los documentos mínimos requeridos para la admisión a un Bachillerato?",
    options: [
      "Título universitario, notas e historial laboral.",
      "Foto personal fondo blanco, foto legible del título de colegio y foto de cédula por ambos lados.",
      "Copia de cédula únicamente.",
      "Hoja de vida y certificación de idioma."
    ],
    answer: 1,
    explanation: "Requisitos de Bachillerato: foto personal fondo blanco, foto del título de colegio clara y foto de cédula por ambos lados."
  },
  {
    question: "🎓 [Admisiones] Un prospecto con licenciatura en Educación consulta por el MBA. ¿Qué aplica respecto a nivelatorios?",
    options: [
      "Exención total por ser profesional.",
      "Debe cursar obligatoriamente las 4 materias nivelatorias aprobadas por CONESUP.",
      "Solo requiere presentar examen de inglés.",
      "Hacer 1 nivelatorio de contabilidad."
    ],
    answer: 1,
    explanation: "Graduados de Educación, Artes, Salud o Derecho deben llevar las 4 materias nivelatorias."
  },
  {
    question: "⏰ [Admisiones] ¿En qué horario se imparten las materias con énfasis en Maestrías Presenciales?",
    options: [
      "Sábados presenciales.",
      "Miércoles de 6:00 p. m. a 10:00 p. m. sincrónico vía Teams (asistencia obligatoria).",
      "Viernes asincrónico.",
      "Domingos en la mañana."
    ],
    answer: 1,
    explanation: "Las materias de énfasis tienen asistencia obligatoria los miércoles de 6:00 p. m. a 10:00 p. m. por Teams."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el costo oficial de la Matrícula para Bachillerato y Licenciatura?",
    options: ["₡50.000", "₡70.350", "₡86.300", "₡156.000"],
    answer: 1,
    explanation: "El costo vigente de matrícula es de ₡70.350."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el precio regular por materia para programas de Maestría?",
    options: ["₡86.300", "₡120.000", "₡156.000", "₡210.000"],
    answer: 2,
    explanation: "El costo regular por materia de Maestría es de ₡156.000."
  },
  {
    question: "🌟 [Becas] ¿Qué promedio ponderado exige el reglamento para mantener una Beca de Excelencia Académica?",
    options: ["70%", "80%", "85%", "90%"],
    answer: 3,
    explanation: "Exige un promedio mínimo mantenido del 90%."
  },
  {
    question: "💻 [Plataformas] ¿Cuál es el LMS oficial usado en la USAM para desarrollo de materias virtuales?",
    options: ["Moodle", "Canvas", "Blackboard", "Google Classroom"],
    answer: 1,
    explanation: "La USAM opera sobre la plataforma Canvas."
  },
  {
    question: "📜 [Trámites] Si un estudiante solicita retiro/congelamiento de materias ANTES de iniciar lecciones, ¿qué costo aplica?",
    options: ["Multa del 30%", "No tiene ningún costo", "Pierde la matrícula", "₡25.990 administrativo"],
    answer: 1,
    explanation: "Trámites gestionados antes del inicio de lecciones no generan costo."
  }
];
