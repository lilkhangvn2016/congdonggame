function chvote(a, b) {
    "Message not voted" == b && (b = "c3zone z vietk 0% (0 vote)");
    var d = parseInt(b.split(" ")[3], 10) / 100,
        c = parseInt(b.split(" ")[4].substr(1), 10),
        b = "Message reputation : " + Math.round(100 * ("c3zplus" == a ? (d * c + 1) / (c + 1) : d * c / (c + 1))) + "% (" + (c + 1) + " vote)";
    return votetrans(b)
}
$(".c3zvau").each(function () {
    var a = $(this).text();
    $(this).html(votetrans(a))
});

function votetrans(a) {
    if ("Message not voted" == a) return "<span class='qua'>Chưa có ai đánh giá bài viết này</span>";
    var b = parseInt(a.split(" ")[3], 10) / 100,
        a = parseInt(a.split(" ")[4].substr(1), 10),
        d = 0 != b ? "<span class=vop>" + Math.round(b * a) + " Thích</span>" : "",
        c = 0 != b && 1 != b ? ' <span style="color:#C2D5E3">|</span> ' : "",
        a = 1 != b ? "<span class=vom>" + Math.round(a - b * a) + " Không thích</span>" : "",
        b = Math.round(100 * b);
    return "<span class=no>" + d + c + a + "</span> <span class=qua>Đánh giá: " + b + " Điểm</span>"
}
$(".lvote").click(function () {
    "c3zplus" == $(this).attr("alt") ? $(this).parent().html("").next().html("") : $(this).parent().html("").prev().html("");
    var a = $(this).attr("target"),
        b = $(this).attr("alt"),
        d = $("." + a).attr("title");
    $("#" + a).show();
    $("." + a).html(chvote(b, d));
    $("#" + a).fadeIn("slow").animate({
        opacity: 1
    }, 1500).fadeOut("slow", function () {
        $("." + a).fadeOut("slow").animate({
            opacity: 1
        }, 1E3).fadeIn()
    });
    $("." + $(this).attr("target")).removeAttr("title")
});