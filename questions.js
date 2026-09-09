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
    explanation: "Vincent van Gogh creó esta famosa obra en junio de 1889."
  },
  {
    question: "🏛️ [Cultura General] ¿En qué país se encuentra la maravilla moderna del Taj Mahal?",
    options: ["Turquía", "Egipto", "India", "Tailandia"],
    answer: 2,
    explanation: "El Taj Mahal está ubicado en Agra, India."
  },
  {
    question: "🔬 [Cultura General] ¿Cuál es el elemento químico más abundante en la atmósfera terrestre?",
    options: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de Carbono"],
    answer: 2,
    explanation: "El nitrógeno compone aproximadamente el 78% de nuestra atmósfera."
  },
  {
    question: "🌊 [Cultura General] ¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
    answer: 2,
    explanation: "El Océano Pacífico cubre más del 30% de la superficie del planeta."
  },

  // --- ADMISIONES & REQUISITOS (USAM) ---
  {
    question: "📄 [Admisiones] ¿Cuáles son los documentos requeridos para la admisión a un programa de Bachillerato?",
    options: [
      "Título universitario, certificación de notas y cartas laborales.",
      "Foto personal fondo blanco, foto legible del título de colegio y foto de cédula por ambos lados.",
      "Copia de cédula únicamente.",
      "Hoja de vida y prueba de inglés."
    ],
    answer: 1,
    explanation: "Requisitos de Bachillerato: foto personal fondo blanco, foto legible del título de colegio y foto de la cédula por ambos lados."
  },
  {
    question: "🎓 [Admisiones] Un prospecto con título universitario en Educación desea ingresar al MBA. ¿Qué aplica respecto a nivelatorios?",
    options: [
      "Está exento por tener título universitario.",
      "Debe cursar obligatoriamente las 4 materias nivelatorias aprobadas por CONESUP.",
      "Solo cursa nivelatorios si tiene promedio menor a 80.",
      "Debe hacer tesis en lugar de nivelatorios."
    ],
    answer: 1,
    explanation: "Estudiantes graduados de carreras en Educación, Artes, Derecho o Salud deben cursar las 4 materias nivelatorias para el MBA."
  },
  {
    question: "⏰ [Admisiones] ¿En qué horario y modalidad se imparten las materias con énfasis en Maestrías Presenciales?",
    options: [
      "Sábados presenciales de 8:00 am a 12:00 pm.",
      "Miércoles de 6:00 p. m. a 10:00 p. m. con conexión sincrónica obligatoria vía Teams.",
      "Completamente asincrónicas en Canvas sin horario fijo.",
      "Domingos en la sede central."
    ],
    answer: 1,
    explanation: "Las materias con énfasis tienen asistencia obligatoria los miércoles de 6:00 p. m. a 10:00 p. m. mediante Teams."
  },
  {
    question: "📅 [Admisiones] ¿Quiénes pueden matricular en el 'Primer Cuatrimestre Intermedio' de la modalidad virtual?",
    options: [
      "Cualquier estudiante regular que deba materias.",
      "Exclusivamente estudiantes de primer ingreso en modalidad virtual.",
      "Estudiantes de posgrado unicamente.",
      "Docentes y administrativos."
    ],
    answer: 1,
    explanation: "El primer cuatrimestre intermedio es exclusivo para estudiantes de primer ingreso en modalidad virtual."
  },

  // --- ARANCELES & BECAS (USAM) ---
  {
    question: "💰 [Aranceles] ¿Cuál es el costo oficial de la Matrícula para Bachillerato y Licenciatura?",
    options: ["₡50.000", "₡70.350", "₡86.300", "₡156.000"],
    answer: 1,
    explanation: "El costo vigente de matrícula para Bachillerato y Licenciatura es de ₡70.350."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el precio de cada materia regular para programas de Maestría?",
    options: ["₡86.300", "₡120.000", "₡156.000", "₡210.000"],
    answer: 2,
    explanation: "El costo regular por materia de Maestría es de ₡156.000."
  },
  {
    question: "🌟 [Becas] ¿Qué promedio ponderado mínimo debe mantener un estudiante para conservar una Beca de Excelencia Académica?",
    options: ["70%", "80%", "85%", "90%"],
    answer: 3,
    explanation: "Las becas de Excelencia Académica exigen mantener un promedio ponderado de 90% en adelante."
  },

  // --- TRÁMITES & PLATA FORMAS (USAM) ---
  {
    question: "💻 [Plataformas] ¿Cuál es el entorno virtual oficial utilizado en la USAM para el desarrollo de clases y aulas virtuales?",
    options: ["Moodle", "Canvas", "Blackboard", "Teams LMS"],
    answer: 1,
    explanation: "Canvas es la plataforma de tecnología educativa de última generación usada por USAM."
  },
  {
    question: "💳 [Servicio] ¿A través de qué canal de la U Virtual se debe reportar el pago de una Letra de Cambio?",
    options: ["Enviando un correo al rector.", "En la opción 'Cajas-Adelanto Pago Cuota' / Portal de Consultas Alumnos.", "Por mensaje de WhatsApp.", "Presencialmente en caja únicamente."],
    answer: 1,
    explanation: "Se gestiona mediante el Portal de Consultas Alumnos seleccionando la opción correspondiente."
  },
  {
    question: "📜 [Trámites] Si un estudiante solicita congelar o retirar materias ANTES del inicio de lecciones, ¿qué arancel aplica?",
    options: [
      "Debe pagar una multa del 50%.",
      "No tiene costo si se realiza antes del inicio de lecciones.",
      "Pierde el derecho a matricular el siguiente cuatrimestre.",
      "Debe pagar ₡25.990 por trámite."
    ],
    answer: 1,
    explanation: "Los cambios, retiros o congelamientos realizados ANTES del inicio de lecciones no tienen costo."
  },
  {
    question: "🏛️ [Normativa] ¿Qué representa el SINAES y por qué la acreditación aplica específicamente a modalidad presencial?",
    options: [
      "Es el ente de cobros de la universidad.",
      "Es el Sistema Nacional de Acreditación de la Educación Superior y sus modelos vigentes auditan sedes y modalidades específicas aprobadas.",
      "Es una asociación de estudiantes de Costa Rica.",
      "Es un sistema de becas internacionales."
    ],
    answer: 1,
    explanation: "SINAES evalúa y acredita la calidad académica de carreras bajo modelos y modalidades específicamente auditadas."
  }
];

