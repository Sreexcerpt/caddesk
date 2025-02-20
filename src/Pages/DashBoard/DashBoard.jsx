import React from 'react'

const DashBoard = () => {
  return (
    <div>
     <div id="main-content">
     <section className="mb-40">
                <div className="container-fluid p-0">
                    <div className="white-box">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-title">
                                    <h3 className="mb-15">Welcome - Web Digital Mantra | Super admin</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row row-gap-24">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="https://lms.webdigitalmantra.in/student-list" className="d-block">
                                    <div className="white-box single-summery cyan">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h3>Student</h3>
                                                <p className="mb-0">Total Students</p>
                                            </div>
                                            <h1 className="gradient-color2">
                                                7
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="https://lms.webdigitalmantra.in/staff-directory" className="d-block">
                                    <div className="white-box single-summery violet">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h3>Teachers</h3>
                                                <p className="mb-0">Total Teachers</p>
                                            </div>
                                            <h1 className="gradient-color2">
                                                3
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="#" className="d-block">
                                    <div className="white-box single-summery blue">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h3>Parents</h3>
                                                <p className="mb-0">Total Parents</p>
                                            </div>
                                            <h1 className="gradient-color2">
                                                7
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <a href="https://lms.webdigitalmantra.in/staff-directory" className="d-block">
                                    <div className="white-box single-summery fuchsia">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h3>Staffs</h3>
                                                <p className="mb-0">Total Staffs</p>
                                            </div>
                                            <h1 className="gradient-color2">
                                                4
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
     </div>
    </div>
  )
}

export default DashBoard
