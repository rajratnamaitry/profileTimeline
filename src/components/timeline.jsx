import React from "react"
import img from '../image.jpg'
export default function Timeline() {
    return (
        <div className="container">
            <div className="header">
                <img src={img} alt="Avatar" class="avatar"/>
                <h1>Open source</h1>
                <h2>A timeline that shows open source contributions all the way to present day.</h2>
            </div>
            <div className="timeline">
                <div className="timeline-month">
                    August, 2018
                    <span>3 Entries</span>
                </div>
                <div className="timeline-section">
                    <div className="timeline-date">
                        21, Tuesday
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="timeline-box">
                                <div className="box-title">
                                    <i className="fa fa-asterisk text-success" aria-hidden="true"></i> Job Created
                                </div>
                                <div className="box-content">
                                    <a className="btn btn-sm btn-outline-light">Details</a>
                                    <div className="box-item"><strong>Loss Type</strong>: A/C Leak</div>
                                    <div className="box-item"><strong>Loss Territory</strong>: Texas</div>
                                    <div className="box-item"><strong>Start Date</strong>: 08/22/2018</div>
                                </div>
                                <div className="box-footer">- Tyler</div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="timeline-box">
                                <div className="box-title">
                                    <i className="fa fa-pencil text-info" aria-hidden="true"></i> Job Edited
                                </div>
                                <div className="box-content">
                                    <a className="btn btn-xs btn-default pull-right">Details</a>
                                    <div className="box-item"><strong>Project Manager</strong>: Marlyn</div>
                                    <div className="box-item"><strong>Supervisor</strong>: Carol</div>
                                </div>
                                <div className="box-footer">- Tyler</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}