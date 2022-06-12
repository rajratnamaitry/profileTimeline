import React from "react"
export default function Timeline() {
    return (
        <div className="container">
            <div className="header">
                <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64">
                    <defs>
                        <linearGradient id="verlauf" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="orange" />
                            <stop offset="100%" stop-color="chocolate" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#verlauf)" d="M63.04 39.74C58.764 56.885 41.4 67.318 24.256 63.043 7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.318 39.737.957 56.88 5.23 67.313 22.597 63.04 39.74z" />
                    <path fill="#FFF" d="M46.11 27.44c.636-4.257-2.606-6.546-7.04-8.073l1.44-5.768-3.512-.876-1.4 5.616c-.923-.23-1.87-.447-2.813-.662l1.41-5.653-3.51-.875-1.438 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.02-4.843-1.208-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.64 6.57c.1.026.226.062.366.118l-.37-.092-2.297 9.205c-.175.43-.616 1.08-1.61.833.035.05-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.138c.85.213 1.682.436 2.502.646l-1.453 5.834 3.507.875 1.44-5.773c.958.26 1.888.5 2.798.726l-1.434 5.745 3.51.875 1.454-5.823c5.987 1.133 10.49.676 12.384-4.74 1.527-4.36-.076-6.874-3.226-8.514 2.294-.53 4.022-2.038 4.483-5.155zm-8.023 11.25c-1.085 4.36-8.426 2.003-10.806 1.412l1.93-7.73c2.38.595 10.01 1.77 8.877 6.318zm1.086-11.312c-.99 3.966-7.1 1.95-9.082 1.457l1.75-7.01c1.98.494 8.364 1.416 7.333 5.553z" />
                </svg>
                <h1>History of bitcoin</h1>
                <h2>A timeline that shows bitcoin History from the idea all the way to present day.</h2>
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