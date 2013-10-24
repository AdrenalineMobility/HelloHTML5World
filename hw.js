(function() {
    var stat = document.getElementById("status_div");

    /* Check if adrenaline is loaded */
    if (!this.adrenaline) {
        stat.innerHTML = "Adrenaline library not found<br>" +
            "<b>Make sure you copy adrenaline.min.js to the top level directory</b>";
        return;
    }

    /* Perform a simple API call */
    stat.innerHTML = "Checking server...";
    adrenaline.getAppDetails()
        .done(function(details) {
            stat.innerHTML = "<p>API Call Completed Successfully!" +
                "<p> App Name: " + details['name'];
        })
        .fail(function(err) {
            stat.innerHTML = "error -> <b>" + err + "</b>";
        });
})();
