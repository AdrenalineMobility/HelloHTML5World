(function() {
    var stat = document.getElementById("status_div");
    if (!this.adrenaline) {
        stat.innerHTML = "Adrenaline library not found<br>" +
            "<b>Make sure you copy adrenaline.min.js to the top level directory</b>";
        return;
    }
    stat.innerHTML = "Checking server...";
    var promise = this.adrenaline.post("apis/users/login_challenge");
    promise.done(function() {
        stat.innerHTML = "All systems are go!";
    }).fail(function(err) {
        stat.innerHTML = "error -> <b>" + err + "</b>";
    });
})();
