import React, { useEffect } from 'react'

const SideNavaBar = () => {
    useEffect(() => {
        $(window).on('resize', function () {
            var win = $(this);
            if (win.width() <= 991) {
                $('#sidebar.sidebar').removeClass('mini_sidebar');
                $('#main-content').removeClass('mini_main_content');
                $('.footer-area').removeClass('mini_main_content');
            }
        });
    }, [])
    return (
        <div>
            <div class="main-wrapper" style={{ minheight: "600px" }}>
                {/* <!-- sidebar part here --> */}
                <nav id="sidebar" class="sidebar">

                    <div class="sidebar-header update_sidebar">
                        <a href="admin-dashboard" id="admin-dashboard">
                                              <h4 style={{color:"white"}}>CAD DESK</h4>
                         </a>
                        <a id="close_sidebar" class="d-lg-none">
                            <i class="ti-close"></i>
                        </a>

                    </div>
                    <ul class="sidebar_menu list-unstyled" id="sidebar_menu">


                        <span class="menu_seperator" id="seperator_dashboard_section" data-section="dashboard_section">Dashboard </span>


                        <li class="mm-active a dashboard_section">

                            <a href="/">
                                <div class="nav_icon_small">
                                    <span class="fas fa-th"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Dashboard
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                            </ul>
                        </li>

                        <li class=" dashboard_section">

                            <a href="menumanage">
                                <div class="nav_icon_small">
                                    <span class="fas fa-bars"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Sidebar Manager
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_administration_section" data-section="administration_section">Administration </span>


                        <li class=" administration_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-analytics"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Lead & Admission Management
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="/LeadTracking" class="">
                                    Lead Capture &
                                    Tracking </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="/LeadScoring" class="">
                                    Lead Scoring &
                                    Segmentation </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="complaint" class="">
                                    Automated
Follow-ups
 </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="postal-receive" class="">
                                    Application
Management
</a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="postal-dispatch" class="">
                                        Postal Dispatch </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                               
                            </ul>
                        </li>

                        <li class=" administration_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-graduation-cap"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Student Lifecycle Management
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="/StudentProfileManagement" class="">
                                    Student Profile
Management
 </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="/CourseBatchEnrollment" class="">
                                    Course & Batch
Enrollment
 </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="class" class="">
                                    Attendance &
Performance 
 </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="subject" class="">
                                    Student
Management
 </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                               
                            </ul>
                        </li>

                        <li class=" administration_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-solid fa-download"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Communication & Engagement

                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="upload-content" class="">
                                    Multi-channel
                                    Communication </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="assignment-list" class="">
                                    Automated Reminders
                                    & Alerts </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="syllabus-list" class="">
                                    Chat & Support
System
 </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                
                            </ul>
                        </li>

                        <li class=" administration_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa fa-list-alt"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Finance & Payment Management

                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="lesson" class="">
                                    Online Fee Collection </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="lesson/topic" class="">
                                    Scholarship &
Installments
Management</a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                
                            </ul>
                        </li>

                        <li class=" administration_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-print"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Reports & Analytics

                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="bulkprint/student-id-card-bulk-print" class="">
                                    Real-time
                                    Dashboards </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="bulkprint/certificate-bulk-print" class="">
                                    Predictive
                Analytics
                </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                
                            </ul>
                        </li>

                        <li class=" administration_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-solid fa-download"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Download Center
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="download-center/content-type" class="">
                                        Content Type </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="download-center/content-list" class="">
                                        Content List </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="download-center/content-share-list" class="">
                                        Shared Content List </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="download-center/video-list" class="">
                                        Video List </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_student_section" data-section="student_section">Student </span>


                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-user-tie"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Student Info
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="student-category" class="">
                                        Student Category </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-admission" class="">
                                        Add Student </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-list" class="">
                                        Student List </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="multi-class-student" class="">
                                        Multi Class Student </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="delete-student-record" class="">
                                        Delete Student Record </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="unassigned-student" class="">
                                        Unassigned Student </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-attendance" class="">
                                        Student Attendance </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-group" class="">
                                        Student Group </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-promote" class="">
                                        Student Promote </a>
                                    <ul class="list-unstyled" id="8">
                                    </ul>
                                </li>
                                <li>
                                    <a href="disabled-student" class="">
                                        Disabled Students </a>
                                    <ul class="list-unstyled" id="9">
                                    </ul>
                                </li>
                                <li>
                                    <a href="subject-wise-attendance" class="">
                                        Subject Wise Attendance </a>
                                    <ul class="list-unstyled" id="10">
                                    </ul>
                                </li>
                                <li>
                                    <a href="all-student-export" class="">
                                        Student Export </a>
                                    <ul class="list-unstyled" id="11">
                                    </ul>
                                </li>
                                <li>
                                    <a href="studentabsentnotification" class="">
                                        SMS Sending Time </a>
                                    <ul class="list-unstyled" id="12">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-clipboard"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Behaviour Records
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="behaviour_records/incident" class="">
                                        Incidents </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="behaviour_records/assign_incident" class="">
                                        Assign Incident </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="behaviour_records/student_incident_report" class="">
                                        Student Incident Report </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="behaviour_records/student_behaviour_rank_report" class="">
                                        Behaviour Report </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="behaviour_records/class_section_wise_rank_report" class="">
                                        Class Section Report </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="behaviour_records/incident_wise_report" class="">
                                        Incident Wise Report </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="behaviour_records/setting" class="">
                                        Settings </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-money"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Fees
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="fees/fees-group" class="">
                                        Fees Group </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/fees-type" class="">
                                        Fees Type </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/fees-invoice-list" class="">
                                        Fees Invoice </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/bank-payment" class="">
                                        Bank Payment </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees-forward" class="">
                                        Fees Carry Forward </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                            </ul>
                        </li>


                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-book-open"></span>
                                </div>
                                <div class="nav_title">
                                    <span>HomeWork
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="add-homeworks" class="">
                                        Add Homework </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="homework-list" class="">
                                        Homework List </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="homework-report" class="">
                                        Homework Report </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-book-1"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Library
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="add-book" class="">
                                        Add Book </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="book-list" class="">
                                        Book List </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="book-category-list" class="">
                                        Book Categories </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="library-member" class="">
                                        Add Member </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="member-list" class="">
                                        Issue/Return Book </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="all-issed-book" class="">
                                        All Issued Book </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="library-subject" class="">
                                        Subject </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-bus"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Transport
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="transport-route" class="">
                                        Routes </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="vehicle" class="">
                                        Vehicle </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="assign-vehicle" class="">
                                        Assign Vehicle </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" student_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-hotel"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Dormitory
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="room-list" class="">
                                        Dormitory Rooms </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="dormitory-list" class="">
                                        Dormitory </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="room-type" class="">
                                        Room Type </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_exam_section" data-section="exam_section">Exam </span>


                        <li class=" exam_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fa fa-map-o"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Examination
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="exam-type" class="">
                                        Exam Type </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="exam" class="">
                                        Exam Setup </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="exam-schedule" class="">
                                        Exam Schedule </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="exam-attendance" class="">
                                        Exam Attendance </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="marks-register" class="">
                                        Marks Register </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="marks-grade" class="">
                                        Marks Grade </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="send-marks-by-sms" class="">
                                        Send Marks By Sms </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="custom-marksheet-report" class="">
                                        Marksheet Report </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" exam_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-test"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Exam Plan
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="examplan/admitcard" class="">
                                        Admit Card </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="examplan/seatplan" class="">
                                        Seat Plan </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" exam_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-globe"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Online Exam
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="question-group" class="">
                                        Question Group </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="question-bank" class="">
                                        Question Bank </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="online-exam" class="">
                                        Online Exam </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_hr_section" data-section="hr_section">Hr </span>


                        <li class=" hr_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-users-cog"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Human Resource
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="designation" class="">
                                        Designation </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="department" class="">
                                        Department </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="add-staff" class="">
                                        Add Staff </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="staff-directory" class="">
                                        Staff Directory </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="staff-attendance" class="">
                                        Staff Attendance </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="payroll" class="">
                                        Payroll </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" hr_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-star"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Teacher Evaluation
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="teacher-approved-evaluation-report" class="">
                                        Approved Report </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="teacher-pending-evaluation-report" class="">
                                        Pending Report </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="teacher-wise-evaluation-report" class="">
                                        Teacher Wise Report </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="teacher-evaluation-setting" class="">
                                        Settings </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" hr_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-slumber"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Leave
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="apply-leave" class="">
                                        Apply Leave </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="approve-leave" class="">
                                        Approve Leave Request </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="pending-leave" class="">
                                        Pending Leave Request </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="leave-define" class="">
                                        Leave Define </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="leave-type" class="">
                                        Leave Type </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" hr_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-authentication"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Role &amp; Permission
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="login-access-control" class="">
                                        Login Permission </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="rolepermission/role" class="">
                                        Role </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="due_fees_login_permission" class="">
                                        Due Fees Login Permission </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_accounts_section" data-section="accounts_section">Accounts </span>


                        <li class=" accounts_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="ti-wallet"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Wallet
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="wallet/pending-diposit" class="">
                                        Pending Deposit </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="wallet/approve-diposit" class="">
                                        Approve Deposit </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="wallet/reject-diposit" class="">
                                        Reject Deposit </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="wallet/wallet-transaction" class="">
                                        Wallet Transaction </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="wallet/wallet-refund-request" class="">
                                        Refund Request </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" accounts_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-university"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Accounts
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="profit" class="">
                                        Profit &amp; Loss </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="add-income" class="">
                                        Income </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="add-expense" class="">
                                        Expense </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="chart-of-account" class="">
                                        Chart Of Account </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="bank-account" class="">
                                        Bank Account </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fund-transfer" class="">
                                        Fund Transfer </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" accounts_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-inventory"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Inventory
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="item-category" class="">
                                        Item Category </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="item-list" class="">
                                        Item List </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="item-store" class="">
                                        Item Store </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="suppliers" class="">
                                        Supplier </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="item-receive" class="">
                                        Item Receive </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="item-receive-list" class="">
                                        Item Receive List </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="item-sell-list" class="">
                                        Item Sell </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="item-issue" class="">
                                        Item Issue </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_utilities_section" data-section="utilities_section">Utilities </span>


                        <li class=" utilities_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa fa-weixin"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Chat
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="chat/open" class="">
                                        Chat Box </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="chat/invitation/index" class="">
                                        Invitation </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="chat/users/blocked" class="">
                                        Blocked User </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" utilities_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-bullhorn"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Communicate
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="notice-list" class="">
                                        Notice Board </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="send-email-sms-view" class="">
                                        Send Email / Sms </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="email-sms-log" class="">
                                        Email / Sms Log </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="event" class="">
                                        Event </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="academic-calendar" class="">
                                        Calendar </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="templatesettings/email-template" class="">
                                        Email Template </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="templatesettings/sms-template" class="">
                                        Sms Template </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" utilities_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-bezier-curve"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Style
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="background-setting" class="">
                                        BackGround Settings </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="color-style" class="">
                                        Color Theme </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <span class="menu_seperator" id="seperator_report_section" data-section="report_section">Report </span>


                        <li class=" report_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-users"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Student Report
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="student-attendance-report" class="">
                                        Student Attendance Report </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="subject-attendance-report" class="">
                                        Subject Attendance Report </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="evaluation-report" class="">
                                        Homework Evaluation Report </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="" class="">
                                        Student Transport Report </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="" class="">
                                        Student Dormitory Report </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="guardian-report" class="">
                                        Guardian Reports </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-history" class="">
                                        Student History </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-login-report" class="">
                                        Student Login Report </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                                <li>
                                    <a href="class-report" class="">
                                        Class Report </a>
                                    <ul class="list-unstyled" id="8">
                                    </ul>
                                </li>
                                <li>
                                    <a href="class-routine-report" class="">
                                        Class Routine </a>
                                    <ul class="list-unstyled" id="9">
                                    </ul>
                                </li>
                                <li>
                                    <a href="user-log" class="">
                                        User Log </a>
                                    <ul class="list-unstyled" id="10">
                                    </ul>
                                </li>
                                <li>
                                    <a href="student-report" class="">
                                        Student Report </a>
                                    <ul class="list-unstyled" id="11">
                                    </ul>
                                </li>
                                <li>
                                    <a href="previous-record" class="">
                                        Previous Record </a>
                                    <ul class="list-unstyled" id="12">
                                    </ul>
                                </li>
                                <li>
                                    <a href="" class="">
                                        reports.student_transport_report </a>
                                    <ul class="list-unstyled" id="13">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" report_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="ti-agenda"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Exam Report
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="exam-routine-report" class="">
                                        Exam Routine </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="merit-list-report" class="">
                                        Merit List Report </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="online-exam-report" class="">
                                        Online Exam Report </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="mark-sheet-report-student" class="">
                                        Mark Sheet Report </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="tabulation-sheet-report" class="">
                                        Tabulation Sheet Report </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="progress-card-report" class="">
                                        Progress Card Report </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="custom-progress-card-report-percent" class="">
                                        Progress Card Report 100 Percent </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="previous-class-results" class="">
                                        Previous Result </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" report_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-user-tag"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Staff Report
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="staff-attendance-report" class="">
                                        Staff Attendance Report </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="payroll-report" class="">
                                        Payroll Report </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" report_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-server"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Fees Report
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="fees/due-fees" class="">
                                        Fees Due Report </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/fine-report" class="">
                                        Fine Report </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/payment-report" class="">
                                        Payment Report </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/balance-report" class="">
                                        Balance Report </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="fees/waiver-report" class="">
                                        Waiver Report </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="wallet/wallet-report" class="">
                                        Wallet Report </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" report_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-money"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Accounts Report
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="" class="">
                                    </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="accounts-payroll-report" class="">
                                        Payroll Report </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="transaction" class="">
                                        Transaction </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* <span class="menu_seperator" id="seperator_settings_section" data-section="settings_section">Settings Section </span>


                        <li class=" settings_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-slumber"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Custom Field
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="student-registration-custom-field" class="">
                                        Student Registration </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="staff-reg-custom-field" class="">
                                        Staff Registration </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" settings_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-cogs"></span>
                                </div>
                                <div class="nav_title">
                                    <span>General Settings
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="student-settings" class="">
                                        Student Settings </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="two_factor_auth_setting" class="">
                                        Two Factor Setting </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="lesson/lessonPlan-setting" class="">
                                        Lesson plan setting </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="staff-settings" class="">
                                        Staff Settings </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="chat/settings" class="">
                                        Chat Settings </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="general-settings" class="">
                                        General Settings </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                                <li>
                                    <a href="optional-subject-setup" class="">
                                        Optional Subject </a>
                                    <ul class="list-unstyled" id="8">
                                    </ul>
                                </li>
                                <li>
                                    <a href="academic-year" class="">
                                        Academic Year </a>
                                    <ul class="list-unstyled" id="9">
                                    </ul>
                                </li>
                                <li>
                                    <a href="holiday" class="">
                                        Holiday </a>
                                    <ul class="list-unstyled" id="10">
                                    </ul>
                                </li>
                                <li>
                                    <a href="manage-adons" class="">
                                        Module manager </a>
                                    <ul class="list-unstyled" id="11">
                                    </ul>
                                </li>
                                <li>
                                    <a href="notification_settings" class="">
                                        Notification Setting </a>
                                    <ul class="list-unstyled" id="12">
                                    </ul>
                                </li>
                                <li>
                                    <a href="plugin/tawk-setting" class="">
                                        Tawk To Chat </a>
                                    <ul class="list-unstyled" id="13">
                                    </ul>
                                </li>
                                <li>
                                    <a href="plugin/facebook-messenger-setting" class="">
                                        Messenger Chat </a>
                                    <ul class="list-unstyled" id="14">
                                    </ul>
                                </li>
                                <li>
                                    <a href="manage-currency" class="">
                                        Manage Currency </a>
                                    <ul class="list-unstyled" id="15">
                                    </ul>
                                </li>
                                <li>
                                    <a href="email-settings" class="">
                                        Email Settings </a>
                                    <ul class="list-unstyled" id="16">
                                    </ul>
                                </li>
                                <li>
                                    <a href="payment-method-settings" class="">
                                        Payment Settings </a>
                                    <ul class="list-unstyled" id="17">
                                    </ul>
                                </li>
                                <li>
                                    <a href="base-setup" class="">
                                        Base Setup </a>
                                    <ul class="list-unstyled" id="18">
                                    </ul>
                                </li>
                                <li>
                                    <a href="sms-settings" class="">
                                        Sms Settings </a>
                                    <ul class="list-unstyled" id="19">
                                    </ul>
                                </li>
                                <li>
                                    <a href="weekend" class="">
                                        Weekend </a>
                                    <ul class="list-unstyled" id="20">
                                    </ul>
                                </li>
                                <li>
                                    <a href="language-settings" class="">
                                        Language Settings </a>
                                    <ul class="list-unstyled" id="21">
                                    </ul>
                                </li>
                                <li>
                                    <a href="backup-settings" class="">
                                        Backup </a>
                                    <ul class="list-unstyled" id="22">
                                    </ul>
                                </li>
                                <li>
                                    <a href="button-disable-enable" class="">
                                        Dashboard </a>
                                    <ul class="list-unstyled" id="23">
                                    </ul>
                                </li>
                                <li>
                                    <a href="update-system" class="">
                                        About &amp; update </a>
                                    <ul class="list-unstyled" id="24">
                                    </ul>
                                </li>
                                <li>
                                    <a href="api/permission" class="">
                                        Api permission </a>
                                    <ul class="list-unstyled" id="25">
                                    </ul>
                                </li>
                                <li>
                                    <a href="language-list" class="">
                                        Language </a>
                                    <ul class="list-unstyled" id="26">
                                    </ul>
                                </li>
                                <li>
                                    <a href="preloader-setting" class="">
                                        Preloader Settings </a>
                                    <ul class="list-unstyled" id="27">
                                    </ul>
                                </li>
                                <li>
                                    <a href="utility" class="">
                                        Utilities </a>
                                    <ul class="list-unstyled" id="28">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" settings_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="flaticon-software"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Frontend CMS
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="theme/index" class="">
                                        Manage Theme </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="home-slider" class="">
                                        Home Slider </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="pages" class="">
                                        Aora Pagebuilder </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="expert-teacher" class="">
                                        Expert Teacher </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="photo-gallery" class="">
                                        Photo Gallery </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="video-gallery" class="">
                                        Video Gallery </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="front-result" class="">
                                        Result </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                                <li>
                                    <a href="front-class-routine" class="">
                                        Class Routine </a>
                                    <ul class="list-unstyled" id="7">
                                    </ul>
                                </li>
                                <li>
                                    <a href="front-exam-routine" class="">
                                        Exam Routine </a>
                                    <ul class="list-unstyled" id="8">
                                    </ul>
                                </li>
                                <li>
                                    <a href="front-academic-calendar" class="">
                                        Academic Calendar </a>
                                    <ul class="list-unstyled" id="9">
                                    </ul>
                                </li>
                                <li>
                                    <a href="header/build" class="">
                                        Header Content </a>
                                    <ul class="list-unstyled" id="10">
                                    </ul>
                                </li>
                                <li>
                                    <a href="footer/build" class="">
                                        Footer Content </a>
                                    <ul class="list-unstyled" id="11">
                                    </ul>
                                </li>
                                <li>
                                    <a href="news" class="">
                                        News List </a>
                                    <ul class="list-unstyled" id="12">
                                    </ul>
                                </li>
                                <li>
                                    <a href="news-category" class="">
                                        News Category </a>
                                    <ul class="list-unstyled" id="13">
                                    </ul>
                                </li>
                                <li>
                                    <a href="news-comment-list" class="">
                                        News Comments </a>
                                    <ul class="list-unstyled" id="14">
                                    </ul>
                                </li>
                                <li>
                                    <a href="testimonial" class="">
                                        Testimonial </a>
                                    <ul class="list-unstyled" id="15">
                                    </ul>
                                </li>
                                <li>
                                    <a href="course-list" class="">
                                        Course List </a>
                                    <ul class="list-unstyled" id="16">
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact-message" class="">
                                        Contact Message </a>
                                    <ul class="list-unstyled" id="17">
                                    </ul>
                                </li>
                                <li>
                                    <a href="header-menu-manager" class="">
                                        Menu </a>
                                    <ul class="list-unstyled" id="18">
                                    </ul>
                                </li>
                                <li>
                                    <a href="page-list" class="">
                                        Pages </a>
                                    <ul class="list-unstyled" id="19">
                                    </ul>
                                </li>
                                <li>
                                    <a href="course-category" class="">
                                        Course Category </a>
                                    <ul class="list-unstyled" id="20">
                                    </ul>
                                </li>
                                <li>
                                    <a href="speech-slider" class="">
                                        Speech Slider </a>
                                    <ul class="list-unstyled" id="21">
                                    </ul>
                                </li>
                                <li>
                                    <a href="donor" class="">
                                        Donor </a>
                                    <ul class="list-unstyled" id="22">
                                    </ul>
                                </li>
                                <li>
                                    <a href="form-download" class="">
                                        Form Download </a>
                                    <ul class="list-unstyled" id="23">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" settings_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-landmark"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Fees Settings
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="fees/fees-invoice-settings" class="">
                                        Fees Invoice Settings </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li class=" settings_section">

                            <a href="javascript:void(0)" class="has-arrow" aria-expanded="false">
                                <div class="nav_icon_small">
                                    <span class="fas fa-book"></span>
                                </div>
                                <div class="nav_title">
                                    <span>Exam Settings
                                    </span>
                                </div>
                            </a>
                            <ul class="mm-collapse">
                                <li>
                                    <a href="exam-settings" class="">
                                        Format Settings </a>
                                    <ul class="list-unstyled" id="0">
                                    </ul>
                                </li>
                                <li>
                                    <a href="custom-result-setting" class="">
                                        Setup Exam Rule </a>
                                    <ul class="list-unstyled" id="1">
                                    </ul>
                                </li>
                                <li>
                                    <a href="exam-report-position" class="">
                                        Position </a>
                                    <ul class="list-unstyled" id="2">
                                    </ul>
                                </li>
                                <li>
                                    <a href="all-exam-report-position" class="">
                                        All Exam Position </a>
                                    <ul class="list-unstyled" id="3">
                                    </ul>
                                </li>
                                <li>
                                    <a href="exam-signature-settings" class="">
                                        Exam Signature Settings </a>
                                    <ul class="list-unstyled" id="4">
                                    </ul>
                                </li>
                                <li>
                                    <a href="examplan/admitcard/setting" class="">
                                        Admit Card Setting </a>
                                    <ul class="list-unstyled" id="5">
                                    </ul>
                                </li>
                                <li>
                                    <a href="examplan/seatplan/setting" class="">
                                        Seat Plan Setting </a>
                                    <ul class="list-unstyled" id="6">
                                    </ul>
                                </li>
                            </ul>
                        </li> */}



                    </ul>
                </nav>
                {/* <!-- sidebar part end --> */}
            </div>
        </div>
    )
}

export default SideNavaBar
