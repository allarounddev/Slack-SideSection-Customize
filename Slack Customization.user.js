// ==UserScript==
// @name         Slack Customization
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Customizes Slack UI based on user preferences
// @author       Your Name
// @match        https://*.slack.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove muted channels
    function removeMutedChannels() {

        const unmutedChannels = document.querySelectorAll('[data-qa-channel-sidebar-channel-is-muted^="false"]');
        const mutedChannels = document.querySelectorAll('[data-qa-channel-sidebar-channel-is-muted^="true"]');
        const mutedSections = document.querySelectorAll('[data-qa^="muted_channels"]');

        mutedChannels.forEach(channel => {
            const styleTag = document.head.appendChild(document.createElement('style'));
            styleTag.textContent = `.c-virtual_list__item, .c-virtual_list__sticky_container { position: initial; width: 100%;}`;

            channel.parentNode.style.display = 'none';
        });

        mutedSections.forEach(section => {

            section.parentNode.style.display = 'none';
        });

        unmutedChannels.forEach(channel => {
            channel.parentNode.style.display = '';
        });



    }


    //Function to remove Remove bolding and badges from unread Slack channels
    function removeBoldingBadges() {
        const mutedChannels = document.querySelectorAll('[data-qa^="channel_sidebar_name"]');
        const sideSections = document.querySelectorAll('.p-channel_sidebar__section_heading_label');
        console.log(mutedChannels);
        mutedChannels.forEach(channel => {
            channel.style.fontWeight = 'normal';
            channel.style.color = 'unset';
        });
        sideSections.forEach(section => {
            section.style.fontWeight = 'normal';
            section.style.color = 'unset';
        });
    }


    // Function to remove red badges
    function removeRedBadges() {
        const badges = document.querySelectorAll('.p-channel_sidebar__badge, .p-channel_sidebar__badge_count, .p-channel_sidebar__badge--red');

        badges.forEach(badge => {
            badge.style.display = 'none';
        });
    }

    // Hide top section except Canvases and Later
    function hideTopSections() {
        var items = document.querySelectorAll(".p-channel_sidebar__static_list__item:not(.p-channel_sidebar__pages_list_spacer)");

        var spacer = document.querySelector(".p-channel_sidebar__pages_list_spacer");
        var filteredItems = [];

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (!(item.compareDocumentPosition(spacer) & Node.DOCUMENT_POSITION_PRECEDING)) {
                filteredItems.push(item);
            }
        }

        // Output the filtered items
        filteredItems.forEach(function(item) {
            if(!(item.querySelector(".p-channel_sidebar__pages_list_spacer") || item.querySelector(".p-channel_sidebar__name")?.textContent == "Later" || item.querySelector(".p-channel_sidebar__name")?.textContent == "Canvases")){
                //item.remove();
                item.style.display = 'none';
            }
        });
    }

    // Function to hide "Unread messages" scroll bar
    function hideUnreadScrollBar() {
        const unreadScrollBar = document.querySelector('[data-qa-unreads-header-scrollbar]');

        if (unreadScrollBar) {
            unreadScrollBar.style.display = 'none';
        }
    }


    // Call all the customization functions
    setInterval(hideUnreadScrollBar, 1000);
    setInterval(removeRedBadges, 1000);
    setInterval(hideTopSections, 1000);
    setInterval(removeBoldingBadges, 1000);
    setInterval(removeMutedChannels, 1000);
})();