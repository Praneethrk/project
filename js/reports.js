$(function () {
    var deptCAndS = dept_tsalary();
    var deptC_Qual = dept_qual_count_info();
    showDeptCAndS();
    showDeptQuali();
    function showDeptCAndS(){
        var headings = ["Department", "Count", "Salary"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
        data += "<thead class=table-dark><tr>";
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptCAndS.length; i++) {
            data += "<tr>";
            data += "<td>" + deptCAndS[i].dname + "</td>";
            data += "<td>" + deptCAndS[i].count + "</td>";
            data += "<td>" + deptCAndS[i].tsal + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptsctable").html(data);
    }
    
    function showDeptQuali(){
        var headings = ["Department", "Qualification", "Count"];
        var data = "";
        data += "<table class='table table-hover table-striped table-light'>";
        data += "<thead class=table-dark><tr>";
        for (var i = 0; i < headings.length; i++) {
            data += "<th>" + headings[i] + "</th>"
        }
        data += "</tr></thead>";
        for (var i = 0; i < deptC_Qual.length; i++) {
            data += "<tr>";
            data += "<td>" + deptC_Qual[i].dname + "</td>";
            data += "<td>" + deptC_Qual[i].qual + "</td>";
            data += "<td>" + deptC_Qual[i].count + "</td>";
            data += "</tr>";
        }
        data += "</table>";
        $("#deptqtable").html(data);
    }
});
