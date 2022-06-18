import React from 'react'
import { Badge } from 'react-bootstrap';
export default function MonthTimeLine({ month, data }) {
  return (
    <div className="timeline-section">
      <div className="timeline-date">
        In {month}
        <span>{data.length} Entries</span>
      </div>
      <div className="row">
        {data.sort((a,b)=> b.date.date - a.date.date).map((project) => (<div className="col-lg-4 col-md-6 col-sm-12 pb-3"  key={project.date.seconds}>
          <div className="timeline-box">
            <div className="box-title">
              <i className="fa fa-asterisk text-success" aria-hidden="true"></i> {project.name}
            </div>
            <div className="box-content">
              {/* <a className="btn btn-sm btn-outline-light">Details</a> */}
              <div className="box-item"><strong>Tech stack</strong>: {' '}
                {project.stack.map((tech) => <><Badge pill bg="light" text="dark">{tech}</Badge> {' '}</>)}
              </div>
              <div className="box-item"><strong>Link </strong>:
                {' '}{project.github ? <a className='text-light' href={project.github} target='_blank' >Github</a> : ''}
                {' '}{project.url ? <a className='text-light' href={project.url} target='_blank' >Public url</a> : ''}
              </div>
              <div className="box-item"><strong>Date</strong>: {project.date.displayDate}</div>
              <div className="box-item"><strong>Descriptions</strong>: {project.descriptions}</div>
            </div>
            <div className="box-footer">- <span className={project.mode !='private'?'text-info text-capitalize':'text-warning text-capitalize'}>{ project.mode }</span></div>
          </div>
        </div>)
        )}
      </div>
    </div>
  )
}
