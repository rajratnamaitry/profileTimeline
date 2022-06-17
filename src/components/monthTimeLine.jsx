import React from 'react'
import { Badge } from 'react-bootstrap';
export default function MonthTimeLine({month, data}) {
  console.log('month',data[0]);
  return (
    <div className="timeline-section">
      <div className="timeline-date">
        In {month}
        <span>{ data.length } Entries</span>
      </div>
      <div className="row">
        {data.map((project)=>(<div className="col-lg-4 col-md-6 col-sm-12 pb-3">
            <div className="timeline-box">
              <div className="box-title">
                <i className="fa fa-asterisk text-success" aria-hidden="true"></i> {project.name}
              </div>
              <div className="box-content">
                {/* <a className="btn btn-sm btn-outline-light">Details</a> */}
                <div className="box-item"><strong>Tech stack</strong>: {' '}
                  {project.stack.map((tech)=><><Badge pill bg="light" text="dark">{tech}</Badge> {' '}</> )}
                </div>
                <div className="box-item"><strong>Link </strong>: 
                  <a className={project.github? 'text-link' : 'text-mute text-black' } href={project.github} target='_blank' >Github</a> ,
                  <a className={project.url? 'text-link' : 'text-mute text-black' } href={project.url} target='_blank' >Publish</a>
                </div>
                <div className="box-item"><strong>Date</strong>: {project.date.displayDate}</div>
              </div>
              {/* <div className="box-footer">- Tyler</div> */}
          </div>
        </div>)
        )}
    </div>
    </div>
  )
}
