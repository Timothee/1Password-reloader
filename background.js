chrome.tabs.onCreated.addListener(checkIfFirstOpenTab);

function checkIfFirstOpenTab() {
    chrome.tabs.query({}, function(tabs) {
        // No tabs left open, let's reload the extension
        if (tabs.length === 1) {
            // This is 1Password's extension's ID
            reloadExtension('hdmbinomkfhmgknkoicejolfdfjeajmk');
        }
    });
}

function reloadExtension(extensionId) {
    chrome.management.setEnabled(extensionId, false, function() {
        chrome.management.setEnabled(extensionId, true);
    });
}
