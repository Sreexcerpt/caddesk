import Header from '../../../Component/Header/Header'
function AdmissionQuery() {
    return (
        <>
            <div id="main-content">
                <Header />
                <section class="sms-breadcrumb mb-20 up_breadcrumb">
                    <div class="container-fluid">
                        <div class="row justify-content-between">
                            <h1>Admission Query</h1>
                            <div class="bc-pages">
                                <a href="https://lms.webdigitalmantra.in/dashboard">Dashboard</a>
                                <a href="#">Admin Section</a>
                                <a href="#">Admission Query</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="admin-visitor-area up_admin_visitor">
                    <div class="container-fluid p-0">

                        <form method="POST" action="https://lms.webdigitalmantra.in/admission-query-search" acceptCharset="UTF-8" class="form-horizontal" encType="multipart/form-data" id="infix_form"><input name="_token" type="hidden" value="G92gWikmGgoj8wSjZJ4xQU01Wvccki6YfQoZ3R53" />
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="white-box">
                                        <div class="row">
                                            <input type="hidden" name="url" id="url" value="https://lms.webdigitalmantra.in" />

                                            <div class="col-lg-8 col-md-6 col-6">
                                                <div class="main-title">
                                                    <h3 class="mb-15">Select Criteria</h3>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 text-md-right col-md-6 mb-30-lg col-6 text-right ">
                                                <button class="primary-btn-small-input primary-btn small fix-gr-bg" type="button"
                                                    data-toggle="modal" data-target="#addQuery">
                                                    <span class="ti-plus pr-2"></span>
                                                    Add                                    </button>
                                            </div>


                                            <div class="col-lg-3">
                                                <div class="primary_input mb-15">
                                                    <label class="primary_input_label" for="">Date From</label>
                                                    <div class="primary_datepicker_input">
                                                        <div class="no-gutters input-right-icon">
                                                            <div class="col">
                                                                <div class="">
                                                                    <input name="date_from" readonly
                                                                        class="primary_input_field  primary_input_field date form-control "
                                                                        type="text" autocomplete="off" id="date_from"
                                                                        value="" />
                                                                </div>
                                                            </div>
                                                            <button class="btn-date" data-id="#date_from" type="button">
                                                                <label class="m-0 p-0" for="date_from">
                                                                    <i class="ti-calendar" id="start-date-icon"></i>
                                                                </label>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <span class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="primary_input mb-15">
                                                    <label class="primary_input_label" for="">Date To</label>
                                                    <div class="primary_datepicker_input">
                                                        <div class="no-gutters input-right-icon">
                                                            <div class="col">
                                                                <div class="">
                                                                    <input name="date_to" readonly
                                                                        class="primary_input_field  primary_input_field date form-control "
                                                                        type="text" autocomplete="off" id="date_to"
                                                                        value="" />
                                                                </div>
                                                            </div>
                                                            <button class="btn-date" data-id="#date_to" type="button">
                                                                <label class="m-0 p-0" for="date_to">
                                                                    <i class="ti-calendar" id="start-date-icon"></i>
                                                                </label>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <span class="text-danger"></span>
                                                </div>
                                            </div>

                                            <div class="col-lg-3">
                                                <div class="primary_input">
                                                    <label class="primary_input_label" for="">Source </label>
                                                    <select name="source"
                                                        class="primary_select  form-control ">
                                                        <option data-display="Select Source "
                                                            value="">Select Source
                                                        </option>
                                                        <option value="4"
                                                        >
                                                            Students</option>
                                                        <option value="5"
                                                        >
                                                            Teachers</option>
                                                        <option value="6"
                                                        >
                                                            Parents and Guardians</option>
                                                    </select>

                                                    <span class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="primary_input">
                                                    <label class="primary_input_label" for="">Status </label>
                                                    <select
                                                        class="primary_select  form-control "
                                                        name="status">
                                                        <option data-display="Select status "
                                                            value="">Status
                                                        </option>
                                                        <option value="1"
                                                        >
                                                            Active</option>
                                                        <option value="2"
                                                        >
                                                            Inactive</option>
                                                    </select>
                                                    <span class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 mt-20 text-right">
                                                <button type="submit" class="primary-btn small fix-gr-bg" id="btnsubmit">
                                                    <span class="ti-search pr-2"></span>
                                                    Search                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <div class="row mt-40 mx-0 white-box">
                            <div class="col-lg-12 p-0">
                                <div class="row">
                                    <div class="col-lg-4 no-gutters">
                                        <div class="main-title">
                                            <h3 class="mb-15">Query List</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="QA_section QA_section_heading_custom check_box_table">
                                            <div class="QA_table">
                                                <table id="table_id" class="table data-table" cellspacing="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th>SL</th>
                                                            <th>Name</th>
                                                            <th>Phone</th>
                                                            <th>Source</th>
                                                            <th>Query Date</th>
                                                            <th>last follow up date</th>
                                                            <th>next follow up date</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div class="row mt-40 mx-0 white-box">
                            <div class="col-lg-12 p-0">
                                <div class="row">
                                    <div class="col-lg-4 no-gutters">
                                        <div class="main-title">
                                            <h3 class="mb-15">Query List</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="QA_section QA_section_heading_custom check_box_table">
                                            <div class="QA_table">
                                                <div id="table_id_wrapper" class="dataTables_wrapper no-footer">
                                                    <div class="dt-buttons">               
                                                        <button class="dt-button buttons-copy buttons-html5" tabIndex="0" aria-controls="table_id" type="button" title="Copy Table"><span><i class="fa fa-files-o"></i></span></button> 
                                                        <button class="dt-button buttons-excel buttons-html5" tabIndex="0" aria-controls="table_id" type="button" title="Export to Excel"><span><i class="fa fa-file-excel-o"></i></span></button> 
                                                        <button class="dt-button buttons-csv buttons-html5" tabIndex="0" aria-controls="table_id" type="button" title="Export to CSV"><span><i class="fa fa-file-text-o"></i></span></button>
                                                         <button class="dt-button buttons-pdf buttons-html5" tabIndex="0" aria-controls="table_id" type="button" title="Export to PDF"><span><i class="fa fa-file-pdf-o"></i></span></button> 
                                                         <button class="dt-button buttons-print" tabIndex="0" aria-controls="table_id" type="button" title="print"><span><i class="fa fa-print"></i></span></button> 
                                                         <button class="dt-button buttons-collection buttons-colvis" tabIndex="0" aria-controls="table_id" type="button" aria-haspopup="true"><span><i class="fa fa-columns"></i></span></button>
                                                          </div><div id="table_id_filter" class="dataTables_filter">
                                                            <label class=""><i class="ti-search"></i>
                                                            <input type="search" class="" placeholder="Quick Search" aria-controls="table_id"/>
                                                            </label>
                                                            </div>
                                                            <div id="table_id_processing" class="dataTables_processing" style={{display: "block"}}>Processing...</div><table id="table_id" class="table data-table no-footer dtr-inline dataTable" cellspacing="0" width="100%" role="grid" aria-describedby="table_id_info" style={{width: "100%"}}>
                                                    <thead>
                                                        <tr role="row">
                                                            <th class="sorting_asc" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "61px"}} aria-label="SL: activate to sort column descending" aria-sort="ascending">SL</th>
                                                            <th class="sorting" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "99px"}} aria-label="Name: activate to sort column ascending">Name</th>
                                                            <th class="sorting" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "116px"}} aria-label="Phone: activate to sort column ascending">Phone</th>
                                                            <th class="sorting" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "124px"}} aria-label="Source: activate to sort column ascending">Source</th>
                                                            <th class="sorting" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "169px"}} aria-label="Query Date: activate to sort column ascending">Query Date</th>
                                                            <th class="sorting" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "255px"}} aria-label="last follow up date: activate to sort column ascending">last follow up date</th>
                                                            <th class="sorting" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "0px"}} aria-label="next follow up date: activate to sort column ascending">next follow up date</th>
                                                            <th class="sorting_disabled" tabIndex="0" aria-controls="table_id" rowspan="1" colspan="1" style={{width: "0px"}} aria-label="Actions">Actions</th>
                                                            </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr class="odd"><td valign="top" colspan="8" class="dataTables_empty">No Data Available In Table</td></tr></tbody>
                                                </table><div class="dataTables_info" id="table_id_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div><div class="dataTables_paginate paging_simple_numbers" id="table_id_paginate"><a class="paginate_button previous disabled" aria-controls="table_id" data-dt-idx="0" tabIndex="0" id="table_id_previous"><i class="ti-arrow-left"></i></a><span></span><a class="paginate_button next disabled" aria-controls="table_id" data-dt-idx="1" tabIndex="0" id="table_id_next"><i class="ti-arrow-right"></i></a></div></div>
                                            </div>
                                        </div>                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="modal fade admin-query" id="deleteAdmissionQueryModal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Delete Admission Query</h4>
                                <button type="button" class="close"
                                    data-dismiss="modal">&times;
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="text-center">
                                    <h4>Are you sure to delete this item?</h4>
                                    <h5 class="text-danger">( Delete Confirmation                            )</h5>
                                </div>
                                <div class="mt-40 d-flex justify-content-between">
                                    <button type="button" class="primary-btn tr-bg"
                                        data-dismiss="modal">Cancel</button>
                                    <form method="POST" action="https://lms.webdigitalmantra.in/admission-query-delete" acceptCharset="UTF-8" encType="multipart/form-data"><input name="_token" type="hidden" value="G92gWikmGgoj8wSjZJ4xQU01Wvccki6YfQoZ3R53" />
                                        <input type="hidden" name="id" value="" />
                                        <button class="primary-btn fix-gr-bg" type="submit">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade admin-query" id="addQuery">
                    <div class="modal-dialog modal-dialog-centered large-modal">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Admission Query</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <form method="POST" action="https://lms.webdigitalmantra.in/admission-query-store-a" acceptCharset="UTF-8" class="form-horizontal" encType="multipart/form-data" id="admission-query-store"><input name="_token" type="hidden" value="G92gWikmGgoj8wSjZJ4xQU01Wvccki6YfQoZ3R53" />
                                <div class="modal-body">
                                    <div class="container-fluid">
                                        <form action="">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label" for="">Name<span
                                                                    class="text-danger"> *</span></label>
                                                                <input class="primary_input_field read-only-input form-control"
                                                                    type="text"
                                                                    name="name" id="name" />

                                                                <span class="text-danger" id="nameError">

                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label"
                                                                    for="">Phone</label>
                                                                <input oninput="phoneCheck(this)"
                                                                    class="primary_input_field read-only-input form-control"
                                                                    type="text"
                                                                    name="phone" id="phone" />


                                                                <span class="text-danger" id="phoneError">
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label"
                                                                    for="">Email<span></span></label>
                                                                <input oninput="emailCheck(this)"
                                                                    class="primary_input_field read-only-input form-control"
                                                                    type="email"
                                                                    name="email" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mt-25">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label"
                                                                    for="">Address<span></span> </label>
                                                                <textarea class="primary_input_field form-control" cols="0" rows="3"
                                                                    name="address" id="address"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label"
                                                                    for="">Description<span></span> </label>
                                                                <textarea class="primary_input_field form-control" cols="0" rows="3"
                                                                    name="description" id="description"></textarea>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mt-25">
                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label" for="">Date From <span
                                                                    class="text-danger"> *</span></label>
                                                                <div class="primary_datepicker_input">
                                                                    <div class="no-gutters input-right-icon">
                                                                        <div class="col">
                                                                            <div class="">
                                                                                <input
                                                                                    class="primary_input_field  primary_input_field date form-control form-control"
                                                                                    id="startDate"
                                                                                    type="text"
                                                                                    name="date" readonly="true"
                                                                                    value="02/20/2025"
                                                                                    required />
                                                                            </div>
                                                                        </div>
                                                                        <button class="btn-date" data-id="#date_from" type="button">
                                                                            <label class="m-0 p-0" for="startDate">
                                                                                <i class="ti-calendar" id="start-date-icon"></i>
                                                                            </label>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <span class="text-danger" id="dateError"></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label" for="">next follow up date <span
                                                                    class="text-danger"> *</span></label>
                                                                <div class="primary_datepicker_input">
                                                                    <div class="no-gutters input-right-icon">
                                                                        <div class="col">
                                                                            <div class="">
                                                                                <input
                                                                                    class="primary_input_field  primary_input_field date form-control form-control"
                                                                                    id="endDate"
                                                                                    type="text"
                                                                                    name="next_follow_up_date" autocomplete="off"
                                                                                    readonly="true"
                                                                                    value="02/21/2025"
                                                                                    required />
                                                                            </div>
                                                                        </div>
                                                                        <button class="btn-date" data-id="#date_from" type="button">
                                                                            <label class="m-0 p-0" for="endDate">
                                                                                <i class="ti-calendar" id="end-date-icon"></i>
                                                                            </label>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <span class="text-danger" id="nextFollowUpDateError"></span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label" for="">Assigned                                                    *<span></span></label>
                                                                <input class="primary_input_field read-only-input form-control"
                                                                    type="text"
                                                                    name="assigned" id="assigned" />

                                                                <span class="text-danger" id="assignedError"> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mt-25">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <label class="primary_input_label" for="">Reference                                                *<span></span></label>
                                                            <select class="primary_select " name="reference" id="reference">
                                                                <option data-display="Reference *"
                                                                    value="">Reference *
                                                                </option>
                                                            </select>
                                                            <span class="text-danger" id="referenceError"></span>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <label class="primary_input_label" for="">Source                                                *<span></span></label>
                                                            <select class="primary_select " name="source" id="source">
                                                                <option data-display="Source *" value="">
                                                                    Source*</option>
                                                                <option value="4">Students</option>
                                                                <option value="5">Teachers</option>
                                                                <option value="6">Parents and Guardians</option>
                                                            </select>
                                                            <span class="text-danger" id="sourceError"></span>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <label class="primary_input_label" for="">Class                                                    *<span></span></label>
                                                            <select class="primary_select " name="class" id="class">
                                                                <option data-display="Class *"
                                                                    value="">Class *
                                                                </option>
                                                                <option value="1">9TH
                                                                </option>
                                                                <option value="2">10TH
                                                                </option>
                                                                <option value="3">11TH
                                                                </option>
                                                                <option value="4">12TH
                                                                </option>
                                                            </select>
                                                            <span class="text-danger" id="classError"></span>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="primary_input">
                                                                <label class="primary_input_label" for="">Number of child                                                    *<span></span></label>
                                                                <input oninput="numberMinCheck(this)"
                                                                    class="primary_input_field read-only-input form-control"
                                                                    type="text" name="no_of_child" id="no_of_child" />


                                                                <span class="text-danger" id="no_of_childError"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mt-25">
                                                    <div class="row">
                                                        <input type="hidden" name="un_academic_id" id="select_academic"
                                                            value="1" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 text-center mt-25">
                                                    <div class="d-flex justify-content-between">
                                                        <button type="button" class="primary-btn tr-bg"
                                                            data-dismiss="modal">Cancel</button>
                                                        <button class="primary-btn fix-gr-bg submit" id="save_button_query"
                                                            type="submit">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdmissionQuery;