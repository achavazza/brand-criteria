export interface Messages {
  ui: {
    brandCriteria: string
    technical: string
    identity: string
    total: string
    selectCriterionBegin: string
    selectCriterion: string
    finalReport: string
    performanceIndex: string
    technicalCriteria: string
    identityCriteria: string
    printPdf: string
    evaluationNotes: string
    observations: string
    observationsPlaceholder: string
    previous: string
    next: string
    reportOption: string
  }
  uploader: {
    dropHere: string
    clickToSelect: string
  }
  modules: {
    inspectionMode: string
    inspectionHint: string
    sizeContrast: string
    sizes: string
    variants: string
    memoryRetention: string
    differentiation: string
    contextualPreviews: string
    favicon: string
    productionSimulation: string
    oneColor: string
    photocopy: string
    newsprint: string
    embroidery: string
    engraving: string
    scaleSpectrum: string
    trendDependency: string
    formMeaning: string
    identityStrategy: string
    legibilityFooter: string
    sizeLarge: string
    sizeMedium: string
    sizeSmall: string
    sizeFavicon: string
    variantPositive: string
    variantNegative: string
    variantMonochrome: string
  }
  pregnance: {
    prompt: string
    gestaltLabel: string
    gestalt: string[]
  }
  longevity: {
    indicators: Array<{ title: string; question: string; left: string; right: string }>
  }
  reproducibility: {
    simLabels: string[]
    simDescriptions: string[]
  }
  scoreControl: {
    label: string
    notEvaluated: string
    belowExpectation: string
    acceptable: string
    good: string
    excellent: string
  }
  criteria: Record<string, {
    title: string
    category: string
    definition: string
    explanation: string
    notes: string[]
    quote?: string
    quoteSource?: string
  }>
}

const enMessages: Messages = {
  ui: {
    brandCriteria: 'BRAND CRITERIA',
    technical: 'Technical',
    identity: 'Identity',
    total: 'Total',
    selectCriterionBegin: 'Select a criterion to begin analysis',
    selectCriterion: 'Select a criterion',
    finalReport: 'Final Report',
    performanceIndex: 'Brand Criteria Performance Index',
    technicalCriteria: 'Technical Criteria',
    identityCriteria: 'Identity Criteria',
    printPdf: 'Print / Save PDF',
    evaluationNotes: 'Evaluation notes',
    observations: 'Observations',
    observationsPlaceholder: 'Record your observations...',
    previous: '\u2190 Previous',
    next: 'Next \u2192',
    reportOption: '11 Final Report',
  },
  uploader: {
    dropHere: 'Drop your mark here',
    clickToSelect: 'or click to select a file',
  },
  modules: {
    inspectionMode: 'Inspection Mode',
    inspectionHint: 'Move cursor over the logo',
    sizeContrast: 'Size & Contrast Simulation',
    sizes: 'Sizes',
    variants: 'Variants',
    memoryRetention: 'Memory Retention Test',
    differentiation: 'Differentiation Analysis',
    contextualPreviews: 'Contextual Previews',
    favicon: 'Favicon',
    productionSimulation: 'Production Simulation',
    oneColor: 'One Color',
    photocopy: 'Photocopy',
    newsprint: 'Newsprint',
    embroidery: 'Embroidery',
    engraving: 'Engraving',
    scaleSpectrum: 'Scale Spectrum',
    trendDependency: 'Trend Dependency Analysis',
    formMeaning: 'Form & Meaning Analysis',
    identityStrategy: 'Identity Strategy',
    legibilityFooter: 'Observe where the mark begins to lose clarity',
    sizeLarge: 'Large (100%)',
    sizeMedium: 'Medium (50%)',
    sizeSmall: 'Small (25%)',
    sizeFavicon: 'Favicon',
    variantPositive: 'Positive',
    variantNegative: 'Negative',
    variantMonochrome: 'Monochrome',
  },
  pregnance: {
    prompt: 'Study the mark for 5 seconds. Then describe it in one sentence.',
    gestaltLabel: 'Gestalt principles at work',
    gestalt: [
      'Closure — Can the mind complete incomplete forms?',
      'Continuity — Do elements guide the eye smoothly?',
      'Symmetry — Is there a clear organizing axis?',
      'Figure-ground — Is the relationship stable?',
      'Simplicity — Can the form be reduced further?',
    ],
  },
  longevity: {
    indicators: [
      { title: 'Typographic trend', question: 'Does the typeface signal a specific era?', left: 'Timeless', right: 'Modern' },
      { title: 'Decorative elements', question: 'Structural or purely ornamental?', left: 'Synthetic', right: 'Ornamental' },
      { title: 'Color reliance', question: 'Current trend or brand strategy?', left: 'Monochromatic', right: 'Colorful' },
      { title: 'Timelessness', question: 'Will it still look current in ten years?', left: 'Timeless', right: 'Trend' },
    ],
  },
  scoreControl: {
    label: 'Score',
    notEvaluated: 'Not evaluated',
    belowExpectation: 'Below expectation',
    acceptable: 'Acceptable',
    good: 'Good',
    excellent: 'Excellent',
  },
  reproducibility: {
    simLabels: ['One Color', 'Photocopy', 'Newsprint', 'Embroidery', 'Engraving'],
    simDescriptions: ['Single ink — no color dependency', 'High contrast, detail loss', 'Low paper quality, ink bleed', 'Thread gauge limits detail', 'Line reduction, inversion'],
  },
  criteria: {
    'graphic-quality': {
      title: 'Graphic Quality',
      category: 'technical',
      definition: 'The formal excellence of the mark as a piece of graphic design, independent of its function as a brand identifier.',
      explanation: 'Graphic quality evaluates the intrinsic visual merit of the mark — the precision of its curves, the harmony of its proportions, the intelligence of its construction. A mark may communicate effectively yet still suffer from poor resolution, uneven stroke weights, or awkward spatial relationships. This criterion separates mere legibility from true graphic refinement.',
      notes: [
        'Are the curves mathematically smooth or visibly irregular?',
        'Do the proportions feel intentional or accidental?',
        'Is the stroke weight consistent across the entire mark?',
        'Are there visible optical corrections or does it rely on mechanical precision?',
        'How does the mark behave when examined at extreme magnification?',
      ],
      quote: 'The quality of a mark is not in its originality but in the precision of its execution.',
      quoteSource: 'Norberto Chaves',
    },
    'legibility': {
      title: 'Legibility',
      category: 'technical',
      definition: 'The ease with which the mark can be read and recognized across different sizes and contexts.',
      explanation: 'Legibility is the most fundamental technical requirement. A mark that cannot be read has failed its primary function. This criterion examines how the mark performs at various sizes — from massive billboard applications to tiny favicon renderings. True legibility means the mark remains recognizable even when reduced to its minimum functional size, without relying on color or fine detail.',
      notes: [
        'At what size does the mark begin to lose its recognizability?',
        'Are the internal spaces (counters) large enough to remain open at small sizes?',
        'Does the mark work in positive and negative versions equally?',
        'Is the mark dependent on fine strokes that will disappear at small scales?',
        'How does the monochrome version compare to the full-color version?',
      ],
    },
    'pregnance': {
      title: 'Pregnance',
      category: 'technical',
      definition: 'The perceptual force of the mark — its ability to be retained in memory after brief exposure.',
      explanation: 'Pregnance (from the German "Prägnanz") measures the memorability and perceptual impact of a mark. A pregnant form is one that the mind can grasp quickly and retain easily. This is related to Gestalt principles of good form — simplicity, closure, continuity, and symmetry. The most pregnant marks are those that can be described in a few words and drawn from memory after a single viewing.',
      notes: [
        'Can this mark be described verbally in one sentence?',
        'Would a viewer be able to redraw it from memory after one glance?',
        'Does the mark rely on a strong gestalt or is it a collection of unrelated elements?',
        'Is the form simple enough to be retained but distinctive enough to be recognized?',
        'Does the mark have a single visual anchor point or multiple competing focal points?',
      ],
      quote: 'A mark should be describable in a telegram.',
      quoteSource: 'Norberto Chaves',
    },
    'singularity': {
      title: 'Singularity',
      category: 'identity',
      definition: 'The degree of differentiation of the mark within its competitive and categorical context.',
      explanation: 'Singularity measures how distinct a mark is from its competitors. A mark may be well-executed yet generic — following the visual conventions of its category so closely that it fails to create a unique identity. True singularity means the mark occupies a visual territory that belongs to no other brand. This is not about novelty for its own sake, but about creating a distinctive visual property that can function as reliable identification.',
      notes: [
        'Does the mark share visual patterns with competitors in the same category?',
        'If placed among competitor marks, does it stand out or blend in?',
        'Is the mark\'s distinctive feature ownable, or is it a generic symbol?',
        'Could the mark be confused with any existing mark in any category?',
        'Does the singularity come from the concept, the execution, or both?',
      ],
      quote: 'A mark must be singular not because it is strange, but because it is unmistakably itself.',
      quoteSource: 'Norberto Chaves',
    },
    'versatility': {
      title: 'Versatility',
      category: 'technical',
      definition: 'The capacity of the mark to function effectively across all required media and applications.',
      explanation: 'Versatility tests the mark\'s adaptability to different formats and contexts. A truly versatile mark works as well on a 16x16 favicon as on a 20-meter building facade. It performs in digital, print, environmental, and motion contexts. Versatility is not about having multiple versions of the logo, but about the core mark itself being flexible enough to handle diverse requirements without losing its identity.',
      notes: [
        'Does the mark work at favicon size without losing key details?',
        'How does it perform as a social media profile picture?',
        'Is the mark adaptable to vertical and horizontal formats?',
        'Does it work as a standalone icon without the wordmark?',
        'Can the mark be animated without breaking its visual logic?',
      ],
    },
    'reproducibility': {
      title: 'Reproducibility',
      category: 'technical',
      definition: 'The mark\'s ability to maintain its integrity across different production methods and material constraints.',
      explanation: 'Reproducibility examines how well the mark survives real-world production constraints. A mark that looks perfect on screen may fail when embroidered on a uniform, stamped into metal, or photocopied in black and white. This criterion evaluates the mark\'s robustness — its ability to remain identifiable even when production conditions are far from ideal.',
      notes: [
        'Does the mark reduce to one color without losing its identity?',
        'How does it survive a photocopy or fax simulation?',
        'Can the mark be embroidered without losing detail?',
        'Does it work in engraving or debossing?',
        'What is the minimum resolution at which the mark remains identifiable?',
      ],
      quote: 'The true test of a mark is not how it looks on a presentation board, but how it looks on a ballpoint pen.',
      quoteSource: 'Norberto Chaves',
    },
    'scalability': {
      title: 'Scalability',
      category: 'technical',
      definition: 'The mark\'s visual integrity across the full range of required sizes, from smallest to largest.',
      explanation: 'Scalability focuses specifically on size transitions. Unlike legibility which asks "can it be read?", scalability asks "does it still look like the same mark?" at every size. Marks with good scalability maintain their proportional relationships, visual weight, and essential character whether displayed on a watch face or a stadium banner. This criterion identifies the threshold where the mark\'s design begins to break down.',
      notes: [
        'At what size does the mark begin to lose its visual proportions?',
        'Do thin strokes disappear or thick strokes become dominant when scaled?',
        'Is there a size where the mark needs a different version?',
        'Does the mark maintain its character at both extremes of the size spectrum?',
        'Are there elements that need to be removed or simplified at certain scales?',
      ],
    },
    'longevity': {
      title: 'Longevity',
      category: 'identity',
      definition: 'The projected durability of the mark\'s relevance over time, independent of passing trends.',
      explanation: 'Longevity evaluates whether the mark is designed for permanence or built on temporary stylistic conventions. Marks that rely heavily on current design trends — gradients, drop shadows, specific color gradients, or typographic fashions — risk appearing dated within a few years. Longevity favors marks rooted in fundamental visual principles rather than decorative embellishments. The most durable marks are those that feel both contemporary and timeless.',
      notes: [
        'Does the mark rely on current design trends that will date it?',
        'Would this mark look out of place in a design from 20 years ago?',
        'Are the typographic choices classic or fashionable?',
        'Does the mark have unnecessary decorative elements that serve no functional purpose?',
        'Is the mark designed to evolve gracefully, or will it require a complete redesign in 5 years?',
      ],
      quote: 'A mark should be of its time without being a slave to it.',
      quoteSource: 'Norberto Chaves',
    },
    'semantic-relevance': {
      title: 'Semantic Relevance',
      category: 'identity',
      definition: 'The coherence and appropriateness of the visual signs used in relation to the brand\'s meaning and values.',
      explanation: 'Semantic relevance examines the relationship between what the mark shows and what the brand means. Every visual element carries meaning — shapes, colors, typographic styles, and symbols all communicate at a subconscious level. This criterion evaluates whether these visual signals align with the brand\'s intended message. A mark can be visually excellent yet semantically wrong, communicating sophistication for a low-cost brand or playfulness for a serious institution.',
      notes: [
        'What does the mark communicate beyond the brand name?',
        'Are the visual metaphors used appropriate to the brand\'s sector and values?',
        'Does the mark\'s visual language match the brand\'s verbal language?',
        'Would the mark\'s meaning be interpreted differently in different cultural contexts?',
        'Is the relationship between form and meaning direct, metaphorical, or arbitrary?',
      ],
    },
    'identity-strategy': {
      title: 'Identity Strategy Compatibility',
      category: 'identity',
      definition: 'The alignment between the mark and the broader identity strategy, including positioning, personality, and brand architecture.',
      explanation: 'Identity strategy compatibility is the most comprehensive criterion. It evaluates whether the mark correctly reflects the brand\'s positioning, supports its strategic objectives, and fits within the broader identity system. A mark may score highly on all other criteria yet still be wrong for the brand if it contradicts the strategic positioning. This criterion connects the visual evaluation to the brand strategy context.',
      notes: [
        'Does the mark reflect the brand\'s intended positioning?',
        'Is the mark appropriate for the brand\'s target audience?',
        'Does the mark work within the existing brand architecture?',
        'Does the mark support the brand\'s strategic objectives?',
        'What gap exists between the brand\'s intended perception and the mark\'s communicated perception?',
      ],
      quote: 'A mark is not an island. It is the face of a strategic system.',
      quoteSource: 'Norberto Chaves',
    },
  },
}

const esMessages: Messages = {
  ui: {
    brandCriteria: 'CRITERIOS DE MARCA',
    technical: 'Técnico',
    identity: 'Identidad',
    total: 'Total',
    selectCriterionBegin: 'Selecciona un criterio para comenzar el análisis',
    selectCriterion: 'Seleccionar un criterio',
    finalReport: 'Informe Final',
    performanceIndex: 'Índice de Rendimiento de Criterios de Marca',
    technicalCriteria: 'Criterios Técnicos',
    identityCriteria: 'Criterios de Identidad',
    printPdf: 'Imprimir / Guardar PDF',
    evaluationNotes: 'Notas de evaluación',
    observations: 'Observaciones',
    observationsPlaceholder: 'Registra tus observaciones...',
    previous: '\u2190 Anterior',
    next: 'Siguiente \u2192',
    reportOption: '11 Informe Final',
  },
  uploader: {
    dropHere: 'Arrastra tu marca aquí',
    clickToSelect: 'o haz clic para seleccionar un archivo',
  },
  modules: {
    inspectionMode: 'Modo Inspección',
    inspectionHint: 'Mueve el cursor sobre el logo',
    sizeContrast: 'Simulación de Tamaño y Contraste',
    sizes: 'Tamaños',
    variants: 'Variantes',
    memoryRetention: 'Prueba de Retención en Memoria',
    differentiation: 'Análisis de Diferenciación',
    contextualPreviews: 'Vistas Contextuales',
    favicon: 'Favicon',
    productionSimulation: 'Simulación de Producción',
    oneColor: 'Un Solo Color',
    photocopy: 'Fotocopia',
    newsprint: 'Papel Periódico',
    embroidery: 'Bordado',
    engraving: 'Grabado',
    scaleSpectrum: 'Espectro de Escala',
    trendDependency: 'Análisis de Dependencia de Tendencias',
    formMeaning: 'Análisis de Forma y Significado',
    identityStrategy: 'Estrategia de Identidad',
    legibilityFooter: 'Observa dónde la marca comienza a perder claridad',
    sizeLarge: 'Grande (100%)',
    sizeMedium: 'Mediano (50%)',
    sizeSmall: 'Pequeño (25%)',
    sizeFavicon: 'Favicon',
    variantPositive: 'Positivo',
    variantNegative: 'Negativo',
    variantMonochrome: 'Monocromo',
  },
  pregnance: {
    prompt: 'Estudia la marca durante 5 segundos. Luego descríbela en una oración.',
    gestaltLabel: 'Principios gestálticos en acción',
    gestalt: [
      'Cierre — ¿La mente puede completar formas incompletas?',
      'Continuidad — ¿Los elementos guían el ojo suavemente?',
      'Simetría — ¿Hay un eje organizador claro?',
      'Figura-fondo — ¿La relación es estable?',
      'Simplicidad — ¿Se puede reducir aún más la forma?',
    ],
  },
  longevity: {
    indicators: [
      { title: 'Tendencia tipográfica', question: '¿La tipografía señala una época específica?', left: 'Atemporal', right: 'Moderno' },
      { title: 'Elementos decorativos', question: '¿Estructurales o puramente ornamentales?', left: 'Sintético', right: 'Ornamental' },
      { title: 'Dependencia cromática', question: '¿Tendencia actual o estrategia de marca?', left: 'Monocromático', right: 'Colorido' },
      { title: 'Atemporalidad', question: '¿Se verá actual en diez años?', left: 'Atemporal', right: 'Moda' },
    ],
  },
  scoreControl: {
    label: 'Puntuación',
    notEvaluated: 'Sin evaluar',
    belowExpectation: 'Por debajo',
    acceptable: 'Aceptable',
    good: 'Buena',
    excellent: 'Excelente',
  },
  reproducibility: {
    simLabels: ['Un Solo Color', 'Fotocopia', 'Papel Periódico', 'Bordado', 'Grabado'],
    simDescriptions: ['Una sola tinta — sin dependencia cromática', 'Alto contraste, pérdida de detalle', 'Baja calidad de papel, sangrado de tinta', 'El grosor del hilo limita el detalle', 'Reducción de línea, inversión'],
  },
  criteria: {
    'graphic-quality': {
      title: 'Calidad Gráfica',
      category: 'technical',
      definition: 'La excelencia formal de la marca como pieza de diseño gráfico, independientemente de su función como identificador de marca.',
      explanation: 'La calidad gráfica evalúa el mérito visual intrínseco de la marca — la precisión de sus curvas, la armonía de sus proporciones, la inteligencia de su construcción. Una marca puede comunicar eficazmente y sin embargo sufrir de baja resolución, grosores de trazo irregulares o relaciones espaciales incómodas. Este criterio separa la mera legibilidad de la verdadera refinación gráfica.',
      notes: [
        '¿Las curvas son matemáticamente suaves o visiblemente irregulares?',
        '¿Las proporciones se sienten intencionales o accidentales?',
        '¿El grosor del trazo es consistente en toda la marca?',
        '¿Hay correcciones ópticas visibles o se basa en precisión mecánica?',
        '¿Cómo se comporta la marca al examinarse con magnificación extrema?',
      ],
      quote: 'La calidad de una marca no está en su originalidad sino en la precisión de su ejecución.',
      quoteSource: 'Norberto Chaves',
    },
    'legibility': {
      title: 'Legibilidad',
      category: 'technical',
      definition: 'La facilidad con la que la marca puede ser leída y reconocida en diferentes tamaños y contextos.',
      explanation: 'La legibilidad es el requisito técnico más fundamental. Una marca que no puede leerse ha fallado en su función principal. Este criterio examina cómo se desempeña la marca en varios tamaños — desde aplicaciones masivas en vallas publicitarias hasta diminutas representaciones de favicon. La verdadera legibilidad significa que la marca sigue siendo reconocible incluso cuando se reduce a su tamaño funcional mínimo, sin depender del color o el detalle fino.',
      notes: [
        '¿A qué tamaño la marca comienza a perder su reconocibilidad?',
        '¿Los espacios internos (contraformas) son suficientemente grandes para mantenerse abiertos en tamaños pequeños?',
        '¿La marca funciona igualmente en versiones positiva y negativa?',
        '¿La marca depende de trazos finos que desaparecerán en escalas pequeñas?',
        '¿Cómo se compara la versión monocromática con la versión a todo color?',
      ],
    },
    'pregnance': {
      title: 'Pregnancia',
      category: 'technical',
      definition: 'La fuerza perceptual de la marca — su capacidad de ser retenida en la memoria tras una exposición breve.',
      explanation: 'La pregnancia (del alemán "Prägnanz") mide la memorabilidad y el impacto perceptual de una marca. Una forma pregnante es aquella que la mente puede captar rápidamente y retener con facilidad. Esto se relaciona con los principios gestálticos de la buena forma — simplicidad, cierre, continuidad y simetría. Las marcas más pregnantes son aquellas que pueden describirse en pocas palabras y dibujarse de memoria tras una sola mirada.',
      notes: [
        '¿Puede esta marca describirse verbalmente en una oración?',
        '¿Podría un espectador redibujarla de memoria tras un vistazo?',
        '¿La marca se basa en una gestalt fuerte o es una colección de elementos no relacionados?',
        '¿La forma es lo suficientemente simple para ser retenida pero suficientemente distintiva para ser reconocida?',
        '¿La marca tiene un único punto de anclaje visual o múltiples puntos focales en competencia?',
      ],
      quote: 'Una marca debería poder describirse en un telegrama.',
      quoteSource: 'Norberto Chaves',
    },
    'singularity': {
      title: 'Singularidad',
      category: 'identity',
      definition: 'El grado de diferenciación de la marca dentro de su contexto competitivo y categórico.',
      explanation: 'La singularidad mide cuán distinta es una marca de sus competidores. Una marca puede estar bien ejecutada pero ser genérica — siguiendo las convenciones visuales de su categoría tan de cerca que no logra crear una identidad única. La verdadera singularidad significa que la marca ocupa un territorio visual que no pertenece a ninguna otra marca. Esto no es sobre novedad por sí misma, sino sobre crear una propiedad visual distintiva que pueda funcionar como identificación confiable.',
      notes: [
        '¿La marca comparte patrones visuales con competidores en la misma categoría?',
        'Si se coloca entre marcas competidoras, ¿destaca o se mezcla?',
        '¿El rasgo distintivo de la marca es apropiable, o es un símbolo genérico?',
        '¿Podría confundirse la marca con alguna marca existente en cualquier categoría?',
        '¿La singularidad proviene del concepto, de la ejecución, o de ambos?',
      ],
      quote: 'Una marca debe ser singular no porque sea extraña, sino porque es inconfundiblemente ella misma.',
      quoteSource: 'Norberto Chaves',
    },
    'versatility': {
      title: 'Versatilidad',
      category: 'technical',
      definition: 'La capacidad de la marca para funcionar efectivamente en todos los medios y aplicaciones requeridos.',
      explanation: 'La versatilidad prueba la adaptabilidad de la marca a diferentes formatos y contextos. Una marca verdaderamente versátil funciona tanto en un favicon de 16x16 como en una fachada de edificio de 20 metros. Se desempeña en contextos digitales, impresos, ambientales y de movimiento. La versatilidad no se trata de tener múltiples versiones del logotipo, sino de que la marca central sea lo suficientemente flexible para manejar diversos requisitos sin perder su identidad.',
      notes: [
        '¿La marca funciona en tamaño favicon sin perder detalles clave?',
        '¿Cómo se desempeña como foto de perfil en redes sociales?',
        '¿La marca es adaptable a formatos verticales y horizontales?',
        '¿Funciona como ícono independiente sin el nombre de marca?',
        '¿Puede la marca animarse sin romper su lógica visual?',
      ],
    },
    'reproducibility': {
      title: 'Reproducibilidad',
      category: 'technical',
      definition: 'La capacidad de la marca para mantener su integridad a través de diferentes métodos de producción y restricciones de material.',
      explanation: 'La reproducibilidad examina qué tan bien sobrevive la marca las restricciones de producción del mundo real. Una marca que se ve perfecta en pantalla puede fallar cuando se borda en un uniforme, se estampa en metal o se fotocopia en blanco y negro. Este criterio evalúa la robustez de la marca — su capacidad de permanecer identificable incluso cuando las condiciones de producción están lejos de ser ideales.',
      notes: [
        '¿La marca se reduce a un solo color sin perder su identidad?',
        '¿Cómo sobrevive una simulación de fotocopia o fax?',
        '¿Puede la marca bordarse sin perder detalle?',
        '¿Funciona en grabado o repujado?',
        '¿Cuál es la resolución mínima a la que la marca sigue siendo identificable?',
      ],
      quote: 'La verdadera prueba de una marca no es cómo se ve en una presentación, sino cómo se ve en un bolígrafo.',
      quoteSource: 'Norberto Chaves',
    },
    'scalability': {
      title: 'Escalabilidad',
      category: 'technical',
      definition: 'La integridad visual de la marca en todo el rango de tamaños requeridos, del más pequeño al más grande.',
      explanation: 'La escalabilidad se enfoca específicamente en las transiciones de tamaño. A diferencia de la legibilidad que pregunta "¿puede leerse?", la escalabilidad pregunta "¿sigue viéndose como la misma marca?" en cada tamaño. Las marcas con buena escalabilidad mantienen sus relaciones proporcionales, peso visual y carácter esencial ya sea que se muestren en la esfera de un reloj o en un estandarte de estadio. Este criterio identifica el umbral donde el diseño de la marca comienza a descomponerse.',
      notes: [
        '¿A qué tamaño la marca comienza a perder sus proporciones visuales?',
        '¿Los trazos finos desaparecen o los trazos gruesos se vuelven dominantes al escalar?',
        '¿Hay un tamaño donde la marca necesita una versión diferente?',
        '¿La marca mantiene su carácter en ambos extremos del espectro de tamaño?',
        '¿Hay elementos que necesitan eliminarse o simplificarse en ciertas escalas?',
      ],
    },
    'longevity': {
      title: 'Longevidad',
      category: 'identity',
      definition: 'La durabilidad proyectada de la relevancia de la marca a través del tiempo, independiente de tendencias pasajeras.',
      explanation: 'La longevidad evalúa si la marca está diseñada para la permanencia o construida sobre convenciones estilísticas temporales. Las marcas que dependen fuertemente de tendencias de diseño actuales — degradados, sombras, gamas cromáticas específicas o modas tipográficas — corren el riesgo de parecer anticuadas en pocos años. La longevidad favorece marcas arraigadas en principios visuales fundamentales más que en adornos decorativos. Las marcas más duraderas son aquellas que se sienten contemporáneas y atemporales a la vez.',
      notes: [
        '¿La marca depende de tendencias de diseño actuales que la fecharán?',
        '¿Esta marca se vería fuera de lugar en un diseño de hace 20 años?',
        '¿Las elecciones tipográficas son clásicas o pasajeras?',
        '¿La marca tiene elementos decorativos innecesarios sin propósito funcional?',
        '¿La marca está diseñada para evolucionar con gracia, o requerirá un rediseño completo en 5 años?',
      ],
      quote: 'Una marca debe ser de su tiempo sin ser esclava de él.',
      quoteSource: 'Norberto Chaves',
    },
    'semantic-relevance': {
      title: 'Relevancia Semántica',
      category: 'identity',
      definition: 'La coherencia y pertinencia de los signos visuales utilizados en relación con el significado y los valores de la marca.',
      explanation: 'La relevancia semántica examina la relación entre lo que la marca muestra y lo que la marca significa. Cada elemento visual conlleva significado — formas, colores, estilos tipográficos y símbolos se comunican a un nivel subconsciente. Este criterio evalúa si estas señales visuales se alinean con el mensaje previsto de la marca. Una marca puede ser visualmente excelente pero semánticamente incorrecta, comunicando sofisticación para una marca de bajo costo o alegría para una institución seria.',
      notes: [
        '¿Qué comunica la marca más allá del nombre?',
        '¿Las metáforas visuales utilizadas son apropiadas para el sector y los valores de la marca?',
        '¿El lenguaje visual de la marca coincide con su lenguaje verbal?',
        '¿El significado de la marca se interpretaría de manera diferente en distintos contextos culturales?',
        '¿La relación entre forma y significado es directa, metafórica o arbitraria?',
      ],
    },
    'identity-strategy': {
      title: 'Compatibilidad con la Estrategia de Identidad',
      category: 'identity',
      definition: 'La alineación entre la marca y la estrategia de identidad más amplia, incluyendo posicionamiento, personalidad y arquitectura de marca.',
      explanation: 'La compatibilidad con la estrategia de identidad es el criterio más completo. Evalúa si la marca refleja correctamente el posicionamiento de la marca, apoya sus objetivos estratégicos y encaja dentro del sistema de identidad más amplio. Una marca puede obtener una puntuación alta en todos los demás criterios y sin embargo ser incorrecta para la marca si contradice el posicionamiento estratégico. Este criterio conecta la evaluación visual con el contexto de la estrategia de marca.',
      notes: [
        '¿La marca refleja el posicionamiento previsto de la marca?',
        '¿La marca es apropiada para el público objetivo de la marca?',
        '¿La marca funciona dentro de la arquitectura de marca existente?',
        '¿La marca apoya los objetivos estratégicos de la marca?',
        '¿Qué brecha existe entre la percepción prevista de la marca y la percepción comunicada por la marca?',
      ],
      quote: 'Una marca no es una isla. Es el rostro de un sistema estratégico.',
      quoteSource: 'Norberto Chaves',
    },
  },
}

export const messages: Record<string, Messages> = {
  en: enMessages,
  es: esMessages,
}
