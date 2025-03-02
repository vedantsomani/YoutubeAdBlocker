# YouTube Ad Blocker

Description

This JavaScript snippet removes YouTube ads and automatically skips skippable ads. It uses a MutationObserver to detect and remove ad elements dynamically, ensuring a seamless ad-free experience.

Features

Blocks various YouTube ad elements

Auto-skips video ads

Optimized with a debounce mechanism for efficiency

Runs continuously in the background

Installation

Method 1: Using Tampermonkey (Recommended)

Install Tampermonkey extension (Chrome, Firefox, Edge, etc.).

Create a new userscript and paste the JavaScript code below.

Save and enable the script.

Method 2: Manual Injection (Temporary)

Open YouTube in your browser.

Open the Developer Console (F12 → Console).

Copy-paste the following script and press Enter:


(function() {
    'use strict';
    let adCheckTimeout;

    function removeAds() {
        const adSelectors = [
            'ytd-ad-slot-renderer',
            'ytd-player-legacy-desktop-watch-ads-renderer',
            'ytd-companion-slot-renderer',
            '.ytp-ad-overlay-container',
            '.ytp-ad-progress-list',
            'ytd-promoted-sparkles-text-search-renderer'
        ];

        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(ad => ad.remove());
        });
    }

    function skipVideoAds() {
        const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
        if (skipButton) {
            skipButton.click();
            console.log('Skipped an ad!');
        }
    }

    function handleAdCheck() {
        clearTimeout(adCheckTimeout);
        adCheckTimeout = setTimeout(() => {
            removeAds();
            skipVideoAds();
        }, 500);
    }

    const observer = new MutationObserver(handleAdCheck);
    observer.observe(document.body, { childList: true, subtree: true });

    console.log("YouTube Ad Blocker is running...");
})();

Usage

Enable the script and visit YouTube.

Ads will be automatically removed and skipped.

Open the browser console (F12 → Console) to see logs confirming ad removals.

Notes

Works best on desktop browsers.

If YouTube updates its ad structure, script modifications may be needed.

Consider supporting your favorite creators through YouTube Premium.

