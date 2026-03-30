import React from 'react';
import { useTranslation } from 'react-i18next';

const Events = () => {
  const { t } = useTranslation();

  return (
    <section id="events" className="events-section">
      <div className="section-tag">{t('events.sectionTag')}</div>
      <h2 className="section-h2">{t('events.title')}</h2>
      <div className="gold-line"></div>

      <div className="events-grid">
        <div className="event-card">
          <div className="event-img">
            <img src="https://jhatka.org/wp-content/uploads/2021/02/mission-2.jpg" alt="Event 1" />
            <div className="event-tag-badge">{t('events.eventTag')}</div>
          </div>
          <div className="event-body">
            <div className="event-date">{t('events.event1Date')}</div>
            <div className="event-title">{t('events.event1Title')}</div>
            <div className="event-desc">{t('events.event1Desc')}</div>
            <a className="event-link" href="https://jhatka.org/2021/02/10/another-new-events/" target="_blank" rel="noopener noreferrer">{t('events.readMore')}</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-img">
            <img src="https://jhatka.org/wp-content/uploads/2021/02/why-choose.jpg" alt="Event 2" />
            <div className="event-tag-badge">{t('events.eventTag')}</div>
          </div>
          <div className="event-body">
            <div className="event-date">{t('events.event2Date')}</div>
            <div className="event-title">{t('events.event2Title')}</div>
            <div className="event-desc">{t('events.event2Desc')}</div>
            <a className="event-link" href="https://jhatka.org/2021/02/10/this-is-new-event/" target="_blank" rel="noopener noreferrer">{t('events.readMore')}</a>
          </div>
        </div>

        <div className="event-card">
          <div className="event-img">
            <img src="https://jhatka.org/wp-content/uploads/2021/02/student1.jpg" alt="Event 3" />
            <div className="event-tag-badge">{t('events.blogTag')}</div>
          </div>
          <div className="event-body">
            <div className="event-date">{t('events.event3Date')}</div>
            <div className="event-title">{t('events.event3Title')}</div>
            <div className="event-desc">{t('events.event3Desc')}</div>
            <a className="event-link" href="https://jhatka.org/2021/02/10/another-blog/" target="_blank" rel="noopener noreferrer">{t('events.readMore')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;