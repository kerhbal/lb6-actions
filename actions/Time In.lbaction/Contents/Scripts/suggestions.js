include("shared/lib.js");

function runWithString(address) {
    return History.suggestions(address).map(function(loc) {
        return {
            title: loc,
            icon: "at.obdev.LaunchBar:Text"
        };
    });
}
