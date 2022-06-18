import DayTimeLine from './dayTimeLine';
export default function MonthTimeLine({ month, data }) {
  return (
    <div className="timeline-section">
      <div className="timeline-date">
        In {month}
        <span>{data.length} Entries</span>
      </div>
      <div className="row">
        {data
        .sort((a,b)=> b.date.date - a.date.date)
        .map((project) => <DayTimeLine key={project.id+'_'+project.date.dates} project={project} />)}
      </div>
    </div>
  )
}
