import React from "react";
import Header from "../../Component/Header/Header";

const LeadTracking = () => {
  return (
    <div id="main-content">
      <Header />
      <section class="sms-breadcrumb mb-20 up_breadcrumb">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <h1>Lead Capture & Tracking</h1>
            <div class="bc-pages">
              <a href="">Dashboard</a>
              <a href="#">Admin Section</a>
              <a href="#">Lead Capture & Tracking</a>
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
                          <h3 class="mb-15">Lead Capture Form</h3>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Lead Name <span class="text-danger"> *</span>
                              </label>
                              <input
                                class="primary_input_field "
                                type="text"
                                placeholder="Lead Name "
                                name="Lead Name "
                              />
                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-15">
                          <div class="col-lg-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Name
                                <span class="text-danger"> *</span>
                              </label>
                              <input
                                name="name"
                                class="primary_input_field name"
                                placeholder="Name"
                                type="text"
                              />
                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-15">
                          <div class="col-lg-12">
                            <div class="primary_input">
                              <label class="primary_input_label">Phone</label>
                              <input
                                oninput="phoneCheck(this)"
                                placeholder="Phone"
                                class="primary_input_field"
                                type="tel"
                                name="phone"
                              />

                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>

                        <div class="row mt-15">
                          <div class="col-lg-12">
                            <div class="primary_input">
                              <label class="primary_input_label">
                                social media<span class="text-danger">*</span>
                              </label>
                              <input
                                class="primary_input_field"
                                type="text"
                                name="visitor_id"
                                placeholder="social media"
                              />
                              <span class="text-danger"></span>
                            </div>
                          </div>
                        </div>

                        <div class="row mt-15">
                          <div class="col-lg-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Source of Inquiry
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                class="primary_input_field"
                                placeholder="Source of Inquiry"
                                type="text"
                                name="Source of Inquiry"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row no-gutters input-right-icon mt-15">
                          <div class="col">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Course of Interest
                                <span class="text-danger"> *</span>
                              </label>
                              <input
                                class="primary_input_field  primary_input_field date form-control"
                                placeholder="Course of Interest"
                                id="startDate"
                                type="text"
                              />
                            </div>
                          </div>

                          {/* <button class="" type="button">
                                            <label class="m-0 pt-2" for="startDate">
                                                <i class="ti-calendar" id="admission-date-icon"></i>
                                            </label>
                                        </button> */}
                        </div>

                        <div class="row mt-15">
                          <div class="col-md-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Lead Status<span class="text-danger">*</span>
                              </label>
                              <div class="primary_datepicker_input">
                                <div class="no-gutters input-right-icon">
                                  <div class="col">
                                    <div class="">
                                      <input
                                        class="primary_input_field primary_input_field time"
                                        type="text"
                                        name="in_time"
                                        placeholder="-"
                                        id="in_time"
                                      />
                                    </div>
                                  </div>
                                  <button class="" type="button">
                                    <label class="m-0 p-0" for="in_time">
                                      <i
                                        class="ti-alarm-clock "
                                        id="admission-date-icon"
                                      ></i>
                                    </label>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-15">
                          <div class="col-md-12">
                            <div class="primary_input">
                              <label class="primary_input_label" for="">
                                Note & Optional
                                <span class="text-danger">*</span>
                              </label>
                              <div class="primary_datepicker_input">
                                <div class="no-gutters input-right-icon">
                                  <div class="col">
                                    <div class="">
                                      <input
                                        placeholder="-"
                                        class="primary_input_field primary_input_field time"
                                        type="text"
                                        name="out_time"
                                        id="out_time"
                                      />
                                    </div>
                                  </div>
                                  <button class="" type="button">
                                    <label class="m-0 p-0" for="out_time">
                                      <i
                                        class="ti-alarm-clock "
                                        id="admission-date-icon"
                                      ></i>
                                    </label>
                                  </button>
                                </div>
                              </div>
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
                      <h3 class="mb-15">Lead Tracking Status</h3>
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
                              <th>Lead Name</th>
                              <th>Contact Infor</th>
                              <th>Source of Inquiry</th>
                              <th>Course of Interest</th>
                              <th>Status </th>
                            </tr>

                            <tr>
                              <td>karthik</td>
                              <td>6302874114</td>
                              <td>website through Contact</td>
                              <td>Interest</td>
                              <td>Progress</td>
                            </tr>

                            <tr>
                              <td>Kavana</td>
                              <td>7794063624</td>
                              <td>ADs </td>
                              <td>Interest</td>
                              <td>New</td>
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

      {/* <!-- Start Delete Add Modal --> */}
      <div class="modal fade admin-query" id="deleteVisitorModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Delete Visitor </h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div class="text-center">
                <h4>Are you sure to delete this item?</h4>
              </div>

              <div class="mt-40 d-flex justify-content-between">
                <button
                  type="button"
                  class="primary-btn tr-bg"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <form
                  method="POST"
                  action="https://lms.webdigitalmantra.in/visitor-delete"
                  accept-charset="UTF-8"
                  enctype="multipart/form-data"
                >
                  <input
                    name="_token"
                    type="hidden"
                    value="Tv1d0CSBhigaN0wZlCavLbSe6Wxkitq6L7wcUm7X"
                  />
                  <input type="hidden" name="id" value="" />
                  <button class="primary-btn fix-gr-bg" type="submit">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Delete Add Modal --> */}

      <div class="has-modal modal fade" id="showDetaildModal">
        <div class="modal-dialog modal-dialog-centered" id="modalSize">
          <div class="modal-content">
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h4 class="modal-title" id="showDetaildModalTile">
                New Client Information
              </h4>
              <button type="button" class="close icons" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body" id="showDetaildModalBody"></div>
          </div>
        </div>
      </div>
      {/* <!--  Start Modal Area --> */}
      <div class="modal fade invoice-details" id="showDetaildModalInvoice">
        <div class="modal-dialog large-modal modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">common.add_invoice</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body" id="showDetaildModalBodyInvoice"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadTracking;
