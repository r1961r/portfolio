import Link from 'next/link'
import Image from 'next/image'

const techStack = ['Spring Boot', 'React', 'Python', 'PostgreSQL', 'Docker', 'REST API']

const highlights = [
  { number: '10+', label: 'Academic Projects' },
  { number: '20+', label: 'Certifications' },
  { number: '3', label: 'Internships' },
  { number: '10+', label: 'Technologies' },
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">

      <section className="min-h-[88vh] flex flex-col justify-center pt-12 pb-8">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10">

          {/* Photo — top on mobile */}
          <div className="flex-shrink-0 md:order-2">
            <div style={{width:'clamp(140px, 40vw, 220px)', height:'clamp(180px, 50vw, 280px)', position:'relative', overflow:'hidden', border:'1px solid #1A1A2E1A'}}>
              <Image
                src="/raouanep.jpeg"
                alt="Raouane Allawi"
                fill
                style={{objectFit:'cover', objectPosition:'center top'}}
                priority
              />
              <div style={{position:'absolute',bottom:'10px',right:'10px',width:'24px',height:'24px',border:'2px solid #E63946'}} />
            </div>
          </div>

          {/* Left: text */}
          <div className="flex-1 md:order-1 w-full">

            <div className="flex flex-wrap gap-2 mb-5">
              <span className="animate-fade-up stagger-1 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] uppercase px-3 py-1.5 border border-accent text-accent">
                <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'currentColor',display:'inline-block'}}></span>
                Intern at Stellantis
              </span>
              <span className="animate-fade-up stagger-2 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.12em] uppercase px-3 py-1.5 border border-ink/30 text-ink/60">
                <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#22c55e',display:'inline-block'}}></span>
                Open for Freelance
              </span>
            </div>

            <h1 className="animate-fade-up stagger-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
              Full Stack<br />
              <span className="italic">Developer</span>
              <span className="text-accent">.</span>
            </h1>

            <p className="animate-fade-up stagger-3 mt-5 text-base sm:text-lg text-ink/60 max-w-lg leading-relaxed">
              Engineering student at EMSI Rabat, currently interning at Stellantis.
              Building production-grade web apps with Java, React, and Python.
            </p>

            <div className="animate-fade-up stagger-4 mt-7 flex flex-wrap gap-3">
              <Link href="/projects"
                className="px-5 sm:px-7 py-3 sm:py-3.5 bg-ink text-cream text-sm font-medium hover:bg-accent transition-colors duration-200">
                View My Work
              </Link>
              <Link href="/contact"
                className="px-5 sm:px-7 py-3 sm:py-3.5 border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-cream transition-all duration-200">
                Get In Touch
              </Link>
            </div>

            <div className="animate-fade-up stagger-5 mt-8 flex flex-wrap gap-2">
              {techStack.map(tech => (
                <span key={tech} className="skill-tag text-ink/70">{tech}</span>
              ))}
            </div>

          </div>
        </div>

        <div className="animate-fade-up stagger-6 mt-12 w-full h-px bg-ink/10" />
      </section>

      {/* Stats */}
      <section className="py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {highlights.map(({ number, label }, i) => (
          <div key={label} className={`animate-fade-up stagger-${i + 1}`}>
            <p className="font-display text-4xl sm:text-5xl text-ink">{number}</p>
            <p className="mt-1 text-xs sm:text-sm text-ink/50">{label}</p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="py-12" style={{ borderTop: '1px solid #1A1A2E1A' }}>
        <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-8">Experience</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

          <div className="p-5 sm:p-6 project-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-ink text-sm sm:text-base">Developer Intern</h3>
                <p className="text-sm text-accent mt-0.5">Stellantis</p>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 whitespace-nowrap">Current</span>
            </div>
            <p className="text-sm text-ink/60 leading-relaxed">
              Currently interning at one of the world's largest automotive groups.
            </p>
          </div>

          <div className="p-5 sm:p-6 project-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-ink text-sm sm:text-base">Full Stack Intern</h3>
                <p className="text-sm text-accent mt-0.5">ONCF</p>
              </div>
              <span className="font-mono text-xs text-ink/40">2025</span>
            </div>
            <p className="text-sm text-ink/60 leading-relaxed">
              Built an intranet app with an AI chatbot. Spring Boot, React, PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Spring Boot', 'React', 'PostgreSQL'].map(t => (
                <span key={t} className="skill-tag text-ink/60">{t}</span>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6 project-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-ink text-sm sm:text-base">Full Stack Intern</h3>
                <p className="text-sm text-accent mt-0.5">SalamGaz</p>
              </div>
              <span className="font-mono text-xs text-ink/40">2024</span>
            </div>
            <p className="text-sm text-ink/60 leading-relaxed">
              Developed SGMeetings, a meeting reservation management system.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Python', 'Django', 'MySQL'].map(t => (
                <span key={t} className="skill-tag text-ink/60">{t}</span>
              ))}
            </div>
          </div>

        </div>
        <div className="mt-8">
          <Link href="/about" className="text-sm font-medium text-ink hover:text-accent transition-colors">
            See full background →
          </Link>
        </div>
      </section>

    </div>
  )
}
