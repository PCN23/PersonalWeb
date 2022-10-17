/* eslint-disable react/jsx-key */
import React from 'react';
import events from '../events.json';
// import Timeline from '../components/Timeline';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Experience() {
  return (
    <div
      className='experience'
      style={{ background: '#333', fontFamily: 'Trebuchet Ms' }}
    >
      <h1>Projects Timeline</h1>
      <VerticalTimeline key={events}>
        {events.map(event => (
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={event.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3
              className='vertical-timeline-element-title'
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;