import { useEffect, useState } from 'react'
import { profile, facts, venture, journey, fields, giftNote } from './data'
import { useReveal } from './useReveal'

const YEAR = new Date().getFullYear()

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main">
      <a href="#top" className="logo serif">
        Aman Raj<span>.</span>
      </a>
      <div className="nav-links">
        <a href="#building">Building</a>
        <a href="#journey">Journey</a>
        <a href="#contact" className="nav-cta">Say hello</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero wrap" id="top">
      <div className="masthead mono">
        <span>Vol. 01</span>
        <span className="rule" />
        <span>The Aman Raj Edition</span>
        <span className="rule" />
        <span>{YEAR}</span>
      </div>

      <div className="hero-grid">
        <div className="hero-text">
          <p className="kicker mono reveal">Student · Builder · Optimist</p>
          <h1 className="serif display reveal">
            Aman
            <br />
            <em>Raj.</em>
          </h1>
          <p className="lede reveal">{profile.intro}</p>
          <div className="hero-actions reveal">
            <a className="btn btn-dark" href={venture.url} target="_blank" rel="noreferrer">
              Visit HelpMeMan <span aria-hidden="true">↗</span>
            </a>
            <a className="btn btn-line" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className="portrait reveal">
          <div className="portrait-frame">
            <img src={profile.photo} alt="Portrait of Aman Raj" width="800" height="800" />
          </div>
          <figcaption className="mono">
            <span>Fig. 1</span> Aman, somewhere between Deoghar and Forest City.
          </figcaption>
        </figure>
      </div>

      <dl className="facts">
        {facts.map((f) => (
          <div className="fact reveal" key={f.label}>
            <dt className="mono">{f.label}</dt>
            <dd>
              <strong className="serif">{f.value}</strong>
              <span>{f.sub}</span>
            </dd>
          </div>
        ))}
      </dl>
    </header>
  )
}

function Motto() {
  return (
    <section className="motto" aria-label="Motto">
      <div className="wrap">
        <p className="mono label reveal">The motto</p>
        <blockquote className="serif reveal">
          “Delusional <em>until</em> it works.”
        </blockquote>
      </div>
    </section>
  )
}

function SectionHead({ num, title, children }) {
  return (
    <div className="section-head reveal">
      <span className="mono num">§ {num}</span>
      <h2 className="serif">{title}</h2>
      {children && <p className="section-sub">{children}</p>}
    </div>
  )
}

function Building() {
  return (
    <section className="section wrap" id="building">
      <SectionHead num="01" title={<>Now building <em>{venture.name}</em></>}>
        {venture.line}
      </SectionHead>

      <div className="venture">
        <a className="venture-shot reveal" href={venture.url} target="_blank" rel="noreferrer">
          <img src={venture.image} alt="HelpMeMan launch announcement: Officially Live" width="800" height="450" loading="lazy" />
        </a>
        <div className="venture-body reveal">
          <img className="venture-mark" src={venture.mark} alt="" width="160" height="120" />
          <p className="venture-blurb">{venture.blurb}</p>
          <ol className="features">
            {venture.features.map((f, i) => (
              <li key={f.title}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="link-arrow" href={venture.url} target="_blank" rel="noreferrer">
            helpmeman.com <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section wrap" id="journey">
      <SectionHead num="02" title={<>The <em>journey</em> so far</>}>
        From a small city in Jharkhand to a campus of builders on the other side of the sea.
      </SectionHead>
      <ol className="timeline">
        {journey.map((j) => (
          <li className="stop reveal" key={j.where}>
            <span className="mono when">{j.when}</span>
            <div className="stop-main">
              <h3 className="serif">{j.where}</h3>
              <p className="mono place">{j.place}</p>
            </div>
            <div className="stop-detail">
              <p className="role">{j.role}</p>
              <p>{j.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Fields() {
  return (
    <section className="fields wrap" aria-label="Interests">
      <p className="mono label reveal">Works across</p>
      <ul className="fields-list serif reveal">
        {fields.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <SectionHead num="03" title={<>Let’s <em>talk.</em></>} />
        <p className="contact-lede reveal">
          Building something, looking for a mentor, or just want to swap ideas? {profile.first} is always up for a good
          conversation.
        </p>
        <div className="contact-links reveal">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="mono">LinkedIn</span>
            <strong className="serif">/in/bitsamanraj</strong>
            <span aria-hidden="true" className="arrow">↗</span>
          </a>
          <a href={venture.url} target="_blank" rel="noreferrer">
            <span className="mono">Venture</span>
            <strong className="serif">helpmeman.com</strong>
            <span aria-hidden="true" className="arrow">↗</span>
          </a>
        </div>

        <aside className="gift reveal" aria-label="A note">
          <span className="gift-tag mono">A note</span>
          <p className="serif">{giftNote.message}</p>
          <p className="mono gift-from">— {giftNote.from}</p>
        </aside>

        <div className="colophon mono">
          <span>© {YEAR} {profile.name}</span>
          <span>{profile.motto}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Motto />
        <Building />
        <Journey />
        <Fields />
      </main>
      <Contact />
    </>
  )
}
