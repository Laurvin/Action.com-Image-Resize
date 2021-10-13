// ==UserScript==
// @name Action.com Image Resize
// @namespace Action.com Image Resize
// @author Laurvin
// @description When directly viewing an image on Action.com, ensures that the highest resolution image is loaded.
// @version 1.0
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Action.com-Image-Resize/raw/main/Action.com_Image_Resize.user.js
// @include https://www.action.com/globalassets/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant none
// @run-at document-idle
// ==/UserScript==

function DoesItExist() {
    var url = window.location.href;
    url = (url.split('?')[0]);
    if (url == window.location.href) return;
    $.ajax({
        url: url,
        type: 'HEAD',
        success: function(data, textStatus, jqXHR) {
            console.log('success');
            window.location.replace(url);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error');
        }
    });
}

DoesItExist();
