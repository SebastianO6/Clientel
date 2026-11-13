import { useState } from 'react'
import './App.css'

const policies = [
  {
    number: '01',
    title: 'Opportunity for every home',
    text: 'Backing small businesses, practical skills and dignified work so every family can build a more secure future.',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Safer, stronger neighbourhoods',
    text: 'Championing reliable water, better roads, clean public spaces and communities where everyone feels at home.',
    icon: '⌂',
  },
  {
    number: '03',
    title: 'A voice that gets things done',
    text: 'Listening first, showing up consistently and turning your priorities into action in Parliament and beyond.',
    icon: '✳',
  },
]

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85',
    alt: 'Community members gathered together',
    className: 'photo-tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',
    alt: 'Friends smiling together outside',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=85',
    alt: 'Young people learning together',
    className: '',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">AW</span>
          <span>
            <strong>AMANI</strong>
            <small>WEKESA</small>
          </span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? '×' : '☰'}
        </button>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <a href="#about" onClick={closeMenu}>Our story</a>
          <a href="#agenda" onClick={closeMenu}>The agenda</a>
          <a href="#media" onClick={closeMenu}>Media</a>
          <a className="nav-support" href="#support" onClick={closeMenu}>Support the journey <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A better tomorrow, together</p>
          <h1>Leadership that<br /><em>listens.</em></h1>
          <p className="hero-intro">I am Amani Wekesa, aspiring Member of Parliament for Westlands. I believe progress begins when we choose to show up for one another.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#agenda">Explore the agenda <span>→</span></a>
            <a className="text-link" href="#about">Read my story <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-line" /> Your voice. Our shared future.</div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=90" alt="Amani Wekesa, aspiring Member of Parliament" />
          </div>
          <div className="portrait-stamp">FORWARD<br /><span>TOGETHER</span></div>
          <p className="portrait-caption">Amani Wekesa<br /><span>Aspiring Member of Parliament</span></p>
        </div>
      </section>

      <section className="welcome-strip">
        <p><span>✦</span> This campaign belongs to all of us.</p>
        <p className="strip-detail">Westlands &nbsp;·&nbsp; Nairobi &nbsp;·&nbsp; Kenya</p>
      </section>

      <section className="section agenda-section" id="agenda">
        <div className="section-heading">
          <p className="eyebrow">What we stand for</p>
          <h2>Small steps.<br /><em>Real change.</em></h2>
        </div>
        <p className="section-lead">Our agenda is grounded in the everyday things that make a difference: opportunity, dignity and a leader who is accountable to you.</p>
        <div className="policy-grid">
          {policies.map((policy) => (
            <article className="policy-card" key={policy.number}>
              <div className="policy-top"><span>{policy.number}</span><b>{policy.icon}</b></div>
              <h3>{policy.title}</h3>
              <p>{policy.text}</p>
              <a href="#support" aria-label={`Learn more about ${policy.title}`}>Learn more <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section section" id="about">
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=85" alt="A child smiling outdoors" />
          <div className="image-label">Built on<br /><em>community</em></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">A little about me</p>
          <h2>From the<br /><em>neighbourhood.</em></h2>
          <p>I grew up learning that leadership is not a title — it is the neighbour who checks in, the teacher who stays late, and the community that refuses to leave anyone behind.</p>
          <p>For more than a decade, I have worked alongside local groups, young people and small businesses to make our corner of Nairobi a place where people can thrive.</p>
          <a className="text-link" href="#media">Follow the journey <span>→</span></a>
        </div>
      </section>

      <section className="support-section" id="support">
        <div className="support-intro">
          <p className="eyebrow">Be part of the movement</p>
          <h2>Every contribution<br /><em>moves us forward.</em></h2>
          <p>Your support helps us reach more neighbours, listen to more ideas and carry this message of hope further. Together, we can do more.</p>
        </div>
        <div className="mpesa-card">
          <div className="mpesa-header"><span className="mpesa-logo">M-PESA</span><span className="heart">♡</span></div>
          <p className="mpesa-title">Support the journey</p>
          <div className="payment-row"><span>Paybill number</span><strong>400 200</strong></div>
          <div className="payment-row"><span>Account number</span><strong>AMANI2027</strong></div>
          <div className="steps"><span>1</span> Go to M-Pesa <span>2</span> Lipa na M-Pesa <span>3</span> Paybill</div>
          <p className="mpesa-footnote">Enter the details above and choose an amount that feels right for you. Asante sana.</p>
        </div>
      </section>

      <section className="media-section section" id="media">
        <div className="section-heading">
          <p className="eyebrow">Out in the community</p>
          <h2>Moments that<br /><em>matter.</em></h2>
        </div>
        <div className="media-grid">
          {photos.map((photo) => <img className={photo.className} src={photo.src} alt={photo.alt} key={photo.src} />)}
        </div>
        <a className="button button-outline" href="#home">See more moments <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">AW</span><strong>AMANI WEKESA</strong></div>
        <p>For a Westlands that works for everyone.</p>
        <div className="footer-links"><a href="#about">Our story</a><a href="#agenda">Agenda</a><a href="#support">Support</a><a href="#media">Media</a></div>
        <small>© 2027 Amani Wekesa Campaign &nbsp;·&nbsp; Paid for by friends of Amani</small>
      </footer>
    </main>
  ) }

export default App
