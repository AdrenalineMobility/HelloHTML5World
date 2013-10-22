(function() {
    var status = document.getElementById("status_div");
    if (!this.adrenaline) {
        status.innerHTML = "Adrenaline library not found<br>" +
            "<b>Make sure you copy adrenaline.min.js to the top level directory</b>";
        return;
    }
    status.innerHTML = "Checking server...";
    var promise = this.adrenaline.post("apis/users/login_challenge");
    promise.done(function() {
        status.innerHTML = "All systems are go!";
    }).fail(function(err) {
        status.innerHTML = "error -> <b>" + err + "</b>";
    });
})();
