const services = [
  {
    number: '01',
    title: 'Full Stack Web Development',
    description:
      'End-to-end web application development — REST APIs with Spring Boot or Django on the backend, and modern React or Angular UIs on the frontend. Clean architecture, tested code, documented APIs.',
    includes: ['REST API Design', 'Database Modeling', 'Frontend Development', 'Authentication & Security'],
  },
  {
    number: '02',
    title: 'Backend & API Development',
    description:
      'Robust and scalable backend systems. Microservices with Spring Cloud, monolithic apps with Django or Laravel, and custom REST APIs connecting your frontend to your data.',
    includes: ['Spring Boot / Spring Cloud', 'Django / Flask', 'PostgreSQL / MySQL', 'Docker Deployment'],
  },
  {
    number: '03',
    title: 'Machine Learning Integration',
    description:
      'Bring intelligence into your applications. From data preprocessing and model training to deploying ML models as APIs your application can call in production.',
    includes: ['Data Analysis (Pandas, NumPy)', 'Model Training (Scikit-learn)', 'Flask ML APIs', 'Power BI Dashboards'],
  },
  {
    number: '04',
    title: 'Database Design & Optimization',
    description:
      'Solid data foundations. I design normalized schemas, write efficient queries, and set up databases that scale — with experience across relational and document stores.',
    includes: ['MySQL / PostgreSQL', 'SQL Server / Oracle', 'MongoDB', 'ETL with Talend'],
  },
]

const process = [
  { step: 'Discovery', description: 'We discuss your project, goals, and technical requirements.' },
  { step: 'Proposal', description: 'I send a clear scope, timeline, and pricing.' },
  { step: 'Build', description: 'Regular updates and demos as I build your project.' },
  { step: 'Delivery', description: 'Clean code, documentation, and deployment.' },
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="mb-20">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4">Services</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
          What I can<br />
          <span className="italic">build for you.</span>
        </h1>
        <p className="mt-6 text-ink/60 max-w-xl">
          Available for freelance projects and internship opportunities. I work best
          on web apps, APIs, and data-driven systems.
        </p>
      </div>

      {/* Services */}
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {services.map(({ number, title, description, includes }) => (
          <div key={number} className="p-7 project-card">
            <span className="font-mono text-3xl text-ink/15 font-bold">{number}</span>
            <h2 className="font-display text-2xl text-ink mt-2 mb-3">{title}</h2>
            <p className="text-sm text-ink/60 leading-relaxed mb-5">{description}</p>
            <ul className="space-y-1.5">
              {includes.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                  <span className="text-accent text-xs">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Process */}
      <section style={{ borderTop: '1px solid #1A1A2E1A', paddingTop: '4rem' }}>
        <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-12">How It Works</p>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map(({ step, description }, i) => (
            <div key={step}>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="h-px flex-1 bg-ink/10" />
              </div>
              <h3 className="font-medium text-ink mb-2">{step}</h3>
              <p className="text-sm text-ink/55 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 p-10 bg-ink text-cream flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl">Ready to start a project?</h2>
          <p className="text-cream/60 mt-2 text-sm">Let's talk about what you need.</p>
        </div>
        <a href="/contact"
          className="px-8 py-3.5 border border-cream text-cream text-sm font-medium
            hover:bg-cream hover:text-ink transition-all duration-200 whitespace-nowrap">
          Contact Me →
        </a>
      </section>

    </div>
  )
}
