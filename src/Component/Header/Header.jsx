import { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {

    return ( 
        <div>
            <div>
                <div className="container-fluid no-gutters" id="main-nav-for-chat">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className="header_iner d-flex justify-content-between align-items-center">
                                <div className="small_logo_crm d-lg-none">
                                    <a href="#">
                                        <img src="/src/assets/uploads/settings/45a61b6d67a9239ac7f7c8a33f6299ef.png" alt="logo" />
                                    </a>
                                </div>
                                <div id="sidebarCollapse" className="sidebar_icon  d-lg-none">
                                    <i className="ti-menu"></i>
                                </div>
                                <div className="collaspe_icon open_miniSide">
                                    <i className="ti-menu"></i>
                                </div>

                                <div className="serach_field-area ml-40">
                                    <div className="search_inner">
                                        <form action="#">
                                            <div className="search_field">
                                                <input type="text" className="form-control primary_input_field input-left-icon" placeholder="Search" id="search" />
                                            </div>
                                            <button type="submit" style={{ paddingTop: "3px" }}><IoSearchSharp /></button>
                                        </form>
                                    </div>
                                    <div id="livesearch" style={{ display: "none" }}></div>
                                </div>
                                <div className="header_right d-flex justify-content-between align-items-center">
                                    <div className="serach_field-area mr-10">
                                        <div className="search_inner">
                                            <div className="search_field">
                                                <input type="text" className="form-control primary_input_field input-left-icon" placeholder="Name/Admission No." id="searchStudent" />
                                            </div>
                                            <button type="submit" style={{ paddingTop: "3px" }}><i
                                                style={{ fontSize: "13px", paddingLeft: "13px" }} className="ti-search"></i></button>
                                        </div>
                                        {/* <div id="liveStudentSearch" style="display: none;"></div> */}
                                    </div>
                                    <select name="#" className="nice_Select bgLess mb-0 infix_session" id="infix_session">
                                        <option value="1"
                                            selected>
                                            2024 [Jan-Dec]
                                        </option>
                                    </select>


                                    <select className="nice_Select bgLess mb-0 languageChange" id="languageChange">
                                        <option data-display="Select Language"
                                            value="0">Select Language                            </option>
                                        <option data-display="en" value="en"
                                            selected>
                                            English</option>
                                        <option data-display="bn" value="bn"
                                        >
                                            বাংলা</option>
                                        <option data-display="es" value="es"
                                        >
                                            Español</option>
                                        <option data-display="fr" value="fr"
                                        >
                                            Français</option>
                                    </select>


                                    <ul className="header_notification_warp d-flex align-items-center">

                                        {/* <notification-component :unreads="[]" :user_id="1" :redirect_url="&quot;https:\/\/lms.webdigitalmantra.in\/chat\/open&quot;" :asset_type="&quot;https:\/\/lms.webdigitalmantra.in\/public&quot;" :mark_all_as_read_url="&quot;https:\/\/lms.webdigitalmantra.in\/chat\/notification\/all-read&quot;">
                                    </notification-component> */}

                                        <li className="scroll_notification_list">
                                            <a className="pulse theme_color bell_notification_clicker show_notifications" href="#">
                                                {/* <!-- bell   --> */}
                                                <img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/notification.svg" alt="" />

                                                {/* <!--/ bell   --> */}
                                                <span className="notificationCount notification_count">9</span>
                                                <span className="pulse-ring notification_count_pulse"></span>
                                            </a>
                                            {/* <!-- Menu_NOtification_Wrap  --> */}
                                            <div className="Menu_NOtification_Wrap notifications_wrap">
                                                <div className="notification_Header">
                                                    <h4>No Unread Notification</h4>
                                                </div>
                                                <div className="Notification_body">
                                                    {/* <!-- single_notify  --> */}
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_121">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="121">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Fees Assign</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/121">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_118">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="118">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Fees Assign</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/118">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_115">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="115">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Fees Assign</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/115">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_112">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="112">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Dear admin, There's a new successful Student...</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/112">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_106">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="106">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Dear admin, There's a new successful Student...</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/106">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_103">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="103">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Dear admin, There's a new successful Student...</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/103">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_100">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="100">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Dear admin, There's a new successful Student...</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/100">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_97">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="97">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Dear admin, There's a new successful Student...</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/97">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="single_notify d-flex align-items-center" id="menu_notification_show_93">
                                                        <div className="notify_thumb">
                                                            <i className="fa fa-bell"></i>
                                                        </div>
                                                        <a href="#" className="unread_notification flex-grow-1" title="Mark As Read" data-notification_id="93">
                                                            <div className="notify_content">
                                                                <p className="notification_title">Dear admin, There's a new successful Student...</p>
                                                            </div>
                                                        </a>
                                                        <h5 className="notification_time text-nowrap">2024-09-24</h5>
                                                        <a href="https://lms.webdigitalmantra.in/view/single/notification/93">
                                                            <svg width="20" height="20" className="notification_close_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
                                                                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                                                            </svg>
                                                        </a>
                                                    </div>

                                                </div>
                                                <div className="nofity_footer">
                                                    <div className="submit_button text-center pt_20">
                                                        <a href="https://lms.webdigitalmantra.in/view/all/notification/1" className="primary-btn radius_30px text_white  fix-gr-bg mark-all-as-read">Mark All As Read</a>
                                                        <a href="https://lms.webdigitalmantra.in/all-notification" className="primary-btn radius_30px text_white  fix-gr-bg see_all_notification">See More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--/ Menu_NOtification_Wrap  --> */}
                                        </li>



                                    </ul>

                                    <div className="redirect_links">
                                        <div className="select_style d-flex">
                                            <a target="_blank" className=" mr-10 tab_hide" href="https://lms.webdigitalmantra.in"><img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/globe.svg" alt="" /></a>

                                            <a className="mr-10 tab_hide" href="https://lms.webdigitalmantra.in/student-report"><img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/report.svg" alt="" /></a>



                                        </div>
                                    </div>


                                    <div className="profile_info">

                                        <div className="user_avatar_div">
                                            <img id="profile_pic" src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/avatar.png" alt="" />
                                        </div>

                                        <div className="profile_info_iner">
                                            <p className="email"> admin@gmail.com</p>
                                            <h5>admin </h5>
                                            <div className="profile_info_details">
                                                <a href="https://lms.webdigitalmantra.in/view-staff/1">
                                                    <img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/profile.svg" alt="" />
                                                    View Profile
                                                </a>
                                                <a href="https://lms.webdigitalmantra.in/change-password">
                                                    <img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/password.svg" alt="" />
                                                    Password
                                                </a>


                                                <a href="https://lms.webdigitalmantra.in/logout" onclick="event.preventDefault();

                                              document.getElementById('logout-form').submit();">
                                                    <img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/logout.svg" alt="" />
                                                    Logout
                                                </a>

                                                <form id="logout-form" action="https://lms.webdigitalmantra.in/logout" method="POST" className="d-none">

                                                    <input type="hidden" name="_token" value="tEK0Z79tAoOvgelV5lzYHxyoxA7uyMB12rElmGdL" autocomplete="off" /> </form>
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
    )
}

export default Header
