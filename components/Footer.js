export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1A1A2E1A' }} className="mt-24 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-ink">
          RA<span className="text-accent">.</span>
        </span>
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Raouane Allawi — Built with Next.js & Tailwind CSS
        </p>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/raouane-allawi-4511b5308?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer"
            className="text-sm text-ink/50 hover:text-accent transition-colors">LinkedIn</a>
          <a href="mailto:rawan0.0allawi@gmail.com"
            className="text-sm text-ink/50 hover:text-accent transition-colors">Email</a>
          <a href="tel:+212713197771"
            className="text-sm text-ink/50 hover:text-accent transition-colors">Phone</a>
        </div>
      </div>
    </footer>
  )
}
