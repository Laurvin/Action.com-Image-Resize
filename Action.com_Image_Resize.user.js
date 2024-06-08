// ==UserScript==
// @name Action.com Image Resize
// @namespace Action.com Image Resize
// @author Laurvin
// @description When directly viewing an image on Action.com, ensures that the highest resolution image is loaded.
// @version 1.2
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Action.com-Image-Resize/raw/main/Action.com_Image_Resize.user.js
// @updateURL https://github.com/Laurvin/Action.com-Image-Resize/raw/main/Action.com_Image_Resize.user.js
// @match https://action.com/hostedassets/CMSArticleImages/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant none
// @run-at document-idle
// ==/UserScript==

function DoesItExist() {
    var url = window.location.href;
    url = (url.split('?width')[0]);
    url = decodeURIComponent(url);
    window.location.replace(url);
}

DoesItExist();
