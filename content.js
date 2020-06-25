setInterval(function(){
    if (document.querySelectorAll('.ghx-card-footer')) {
        var issuesFooter = document.querySelectorAll('.ghx-card-footer');

        issuesFooter.forEach(function (item) {
            item.style.display = "none";
        });

        var issuesKey = document.querySelectorAll('.ghx-key');
        issuesKey.forEach(function (item) {
            item.style.display = "none";
        });

        var issues = document.querySelectorAll('.ghx-issue');
        issues.forEach(function (item) {
            item.style.padding = "5px 10px 5px 5px";
            item.style.margin = "5px 10px 5px 5px";
        });

        var issuesContent = document.querySelectorAll('.ghx-issue .ghx-issue-content');
        issuesContent.forEach(function (item) {
            item.style.minHeight = 0;
        });
    }

}, 200);