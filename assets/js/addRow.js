var SmartAuto = (function () {
    var addBtn, html, rowcount, tableBody;

    addBtn = $("#addNew");
    rowcount = $('#autocomplete_table tbody tr').length * 1;
    tableBody = $("#autocomplete_table tbody");


    function formHtml() {
        html = '<tr id="row_' + rowcount + '">';
        html += '<th id="delete_' + rowcount + '" scope="row" class="delete_row "><i class="fa fa-trash text-white" aria-hidden="true"></i></th>';
        html += '<td>';
        html += '<input type="text" data-type="name" name="pieces"id="name' + rowcount + '" class="form-control autocomplete_text" autocomplete="off">';
        html += '</td>';
        html += '<td>';
        html += '<input type="number" data-type="bottle DLVD" name="bottle DLVD" id="bottle_' + rowcount + '" class="form-control autocomplete_numeric" autocomplete="off">';
        html += '</td>';
        html += '<td>';
        html += '<input type="number" data-type="empty RCVD" name="empty RCVD" id="empty_' + rowcount + '" class="form-control autocomplete_numeric" autocomplete="off">';
        html += '</td>';
        html += '<td>';
        html += '<input type="number" data-type="bal bottle" name="bal bottle" id="bal_' + rowcount + '" class="form-control autocomplete_numeric" autocomplete="off">';
        html += '</td>';
        html += '<td>';
        html += '<input type="number" data-type="rate" name="rate" id="rate_' + rowcount + '" class="form-control autocomplete_numeric" autocomplete="off">';
        html += '</td>';
        html += '<td>';
        html += '<input type="number" data-type="amount RECD" name="amount RECD" id="amount_' + rowcount + '" class="form-control autocomplete_numeric" autocomplete="off">';
        html += '</td>';

        rowcount++;
        return html;
    }

    function addNewRow() {
        tableBody.append(formHtml());

    }

    function registerEvents() {
        addBtn.on("click", addNewRow);
    }

    function init() {
        registerEvents();
    }
    return {
        init: init
    };
})();

$(document).ready(function () {
    SmartAuto.init();
});