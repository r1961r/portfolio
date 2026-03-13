const skills = {
  'Languages': ['Python', 'Java', 'C#', 'C++', 'PHP', 'JavaScript (ES6)', 'TypeScript'],
  'Frameworks': ['Spring Boot', 'Spring Cloud', 'React', 'React Native', 'Vue.js', 'Django', 'Flask', 'Angular', 'ASP.NET', 'Laravel', 'LangChain'],
  'Databases': ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB'],
  'Tools & DevOps': ['Git', 'Docker', 'GitLab CI/CD', 'GitHub Actions', 'Power BI', 'Talend (ETL)', 'AirFlow', 'Odoo (ERP)'],
  'Methodologies': ['Agile (Scrum)', 'CI/CD', 'REST API', 'UML', 'CRISP-DM'],
}

const certifications = [
  { title: 'Advanced Spring Cloud Microservices & Deployment with Docker', issuer: 'Packt' },
  { title: 'Advanced React', issuer: 'Meta' },
  { title: 'React Native', issuer: 'Meta' },
  { title: 'React Basics', issuer: 'Meta' },
  { title: 'Machine Learning with Python', issuer: 'IBM' },
  { title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', issuer: 'IBM' },
  { title: 'Introduction to Git and GitHub', issuer: 'Google' },
  { title: 'Virtual Networks in Azure', issuer: 'Whizlabs' },
  { title: 'Introduction to Java and Object-Oriented Programming', issuer: 'University of Pennsylvania' },
  { title: 'Introduction to CSS3', issuer: 'University of Michigan' },
  { title: 'Introduction to HTML5', issuer: 'University of Michigan' },
  { title: 'Interactivity with JavaScript', issuer: 'University of Michigan' },
  { title: 'The Structured Query Language (SQL)', issuer: 'University of Colorado Boulder' },
  { title: 'Programming for Everybody (Getting Started with Python)', issuer: 'University of Michigan' },
  { title: 'HTML, CSS, and Javascript for Web Developers', issuer: 'Johns Hopkins University' },
  { title: 'The Unix Workbench', issuer: 'Johns Hopkins University' },
  { title: 'Software Engineering: Software Design and Project Management', issuer: 'The Hong Kong University of Science and Technology' },
  { title: 'Introduction à la programmation orientée objet (en C++)', issuer: 'École Polytechnique Fédérale de Lausanne' },
  { title: 'La recherche documentaire', issuer: 'École Polytechnique' },
  { title: 'Villes africaines: Environnement et enjeux de développement durable', issuer: 'École Polytechnique Fédérale de Lausanne' },
  { title: 'Impact Measurement & Management for the SDGs', issuer: 'Duke University' },
  { title: 'The Arduino Platform and C Programming', issuer: 'University of California, Irvine' },
]

const education = [
  {
    degree: "Cycle d'ingénieur — Informatique et Réseaux (MIAGE)",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    location: 'Rabat, Maroc',
    period: '2021 – Present',
  },
  {
    degree: 'Classes Préparatoires (MIP)',
    school: 'Faculté des Sciences et Techniques',
    location: 'Tanger',
    period: '2020 – 2021',
  },
  {
    degree: 'Baccalauréat Sciences Physiques — Mention Très Bien',
    school: 'Lycée El Khiyam',
    location: 'Salé, Maroc',
    period: '2020',
  },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      {/* Header */}
      <div className="mb-14 sm:mb-20">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4">About Me</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-6">
          Engineering student.<br />
          <span className="italic">Builder at heart.</span>
        </h1>
        <p className="text-base sm:text-lg text-ink/60 max-w-2xl leading-relaxed">
          I'm Raouane Allawi, a final-year software engineering student at EMSI Rabat,
          specializing in full stack development. I build web applications end-to-end —
          from REST APIs in Spring Boot to modern UIs in React, with a growing interest
          in machine learning and microservices architecture.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-sm text-ink/50">
          <span>📍 Salé, Morocco</span>
          <span>📧 rawan0.0allawi@gmail.com</span>
          <span>📞 +212 713 197 771</span>
          <a href="https://www.linkedin.com/in/raouane-allawi-4511b5308?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"
            className="hover:text-accent transition-colors">🔗 LinkedIn</a>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-14 sm:mb-20" style={{ borderTop: '1px solid #1A1A2E1A', paddingTop: '3rem' }}>
        <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-8">Technical Skills</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-mono tracking-widest text-accent uppercase mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-14 sm:mb-20" style={{ borderTop: '1px solid #1A1A2E1A', paddingTop: '3rem' }}>
        <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-8">Languages</p>
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {[
            { lang: 'Arabic', level: 'Native' },
            { lang: 'French', level: 'Bilingual' },
            { lang: 'English', level: 'Advanced' },
          ].map(({ lang, level }) => (
            <div key={lang} className="flex items-baseline gap-2">
              <span className="font-display text-xl sm:text-2xl text-ink">{lang}</span>
              <span className="font-mono text-xs text-accent">{level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-14 sm:mb-20" style={{ borderTop: '1px solid #1A1A2E1A', paddingTop: '3rem' }}>
        <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-8">Education</p>
        <div className="space-y-7">
          {education.map(({ degree, school, location, period }) => (
            <div key={degree} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <span className="font-mono text-xs text-ink/40 sm:w-28 sm:pt-1 sm:shrink-0">{period}</span>
              <div>
                <h3 className="font-medium text-ink text-sm sm:text-base">{degree}</h3>
                <p className="text-sm text-ink/60 mt-0.5">{school} — {location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section style={{ borderTop: '1px solid #1A1A2E1A', paddingTop: '3rem' }}>
        <div className="flex items-baseline gap-3 mb-8">
          <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase">Certifications</p>
          <span className="font-mono text-xs text-accent">{certifications.length} total</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {certifications.map(({ title, issuer }) => (
            <div key={title} className="p-4 sm:p-5 project-card flex gap-3 sm:gap-4">
              <span className="text-accent mt-0.5 shrink-0 text-xs">✦</span>
              <div>
                <p className="text-sm font-medium text-ink leading-snug">{title}</p>
                <p className="text-xs text-ink/50 mt-1">{issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}