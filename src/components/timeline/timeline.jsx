import MonthTimeLine from "./monthTimeLine"
export default function Timeline({project, total}) {
    return (
        <div className="timeline">
            <div className="timeline-month">
                In { project.year }
                 {/* total { total } */}
                <span>{ project.nMonthMap.length } 
                    {' '} Months
                    {/* {' '}{ project.totalInMon } */}
                </span>
            </div>
            {project.nMonthMap.sort((a,b)=>b.mon - a.mon).map(e=><MonthTimeLine key={e.mon} data={e.monData}  month={e.month}/>)}
        </div>
    )
}