import { useEffect } from "react";

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
                                            <button type="submit" style={{ paddingTop: "3px" }}><i
                                                style={{ fontSize: "13px", paddingLeft: "13px" }} className="ti-search"></i></button>
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


                                    <div tabindex="0" class="nice-select nice_Select bgLess mb-0 languageChange">
                                        <span class="current">en</span>
                                        <div class="nice-select-search-box">
                                            <input type="text" placeholder="Search..." class="nice-select-search" /></div>
                                        <ul class="list">
                                            <li data-value="0" data-display="Select Language" class="option">Select Language</li>
                                            <li data-value="en" data-display="en" class="option selected focus">English</li>
                                            <li data-value="bn" data-display="bn" class="option">বাংলা</li>
                                            <li data-value="es" data-display="es" class="option">Español</li>
                                            <li data-value="fr" data-display="fr" class="option">Français</li>
                                            </ul>
                                            </div>

                                    <ul class="header_notification_warp d-flex align-items-center"><li id="notification_count" class="scroll_notification_list"><a href="#" class="pulse theme_color bell_notification_clicker"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#2f2f3bad" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 8H17" stroke="#2f2f3bad" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 13H13" stroke="#2f2f3bad" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span class="chat_badge notification_count">0  </span> <span class="pulse-ring notification_count_pulse"></span></a> <div class="Menu_NOtification_Wrap"><div class="notification_Header"><h4>Chat Notification</h4> <audio id="sound" src="/src/assets/chat/audio/notification.mp3" muted="muted"></audio></div> <div class="Notification_body"></div> <div class="nofity_footer"><div class="submit_button text-center pt_20"><a href="https://lms.webdigitalmantra.in/chat/notification/all-read" class="primary-btn radius_30px text_white fix-gr-bg">Mark All As Read</a></div></div></div></li> <li class="scroll_notification_list"><a href="#" class="pulse theme_color bell_notification_clicker show_notifications"><img src="https://lms.webdigitalmantra.in/public/backEnd/assets/img/icons/notification.svg" alt="" /> <span class="notificationCount notification_count">8</span> <span class="pulse-ring notification_count_pulse"></span></a> <div class="Menu_NOtification_Wrap notifications_wrap"><div class="notification_Header"><h4>No Unread Notification</h4></div> <div class="Notification_body"><div id="menu_notification_show_118" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="118" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Fees Assign</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/118"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_115" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="115" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Fees Assign</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/115"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_112" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="112" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Dear admin,
                                        There's a new successful Student...</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/112"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_106" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="106" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Dear admin,
                                            There's a new successful Student...</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/106"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_103" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="103" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Dear admin,
                                                There's a new successful Student...</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/103"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_100" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="100" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Dear admin,
                                                    There's a new successful Student...</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/100"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_97" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="97" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Dear admin,
                                                        There's a new successful Student...</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/97"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div> <div id="menu_notification_show_93" class="single_notify d-flex align-items-center"><div class="notify_thumb"><i class="fa fa-bell"></i></div> <a href="#" title="Mark As Read" data-notification_id="93" class="unread_notification flex-grow-1"><div class="notify_content"><p class="notification_title">Dear admin,
                                                            There's a new successful Student...</p></div></a> <h5 class="notification_time text-nowrap">2024-09-24</h5> <a href="https://lms.webdigitalmantra.in/view/single/notification/93"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="notification_close_icon"><circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></a></div></div> <div class="nofity_footer"><div class="submit_button text-center pt_20"><a href="https://lms.webdigitalmantra.in/view/all/notification/1" class="primary-btn radius_30px text_white fix-gr-bg mark-all-as-read">Mark All As Read</a> <a href="https://lms.webdigitalmantra.in/all-notification" class="primary-btn radius_30px text_white fix-gr-bg see_all_notification">See More</a></div></div></div></li></ul>

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
