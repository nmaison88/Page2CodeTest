
$(document).ready(function () {
    console.log("ready!");


    console.log('get ajax');
    $.get("https://cors-anywhere.herokuapp.com/https://api.myjson.com/bins/7o768", function (data) {
        $(".result").html(data);
        
    


    var i = 0;
    Object.keys(data.list).forEach(function (key) {
        // console.log(data.list);
        if (i==0) {
            var header = "bg-th text-light";
        }
        else {
            var header = "standard ";
        }
        
        if (data.list[i].cmp1 > data.list[i].fav_score) {
            var redchk1 = "danger";
        }
        else {
            var redchk1 = "success";
        }
        if (data.list[i].cmp2 > data.list[i].fav_score) {
            var redchk2 = "danger";
        }
        else {
            var redchk1 = "success";
        }
        if (data.list[i].cmp3 > data.list[i].fav_score) {
            var redchk3 = "danger";
        }
        else {
            var redchk1 = "success";
        }


        var row = '<tr class="  d-flex">'
            +

            '<td class="surveyQuestion col-4 '+ header + '">' + data.list[i].is_cat + '</td>' +
            '<td class="col-5 '+ header + '">' + '<ul id="progress" class="progress  text-center"><li style=" width:' + data.list[i].fav_score + '% " class="bar">' + data.list[i].fav_score + '%<li style=" width:' + data.list[i].neu_score + '% " class="bar2">' + data.list[i].neu_score + '%<li style=" width:' + data.list[i].unf_score + '%" class="bar3">' + data.list[i].unf_score + '% </ul>' + '</td>' +
            '<td class="' + redchk1 + ' col-1 '+ header + '">' + data.list[i].cmp1 + '%</td>' +
            '<td class="' + redchk2 + ' col-1 '+ header + '">' + data.list[i].cmp2 + '%</td>' +
            '<td class="' + redchk3 + ' col-1 '+ header + '">' + data.list[i].cmp3 + '%</td>' +
            '</tr>';
        $('table').append(row);
        i++;

    });
    $('#empengperc').text(data.list[0].fav_score + '%  .');
    $('#circleprog').attr("stroke-dasharray", + data.list[0].fav_score + ", 100");
});
   
}

);
