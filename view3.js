var CopyrightNoticeEn = 'Copyright ©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong. This entire copyright notice must remain in the original, copied, or modified script';
var CopyrightNoticeVi = 'Bản quyền © FmVi. Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ baivong là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi';
$(".user-info dt:contains('Gender'), .user-info dt:contains('Birthday'), .user-info dt:contains('Status')").hide().next().hide();
$(".user-info .fmviOnoff br").remove();
var topmot = $("#top_posters li:eq(0) span:first").text();
var tophai = $("#top_posters li:eq(1) span:first").text();
var topba = $("#top_posters li:eq(2) span:first").text();
var author = $(".user-ident:first .user-info div:first a").attr("href");

function show_user(z) {
    var dix = $("#userinfo" + z);
    var Gender = dix.find(".user-info dt:contains('Gender')").next().find("img").attr("alt");
    if (langEV()) {
        var Birthday = dix.find(".user-info dt:contains('Birthday')").next().text().split("-");
        var da = 2;
        var mo = 1
    } else {
        var Birthday = dix.find(".user-info dt:contains('Birthday')").next().text().split("/");
        var da = 0;
        var mo = 1
    };
    var teus = dix.find(".user-info dt:contains('Status')").next().text();
    var teuser = dix.find(".user-info div:first a:first").text();
    var liuser = dix.find(".user-info div:first a").attr("href");
    var firstT = dix.parent().parent().prev().find("strong").text();
    dix.find(".Upro5").attr("href", liuser + "wall");
    dix.find(".Utopic").attr("href", "/spa/" + teuser);
    dix.find(".Ufrien").attr("href", "/profile?friend=" + teuser + "&mode=editprofile&page_profil=friendsfoes");
    if (teus.length > 0) {
        dix.find(".user-info .status").text(teus)
    } else {
        dix.find(".user-info .status").replaceWith('<span style="color:red"> [' + teuser + ' chưa đăng phương châm sống]</span>')
    };
    if (dix.find(".user-info .fmviOnoff img").length == 0) {
        dix.find(".user-info .fmviOnoff").html('<img title="Offline" alt="Offline" src="http://i48.servimg.com/u/f48/16/58/89/73/icon_u11.gif" />')
    };
    var day = new Date();
    if ((day.getDate() == Birthday[da]) && ((day.getMonth() + 1) == Birthday[mo])) {
        if (Gender == "Female") {
            dix.find(".rankimg").html('<img title="Birthday Girl" alt="Birthday Girl" src="http://i48.servimg.com/u/f48/16/58/89/73/birthd11.png" />')
        } else {
            dix.find(".rankimg").html('<img title="Birthday Boy" alt="Birthday Boy" src="http://i48.servimg.com/u/f48/16/58/89/73/birthd10.png" />')
        }
    }
    dix.find(".userInfoF").show()
}

function hide_user(hu) {
    $("#userinfo" + hu).find(".userInfoF").hide()
}
$('.codebox.spoiler').toggle(function () {
    $(this).find('.spoiler_content').show()
}, function () {
    $(this).find('.spoiler_content').hide()
});
