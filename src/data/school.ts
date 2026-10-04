/**
 * All school content lives here, separate from presentation.
 *
 * Nireka is a fictional institution created for demonstration purposes.
 * Every name, figure, date and story below is invented for this template.
 *
 * Image values are local asset slugs served from /public/images — see
 * src/lib/image.ts and IMAGE_LICENSES.md for the source and licence of each.
 */

export const images = {
  // Architecture & campus
  hero: 'campus-hero',
  estate: 'estate-house',
  cloister: 'cloister',
  colonnade: 'colonnade',
  courtyard: 'courtyard',
  staircase: 'stone-staircase',
  vault: 'vaulted-ceiling',
  estateDrive: 'estate-drive',
  // Learning spaces
  library: 'library-gothic',
  libraryModern: 'library-modern',
  lectureTheatre: 'lecture-theatre',
  laboratory: 'laboratory',
  glassware: 'glassware',
  workshop: 'workshop',
  study: 'study',
  // Arts
  concertHall: 'concert-hall',
  stage: 'theatre-stage',
  piano: 'piano-keys',
  sheetMusic: 'sheet-music',
  // Sport
  track: 'running-track',
  hoop: 'basketball-hoop',
  tennis: 'tennis-courts',
  pool: 'swimming-pool',
  // Outdoors & everyday
  forest: 'forest-path',
  avenue: 'autumn-avenue',
  meadow: 'meadow-sunrise',
  garden: 'garden-path',
  chess: 'chess-board',
  globe: 'globe',
  books: 'books',
  pencils: 'coloured-pencils',
  crayons: 'crayons',
} as const

export const school = {
  name: 'Nireka International School',
  shortName: 'Nireka',
  tagline: 'Every question opens a door.',
  founded: 2001,
  motto: 'Question. Create. Belong.',
  address: ['Nireka Estate, Ridgeway Lane', 'Vellmoor Hills', 'VH3 7NK'],
  phone: '+1 (415) 555-0142',
  admissionsPhone: '+1 (415) 555-0157',
  email: 'hello@nireka.example',
  admissionsEmail: 'admissions@nireka.example',
  hours: [
    { days: 'Monday – Friday', time: '08:00 – 17:30' },
    { days: 'Saturday', time: '09:30 – 12:30 (visits by appointment)' },
    { days: 'Sunday', time: 'Closed' },
  ],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
  disclaimer:
    'Nireka is a fictional school created to demonstrate this website template. All names, people, figures, events and stories are illustrative.',
}

export const primaryNav = [
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export const allPages = [
  { label: 'Home', to: '/' },
  ...primaryNav.slice(0, 4),
  { label: 'Achievements', to: '/achievements' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Learning', note: 'Our doors first opened in 2001' },
  { value: 1800, suffix: '+', label: 'Students', note: 'From age three to eighteen' },
  { value: 140, suffix: '+', label: 'Teaching Staff', note: 'Around one teacher for every eleven learners' },
  { value: 36, suffix: '', label: 'Nationalities', note: 'Many languages, one campus' },
]

export const stages = [
  {
    id: 'early-years',
    title: 'Early Years',
    ages: 'Ages 3 – 5',
    summary: 'Our youngest learners begin with play, stories and the freedom to wonder out loud.',
    detail:
      'Bright studios open straight onto a walled garden, where mornings move between building, painting, counting games and muddy-boots exploring. Teachers watch closely, follow each child’s interests and turn small discoveries into real learning.',
    highlights: ['Weekly woodland mornings', 'Two-language storytelling', 'Groups of no more than twelve'],
    image: images.crayons,
  },
  {
    id: 'primary',
    title: 'Primary School',
    ages: 'Ages 5 – 11',
    summary: 'Confident readers, careful thinkers and generous friends — built one day at a time.',
    detail:
      'Primary pupils gain secure foundations in reading, writing and mathematics while specialist teachers introduce music, science, languages and design. Termly “Big Question” projects ask children to investigate something that genuinely puzzles them and share what they find.',
    highlights: ['Specialist music, science & languages', 'Termly Big Question projects', 'Outdoor learning every day'],
    image: images.pencils,
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    ages: 'Ages 11 – 16',
    summary: 'A wide, demanding curriculum where students discover what they love and how they think.',
    detail:
      'Students study broadly across the sciences, humanities, languages and the arts, with growing choice each year. Tutor groups stay small, independent study habits are taught explicitly, and a Year 10 Inquiry Project lets every student pursue a question of their own.',
    highlights: ['Fifteen subjects, eight languages', 'Year 10 Inquiry Project', 'Service & leadership pathway'],
    image: images.laboratory,
  },
  {
    id: 'senior',
    title: 'Senior School',
    ages: 'Ages 16 – 18',
    summary: 'Seminar-style study, an independent thesis and guidance toward what comes next.',
    detail:
      'Senior students work in small seminars, write a Senior Thesis on a topic of their choosing and take on real responsibility around the school. A dedicated futures team supports each student as they plan university study, apprenticeships or a gap year with purpose.',
    highlights: ['Independent Senior Thesis', 'Personal futures guidance', 'Leadership across the school'],
    image: images.library,
  },
]

export const disciplines = [
  { title: 'STEM', text: 'Experiments, models and proofs — science and mathematics taught as ways of finding out.' },
  { title: 'Humanities', text: 'History, geography and philosophy that ask students to weigh evidence and argue fairly.' },
  { title: 'Arts', text: 'Studio art, music, drama and dance, practised with craft and shared with an audience.' },
  { title: 'Languages', text: 'Eight languages on offer, taught through conversation, literature and exchange.' },
  { title: 'Research', text: 'Structured inquiry from age eleven, building toward the Senior Thesis.' },
  { title: 'Innovation', text: 'Design, engineering and enterprise in the Ridgeway Making Studios.' },
]

export const facilities = [
  {
    id: 'library',
    title: 'The Reading Hall',
    label: 'Library',
    text: 'Carved shelving, a stone fireplace and quiet corners — the estate’s old hall is now the place students come to read, think and write.',
    image: images.library,
  },
  {
    id: 'science',
    title: 'Science Wing',
    label: 'Science',
    text: 'Ten teaching laboratories and a senior research room, equipped for everything from first experiments to thesis-level investigation.',
    image: images.laboratory,
  },
  {
    id: 'arts',
    title: 'The Concert Hall',
    label: 'Performing Arts',
    text: 'A 450-seat hall, a flexible studio theatre and practice rooms where music, drama and dance rehearse side by side.',
    image: images.concertHall,
  },
  {
    id: 'sports',
    title: 'Sports Grounds',
    label: 'Sports',
    text: 'A six-lane track, courts, playing fields and an indoor pool, used every day by teams and casual players alike.',
    image: images.track,
  },
  {
    id: 'outdoors',
    title: 'Woodland & Gardens',
    label: 'Outdoors',
    text: 'Twenty-eight acres of woodland, meadow and garden paths — a classroom, a playground and a place to slow down.',
    image: images.forest,
  },
  {
    id: 'innovation',
    title: 'Ridgeway Making Studios',
    label: 'Innovation',
    text: 'Workbenches, fabrication tools and design studios where prototypes are sketched, built, tested and rebuilt.',
    image: images.workshop,
  },
]

export const studentLife = [
  {
    title: 'Sports',
    text: 'Twenty-four teams across twelve sports, plus plenty of room for those who simply enjoy the game.',
    image: images.hoop,
  },
  {
    title: 'Arts',
    text: 'Concerts, exhibitions and productions fill the calendar, from first recitals to student-written plays.',
    image: images.piano,
  },
  {
    title: 'Clubs',
    text: 'Around seventy student-run societies meet each week — and new ones start whenever enough people care.',
    image: images.chess,
  },
  {
    title: 'Leadership',
    text: 'House captains, student council and peer mentors shape decisions that affect the whole school.',
    image: images.lectureTheatre,
  },
  {
    title: 'Community',
    text: 'Partnerships with local groups give every student regular, practical ways to be useful.',
    image: images.garden,
  },
  {
    title: 'Culture',
    text: 'Thirty-six nationalities share food, music and language at gatherings throughout the year.',
    image: images.globe,
  },
]

export const achievements = [
  {
    year: '2026',
    title: 'Nireka Young Innovators Showcase',
    body: 'Forty-two student teams presented working prototypes, from a solar seed dryer to a classroom air-quality monitor.',
    category: 'Innovation',
  },
  {
    year: '2026',
    title: 'Nireka Interdisciplinary Research Prize',
    body: 'Awarded to a senior thesis combining river ecology fieldwork with local oral history.',
    category: 'Research',
  },
  {
    year: '2025',
    title: 'Nireka Arts Fellowship',
    body: 'Three students received a year of mentoring and studio time to develop original work for public exhibition.',
    category: 'Arts',
  },
  {
    year: '2025',
    title: 'Nireka Student Leadership Forum',
    body: 'Student delegates designed and ran a two-day forum on wellbeing, attended by families and staff.',
    category: 'Leadership',
  },
  {
    year: '2024',
    title: 'Inter-House Athletics Cup',
    body: 'A record twelve personal bests on a single afternoon, with the cup decided in the final relay.',
    category: 'Athletics',
  },
  {
    year: '2024',
    title: 'Nireka Composers’ Evening',
    body: 'Eleven new pieces written by students were premiered by the school’s chamber ensembles.',
    category: 'Music',
  },
]

export const principal = {
  name: 'Dr. Mireille Kastanis',
  firstLast: 'Mireille Kastanis',
  role: 'Head of School',
  credentials: 'PhD, Education',
  quote:
    'A good school does not hand young people a map. It helps them become the kind of people who can draw their own.',
  message: [
    'Each morning I stand by the old gate and watch the day arrive — a cello case, a half-finished model bridge, two friends still arguing about a book. It is the best part of my job, because it reminds me that learning is something people do together.',
    'At Nireka we expect a lot. We ask students to be curious, honest and brave enough to try things they might not get right the first time. In return, we promise to know them well, to challenge them with care and to notice who they are becoming.',
    'The best way to understand a school is to walk through it. I would be glad to show you ours.',
  ],
  image: images.study,
}

export type NewsItem = {
  slug: string
  title: string
  category: 'Events' | 'Academics' | 'Arts' | 'Sport' | 'Admissions' | 'Community'
  date: string
  excerpt: string
  image: string
  body: string[]
}

export const news: NewsItem[] = [
  {
    slug: 'sustainable-design-studio',
    title: 'Nireka students explore the future of sustainable design',
    category: 'Academics',
    date: '2026-09-24',
    excerpt:
      'A six-week studio challenged Year 11 designers to rethink everyday objects using only reclaimed materials from around campus.',
    image: images.workshop,
    body: [
      'For six weeks this term, the Ridgeway Making Studios became a salvage yard. Year 11 design students were given one rule: every prototype had to be built from materials already destined for the skip.',
      'Teams turned offcuts of timber into stackable stools, old bicycle inner tubes into hinges and broken projector housings into lamp shades. Each group documented the full life of its object, from sourcing to the point where it could be taken apart again.',
      'The studio ended with a public critique, where visiting designers from the local community questioned students on durability, cost and repairability.',
      '“The hardest part was deciding what not to make,” one student reflected. “Good design turned out to be mostly editing.”',
    ],
  },
  {
    slug: 'annual-ideas-forum',
    title: 'Nireka hosts its annual Ideas Forum',
    category: 'Events',
    date: '2026-10-09',
    excerpt: 'Senior students presented thesis research to an audience of families, staff and younger pupils.',
    image: images.lectureTheatre,
    body: [
      'The lecture theatre was full for this year’s Ideas Forum, the evening where senior students share the questions they have spent a year pursuing.',
      'Topics ranged from the acoustics of the old Reading Hall to the economics of community-owned energy and the history of handwriting. Each speaker had ten minutes to present and ten minutes to answer questions from the floor.',
      'Younger students were encouraged to ask the hardest questions — and many did.',
    ],
  },
  {
    slug: 'new-season-of-discovery',
    title: 'A new season of discovery begins on campus',
    category: 'Community',
    date: '2026-09-01',
    excerpt: 'New families, new faces and a long-standing tradition opened the school year beneath the avenue of beeches.',
    image: images.avenue,
    body: [
      'The school year began, as it always does, with the Avenue Walk — every student and member of staff following the beech-lined path from the old gate to the main lawn.',
      'This year we welcomed over two hundred new students and their families, who joined a welcome breakfast and campus tours led by student ambassadors.',
      'Classes began the following morning, though several of our youngest learners were more interested in the conkers.',
    ],
  },
  {
    slug: 'autumn-concert',
    title: 'Autumn Concert brings strings, song and student composers to the hall',
    category: 'Arts',
    date: '2026-10-22',
    excerpt: 'An evening of chamber music, choral works and three premieres written by students.',
    image: images.concertHall,
    body: [
      'The Autumn Concert returns to the Concert Hall with a programme built around new music. Three student composers will hear their pieces performed by the school’s string and wind ensembles for the first time.',
      'The evening also features the Senior Choir and a short interval recital in the foyer. Entry is free for families; seats can be reserved through the school office.',
    ],
  },
  {
    slug: 'open-morning-2027',
    title: 'Open Morning for families joining in 2027–28',
    category: 'Admissions',
    date: '2026-11-14',
    excerpt: 'Tour the estate, visit lessons in progress and meet the people who would teach your child.',
    image: images.estate,
    body: [
      'Families exploring Nireka for the 2027–28 school year are invited to our Autumn Open Morning.',
      'The morning begins with a short welcome from the Head of School, followed by student-led tours, visits to lessons and time to speak with teachers and our admissions team over coffee.',
      'Places are limited so that every family can ask questions. Please register through the Contact page.',
    ],
  },
  {
    slug: 'house-athletics-day',
    title: 'House Athletics Day ends in a photo finish',
    category: 'Sport',
    date: '2026-09-17',
    excerpt: 'After an afternoon of races, throws and jumps, the House Cup came down to the final relay.',
    image: images.track,
    body: [
      'More than a thousand students took part in House Athletics Day, competing in thirty-six events across the track and field.',
      'The four houses were separated by just two points going into the final relay, which was decided by less than a stride.',
      'Afterwards, the traditional staff race offered a gentler — and considerably slower — conclusion.',
    ],
  },
]

export const events = [
  { date: '2026-10-22', title: 'Autumn Concert', time: '19:00', place: 'Concert Hall' },
  { date: '2026-11-14', title: 'Open Morning', time: '09:30', place: 'Main Lawn' },
  { date: '2026-11-26', title: 'Festival of Cultures', time: '17:30', place: 'Reading Hall' },
  { date: '2026-12-11', title: 'Winter Lantern Walk', time: '16:30', place: 'Beech Avenue' },
]

export type GalleryItem = {
  image: string
  alt: string
  category: 'Campus' | 'Learning' | 'Arts' | 'Sport' | 'Outdoors'
  size: 'feature' | 'tall' | 'wide' | 'standard'
}

export const gallery: GalleryItem[] = [
  { image: images.study, alt: 'The panelled study with its round reading table', category: 'Campus', size: 'feature' },
  { image: images.library, alt: 'Carved shelving and a stone fireplace in the Reading Hall', category: 'Learning', size: 'tall' },
  { image: images.concertHall, alt: 'Rows of seats facing the Concert Hall stage', category: 'Arts', size: 'standard' },
  { image: images.hoop, alt: 'A basketball hoop against a clear sky', category: 'Sport', size: 'standard' },
  { image: images.cloister, alt: 'Sunlight falling through a stone cloister', category: 'Campus', size: 'wide' },
  { image: images.forest, alt: 'A woodland path through tall trees', category: 'Outdoors', size: 'tall' },
  { image: images.glassware, alt: 'Laboratory glassware ready for an experiment', category: 'Learning', size: 'standard' },
  { image: images.piano, alt: 'Close view of piano keys', category: 'Arts', size: 'standard' },
  { image: images.avenue, alt: 'An avenue of trees in autumn colour', category: 'Outdoors', size: 'wide' },
  { image: images.colonnade, alt: 'Carved stone arcade along the estate house', category: 'Campus', size: 'standard' },
  { image: images.tennis, alt: 'Tennis courts on a bright afternoon', category: 'Sport', size: 'tall' },
  { image: images.sheetMusic, alt: 'Pages of sheet music', category: 'Arts', size: 'standard' },
  { image: images.estateDrive, alt: 'The driveway leading up to the estate house', category: 'Campus', size: 'standard' },
  { image: images.meadow, alt: 'Morning light across the meadow', category: 'Outdoors', size: 'wide' },
  { image: images.pool, alt: 'Swimming lanes in the indoor pool', category: 'Sport', size: 'standard' },
  { image: images.staircase, alt: 'Worn stone steps and a carved balustrade', category: 'Campus', size: 'standard' },
]

export const timeline = [
  { year: '2001', title: 'Doors open', text: 'Nireka welcomes its first 160 students to a restored hillside estate.' },
  { year: '2005', title: 'A senior school', text: 'The first senior class begins, with the estate’s old hall reborn as a library.' },
  { year: '2010', title: 'A wider world', text: 'Students from more than twenty countries now share the campus.' },
  { year: '2015', title: 'The Concert Hall', text: 'A purpose-built hall gives music and drama a permanent home.' },
  { year: '2020', title: 'Learning outdoors', text: 'The woodland is opened as a classroom for every year group.' },
  { year: '2024', title: 'Making Studios', text: 'New design and engineering studios open in the Ridgeway wing.' },
]

export const values = [
  { title: 'Curiosity', text: 'We treat questions as the beginning of learning, not an interruption to it.' },
  { title: 'Honesty', text: 'We tell the truth kindly, own our mistakes and learn from them.' },
  { title: 'Courage', text: 'We attempt difficult things and stand beside people who need it.' },
  { title: 'Belonging', text: 'Everyone here is known by name and welcome as they are.' },
]

export const leadership = [
  { name: 'Dr. Mireille Kastanis', role: 'Head of School' },
  { name: 'Tobias Wrenfield', role: 'Deputy Head, Wellbeing' },
  { name: 'Dr. Anouk Pellisier', role: 'Director of Learning' },
  { name: 'Rafael Ostrand', role: 'Director of Admissions' },
]

export const admissionSteps = [
  { title: 'Enquire', text: 'Tell us a little about your child and we will reply within two working days.' },
  { title: 'Visit', text: 'Come to an Open Morning or book a personal tour at a time that suits you.' },
  { title: 'Apply', text: 'Complete a short application and share recent school reports.' },
  { title: 'Meet', text: 'Your child spends a relaxed day with us, including a conversation and a few activities.' },
  { title: 'Welcome', text: 'Decisions follow within three weeks, then a welcome day for new families.' },
]

export const keyDates = [
  { date: '14 Nov 2026', label: 'Autumn Open Morning' },
  { date: '29 Jan 2027', label: 'Priority application deadline' },
  { date: 'Feb 2027', label: 'Visit & meeting days' },
  { date: 'Mar 2027', label: 'Decisions shared with families' },
]

export const fees = [
  { stage: 'Early Years', ages: '3 – 5', day: '$16,800', boarding: '—' },
  { stage: 'Primary School', ages: '5 – 11', day: '$22,500', boarding: '—' },
  { stage: 'Secondary School', ages: '11 – 16', day: '$28,900', boarding: '$47,400' },
  { stage: 'Senior School', ages: '16 – 18', day: '$31,600', boarding: '$50,200' },
]

export const faqs = [
  {
    q: 'How early should we begin the process?',
    a: 'Most families contact us around a year before they hope to start. Applications for 2027–28 received by 29 January 2027 are considered first, and we continue to review applications while places are available.',
  },
  {
    q: 'Can students join partway through the year?',
    a: 'Often, yes. Families relocate at all times of year, so we consider mid-year applications whenever there is space in the right year group.',
  },
  {
    q: 'Does my child need to speak fluent English?',
    a: 'Not in the younger years. From age eleven we look at English confidence during the visit day and offer additional language support where it would help.',
  },
  {
    q: 'Is financial support available?',
    a: 'We offer means-tested bursaries at every stage, and a limited number of awards from age eleven for exceptional promise in academics, the arts or sport.',
  },
  {
    q: 'Is boarding an option?',
    a: 'Full and weekly boarding is available from age eleven in two boarding houses, each looked after by resident house staff.',
  },
]

export const dayInLife = [
  { time: '08:00', title: 'Arrival', text: 'Breakfast, a walk up the avenue, a word with your tutor.' },
  { time: '08:40', title: 'Morning Lessons', text: 'Small classes and time to think things through properly.' },
  { time: '12:30', title: 'Lunch & Clubs', text: 'A shared meal, then rehearsals, debates or the chess ladder.' },
  { time: '15:40', title: 'Activities', text: 'Training, studio time, the woodland or the making studios.' },
  { time: '18:00', title: 'Evening', text: 'Prep, supper in house and the rest of the evening with friends.' },
]

export const clubs = [
  'Debating Society', 'Astronomy Club', 'Robotics Lab', 'Chamber Choir', 'Jazz Band', 'Eco Council',
  'Film Club', 'Creative Writing', 'Chess Ladder', 'Climbing', 'Mandarin Circle', 'Student Enterprise',
  'Photography', 'Philosophy Circle', 'Coding Club', 'Garden Crew',
]

export const testimonials = [
  {
    quote: 'I arrived convinced I was bad at science. My teachers never let me settle for that story, and I now study engineering.',
    name: 'Nireka graduate',
    detail: 'Now studying engineering',
  },
  {
    quote: 'What I remember most is being trusted — to run a club, to plan an event, to get things wrong and fix them.',
    name: 'Former house captain',
    detail: 'Now working in public health',
  },
  {
    quote: 'Our children walk in happy and come home full of questions. As parents, that tells us everything.',
    name: 'Nireka parent',
    detail: 'Two children in the Primary School',
  },
]

export const outcomes = [
  { value: '1:11', label: 'Teacher to student ratio' },
  { value: '18', label: 'Average class size' },
  { value: '70', label: 'Student-run clubs & societies' },
  { value: '28', label: 'Acres of woodland & grounds' },
]

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-GB', opts)
}
