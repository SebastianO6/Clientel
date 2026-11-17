import { upcomingEvents } from '../data/events'

export default function UpcomingEvents() {
  return (
    <section className="events-section" id="events">
      <div className="events-heading">
        <div>
          <p className="eyebrow">Mark your calendar</p>
          <h2>Events worth<br/><em>coming to.</em></h2>
        </div>
        <p>From fundraisers and dinners to neighbourhood gatherings, find a reason to come together with Pope and the Embakasi West community.</p>
      </div>
      <div className="event-list">
        {upcomingEvents.map((event, index) => (
          <article className="event-card" key={event.id}>
            <div className="event-poster-wrap">
              {event.poster ? <img className="event-poster" src={event.poster} alt={event.posterAlt}/> : (
                <div className="event-poster-empty" role="img" aria-label="Event poster placeholder">
                  <span className="event-poster-kicker">FRANCIS O. ODHIAMBO · POPE</span>
                  <span className="event-poster-number">0{index + 1}</span>
                  <strong>Your next<br/>big occasion</strong>
                  <span className="event-poster-footer">KAZI NI KAZI · EMBAKASI WEST</span>
                </div>
              )}
            </div>
            <div className="event-content">
              <span className="event-status"><i/> UPCOMING EVENT</span>
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <dl className="event-details">
                <div><dt>Date</dt><dd>{event.date}</dd></div>
                <div><dt>Time</dt><dd>{event.time}</dd></div>
                <div><dt>Venue</dt><dd>{event.venue}</dd></div>
              </dl>
              {event.actionLabel && event.actionHref ? <a className="event-cta" href={event.actionHref}>{event.actionLabel} <span>↗</span></a> : <span className="event-cta">Event details to follow</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
