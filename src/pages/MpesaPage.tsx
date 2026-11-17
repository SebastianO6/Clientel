import { Footer, Header, MpesaCard } from '../components'
export default function MpesaPage() {
  return <>
    <Header />
    <main className="mpesa-page">
      <section className="mpesa-hero">
        <a href="/" className="back-link">← Back to campaign</a>
        <p className="eyebrow">Francis O. Odhiambo (Pope) · Embakasi West 2027</p>
        <h1>Support the work.<br/><em>Move us forward.</em></h1>
        <p className="mpesa-intro">Thank you for standing with your community. Use the steps below to contribute through M-PESA. Every amount is welcome, and every contribution is appreciated.</p>
        <div className="mpesa-slogans"><span>Kazi ni Kazi</span><span>Gather all, scatter none</span></div>
      </section>
      <section className="mpesa-detail">
        <div className="mpesa-detail-copy">
          <p className="eyebrow">A simple four-step guide</p>
          <h2>Give with<br/><em>confidence.</em></h2>
          <p>Follow the instructions in order. Before entering your PIN, take a moment to confirm the Till Number and amount displayed on your phone.</p>
          <a href="/" className="text-link">Return to the campaign <span>↗</span></a>
        </div>
        <MpesaCard />
      </section>
    </main>
    <Footer />
  </>
}
