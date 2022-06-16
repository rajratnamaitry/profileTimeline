import React from 'react'
export default function MonthTimeLine({month, data}) {
  console.log('month',data[0]);
  return (
    <div className="timeline-section">
      <div className="timeline-date">
        {month}
      </div>
      {data.map((project)=>(<div className="row">
        <div className="col-sm-4">
          <div className="timeline-box">
            <div className="box-title">
              <i className="fa fa-asterisk text-success" aria-hidden="true"></i> {project.name}
            </div>
            <div className="box-content">
              <a className="btn btn-sm btn-outline-light">Details</a>
              <div className="box-item"><strong>Tech stack</strong>: {project.stack.join(',')}</div>
              <div className="box-item"><strong>Link </strong>: 
                <a className='' href={project.github} target='_blank' >Github</a>,
                <a className='text-link' href={project.url} target='_blank' >Publish</a>
              </div>
              <div className="box-item"><strong>Date</strong>: {project.date.displayDate}</div>
            </div>
            <div className="box-footer">- Tyler</div>
          </div>
        </div>
      </div>)
      )}
    </div>
  )
}
