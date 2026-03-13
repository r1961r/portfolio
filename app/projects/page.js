const projects = [
  {
    year: '2026',
    title: 'Anemia Detection System',
    subtitle: 'AI / Machine Learning',
    description: 'An intelligent system that detects anemia based on hematological parameters using machine learning models. Follows the CRISP-DM methodology for structured data science workflow.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'CRISP-DM'],
    type: 'AI & ML',
  },
  {
    year: '2026',
    title: 'E-Commerce Microservices Platform',
    subtitle: 'Full Stack — Distributed Architecture',
    description: 'A production-grade e-commerce application built on a microservices architecture with Spring Cloud. Features independent services for cart, orders, product catalog, and user management.',
    stack: ['Spring Boot', 'Spring Cloud', 'React', 'PostgreSQL', 'REST API', 'Docker'],
    type: 'Full Stack',
    featured: true,
  },
  {
    year: '2025',
    title: 'ONCF Intranet + AI Chatbot',
    subtitle: 'Internship — ONCF',
    description: 'Internal intranet application for the Moroccan national railway company with an integrated intelligent chatbot for employee support. Included full test suite and technical documentation.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Bootstrap'],
    type: 'Full Stack',
    professional: true,
  },
  {
    year: '2025',
    title: 'Bankati — Banking Application',
    subtitle: 'Backend — Financial System',
    description: 'A banking application for managing accounts and credits. Built with a robust Java EE backend, Hibernate ORM, and Thymeleaf for server-side rendering.',
    stack: ['Java', 'J2EE', 'Spring Boot', 'UML', 'Thymeleaf'],
    type: 'Backend',
  },
  {
    year: '2025',
    title: 'EMSI Rabat Management App',
    subtitle: 'Full Stack — Education',
    description: 'A full management application for EMSI Rabat covering internal school operations, built with Spring Boot and Thymeleaf.',
    stack: ['Java', 'Spring Boot', 'UML', 'Thymeleaf', 'SQL Workbench'],
    type: 'Full Stack',
  },
  {
    year: '2024',
    title: 'Restaurant Management App',
    subtitle: 'Full Stack — .NET',
    description: 'A complete web application for restaurant management including menus, orders, and staff. Built with ASP.NET Core and SQL Server.',
    stack: ['C#', '.NET', 'React', 'SQL Server', 'Bootstrap'],
    type: 'Full Stack',
  },
  {
    year: '2024',
    title: 'DeliMate — Delivery Management',
    subtitle: 'Full Stack — Logistics',
    description: 'A delivery management application handling orders, routes, and delivery agents. Built with Django backend and a clean Tailwind UI.',
    stack: ['Python', 'Django', 'Tailwind CSS', 'SQLite'],
    type: 'Full Stack',
  },
  {
    year: '2024',
    title: 'SGMeetings — Reservation System',
    subtitle: 'Internship — SalamGaz',
    description: 'A meeting room reservation web application developed during internship at SalamGaz. Supports room booking, scheduling, and user management.',
    stack: ['Python', 'Django', 'Bootstrap', 'MySQL'],
    type: 'Full Stack',
    professional: true,
  },
  {
    year: '2024',
    title: 'Hotel Management Application',
    subtitle: 'Desktop — Java',
    description: 'A desktop application for managing hotel operations including room bookings, guests, and staff, built with Java Swing.',
    stack: ['Java', 'Swing'],
    type: 'Desktop',
  },
  {
    year: '2023',
    title: 'Mobile Quiz App',
    subtitle: 'Mobile — Android',
    description: 'An Android quiz application with multiple categories, scoring system, and dynamic question loading, built natively with Java and Android Studio.',
    stack: ['Java', 'Android Studio'],
    type: 'Mobile',
  },
]

const typeColors = {
  'AI & ML':    'bg-purple-50 text-purple-700 border-purple-200',
  'Full Stack': 'bg-blue-50 text-blue-700 border-blue-200',
  'Backend':    'bg-green-50 text-green-700 border-green-200',
  'Desktop':    'bg-gray-50 text-gray-700 border-gray-200',
  'Mobile':     'bg-orange-50 text-orange-700 border-orange-200',
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      <div className="mb-14 sm:mb-20">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4">Portfolio</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
          Projects I've<br />
          <span className="italic">built.</span>
        </h1>
        <p className="mt-5 text-ink/60 max-w-xl text-sm sm:text-base">
          A mix of professional internship work and academic projects — all built with real-world tools.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
        {Object.entries(typeColors).map(([type, cls]) => (
          <span key={type} className={`text-xs px-3 py-1 border rounded-sm font-mono ${cls}`}>{type}</span>
        ))}
        <span className="text-xs px-3 py-1 border border-amber-200 bg-amber-50 text-amber-700 rounded-sm font-mono">Professional</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map(({ year, title, subtitle, description, stack, type, featured, professional }) => (
          <div key={title} className={`p-5 sm:p-6 project-card ${featured ? 'md:col-span-2' : ''}`}>

            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs px-2.5 py-0.5 border rounded-sm font-mono ${typeColors[type]}`}>{type}</span>
                {professional && (
                  <span className="text-xs px-2.5 py-0.5 border border-amber-200 bg-amber-50 text-amber-700 rounded-sm font-mono">Professional</span>
                )}
                {featured && (
                  <span className="text-xs px-2.5 py-0.5 bg-accent text-cream font-mono">Featured</span>
                )}
              </div>
              <span className="font-mono text-xs text-ink/40">{year}</span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl text-ink mb-1">{title}</h2>
            <p className="text-xs font-mono text-accent mb-3">{subtitle}</p>
            <p className="text-sm text-ink/60 leading-relaxed mb-4">{description}</p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {stack.map(t => (
                <span key={t} className="skill-tag text-ink/60">{t}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}