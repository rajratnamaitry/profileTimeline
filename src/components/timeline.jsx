import React from "react"
import MonthTimeLine from "./monthTimeLine"
export default function Timeline({project}) {
    return (
        <div className="timeline">
            <div className="timeline-month">
                { project.year } ,
                <span>{ project.nMonthMap.length } Entries</span>
            </div>
            {project.nMonthMap.sort((a,b)=>b.mon - a.mon).map(e=><MonthTimeLine key={e.mon} data={e.monData}  month={e.month}/>)}
        </div>
    )
}