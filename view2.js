$(function () {
    $('#quick_reply input[name="post"]').click(function (a) {
        a.preventDefault();
        var g = $("#text_editor_textarea").sceditor('instance').val();
        var href = $('a[href*="mode=reply"]').attr("href");
        var value = $("#text_editor_textarea").sceditor("instance").val().replace(/\s/g, '').length;
        if (10 < value) {
            $('<div class="lreply"><br /><img src="http://i.imgur.com/eDk8gFf.gif"><br><b>Đang cập nhật bình luận của bạn...</b></div>').appendTo(".frm-buttons");
            $.post(href, {
                "message": g,
                "auth[]": $("#quick_reply input[name='auth[]']:last").val(),
                "lt": $("#quick_reply input[name='lt']").val(),
                "attach_sig": "1",
                "post": "Send"
            }, function (t) {
                var $new = $(t).find('.message a[href^="/viewtopic"]');
                if ($new.length) {
                    $.get($new.attr("href"), function (z) {
                        $("#quick_reply input[name='auth[]']:last").val($(z).find("#quick_reply input[name='auth[]']:last").val());
                        $("#quick_reply input[name='lt']").val($(z).find("#quick_reply input[name='lt']").val());
                        $(z).find(".post:last").hide().insertAfter(".post:last").slideDown(400);
                        rankavatar(".rankavatar:last");
                        rank_mess(".rank_mess:last")
                    });
                    $("#text_editor_textarea").sceditor('instance').val("");
                    $(".lreply").remove()
                } else {
                    if (t.indexOf("Flood") != -1 && _userdata["user_lang"] === "vi") {
                        alert("THÔNG BÁO!!!\nNghi vấn spam, tài khoản của bạn đang được xem xét và có thể bị khóa nếu vẫn comment liên tục trong thời gian ngắn như vậy. Vui lòng comment chậm lại\n(Chờ 60 giây sau để tiếp tục comment.)");
                        $(".lreply").remove()
                    } else if (t.indexOf("Flood") != -1 && _userdata["user_lang"] === "vi") {
                        alert("Error!\nYou must wait 60 second before replying");
                        $(".lreply").remove()
                    } else if (t.indexOf("A new") != -1 && _userdata["user_lang"] === "vi") {
                        alert("Lỗi!\nĐã có người gửi bài trước bạn.\nBạn phải F5 lại trang để tiếp tục.\nChú ý : Bạn nên copy lại tin nhắn trước khi F5 ");
                        $(".lreply").remove()
                    } else if (t.indexOf("A new") != -1 && _userdata["user_lang"] === "vi") {
                        alert("Error!\nSomeone had replied before your post\nYou must refresh the page to continue.\nNotice : You should save or copy your message if you don't want it gone");
                        $(".lreply").remove()
                    }
                }
            })
        } else {
            if ($("html").attr("xml:lang") == "vi") {
                alert("Xin lỗi\nNội dung quá ngắn không thể gửi bài !\nBạn cần nhập thêm " + (10 - value) + " ký tự nữa.")
            } else {
                alert("Sorry\nThe content is too short to send as post !\nYou must write " + (10 - value) + " characters more.")
            }
        }
    })
});
