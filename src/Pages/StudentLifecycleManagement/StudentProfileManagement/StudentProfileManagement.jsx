import React from "react";
import Header from "../../../Component/Header/Header";


// icons //
import { FaBookReader } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { LuTangent } from "react-icons/lu";
import { FaFlag } from "react-icons/fa6";
import { FaLocationPinLock } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { SiCkeditor4 } from "react-icons/si";
const StudentProfileManagement = () => {
  return (
    <div id="main-content">
        <Header/>
      <section class="sms-breadcrumb mb-20 up_breadcrumb">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <h1>Student Profile
Management
</h1>
            <div class="bc-pages">
              <a href="">Dashboard</a>
              <a href="#">Student Info</a>
              <a href="#">Student Profile
Management
</a>
            </div>
          </div>
        </div>
      </section>

      <section class="admin-visitor-area up_admin_visitor">
        <div class="container-fluid p-0">
          <form
            method="POST"
            action="https://lms.webdigitalmantra.in/student-list-search"
            accept-charset="UTF-8"
            class="form-horizontal"
            enctype="multipart/form-data"
            id="infix_form"
          >
            <input name="_token" type="hidden"  />
            <div class="row">
              <div class="col-lg-12">
                <div class="white-box filter_card">
                  <div class="row">
                    <div class="col-lg-8 col-md-6 col-sm-6">
                      <div class="main-title mt_0_sm mt_0_md">
                        <h3 class="mb-15">Student Profile
Management
</h3>
                      </div>
                    </div>

                  
                  </div>
                  <div class="row">
                    <input
                      type="hidden"
                      name="url"
                      id="url"
                      value="https://lms.webdigitalmantra.in"
                    />

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                          Student ID 
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Student ID"
                          name="Student ID"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                          Name 
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Name"
                          name="Name"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                          DOB
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="date"
                          placeholder="DOB"
                          name="DOB"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                          Gender
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Gender"
                          name="Gender"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                          Nationality
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Nationality"
                          name="Nationality"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                          Address 
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Address"
                          name="Address"
                        />
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0">
                      <div class="primary_input ">
                        <label class="primary_input_label" for="">
                        Emergency
Contact
 
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Emergency
Contact
"
                          name="Emergency
Contact
"
                        />
                      </div>
                    </div>

                    {/* <div class="col-lg-3 mt-0" id="common_select_class_div">
                      <div class="primary_input mb-25">
                        <label class="primary_input_label" for="">
                          Class
                          <span class="text-danger"></span>
                        </label>
                        <select
                          class="primary_select form-control"
                          name="class_id"
                          id="common_select_class"
                        >
                          <option data-display="Select Class " >
                            Select Class{" "}
                          </option>
                          <option value="1">9TH</option>
                          <option value="2">10TH</option>
                          <option value="3">11TH</option>
                          <option value="4">12TH</option>
                        </select>
                        <div
                          class="pull-right loader loader_style"
                          id="common_select_class_loader"
                        >
                          <img
                            class="loader_img_style"
                            src="https://lms.webdigitalmantra.in/public/backEnd/img/demo_wait.gif"
                            alt="loader"
                          />
                        </div>
                        <span class="text-danger"></span>
                      </div>
                    </div>

                    <div class="col-lg-3 mt-0" id="common_select_section_div">
                      <label class="primary_input_label" for="">
                        Section
                        <span class="text-danger"></span>
                      </label>
                      <select
                        class="primary_select form-control select_section"
                        id="common_select_section"
                        name="section_id"
                      >
                        <option data-display="Select Section " >
                          Select Section{" "}
                        </option>
                      </select>
                      <div
                        class="pull-right loader loader_style"
                        id="common_select_section_loader"
                        style={{ marginTop: "-30px", paddingRight: "21px" }}
                      >
                        <img
                          src="https://lms.webdigitalmantra.in/public/backEnd/img/demo_wait.gif"
                          alt=""
                          style={{ width: "28px", height: "28px" }}
                        />
                      </div>
                    </div>

                    <div class="col-lg-2">
                      <div class="primary_input sm_mb_20 ">
                        <label class="primary_input_label" for="">
                          Search By Name
                        </label>

                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Name"
                          name="name"
                          
                        />
                      </div>
                    </div>
                    <div class="col-lg-1">
                      <div class="primary_input sm_mb_20 ">
                        <label class="primary_input_label" for="">
                          Search By Roll
                        </label>
                        <input
                          class="primary_input_field"
                          type="text"
                          placeholder="Roll"
                          name="roll_no"
                          
                        />
                      </div>
                    </div> */}
                    <div class="col-lg-3 mt-20 text-right">
                      <button
                        type="submit"
                        class="primary-btn small fix-gr-bg"
                        id="btnsubmit"
                      >
                        <span class="ti-search pr-2"></span>
                        Search{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </form>

          <div class="row mt-40 full_wide_table">
            <div class="col-lg-12">
              <div class="white-box">
                <div class="row">
                  <div class="col-lg-4 no-gutters">
                    <div class="main-title">
                      <h3 class="mb-15">Student List</h3>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="QA_section QA_section_heading_custom check_box_table">
                      <div class="QA_table">
                        <div class="dataTables_wrapper no-footer" id="table_id_wrapper">
                        <div class="dt-buttons">               <button class="dt-button buttons-copy buttons-html5" tabindex="0" aria-controls="table_id" type="button" title="Copy Table"><span><i class="fa fa-files-o"></i></span></button> <button class="dt-button buttons-excel buttons-html5" tabindex="0" aria-controls="table_id" type="button" title="Export to Excel"><span><i class="fa fa-file-excel-o"></i></span></button> <button class="dt-button buttons-csv buttons-html5" tabindex="0" aria-controls="table_id" type="button" title="Export to CSV"><span><i class="fa fa-file-text-o"></i></span></button> <button class="dt-button buttons-pdf buttons-html5" tabindex="0" aria-controls="table_id" type="button" title="Export to PDF"><span><i class="fa fa-file-pdf-o"></i></span></button> <button class="dt-button buttons-print" tabindex="0" aria-controls="table_id" type="button" title="print"><span><i class="fa fa-print"></i></span></button> <button class="dt-button buttons-collection buttons-colvis" tabindex="0" aria-controls="table_id" type="button" aria-haspopup="true"><span><i class="fa fa-columns"></i></span></button> </div>

                        <table
                          id="table_id"
                          class="table data-table Crm_table_active3 no-footer dtr-inline collapsed"
                          cellspacing="0"
                          width="100%"
                        >
                          <thead>
                            <tr>
                              <th><FaBookReader/> Student ID</th>
                              <th><FaWallet/> Name</th>
                              <th><LuTangent/> Gender</th>
                              <th><FaFlag/> Nationality</th>

                              <th><FaLocationPinLock/> Address</th>
                              <th><GrTransaction /> Actions</th>
                            </tr>

                            <tr>
                                <td>758493423423</td>
                                <td>Karthik Bidurur</td>
                                <td>Male</td>
                                <td>india</td>
                                <td>Banglore</td>
                                <td><SiCkeditor4 /> Edit</td>
                            </tr>

                            <tr>
                                <td>758493423423</td>
                                <td>Karthik Bidurur</td>
                                <td>Male</td>
                                <td>india</td>
                                <td>Banglore</td>
                                <td><SiCkeditor4 /> Edit</td>
                            </tr>

                            <tr>
                                <td>758493423423</td>
                                <td>Karthik Bidurur</td>
                                <td>Male</td>
                                <td>india</td>
                                <td>Banglore</td>
                                <td><SiCkeditor4 /> Edit</td>
                            </tr>

                            <tr>
                                <td>758493423423</td>
                                <td>Karthik Bidurur</td>
                                <td>Male</td>
                                <td>india</td>
                                <td>Banglore</td>
                                <td><SiCkeditor4 /> Edit</td>
                            </tr>
                          </thead>
                          <tbody></tbody>
                        </table>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentProfileManagement;
