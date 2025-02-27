import React from "react";
import Header from "../../../Component/Header/Header";

const CourseBatchEnrollment = () => {
  return (
    <div>
      <div id="main-content">
        <Header />
        <section class="sms-breadcrumb mb-20 up_breadcrumb">
          <div class="container-fluid">
            <div class="row justify-content-between">
              <h1>Course Batch Enrollment</h1>
              <div class="bc-pages">
                <a href="">Dashboard</a>
                <a href="#">Student Info</a>
                <a href="#">Course Batch Enrollment</a>
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
              <input name="_token" type="hidden" />
              <div class="row">
                <div class="col-lg-12">
                  <div class="white-box filter_card">
                    <div class="row">
                      <div class="col-lg-8 col-md-6 col-sm-6">
                        <div class="main-title mt_0_sm mt_0_md">
                          <h3 class="mb-15">Course Form</h3>
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
                            Course ID
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            class="primary_input_field"
                            type="text"
                            placeholder="Course ID"
                            name="Course ID"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3 mt-0">
                        <div class="primary_input ">
                          <label class="primary_input_label" for="">
                          Course Name
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            class="primary_input_field"
                            type="text"
                            placeholder="Course Name"
                            name="Course Name"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3 mt-0">
                        <div class="primary_input ">
                          <label class="primary_input_label" for="">
                            Batch ID
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            class="primary_input_field"
                            type="date"
                            placeholder="Batch ID"
                            name="Batch ID"
                          />
                        </div>
                      </div>

                      <div class="col-lg-3 mt-0">
                        <div class="primary_input ">
                          <label class="primary_input_label" for="">
                            Enrollment
Date
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            class="primary_input_field"
                            type="date"
                            placeholder="Enrollment
Date"
                            name="Enrollment
Date"
                          />
                        </div>
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
                        <h3 class="mb-15">Course Enrollment</h3>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="QA_section QA_section_heading_custom check_box_table">
                        <div class="QA_table">
                          <div
                            class="dataTables_wrapper no-footer"
                            id="table_id_wrapper"
                          >
                            <div class="dt-buttons">
                              {" "}
                              <button
                                class="dt-button buttons-copy buttons-html5"
                                tabindex="0"
                                aria-controls="table_id"
                                type="button"
                                title="Copy Table"
                              >
                                <span>
                                  <i class="fa fa-files-o"></i>
                                </span>
                              </button>{" "}
                              <button
                                class="dt-button buttons-excel buttons-html5"
                                tabindex="0"
                                aria-controls="table_id"
                                type="button"
                                title="Export to Excel"
                              >
                                <span>
                                  <i class="fa fa-file-excel-o"></i>
                                </span>
                              </button>{" "}
                              <button
                                class="dt-button buttons-csv buttons-html5"
                                tabindex="0"
                                aria-controls="table_id"
                                type="button"
                                title="Export to CSV"
                              >
                                <span>
                                  <i class="fa fa-file-text-o"></i>
                                </span>
                              </button>{" "}
                              <button
                                class="dt-button buttons-pdf buttons-html5"
                                tabindex="0"
                                aria-controls="table_id"
                                type="button"
                                title="Export to PDF"
                              >
                                <span>
                                  <i class="fa fa-file-pdf-o"></i>
                                </span>
                              </button>{" "}
                              <button
                                class="dt-button buttons-print"
                                tabindex="0"
                                aria-controls="table_id"
                                type="button"
                                title="print"
                              >
                                <span>
                                  <i class="fa fa-print"></i>
                                </span>
                              </button>{" "}
                              <button
                                class="dt-button buttons-collection buttons-colvis"
                                tabindex="0"
                                aria-controls="table_id"
                                type="button"
                                aria-haspopup="true"
                              >
                                <span>
                                  <i class="fa fa-columns"></i>
                                </span>
                              </button>{" "}
                            </div>

                            <table
                              id="table_id"
                              class="table data-table Crm_table_active3 no-footer dtr-inline collapsed"
                              cellspacing="0"
                              width="100%"
                            >
                              <thead>
                                <tr>
                                <th> Sno</th>
                                  <th> Course ID</th>
                                  <th> Course Name</th>
                                  <th> Batch Id</th>
                                  <th> Enrollment
Date
</th>
                                  <th> Actions</th>
                                </tr>

                                

                                <tr>
                                  <td>1</td>
                                  <td>758493423423</td>
                                  <td>Auto Cad</td>
                                  <td>2015-2016</td>
                                  <td>2015-2-4</td>
                                  <td> Edit</td>
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
    </div>
  );
};

export default CourseBatchEnrollment;
