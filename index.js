//var buttons = require('sdk/ui/button/action');
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

/*var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Visit Mozilla",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    var worker;
    for (let tab of tabs) {
        if (tab.title.indexOf('Pull requests') > -1) {
            worker = tab.attach({
                contentScriptFile: [data.url('jquery-2.2.3.min.js'), data.url("addPullRequestNumber.js")]
            });
        }
    }
}*/

// Listen for tab content loads.
tabs.on('ready', function(tab) {
    if (tab.title.indexOf('Pull requests') > -1) {
        tab.attach({
            contentScriptFile: [data.url('jquery-2.2.3.min.js'), data.url("addPullRequestNumber.js")]
        });
    }
});