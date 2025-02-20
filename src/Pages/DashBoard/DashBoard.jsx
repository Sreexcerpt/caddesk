import React from 'react'
import Header from '../../Component/Header/Header'

const DashBoard = () => {
  return (
    <div>
     <div id="main-content">
        <Header/>
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


            <div class="chart_grid chart_container">

<section class="" id="incomeExpenseDiv">
    <div class="container-fluid p-0">
        <div class="white-box">
            <div class="row justify-content-between">
                <div class="col-lg-8 col-md-9 col-8">
                    <div class="main-title">
                        <h3 class="mb-0"> Income and Expenses for Feb 2024 </h3>
                    </div>
                </div>
                <div class="col-lg-4 text-right col-md-3 col-4 nowrap">
                    <button type="button" class="primary-btn small tr-bg icon-only  dashboard_collapse" id="barChartBtn">
                <span class="pr ti-angle-down"></span>
            </button>

                    <button type="button" class="primary-btn small fix-gr-bg icon-only ml-10" id="barChartBtnRemovetn">
                <span class="pr ti-close"></span>
            </button>
                </div>
                <div class="col-lg-12">
                    <div id="barChartDiv" class="mt-15">
                        <div class="row padding4 row-gap-24">
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="text-center">

                                    <h1>($) 0
                                    </h1>
                                    <p>Total Income</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="text-center">
                                    <h1>($) 0
                                    </h1>
                                    <p>Total Expenses</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="text-center">
                                    <h1>($) 0
                                    </h1>
                                    <p>Total Profit</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="text-center">
                                    <h1>($) 0
                                    </h1>
                                    <p>Total Revenue</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="text-center">
                                    <h1></h1>
                                    <p>Wallet Balance</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div id="commonBarChart" style={{height: "350px", paddingRight: "20px"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="incomeExpenseSessionDiv">
    <div class="container-fluid p-0">
        <div class="white-box">
            <div class="row">
                <div class="col-lg-8 col-md-9 col-8">
                    <div class="main-title">
                        <h3 class="mb-0">Income and Expenses for 2024</h3>
                    </div>
                </div>
                <div class="col-lg-4 text-right col-md-3 col-4 nowrap">
                    <button type="button" class="primary-btn small tr-bg icon-only dashboard_collapse" id="areaChartBtn">
                <span class="pr ti-angle-down"></span>
            </button>

                    <button type="button" class="primary-btn small fix-gr-bg icon-only ml-10" id="areaChartBtnRemovetn">
                <span class="pr ti-close"></span>
            </button>
                </div>
                <div class="col-lg-12">
                    <div id="areaChartDiv" class="mt-15">
                        <div class="row padding4 row-gap-24">
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="text-center">
                                    <h1>($) 0
                                    </h1>
                                    <p>Total Income</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="text-center">

                                    <h1>($) 0
                                    </h1>
                                    <p>Total Expenses</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="text-center">
                                    <h1>($) 0
                                    </h1>
                                    <p>Total Profit</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="text-center">
                                    <h1>($) 0
                                    </h1>
                                    <p>Total Revenue</p>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-6">
                                <div class="text-center">
                                    <h1></h1>
                                    <p>Wallet Balance</p>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div id="commonAreaChart" style={{height: "350px"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>


        <section class="mt-40">
                <div class="container-fluid p-0">
                    <div class="white-box">
                        <div class="row">
                            <div class="col-lg-6 col-7">
                                <div class="main-title">
                                    <h3 class="mb-15">Notice Board</h3>
                                </div>
                            </div>
                            <div class="col-lg-6 col-5 ml-auto pull-right text-right text-nowrap">
                                <a href="https://lms.webdigitalmantra.in/add-notice" class="primary-btn small fix-gr-bg"> <span
                                        class="ti-plus pr-2"></span> Add </a>
                            </div>

                            <div class="col-lg-12">
                                <table class="school-table-style w-100">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Title</th>
                                            <th class="d-flex justify-content-around">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td>

                                                19th Sep, 2024

                                            </td>
                                            <td>Spring Art Contest</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="https://lms.webdigitalmantra.in/view/notice/1" title="View Notice" class="primary-btn small tr-bg modalLink" data-modal-size="modal-lg"><span
                                                    class="ti-eye"></span></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>

                                                18th Sep, 2024

                                            </td>
                                            <td>School Talent Show</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="https://lms.webdigitalmantra.in/view/notice/6" title="View Notice" class="primary-btn small tr-bg modalLink" data-modal-size="modal-lg"><span
                                                    class="ti-eye"></span></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>

                                                20th Sep, 2024

                                            </td>
                                            <td>Parent Teacher Meeting</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="https://lms.webdigitalmantra.in/view/notice/7" title="View Notice" class="primary-btn small tr-bg modalLink" data-modal-size="modal-lg"><span
                                                    class="ti-eye"></span></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>

                                                20th Sep, 2024

                                            </td>
                                            <td>Library Book Fair</td>
                                            <td class="d-flex justify-content-around">
                                                <a href="https://lms.webdigitalmantra.in/view/notice/8" title="View Notice" class="primary-btn small tr-bg modalLink" data-modal-size="modal-lg"><span
                                                    class="ti-eye"></span></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="mt-40">
            <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-lg-7 col-xl-8">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div>


                                        <div class="mb-40">
                                            <div class="white-box">
                                                <div class="row">
                                                    <div class="col-lg-12 text-right col-md-12">
                                                        <a href="#" class="primary-btn small fix-gr-bg calenderSettingsJs">
                        <span class="ti-plus pr-2"></span>
                        Calendar Settings                    </a>
                                                    </div>
                                                </div>
                                                <div class="showAndHideSettings" style={{display:"none"}}>
                                                    <div>
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-6 col-5">
                                                                <div class="main-title">
                                                                    <h3 class="mb-15">Calendar Settings</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-40">
                                                            <div class="col-lg-12">
                                                                <div>
                                                                    <form method="POST" action="https://lms.webdigitalmantra.in/store-academic-calendar-settings" accept-charset="UTF-8"><input name="_token" type="hidden" value="tEK0Z79tAoOvgelV5lzYHxyoxA7uyMB12rElmGdL"/>
                                                                        <div class="row">
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Admission Query</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[admission_query][status]" id="settingsY1" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY1">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[admission_query][status]" id="settingsN1" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN1">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[admission_query][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[admission_query][bg_color]" class="primary_input_field color-input color_field" required value="#008000"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Lesson Plan</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[lesson_plan][status]" id="settingsY2" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY2">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[lesson_plan][status]" id="settingsN2" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN2">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[lesson_plan][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[lesson_plan][bg_color]" class="primary_input_field color-input color_field" required value="#000000"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>HomeWork</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[homework][status]" id="settingsY3" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY3">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[homework][status]" id="settingsN3" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN3">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[homework][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[homework][bg_color]" class="primary_input_field color-input color_field" required value="#FF0000"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Study Material</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[study_material][status]" id="settingsY4" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY4">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[study_material][status]" id="settingsN4" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN4">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[study_material][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[study_material][bg_color]" class="primary_input_field color-input color_field" required value="#800080"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Exam</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[exam][status]" id="settingsY5" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY5">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[exam][status]" id="settingsN5" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN5">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[exam][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[exam][bg_color]" class="primary_input_field color-input color_field" required value="#000080"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Online Exam</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[online_exam][status]" id="settingsY6" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY6">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[online_exam][status]" id="settingsN6" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN6">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[online_exam][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[online_exam][bg_color]" class="primary_input_field color-input color_field" required value="#808000"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Leave</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[leave][status]" id="settingsY7" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY7">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[leave][status]" id="settingsN7" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN7">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[leave][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[leave][bg_color]" class="primary_input_field color-input color_field" required value="#008080"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Notice Board</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[notice_board][status]" id="settingsY8" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY8">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[notice_board][status]" id="settingsN8" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN8">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[notice_board][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[notice_board][bg_color]" class="primary_input_field color-input color_field" required value="#00FFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Holiday</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[holiday][status]" id="settingsY9" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY9">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[holiday][status]" id="settingsN9" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN9">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[holiday][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[holiday][bg_color]" class="primary_input_field color-input color_field" required value="#808080"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width:"130px"}}>Event</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[event][status]" id="settingsY10" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY10">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[event][status]" id="settingsN10" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN10">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[event][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[event][bg_color]" class="primary_input_field color-input color_field" required value="#800000"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="container">
                                                                                    <div class="row">
                                                                                        <div class="col-lg-4">
                                                                                            <p class="text-uppercase fw-500 mb-10" style={{width: "130px"}}>Library</p>
                                                                                            <div class="d-flex radio-btn-flex ml-40">
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[library][status]" id="settingsY11" value="1" class="common-radio" checked/>
                                                                                                    <label for="settingsY11">Yes</label>
                                                                                                </div>
                                                                                                <div class="mr-30">
                                                                                                    <input type="radio" name="setting[library][status]" id="settingsN11" value="0" class="common-radio"/>
                                                                                                    <label for="settingsN11">No</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Font Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[library][font_color]" class="primary_input_field color-input color_field" required value="#FFFFFF"/>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-lg-4">
                                                                                            <div class="primary_input">
                                                                                                <label class="primary_input_label">Background Color<span class="text-danger"> *</span></label>
                                                                                                <input type="color" name="setting[library][bg_color]" class="primary_input_field color-input color_field" required value="#800009"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row mt-40">
                                                                            <div class="col-lg-12 text-center">
                                                                                <button class="primary-btn fix-gr-bg submit">
                                    <span class="ti-check"></span>Update                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="white-box">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-6 col-5">
                                                    <div class="main-title">
                                                        <h3 class="mb-15">Calendar</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div>
                                                        <div id='academicCalendar'></div>
                                                        <input type="hidden" id="calendarStartDate"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal fade admin-query" id="descriptionModal">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">Description</h4>
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    </div>

                                                    <div class="modal-body">
                                                        <div class="text-center">
                                                            <div class="admissionQueryModal commonModalContent">
                                                                <h4>Admission Query</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Name</th>
                                                                            <th scope="col" id="AQname"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Phone</th>
                                                                            <th scope="col" id="AQphone"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Email</th>
                                                                            <th scope="col" id="AQemail"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Address</th>
                                                                            <th scope="col" id="AQaddress"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">next follow up date</th>
                                                                            <th scope="col" id="AQdate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                                <div class="mt-20 eventActionCutomButton">
                                                                    <div class="col-lg-12 text-center">
                                                                        <a class="primary-btn fix-gr-bg" target="_blank" id="admissionQueryUrl">
                                        <span class="pl ti-link"></span>
                                    </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="homeworkModal commonModalContent">
                                                                <h4>HomeWork</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Description</th>
                                                                            <th scope="col" id="Hdescription"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Class</th>
                                                                            <th scope="col" id="Hclass"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Section</th>
                                                                            <th scope="col" id="Hsection"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Subject</th>
                                                                            <th scope="col" id="Hsubject"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Submission Date</th>
                                                                            <th scope="col" id="Hdate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                                <div class="mt-20 eventActionCutomButton">
                                                                    <div class="col-lg-12 text-center">
                                                                        <a class="primary-btn fix-gr-bg" target="_blank" id="homeworkRoute">
                                        <span class="pl ti-link"></span>
                                    </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="studyMaterialModal commonModalContent">
                                                                <h4>Study Material</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col" id="SMtitle"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Content Type</th>
                                                                            <th scope="col" id="SMtype"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Avaiable</th>
                                                                            <th scope="col" id="SMavailable"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Description</th>
                                                                            <th scope="col" id="SMdescription"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Created at</th>
                                                                            <th scope="col" id="SMdate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                            <div class="eventModal commonModalContent">
                                                                <h4>Event</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col" id="Etitle"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Description</th>
                                                                            <th scope="col" id="Edescription"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Location</th>
                                                                            <th scope="col" id="Elocation"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Start Date</th>
                                                                            <th scope="col" id="Esdate"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">End Date</th>
                                                                            <th scope="col" id="Eedate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                                <div class="mt-20 eventActionCutomButton">
                                                                    <div class="col-lg-12 text-center">
                                                                        <a class="primary-btn fix-gr-bg d-none" target="_blank" id="eventFile">
                                        <span class="pl ti-download"></span>
                                    </a>
                                                                        <a class="primary-btn fix-gr-bg d-none" target="_blank" id="eventLink">
                                        <span class="pl ti-link"></span>
                                    </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="holidayModal commonModalContent">
                                                                <h4>Event</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col" id="HDtitle"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Description</th>
                                                                            <th scope="col" id="HDdescription"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Start Date</th>
                                                                            <th scope="col" id="HDsdate"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">End Date</th>
                                                                            <th scope="col" id="HDedate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                                <div class="mt-20 eventActionCutomButton">
                                                                    <div class="col-lg-12 text-center">
                                                                        <a class="primary-btn fix-gr-bg d-none" target="_blank" id="holidayFile">
                                        <span class="pl ti-download"></span>
                                    </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="examModal commonModalContent">
                                                                <h4>Exam</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Exam Type</th>
                                                                            <th scope="col" id="EMname"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Class</th>
                                                                            <th scope="col" id="EMclass"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Section</th>
                                                                            <th scope="col" id="EMsection"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Subject</th>
                                                                            <th scope="col" id="EMsubject"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Teacher</th>
                                                                            <th scope="col" id="EMteacher"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Room</th>
                                                                            <th scope="col" id="EMroom"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Date</th>
                                                                            <th scope="col" id="EMdate"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Start Time</th>
                                                                            <th scope="col" id="EMstarttime"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">End Time</th>
                                                                            <th scope="col" id="EMendtime"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                            <div class="noticeBoardModal commonModalContent">
                                                                <h4>Notice Board</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col" id="NBtitle"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Description</th>
                                                                            <th scope="col" id="NBdescription"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Inform To</th>
                                                                            <th scope="col" id="NBinform"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Date</th>
                                                                            <th scope="col" id="NBdate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                            <div class="onlineExamModal commonModalContent">
                                                                <h4>Online Exam</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col" id="OEtitle"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Class</th>
                                                                            <th scope="col" id="OEclass"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Section</th>
                                                                            <th scope="col" id="OEsection"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Subject</th>
                                                                            <th scope="col" id="OEsubject"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Start Date</th>
                                                                            <th scope="col" id="OEstartdate"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">End Date</th>
                                                                            <th scope="col" id="OEenddate"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Start Time</th>
                                                                            <th scope="col" id="OEstarttime"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">End Time</th>
                                                                            <th scope="col" id="OEendtime"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                            <div class="lessonPlanModal commonModalContent">
                                                                <h4>Lesson Plan</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Class</th>
                                                                            <th scope="col" id="LPclass"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Section</th>
                                                                            <th scope="col" id="LPsection"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Subject</th>
                                                                            <th scope="col" id="LPsubject"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Teacher</th>
                                                                            <th scope="col" id="LPteacher"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Date</th>
                                                                            <th scope="col" id="LPdate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                            <div class="leaveModal commonModalContent">
                                                                <h4>Leave</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Name</th>
                                                                            <th scope="col" id="Lname"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Reason</th>
                                                                            <th scope="col" id="Lreason"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Start Date</th>
                                                                            <th scope="col" id="Lstartdate"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">End Date</th>
                                                                            <th scope="col" id="Lenddate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                            <div class="libraryModal commonModalContent">
                                                                <h4>Library</h4>
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Book Title</th>
                                                                            <th scope="col" id="Lbooktitle"></th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="col">Due Date</th>
                                                                            <th scope="col" id="Lduedate"></th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal fade admin-query" id="addEventOnCalendar">
                                            <div class="modal-dialog modal-dialog-centered large-modal">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title">Add Event <span id="currentDate"></span></h4>
                                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="container-fluid">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <div class="primary_input">
                                                                                <label class="primary_input_label" for="">Event Title                                                <span class="text-danger"> *</span> </label>
                                                                                <input class="primary_input_field form-control commonInputBlank" type="text" name="event_title" autocomplete="off" value=""/>
                                                                                <span id="error_event_title" class="text-danger commonErrorBlank"></span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-lg-4">
                                                                            <label for="checkbox" class="mb-2">Role <span
                                                class="text-danger">*</span></label>
                                                                            <select multiple id="selectMultiUsers" class="multypol_check_select active position-relative commonInputBlank" name="role_ids[]" style={{width:"300px"}}>
                                                                                        <option value="3"
                                                >
                                                Parents</option>
                                                                                        <option value="4"
                                                >
                                                Teacher</option>
                                                                                        <option value="5"
                                                >
                                                Admin</option>
                                                                                        <option value="6"
                                                >
                                                Accountant</option>
                                                                                        <option value="7"
                                                >
                                                Receptionist</option>
                                                                                        <option value="8"
                                                >
                                                Librarian</option>
                                                                                        <option value="9"
                                                >
                                                Driver</option>
                                                                                    </select>
                                                                            <span id="error_role" class="text-danger commonErrorBlank"></span>
                                                                        </div>

                                                                        <div class="col-lg-4">
                                                                            <div class="primary_input">
                                                                                <label class="primary_input_label" for="">Event Location <span class="text-danger">
                                                    *</span> </label>
                                                                                <input class="primary_input_field form-control commonInputBlank" type="text" name="event_location" autocomplete="off" value=""/>
                                                                                <span id="error_event_location" class="text-danger commonErrorBlank"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 mt-25">
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <div class="primary_input">
                                                                                <label class="primary_input_label" for="">Description <span
                                                    class="text-danger"> *</span> </label>
                                                                                <textarea class="primary_input_field form-control  commonInputBlank" id="event_desData" cols="0" rows="4" name="event_des"></textarea>
                                                                                <span id="error_description" class="text-danger commonErrorBlank"></span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="primary_input">
                                                                                <label class="primary_input_label" for="">URL</label>
                                                                                <textarea class="primary_input_field form-control  commonInputBlank" id="event_urlData" cols="0" rows="4" name="url"></textarea>
                                                                                <span id="error_url" class="text-danger commonErrorBlank"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12 text-center mt-25">
                                                                    <div class="d-flex justify-content-center">
                                                                        <button class="primary-btn fix-gr-bg submit" id="saveButtonForAddEvent" type="submit">Save</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-xl-4 mt-50-md md_infix_50">
                            <div class="modal fade admin-query" id="add_to_do">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title">Add To Do</h4>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <div class="modal-body">
                                            <div class="container-fluid">
                                                <form method="POST" action="https://lms.webdigitalmantra.in/saveToDoData" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data" onsubmit="return validateToDoForm()"><input name="_token" type="hidden" value="tEK0Z79tAoOvgelV5lzYHxyoxA7uyMB12rElmGdL"/>

                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="row mt-25">
                                                                <div class="col-lg-12" id="sibling_class_div">
                                                                    <div class="primary_input">
                                                                        <label class="primary_input_label" for="">To Do Title *<span></span>
                                                            </label>
                                                                        <input class="primary_input_field form-control" type="text" name="todo_title" id="todo_title"/>

                                                                        <span class="modal_input_validation red_alert"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row mt-30">
                                                                <div class="col-lg-12" id="">
                                                                    <div class="no-gutters input-right-icon">
                                                                        <div class="col">
                                                                            <div class="primary_input">
                                                                                <label class="primary_input_label" for="">Date <span></span>
                                                                    </label>
                                                                                <input class="read-only-input primary_input_field  primary_input_field date form-control form-control" id="startDate" type="text" autocomplete="off" readonly="true" name="date" value="02/20/2025"/>
                                                                                <i
                                                                                    class="ti-calendar" id="start-date-icon"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="col-lg-12 text-center">
                                                                <div class="mt-40 d-flex justify-content-between">
                                                                    <button type="button" class="primary-btn tr-bg" data-dismiss="modal">Cancel</button>
                                                                    <input class="primary-btn fix-gr-bg submit" type="submit" value="Save"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="white-box school-table">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-6">
                                                <div class="main-title">
                                                    <h3 class="mb-15">To Do List</h3>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 text-right col-md-6 col-6">
                                                <a href="#" data-toggle="modal" class="primary-btn small fix-gr-bg" data-target="#add_to_do" title="Add To Do" data-modal-size="modal-md">
                                                <span class="ti-plus pr-2"></span>
                                                Add                                            </a>
                                            </div>
                                        </div>

                                        <div class="row to-do-list mb-20">
                                            <div class="col-md-12 d-flex align-items-center justify-content-between ">
                                                <button class="primary-btn small fix-gr-bg" id="toDoList">Incomplete</button>
                                                <button class="primary-btn small tr-bg" id="toDoListsCompleted">Completed</button>
                                            </div>
                                        </div>
                                        <input type="hidden" id="url" value="https://lms.webdigitalmantra.in"/>
                                        <div class="toDoList">
                                            <div class="single-to-do d-flex justify-content-between">
                                                No Do Lists Assigned Yet </div>
                                        </div>


                                        <div class="toDoListsCompleted">
                                            <div class="single-to-do d-flex justify-content-between">
                                                No Do Lists Assigned Yet </div>
                                        </div>
                                    </div>
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
