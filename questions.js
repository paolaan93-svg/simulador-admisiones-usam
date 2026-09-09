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
  // --- CULTURA GENERAL MUNDIAL (10 Preguntas) ---
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
    explanation: "Vincent van Gogh creó esta icónica pintura en 1889."
  },
  {
    question: "🏛️ [Cultura General] ¿En qué país se encuentra la maravilla del Taj Mahal?",
    options: ["Turquía", "Egipto", "India", "Tailandia"],
    answer: 2,
    explanation: "El Taj Mahal está ubicado en la ciudad de Agra, India."
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
    explanation: "Shrek ganó el primer Óscar en esta categoría en la gala del año 2002."
  },
  {
    question: "⛰️ [Cultura General] ¿Cuál es la montaña más alta del mundo sobre el nivel del mar?",
    options: ["K2", "Monte Everest", "Kangchenjunga", "Kilimanjaro"],
    answer: 1,
    explanation: "El Monte Everest, ubicado en el Himalaya, mide 8.848 metros sobre el nivel del mar."
  },
  {
    question: "📖 [Cultura General] ¿Quién escribió la célebre obra de la literatura hispana 'Don Quijote de la Mancha'?",
    options: ["Gabriel García Márquez", "Miguel de Cervantes", "Mario Vargas Llosa", "Federico García Lorca"],
    answer: 1,
    explanation: "Miguel de Cervantes Saavedra publicó la primera parte de Don Quijote en 1605."
  },
  {
    question: "⚡ [Cultura General] ¿Qué científico formuló la Teoría de la Relatividad General?",
    options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Stephen Hawking"],
    answer: 2,
    explanation: "Albert Einstein publicó la Teoría de la Relatividad General en 1915."
  },
  {
    question: "⚽ [Cultura General] ¿Cada cuántos años se celebra la Copa Mundial de Fútbol de la FIFA?",
    options: ["Cada 2 años", "Cada 3 años", "Cada 4 años", "Cada 5 años"],
    answer: 2,
    explanation: "La Copa Mundial de la FIFA se lleva a cabo cada 4 años desde 1930."
  },

  // --- BASE DE CONOCIMIENTOS USAM: REQUISITOS & ADMISIÓN (5 Preguntas) ---
  {
    question: "📄 [Admisiones] ¿Cuáles son los documentos requeridos para la admisión a programas de Bachillerato?",
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
    question: "📄 [Admisiones] Para la admisión a programas de Maestría, ¿qué documento adicional se exige respecto al Bachillerato?",
    options: [
      "Foto del título universitario adicional al de colegio.",
      "Tres cartas de recomendación laboral.",
      "Certificado de récord policial.",
      "Prueba de esfuerzo físico."
    ],
    answer: 0,
    explanation: "Para maestrías se requiere foto del título de colegio y foto del título universitario."
  },
  {
    question: "🎓 [Admisiones] Un prospecto con título en Educación o Ciencias Sociales consulta por el MBA. ¿Qué aplica con nivelatorios?",
    options: [
      "Exención total por poseer grado universitario.",
      "Debe cursar obligatoriamente las 4 materias nivelatorias aprobadas por CONESUP.",
      "Solo requiere examen de inglés.",
      "Hacer un solo nivelatorio de contabilidad."
    ],
    answer: 1,
    explanation: "Graduados de áreas no afines a ciencias económicas (como educación, derecho o salud) deben llevar los 4 nivelatorios."
  },
  {
    question: "📝 [Admisiones] ¿En qué caso se utiliza la 'Carta de Compromiso' durante la matricula de un estudiante?",
    options: [
      "Cuando el estudiante no tiene dinero para pagar.",
      "Únicamente cuando el aspirante cuenta con un respaldo provisional o pendiente del documento original exigido.",
      "Para exonerarle los exámenes extraordinarios.",
      "Para solicitar cambio de sede."
    ],
    answer: 1,
    explanation: "La carta de compromiso otorga un plazo provisional para presentar documentos pendientes del expediente."
  },
  {
    question: "🏢 [Admisiones] ¿En cuál de estas ubicaciones la USAM cuenta con Centro de Servicio (CSU)?",
    options: ["CSU City Mall", "CSU Plaza Lincoln", "CSU Multiplaza Escazú", "CSU Paseo de las Flores"],
    answer: 0,
    explanation: "La Universidad San Marcos cuenta con el CSU City Mall entre sus puntos directos de atención."
  },

  // --- ARANCELES, PAGOS & BECAS (7 Preguntas) ---
  {
    question: "💰 [Aranceles] ¿Cuál es el costo oficial de la Matrícula para Bachillerato y Licenciatura?",
    options: ["₡50.000", "₡70.350", "₡86.300", "₡156.000"],
    answer: 1,
    explanation: "El monto oficial vigente de matrícula para Bachillerato y Licenciatura es ₡70.350."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el precio por materia regular para un programa de Bachillerato o Licenciatura?",
    options: ["₡56.100", "₡70.350", "₡86.300", "₡156.000"],
    answer: 2,
    explanation: "El costo vigente por materia de Bachillerato/Licenciatura es de ₡86.300."
  },
  {
    question: "💰 [Aranceles] ¿Cuál es el precio regular por materia para programas de Maestría?",
    options: ["₡86.300", "₡120.000", "₡156.000", "₡210.000"],
    answer: 2,
    explanation: "El costo regular por materia de Maestría es de ₡156.000."
  },
  {
    question: "🌟 [Becas] ¿Qué promedio ponderado exige el reglamento para mantener una Beca Socioeconómica?",
    options: ["60%", "70%", "85%", "90%"],
    answer: 1,
    explanation: "Las becas socioeconómicas exigen mantener un promedio ponderado mínimo de 70%."
  },
  {
    question: "🌟 [Becas] ¿Qué promedio ponderado exige el reglamento para conservar una Beca de Excelencia Académica?",
    options: ["70%", "80%", "85%", "90%"],
    answer: 3,
    explanation: "Las becas de Excelencia Académica requieren un promedio mínimo mantenido de 90%."
  },
  {
    question: "💳 [Medios de Pago] ¿A través de cuál banco la USAM dispone de cuenta IBAN para transferencias de pago?",
    options: ["Banco de Costa Rica (BCR)", "Banco Santander", "Banco Pichincha", "Bancolombia"],
    answer: 0,
    explanation: "USAM utiliza cuentas recaudadoras oficiales en el Banco de Costa Rica (BCR)."
  },
  {
    question: "💵 [Pagos] ¿En qué apartado de la U Virtual un estudiante puede consultar cuánto debe pagar por cuota?",
    options: ["En Cajas - Adelanto Pago Cuota", "En Biblioteca EBSCO", "En la pestaña de Tesis", "En Canvas en la sección de Foro"],
    answer: 0,
    explanation: "El desglose de cuotas pendientes se revisa en la U Virtual mediante la opción 'Cajas-Adelanto Pago Cuota'."
  },

  // --- ACADÉMICO, GRADUACIÓN & MODELO (8 Preguntas) ---
  {
    question: "⏰ [Modalidades] ¿En qué horario se imparten las materias de énfasis en Maestrías Presenciales?",
    options: [
      "Sábados en la mañana.",
      "Miércoles de 6:00 p. m. a 10:00 p. m. sincrónico vía Teams (asistencia obligatoria).",
      "Viernes asincrónico.",
      "Domingos presencial."
    ],
    answer: 1,
    explanation: "Las materias de énfasis se imparten los miércoles de 6:00 p.m. a 10:00 p.m. vía Teams."
  },
  {
    question: "📅 [Calendario] ¿Quiénes pueden matricular en el 'Primer Cuatrimestre Intermedio' en modalidad virtual?",
    options: [
      "Todos los estudiantes regulares.",
      "Exclusivamente estudiantes de primer ingreso en modalidad virtual.",
      "Estudiantes con promedio mayor a 95.",
      "Nadie, no existen intermedios."
    ],
    answer: 1,
    explanation: "El primer cuatrimestre intermedio es exclusivo para estudiantes de primer ingreso en modalidad virtual."
  },
  {
    question: "📜 [Trámites] Si un estudiante congela o retira materias ANTES de iniciar lecciones, ¿qué arancel se le cobra?",
    options: ["Una multa del 30%", "No tiene ningún costo", "Pierde el dinero pagado", "₡25.990 administrativo"],
    answer: 1,
    explanation: "Cambios o retiros procesados ANTES del inicio de lecciones no generan costo."
  },
  {
    question: "📚 [Opciones de Grado] ¿Cuál es la estructura de culminación en Maestrías de la USAM?",
    options: [
      "Obligatoriamente 2 años de tesis teórica.",
      "Un enfoque práctico profesional mediante Proyecto de Graduación.",
      "Tres exámenes de grado orales.",
      "Publicar un libro en el extranjero."
    ],
    answer: 1,
    explanation: "Las maestrías en USAM tienen enfoque práctico profesional centrado en Proyecto de Graduación."
  },
  {
    question: "🤝 [TCU] ¿En qué consiste el requisito de Trabajo Comunal Universitario (TCU)?",
    options: [
      "Un trabajo remunerado en una multinacional.",
      "Un requisito social obligatorio de proyección a la comunidad para culminación de estudios.",
      "Un examen teórico de cultura costarricense.",
      "Un curso de inglés obligatorio."
    ],
    answer: 1,
    explanation: "El TCU es un pilar de desarrollo social e interacción comunitaria obligatorio para la graduación."
  },
  {
    question: "🌐 [MOOCs] ¿Qué son los MOOCs en la oferta de la Universidad San Marcos?",
    options: [
      "Exámenes de suficiencia.",
      "Cursos online abiertos y masivos disponibles en plataformas educativas.",
      "Sanciones disciplinarias.",
      "Aulas físicas en sedes regionales."
    ],
    answer: 1,
    explanation: "Los MOOCs son cursos abiertos en línea que ofrecen competencias complementarias."
  },
  {
    question: "🚗 [Servicios] ¿Qué condición aplica sobre el servicio de Parqueo en la Sede para los estudiantes?",
    options: [
      "Es de pago por hora.",
      "Es un servicio gratuito disponible para estudiantes en horarios establecidos.",
      "Solo para profesores.",
      "Requiere reserva con 1 mes de anticipación."
    ],
    answer: 1,
    explanation: "La USAM brinda acceso a parqueo gratuito para estudiantes según horarios regulados."
  },
  {
    question: "🏛️ [Normativa] ¿Qué representa SINAES en Costa Rica?",
    options: [
      "El Sistema Nacional de Acreditación de la Educación Superior.",
      "El Sindicato de Administradores de Escuelas.",
      "Un software de matricula.",
      "El Banco Estudiantil de Crédito."
    ],
    answer: 0,
    explanation: "SINAES es el órgano oficial costarricense que acredita la calidad de las carreras universitarias."
  },

  // --- PLATAFORMAS & HERRAMIENTAS (5 Preguntas) ---
  {
    question: "💻 [Plataformas] ¿Cuál es el LMS oficial usado por la USAM para desarrollo de materias virtuales?",
    options: ["Moodle", "Canvas", "Blackboard", "Google Classroom"],
    answer: 1,
    explanation: "La plataforma oficial de aulas virtuales en USAM es Canvas."
  },
  {
    question: "📖 [Biblioteca] ¿A través de qué plataformas digitales tienen acceso a libros y revistas los alumnos USAM?",
    options: ["EBSCO y E-Libro", "Wikipedia Pro", "Google Books Libre", "Kindle Unlimited"],
    answer: 0,
    explanation: "Los estudiantes acceden a la biblioteca virtual mediante EBSCO y E-Libro con sus credenciales institucionales."
  },
  {
    question: "📩 [Atención] ¿Cómo se llama el portal oficial donde el alumno registra solicitudes de cambio de datos, notas o rectificaciones?",
    options: ["Portal de Consultas Alumnos", "Foro Canvas", "Chatbot de Facebook", "Correo Personal de Docentes"],
    answer: 0,
    explanation: "El Portal de Consultas Alumnos es la ventanilla oficial de trámites académicos y administrativos."
  },
  {
    question: "🤝 [Convenios] ¿Qué beneficio otorgan los Convenios Empresariales de la USAM a los colaboradores de empresas aliadas?",
    options: [
      "Matrícula gratis de por vida sin requisitos.",
      "Descuentos o tarifas preferenciales en aranceles según las condiciones acordadas.",
      "Títulos sin presentar exámenes.",
      "Viajes internacionales pagados."
    ],
    answer: 1,
    explanation: "Los convenios corporativos otorgan beneficios arancelarios y facilidades a los colaboradores de empresas aliadas."
  },
  {
    question: "🧠 [Bienestar] ¿Qué servicio gratuito brinda Experiencia Estudiantil para apoyo emocional de los alumnos?",
    options: ["Servicio de Atención Psicológica", "Membresía de gimnasio", "Clases de yoga presenciales", "Descuento en restaurantes"],
    answer: 0,
    explanation: "Experiencia Estudiantil ofrece apoyo y atención psicológica gratuita a la comunidad estudiantil."
  }
];

