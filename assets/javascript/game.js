

    redRNG = Math.floor(Math.random() * 12) + 1;
    blueRNG = Math.floor(Math.random() * 12) + 1;
    greenRNG = Math.floor(Math.random() * 12) + 1;
    grayRNG = Math.floor(Math.random() * 12) + 1;
    var computerTarget = Math.floor(Math.random() * 102) + 19;
    var winVar = 1;
    var lossVar = 1;

    function resetRNG() {
        delete redRNG;
        redRNG = Math.floor(Math.random() * 12) + 1;
        console.log(redRNG);
        delete blueRNG;
        blueRNG = Math.floor(Math.random() * 12) + 1;
        console.log(blueRNG);
        delete greenRNG;
        greenRNG = Math.floor(Math.random() * 12) + 1;
        console.log(greenRNG);
        delete grayRNG;
        grayRNG = Math.floor(Math.random() * 12) + 1;
        console.log(grayRNG);
    }

    $(document).ready(function () {
        $("#targetNumber").text(computerTarget);
        console.log(redRNG);
        console.log(blueRNG);
        console.log(greenRNG);
        console.log(grayRNG);

    })

    $("#redCrystal").on("click", function () {
        var redResult = parseInt(redRNG) + parseInt($("#counter").text());
        $("#counter").text(redResult);
        if (($("#targetNumber").text()) == $("#counter").text()) {
            alert("Well played!");
            ($("#wins")).text(winVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();

        }
        else if (parseInt($("#targetNumber").text()) < parseInt($("#counter").text())) {
            alert("Too bad!");
            ($("#losses")).text(lossVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
    });

    $("#blueCrystal").on("click", function () {
        var blueResult = parseInt(blueRNG) + parseInt($("#counter").text());
        $("#counter").text(blueResult);
        if (($("#targetNumber").text()) == $("#counter").text()) {
            alert("Well played!");
            ($("#wins")).text(winVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
        else if (parseInt($("#targetNumber").text()) < parseInt($("#counter").text())) {
            alert("Too bad!");
            ($("#losses")).text(lossVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
    });

    $("#greenCrystal").on("click", function () {
        var greenResult = parseInt(greenRNG) + parseInt($("#counter").text());
        $("#counter").text(greenResult);
        if (($("#targetNumber").text()) == $("#counter").text()) {
            alert("Well played!");
            ($("#wins")).text(winVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
        else if (parseInt($("#targetNumber").text()) < parseInt($("#counter").text())) {
            alert("Too bad!");
            ($("#losses")).text(lossVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
    });

    $("#grayCrystal").on("click", function () {
        var grayResult = parseInt(grayRNG) + parseInt($("#counter").text());
        $("#counter").text(grayResult);
        if (($("#targetNumber").text()) == $("#counter").text()) {
            alert("Well played!");
            ($("#wins")).text(winVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
        else if (parseInt($("#targetNumber").text()) < parseInt($("#counter").text())) {
            alert("Too bad!");
            ($("#losses")).text(lossVar++);
            var computerTarget = Math.floor(Math.random() * 102) + 19;
            $("#targetNumber").text(computerTarget);
            $("#counter").text("0");
            resetRNG();
        }
    });
