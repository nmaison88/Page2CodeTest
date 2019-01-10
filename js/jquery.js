//mock json data
var data = {
    list: [
        {
            is_cat: "Employee Engagement",
            fav_score: 82,
            neu_score: 9,
            unf_score: 9,
            cmp1: 80,
            cmp2: 86,
            cmp3: 87
        },
        {
            is_cat:
                "I am willing to contribute a great deal of effort beyond what is normally expected to help Perceptyx succeed.",
            fav_score: 94,
            neu_score: 5,
            unf_score: 1,
            cmp1: 93,
            cmp2: 95,
            cmp3: 95
        },
        {
            is_cat: "I am proud to work for Perceptyx.",
            fav_score: 86,
            neu_score: 9,
            unf_score: 5,
            cmp1: 85,
            cmp2: 90,
            cmp3: 91
        },

        {
            is_cat:
                "I can see a clear link between my work and Perceptyx objectives.",
            fav_score: 83,
            neu_score: 7,
            unf_score: 10,
            cmp1: 79,
            cmp2: 85,
            cmp3: 86
        },
        {
            is_cat:
                "I intend to stay employed at Perceptyx for at least the next twelve months.",
            fav_score: 82,
            neu_score: 10,
            unf_score: 8,
            cmp1: 89,
            cmp2: 88,
            cmp3: 89
        },
        {
            is_cat:
                "I would refer friends or family members to Perceptyx as a good place to work.",
            fav_score: 74,
            neu_score: 14,
            unf_score: 12,
            cmp1: 68,
            cmp2: 83,
            cmp3: 84
        },
        {
            is_cat:
                "The company really inspires the very best in me in the way of job performance.",
            fav_score: 74,
            neu_score: 14,
            unf_score: 12,
            cmp1: 62,
            cmp2: 83,
            cmp3: 84
        }
    ]
};


$(document).ready(function () {
    console.log("ready!");
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
}

);
