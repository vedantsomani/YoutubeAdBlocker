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
        }, 500); // Runs every 500ms instead of every small change
    }

    const observer = new MutationObserver(handleAdCheck);

    observer.observe(document.body, { childList: true, subtree: true });

    console.log("YouTube Ad Blocker is running...");
})();
