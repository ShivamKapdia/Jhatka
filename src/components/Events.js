import React from 'react';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="section-tag">Latest from Jhatka</div>
      <h2 className="section-h2">Events & <em>News</em></h2>
      <div className="gold-line"></div>

      <div className="events-grid">
        <div className="event-card">
          <div className="event-img">
            <img src="https://jhatka.org/wp-content/uploads/2021/02/mission-2.jpg" alt="Event 1" />
            <div className="event-tag-badge">Event</div>
          </div>
          <div className="event-body">
            <div className="event-date">February 10, 2021</div>
            <div className="event-title">Jhatka Awareness Drive</div>
            <div className="event-desc">A major awareness event to educate people about the importance of Jhatka and the traditional Bhartiya way of life.</div>
            <a className="event-link" href="https://jhatka.org/2021/02/10/another-new-events/" target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-img">
            <img src="https://jhatka.org/wp-content/uploads/2021/02/why-choose.jpg" alt="Event 2" />
            <div className="event-tag-badge">Event</div>
          </div>
          <div className="event-body">
            <div className="event-date">February 10, 2021</div>
            <div className="event-title">Community Meeting — Jhatka Rights</div>
            <div className="event-desc">A gathering of Hindu, Sikh and Jain community members to discuss and preserve the tradition of Jhatka slaughter.</div>
            <a className="event-link" href="https://jhatka.org/2021/02/10/this-is-new-event/" target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-img">
            <img src="https://jhatka.org/wp-content/uploads/2021/02/student1.jpg" alt="Event 3" />
            <div className="event-tag-badge">Blog</div>
          </div>
          <div className="event-body">
            <div className="event-date">February 10, 2021</div>
            <div className="event-title">Youth & Jhatka — A New Generation</div>
            <div className="event-desc">How the youth is taking up the cause of Jhatka and spreading awareness about Bhartiya food traditions across India.</div>
            <a className="event-link" href="https://jhatka.org/2021/02/10/another-blog/" target="_blank" rel="noopener noreferrer">Read More →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;