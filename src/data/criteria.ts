import type { Criterion } from '../types'

export const criteriaData: Criterion[] = [
  {
    id: 'graphic-quality',
    number: 1,
    title: 'Graphic Quality',
    category: 'technical',
    definition: 'The formal excellence of the mark as a piece of graphic design, independent of its function as a brand identifier.',
    explanation: 'Graphic quality evaluates the intrinsic visual merit of the mark — the precision of its curves, the harmony of its proportions, the intelligence of its construction. A mark may communicate effectively yet still suffer from poor resolution, uneven stroke weights, or awkward spatial relationships. This criterion separates mere legibility from true graphic refinement.',
    evaluationNotes: [
      'Are the curves mathematically smooth or visibly irregular?',
      'Do the proportions feel intentional or accidental?',
      'Is the stroke weight consistent across the entire mark?',
      'Are there visible optical corrections or does it rely on mechanical precision?',
      'How does the mark behave when examined at extreme magnification?'
    ],
    quote: {
      text: 'The quality of a mark is not in its originality but in the precision of its execution.',
      source: 'Norberto Chaves'
    }
  },
  {
    id: 'legibility',
    number: 2,
    title: 'Legibility',
    category: 'technical',
    definition: 'The ease with which the mark can be read and recognized across different sizes and contexts.',
    explanation: 'Legibility is the most fundamental technical requirement. A mark that cannot be read has failed its primary function. This criterion examines how the mark performs at various sizes — from massive billboard applications to tiny favicon renderings. True legibility means the mark remains recognizable even when reduced to its minimum functional size, without relying on color or fine detail.',
    evaluationNotes: [
      'At what size does the mark begin to lose its recognizability?',
      'Are the internal spaces (counters) large enough to remain open at small sizes?',
      'Does the mark work in positive and negative versions equally?',
      'Is the mark dependent on fine strokes that will disappear at small scales?',
      'How does the monochrome version compare to the full-color version?'
    ]
  },
  {
    id: 'pregnance',
    number: 3,
    title: 'Pregnance',
    category: 'technical',
    definition: 'The perceptual force of the mark — its ability to be retained in memory after brief exposure.',
    explanation: 'Pregnance (from the German "Prägnanz") measures the memorability and perceptual impact of a mark. A pregnant form is one that the mind can grasp quickly and retain easily. This is related to Gestalt principles of good form — simplicity, closure, continuity, and symmetry. The most pregnant marks are those that can be described in a few words and drawn from memory after a single viewing.',
    evaluationNotes: [
      'Can this mark be described verbally in one sentence?',
      'Would a viewer be able to redraw it from memory after one glance?',
      'Does the mark rely on a strong gestalt or is it a collection of unrelated elements?',
      'Is the form simple enough to be retained but distinctive enough to be recognized?',
      'Does the mark have a single visual anchor point or multiple competing focal points?'
    ],
    quote: {
      text: 'A mark should be describable in a telegram.',source: 'Norberto Chaves'
    }
  },
  {
    id: 'singularity',
    number: 4,
    title: 'Singularity',
    category: 'identity',
    definition: 'The degree of differentiation of the mark within its competitive and categorical context.',
    explanation: 'Singularity measures how distinct a mark is from its competitors. A mark may be well-executed yet generic — following the visual conventions of its category so closely that it fails to create a unique identity. True singularity means the mark occupies a visual territory that belongs to no other brand. This is not about novelty for its own sake, but about creating a distinctive visual property that can function as reliable identification.',
    evaluationNotes: [
      'Does the mark share visual patterns with competitors in the same category?',
      'If placed among competitor marks, does it stand out or blend in?',
      'Is the mark\'s distinctive feature ownable, or is it a generic symbol?',
      'Could the mark be confused with any existing mark in any category?',
      'Does the singularity come from the concept, the execution, or both?'
    ],
    quote: {
      text: 'A mark must be singular not because it is strange, but because it is unmistakably itself.',
      source: 'Norberto Chaves'
    }
  },
  {
    id: 'versatility',
    number: 5,
    title: 'Versatility',
    category: 'technical',
    definition: 'The capacity of the mark to function effectively across all required media and applications.',
    explanation: 'Versatility tests the mark\'s adaptability to different formats and contexts. A truly versatile mark works as well on a 16x16 favicon as on a 20-meter building facade. It performs in digital, print, environmental, and motion contexts. Versatility is not about having multiple versions of the logo, but about the core mark itself being flexible enough to handle diverse requirements without losing its identity.',
    evaluationNotes: [
      'Does the mark work at favicon size without losing key details?',
      'How does it perform as a social media profile picture?',
      'Is the mark adaptable to vertical and horizontal formats?',
      'Does it work as a standalone icon without the wordmark?',
      'Can the mark be animated without breaking its visual logic?'
    ]
  },
  {
    id: 'reproducibility',
    number: 6,
    title: 'Reproducibility',
    category: 'technical',
    definition: 'The mark\'s ability to maintain its integrity across different production methods and material constraints.',
    explanation: 'Reproducibility examines how well the mark survives real-world production constraints. A mark that looks perfect on screen may fail when embroidered on a uniform, stamped into metal, or photocopied in black and white. This criterion evaluates the mark\'s robustness — its ability to remain identifiable even when production conditions are far from ideal.',
    evaluationNotes: [
      'Does the mark reduce to one color without losing its identity?',
      'How does it survive a photocopy or fax simulation?',
      'Can the mark be embroidered without losing detail?',
      'Does it work in engraving or debossing?',
      'What is the minimum resolution at which the mark remains identifiable?'
    ],
    quote: {
      text: 'The true test of a mark is not how it looks on a presentation board, but how it looks on a ballpoint pen.',
      source: 'Norberto Chaves'
    }
  },
  {
    id: 'scalability',
    number: 7,
    title: 'Scalability',
    category: 'technical',
    definition: 'The mark\'s visual integrity across the full range of required sizes, from smallest to largest.',
    explanation: 'Scalability focuses specifically on size transitions. Unlike legibility which asks "can it be read?", scalability asks "does it still look like the same mark?" at every size. Marks with good scalability maintain their proportional relationships, visual weight, and essential character whether displayed on a watch face or a stadium banner. This criterion identifies the threshold where the mark\'s design begins to break down.',
    evaluationNotes: [
      'At what size does the mark begin to lose its visual proportions?',
      'Do thin strokes disappear or thick strokes become dominant when scaled?',
      'Is there a size where the mark needs a different version?',
      'Does the mark maintain its character at both extremes of the size spectrum?',
      'Are there elements that need to be removed or simplified at certain scales?'
    ]
  },
  {
    id: 'longevity',
    number: 8,
    title: 'Longevity',
    category: 'identity',
    definition: 'The projected durability of the mark\'s relevance over time, independent of passing trends.',
    explanation: 'Longevity evaluates whether the mark is designed for permanence or built on temporary stylistic conventions. Marks that rely heavily on current design trends — gradients, drop shadows, specific color gradients, or typographic fashions — risk appearing dated within a few years. Longevity favors marks rooted in fundamental visual principles rather than decorative embellishments. The most durable marks are those that feel both contemporary and timeless.',
    evaluationNotes: [
      'Does the mark rely on current design trends that will date it?',
      'Would this mark look out of place in a design from 20 years ago?',
      'Are the typographic choices classic or fashionable?',
      'Does the mark have unnecessary decorative elements that serve no functional purpose?',
      'Is the mark designed to evolve gracefully, or will it require a complete redesign in 5 years?'
    ],
    quote: {
      text: 'A mark should be of its time without being a slave to it.',
      source: 'Norberto Chaves'
    }
  },
  {
    id: 'semantic-relevance',
    number: 9,
    title: 'Semantic Relevance',
    category: 'identity',
    definition: 'The coherence and appropriateness of the visual signs used in relation to the brand\'s meaning and values.',
    explanation: 'Semantic relevance examines the relationship between what the mark shows and what the brand means. Every visual element carries meaning — shapes, colors, typographic styles, and symbols all communicate at a subconscious level. This criterion evaluates whether these visual signals align with the brand\'s intended message. A mark can be visually excellent yet semantically wrong, communicating sophistication for a low-cost brand or playfulness for a serious institution.',
    evaluationNotes: [
      'What does the mark communicate beyond the brand name?',
      'Are the visual metaphors used appropriate to the brand\'s sector and values?',
      'Does the mark\'s visual language match the brand\'s verbal language?',
      'Would the mark\'s meaning be interpreted differently in different cultural contexts?',
      'Is the relationship between form and meaning direct, metaphorical, or arbitrary?'
    ]
  },
  {
    id: 'identity-strategy',
    number: 10,
    title: 'Identity Strategy Compatibility',
    category: 'identity',
    definition: 'The alignment between the mark and the broader identity strategy, including positioning, personality, and brand architecture.',
    explanation: 'Identity strategy compatibility is the most comprehensive criterion. It evaluates whether the mark correctly reflects the brand\'s positioning, supports its strategic objectives, and fits within the broader identity system. A mark may score highly on all other criteria yet still be wrong for the brand if it contradicts the strategic positioning. This criterion connects the visual evaluation to the brand strategy context.',
    evaluationNotes: [
      'Does the mark reflect the brand\'s intended positioning?',
      'Is the mark appropriate for the brand\'s target audience?',
      'Does the mark work within the existing brand architecture?',
      'Does the mark support the brand\'s strategic objectives?',
      'What gap exists between the brand\'s intended perception and the mark\'s communicated perception?'
    ],
    quote: {
      text: 'A mark is not an island. It is the face of a strategic system.',
      source: 'Norberto Chaves'
    }
  }
]
