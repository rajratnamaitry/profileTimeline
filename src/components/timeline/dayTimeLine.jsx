import { Badge } from 'react-bootstrap';
import { FaVuejs } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { SiAndroid, SiAngular, SiBookstack, SiCss3, SiElectron, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiMedium, SiNextdotjs, SiNginx, SiNpm, SiReact, SiVisualstudiocode } from 'react-icons/si';
function iconSetting(key) {
  const SIZE = 20;
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
  switch (key) {
    case 'Android':
      return <SiAndroid size={SIZE}/>
    case 'Angular':
      return <SiAngular size={SIZE}/>
    case 'CSS':
      return <SiCss3 size={SIZE}/>
    case 'Chrome-ext':
      return <SiAndroid size={SIZE}/>
    case 'Electron':
      return <SiElectron size={SIZE}/>
    case 'Firebase':
      return <SiFirebase size={SIZE}/>
    case 'Github':
      return <SiGithub size={SIZE}/>
    case 'HTML':
      return <SiHtml5 size={SIZE}/>
    case 'JAVASCRIPT':
      return <SiJavascript size={SIZE}/>
    case 'Library':
      return <SiBookstack size={SIZE}/>
    case 'Medium.com':
      return <SiMedium size={SIZE}/>
    case 'NPM':
      return <SiNpm size={SIZE}/>
    case 'Next.js':
      return <SiNextdotjs size={SIZE}/>
    case 'Nginx':
      return <SiNginx size={SIZE}/>
    case 'React':
      return <DiReact size={SIZE}/>
    case 'VScode':
      return <SiVisualstudiocode size={SIZE}/>
    case 'Vue':
      return <FaVuejs size={SIZE}/>
    default:
      return '';
  }
}
export default function DayTimeLine({ project }) {
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
              .map((tech) => <span key={tech + '_' + project.stack}>
                <Badge pill bg="light" text="dark">{tech}{' '}{iconSetting(tech)}</Badge> {' '}</span>)}
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
