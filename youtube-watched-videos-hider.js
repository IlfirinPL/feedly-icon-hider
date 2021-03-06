// ==UserScript==
// @name        youtube watched videos hider
// @namespace   youtube-watched-videos-hider-userscript-bystorebitid@gmail.com
// @include     *.youtube.com/*
// @description like the name and it's simple stable and effective
// @version     2.4
// @license     All Rights Reserved
// @require     https://code.jquery.com/jquery-3.4.0.min.js
// @grant       GM_addStyle
// ==/UserScript==

//** the interval for the all script
var refreshRate = 1000
setInterval(function(){

    if (window.location.href.indexOf('www.youtube.com/playlist?list=') != -1) {
        //$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().parent().hide();
    } else {

        if (window.location.href.indexOf('www.youtube.com') != -1) {


            function channel(){
                if (window.location.href.indexOf('channel/') != -1) {
                    $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
                }
            };

            function userpg(){
                if (window.location.href.indexOf('/user/') != -1 || window.location.href.indexOf('/c/') != -1) {
                    $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
                }
            };

            function results(){
                if (window.location.href.indexOf('results?search_query=') != -1) {
                    $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
                }
            };


            function subscriptions(){
                if (window.location.href.indexOf('www.youtube.com/feed/subscriptions') != -1) {
                    $('#text.style-scope.ytd-toggle-button-renderer.style-compact-gray').parent().parent().parent().parent().parent().parent().hide();
                    $('[class="badge badge-style-type-live-now style-scope ytd-badge-supported-renderer"]').parent().parent().parent().parent().hide();
                    $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
                }
            };

            function watch(){
                if (window.location.href.indexOf('www.youtube.com/watch?v=') != -1) {

                    var playlisttxtcntnt = $("#playlist").text();
                    //* checking if the side playlist length is less then 11 otherwise the same user content will be checked
                    if (playlisttxtcntnt.length < "15") {
                        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
                    } else {
                        //* hiding the related + playlist
                        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
                        $("#playlist #overlays.ytd-thumbnail #progress").parent().parent().parent().parent().parent().parent().parent().parent().hide();
                    }


                }
            };



            function general(){
                if (window.location.href.indexOf('results?search_query=') <= 0 && window.location.href.indexOf('channel/') <= 0 && window.location.href.indexOf('www.youtube.com/feed/subscriptions') <= 0 && window.location.href.indexOf('www.youtube.com/watch?v=') <= 0 && window.location.href.indexOf('www.youtube.com/feed/history') <= 0 && window.location.href.indexOf('www.youtube.com/user/') <= 0 && window.location.href.indexOf('www.youtube.com/c/') <= 0) {
                    $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().parent().parent().hide();
                }
            };


            channel();
            userpg();
            results();
            subscriptions();
            watch();
            general();



        }
    };


    if (window.location.href.indexOf('m.youtube.com') != -1 && window.location.href.indexOf('youtube.com/feed/history') <= 0 ) {
        $('ytm-thumbnail-overlay-resume-playback-renderer .thumbnail-overlay-resume-playback-progress').parent().parent().parent().parent().parent().parent().hide();
    }


}, refreshRate);
