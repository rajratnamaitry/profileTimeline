import { Badge } from 'react-bootstrap';
export default function DayTimeLine({ project }) {
  const lang = {
    "Android": 'SiAndroid',
    "Angular": 'SiAngular',
    "Chrome-ext": 'SiGooglechrome',
    "CSS": 'SiCss3',
    "Electron": 'SiElectron',
    "Firebase": 'SiFirebase',
    "Github": 'SiGithub',
    "HTML": 'SiHtml5',
    "JAVASCRIPT": 'SiJavascript',
    "Library": 'SiBookstack',
    "marketplace.visualstudio": 'SiMicrosoft',
    "Medium.com": 'SiMedium',
    "Next.js": 'SiNextdotjs',
    "Nginx": 'SiNginx',
    "NPM": 'DiNpm',
    "React": 'DiReact',
    "REST-API": '',
    "VScode": 'SiVisualstudiocode',
    "Vue": 'FaVuejs',
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
      <div className="timeline-box">
        <div className="box-title">
          <i className="fa fa-asterisk text-success" aria-hidden="true"></i> {project.name}
        </div>
        <div className="box-content">
          {/* <a className="btn btn-sm btn-outline-light">Details</a> */}
          <div className="box-item"><strong>Tech stack</strong>: {' '}
            {project.stack
              .map((tech) => <span key={tech + '_' + project.stack}><Badge pill bg="light" text="dark">{tech}</Badge> {' '}</span>)}
          </div>
          <div className="box-item"><strong>Link </strong>:
            {' '}{project.github ? <a className='text-light' href={project.github} target='_blank' >Github</a> : ''}
            {' '}{project.url ? <a className='text-light' href={project.url} target='_blank' >Public url</a> : ''}
          </div>
          <div className="box-item"><strong>Date</strong>: {project.date.displayDate}</div>
          <div className="box-item"><strong>Descriptions</strong>: {project.descriptions}</div>
        </div>
        <div className="box-footer">- <span className={project.mode != 'private' ? 'text-info text-capitalize' : 'text-warning text-capitalize'}>{project.mode}</span></div>
      </div>
    </div>
  )
}
