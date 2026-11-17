import { Footer, Header } from '../components'
import formalPortrait from '../assets/WhatsApp Image 2026-11-17 at 09.18.44 (2).jpeg'
import campaignPortrait from '../assets/WhatsApp Image 2026-11-17 at 09.18.43.jpeg'
import standingPortrait from '../assets/WhatsApp Image 2026-11-17 at 09.18.44.jpeg'
import closePortrait from '../assets/WhatsApp Image 2026-11-17 at 09.18.44 (1).jpeg'

export default function StoryPage() {
  return <><Header/><main className="story-page">
    <section className="story-hero"><p className="eyebrow">Meet Pope</p><h1>Francis O. Odhiambo<br/><em>“Pope”</em></h1><p className="story-position">MP Embakasi West 2027</p><p className="story-lead">A life shaped by family, learning and community. Explore Pope’s portraits and community moments, and learn more about the experiences that shaped him.</p></section>
    <section className="story-profile"><img className="story-profile-photo" src={formalPortrait} alt="Francis O. Odhiambo (Pope), formal portrait"/><div className="story-profile-copy"><p className="eyebrow">In his own words</p><h2>A story still<br/><em>being written.</em></h2><p>Share where Pope grew up, the people and experiences that shaped him, and what first inspired him to serve Embakasi West.</p><p className="editor-note">Replace this introduction with verified details from the candidate. Keep the story personal: a childhood memory, a lesson from family, or a moment that led him toward public service.</p></div></section>
    <section className="story-chapters"><article><span>01 · UPBRINGING</span><h3>Where it began</h3><p>Add details about Pope’s hometown, family, upbringing and the values he learned growing up.</p></article><article><span>02 · EDUCATION</span><h3>A lifelong learner</h3><p>Add schools, training, qualifications and the people who encouraged his education.</p></article><article><span>03 · COMMUNITY</span><h3>Work rooted in people</h3><p>Describe real community work, service and experiences that connect Pope to Embakasi West.</p></article></section>
    <section className="story-gallery"><div><p className="eyebrow">A life in moments</p><h2>Photos of <em>Pope</em></h2><p>Official portraits and a moment from Pope’s community work.</p></div><div className="story-photo-grid"><figure><img src={standingPortrait} alt="Pope standing for a portrait"/><figcaption>Francis O. Odhiambo (Pope)</figcaption></figure><figure><img src={closePortrait} alt="Portrait of Pope"/><figcaption>Pope</figcaption></figure><figure><img src={campaignPortrait} alt="Pope at a community campaign meeting"/><figcaption>Meeting with the community</figcaption></figure></div></section>
  </main><Footer/></>
}
