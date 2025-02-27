import React from "react";
import Header from "../../Component/Header/Header";

const LeadScoring = () => {
  return (
    <div id="main-content">
      <Header />
      <section class="sms-breadcrumb mb-20 up_breadcrumb">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <h1>Lead Scoring &
            Segmentation</h1>
            <div class="bc-pages">
              <a href="">Dashboard</a>
              <a href="#">Admin Section</a>
              <a href="#">Lead Scoring &
              Segmentation</a>
            </div>
          </div>
        </div>
      </section>

      {/* form code start*/}
      <section class="admin-visitor-area up_admin_visitor">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-lg-3">
              <div class="row">
                <div class="col-lg-12">
                  <form
                    method="POST"
                    action=""
                    accept-charset="UTF-8"
                    class="form-horizontal"
                    enctype="multipart/form-data"
                  >
                    <input name="_token" type="hidden" />
                    <div class="white-box">
                      <div class="add-visitor">
                        <div class="main-title">
                          <h3 class="mb-15">Lead Scoring Form</h3>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                              Engagement Score <span class="text-danger"> *</span>
                              </label>
                              <input
                                class="primary_input_field "
                                type="text"
                                placeholder="Engagement Score "
                                name="Engagement Score "
                              />
                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-15">
                          <div class="col-lg-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Interest Level 
                                <span class="text-danger"> *</span>
                              </label>
                              <input
                                name="Interest Level "
                                class="primary_input_field name"
                                placeholder="Interest Level "
                                type="text"
                              />
                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-15">
                          <div class="col-lg-12">
                            <div class="primary_input">
                              <label class="primary_input_label">Interaction History</label>
                              <input
                               
                                placeholder="Interaction History"
                                class="primary_input_field"
                                type="text"
                                name="Interaction History"
                              />

                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>

                       

                        <div class="row mt-40">
                          <div class="col-lg-12 text-center">
                            <button
                              class="primary-btn fix-gr-bg submit"
                              data-toggle="tooltip"
                              title=""
                            >
                              <span class="ti-check"></span>
                              Save{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-9">
              <div class="white-box">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="main-title">
                      <h3 class="mb-15">Lead Scoring</h3>
                    </div>
                    <div class="QA_section QA_section_heading_custom check_box_table">
                      <div class="QA_table">
                        <table
                          id="table_id"
                          class="Crm_table_active3 table data-table"
                          cellspacing="0"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th>Engagement Score</th>
                              <th>Interest Level </th>
                              <th>Interaction History</th>
                            </tr>

                            <tr>
                              <td>100</td>
                              <td>HOT</td>
                              <td>Email through Visited</td>
                            </tr>

                            <tr>
                              <td>230</td>
                              <td>Cold</td>
                              <td>Website through visited</td>
                             
                            </tr>

                          </thead>

                          <tbody></tbody>
                        </table>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* from code end */}

     
    </div>
  );
};

export default LeadScoring;
