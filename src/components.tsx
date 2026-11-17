import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className="site-header">
    <a className="brand" href="/" onClick={closeMenu}><span className="brand-mark">PO</span><span><strong>POPE</strong><small>FRANCIS O. ODHIAMBO</small></span></a>
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? '×' : '☰'}</button>
    <nav className={menuOpen ? 'nav-open' : ''}>
      <a href="/story" onClick={closeMenu}>Pope’s story</a><a href="/#agenda" onClick={closeMenu}>The agenda</a><a href="/#events" onClick={closeMenu}>Events</a><a href="/#media" onClick={closeMenu}>Media</a>
      <a href="/mpesa" className="nav-support" onClick={closeMenu}>Support the journey <span>↗</span></a>
    </nav>
  </header>
}

export function Footer() {
  return <footer><div className="footer-brand"><span className="brand-mark">PO</span><strong>FRANCIS O. ODHIAMBO (POPE)</strong></div><p>MP Embakasi West 2027</p>
    <div className="footer-links"><a href="/story">Pope’s story</a><a href="/#agenda">Agenda</a><a href="/#events">Events</a><a href="/mpesa">Support</a><a href="/#media">Media</a></div>
    <small>© 2027 Francis O. Odhiambo (Pope)</small></footer>
}

export function MpesaCard() {
  return (
    <div className="mpesa-card">
      <div className="mpesa-header"><span className="mpesa-logo">M-PESA</span><span className="heart" aria-hidden="true">♡</span></div>
      <p className="mpesa-title">Support the journey</p>
      <div className="payment-row"><span>Buy Goods Till Number</span><strong>1858189</strong></div>
      <ol className="payment-steps">
        <li><span>1</span><div><strong>Open M-PESA</strong><p>Choose <b>Lipa na M-PESA</b> from your phone menu or the M-PESA app.</p></div></li>
        <li><span>2</span><div><strong>Select Buy Goods &amp; Services</strong><p>Choose the option to enter a Till Number.</p></div></li>
        <li><span>3</span><div><strong>Enter the Till Number and amount</strong><p>Enter <b>1858189</b>, then choose the amount you wish to contribute.</p></div></li>
        <li><span>4</span><div><strong>Review and confirm</strong><p>Check the business and amount shown on your phone, then enter your M-PESA PIN to complete the payment.</p></div></li>
      </ol>
      <p className="mpesa-footnote">Every contribution is appreciated. Give only what feels comfortable for you. Asante sana!</p>
    </div>
  )
}
