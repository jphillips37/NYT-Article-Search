var query;
var beginDate;
var endDate;
var quantity;

function ajaxCall(query, beginDate, endDate) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "8952bd6ffbfe461592bb8b3eab1ad43e",
        'q': query,
        'begin_date': beginDate,
        'end_date': endDate
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result.response.docs[0].byline.original);
    }).fail(function (err) {
        throw err;
    });
}
// ajaxCall("obama", "19000101", "20140101");
$(":button").on("click", function() {
    
    event.preventDefault();

    if ($(this).attr("id") == "submitBtn"){
        
        query = $("#searchForm").val();
        beginDate = $("#startForm").val();
        endDate = $("#endForm").val();
        // console.log(query, beginDate, endDate);
        ajaxCall(query, beginDate, endDate);
        // console.log()
    }
})

