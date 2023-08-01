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
<<<<<<< HEAD
        const colabSections = document.querySelectorAll('[data-qa^="collab"]');


=======
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
        mutedChannels.forEach(channel => {
            const styleTag = document.head.appendChild(document.createElement('style'));
            styleTag.textContent = `.c-virtual_list__item, .c-virtual_list__sticky_container { position: initial; width: 100%;}`;
            channel.parentNode.style.display = 'none';
        });
        mutedSections.forEach(section => {
            section.parentNode.style.display = 'none';
        });
<<<<<<< HEAD
        colabSections.forEach(section => {

            section.parentNode.style.display = 'none';
        });

=======
        unmutedChannels.forEach(channel => {
            channel.parentNode.style.display = '';
        });
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
    }

    //Function to remove Remove bolding and badges from unread Slack channels
    function removeBoldingBadges() {
        const mutedChannels = document.querySelectorAll('[data-qa^="channel_sidebar_name"]');
        const sideSections = document.querySelectorAll('.p-channel_sidebar__section_heading_label');

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
<<<<<<< HEAD
        const badges = document.querySelectorAll('.p-channel_sidebar__badge, .p-channel_sidebar__badge_count, .p-channel_sidebar__badge--red, .p-recent_page__conversation__secondary');

=======
        const badges = document.querySelectorAll('.p-channel_sidebar__badge, .p-channel_sidebar__badge_count, .p-channel_sidebar__badge--red');
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
        badges.forEach(badge => {
            badge.style.display = 'none';
        });
    }

    // Hide top section except Canvases and Later
    function hideTopSections() {
        var items = document.querySelectorAll(".p-channel_sidebar__static_list__item:not(.p-channel_sidebar__pages_list_spacer)");
        var spacer = document.querySelector(".p-channel_sidebar__pages_list_spacer");
        var filteredItems = [];
<<<<<<< HEAD
        var filteredItemsForPrimary = [];
        var tempArray = Object.values(items);
        var spacer1 = document.querySelector('[data-qa^="direct_messages"]');
        var spacer2 = document.querySelector('[data-qa^="primary_focus"]');

=======
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            //tempArray.push(item);
            if (!(item.compareDocumentPosition(spacer) & Node.DOCUMENT_POSITION_PRECEDING)) {
                filteredItems.push(item);
                tempArray = tempArray.filter(v => v !== item);

            }
        }
<<<<<<< HEAD

        for (var j = 0; j < tempArray.length; j++) {
            var item1 = tempArray[j];
            if (!(item1.compareDocumentPosition(spacer2) & Node.DOCUMENT_POSITION_FOLLOWING)) {
                if (!(item1.compareDocumentPosition(spacer1) & Node.DOCUMENT_POSITION_PRECEDING)) {
                    filteredItemsForPrimary.push(item1);
                }
            }
        }
        console.log(tempArray);
        console.log(filteredItemsForPrimary);
=======
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
        // Output the filtered items
        filteredItems.forEach(function(item) {
            if(!(item.querySelector(".p-channel_sidebar__pages_list_spacer") || item.querySelector(".p-channel_sidebar__name")?.textContent == "Later" || item.querySelector(".p-channel_sidebar__name")?.textContent == "Canvases")){
                item.style.display = 'none';
            }
        });
        for (var k = 0; k < tempArray.length; k++) {
            console.log('itemIndex', k);
            for (var l = 0; l < filteredItemsForPrimary.length; l++) {
                console.log('filterIndex', l);
                if (tempArray[k].id == filteredItemsForPrimary[l].id) {
                    if (!tempArray[k].id.includes('sectionHeading')) {
                        tempArray[k].style.display = 'none';
                        console.log('okokokok');
                        console.log(tempArray[k].id);
                        console.log(filteredItemsForPrimary[l].id);
                    }
                    //break;
                }
            }
            console.log('breaked!');
        }


    }

    // Function to hide "Unread messages" scroll bar
    function hideUnreadScrollBar() {
        const unreadScrollBar = document.querySelector('[data-qa-unreads-header-scrollbar]');
        if (unreadScrollBar) {
            unreadScrollBar.style.display = 'none';
        }
    }

<<<<<<< HEAD
    // Function to hide "Unread Badge" when scroll
    function hideUnreadBadge() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length > 0) {
                    const unreadBadge = document.querySelector('.p-channel_sidebar__banner--unreads');
                    if (unreadBadge) {
                        unreadBadge.style.display = 'none';
                    }
                }
            });
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

=======
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
    // Call all the customization functions
    setInterval(hideUnreadScrollBar, 1000);
    setInterval(removeRedBadges, 1000);
    setInterval(hideTopSections, 1000);
    setInterval(removeBoldingBadges, 1000);
    setInterval(removeMutedChannels, 1000);
<<<<<<< HEAD
    setInterval(hideUnreadBadge, 1000);
})();
=======
})();
>>>>>>> 461ab7119bfcf25430d625b95a5b0921d84851e9
