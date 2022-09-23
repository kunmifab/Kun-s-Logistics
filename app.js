$(document).ready(function(){
    // change unique section text
    speedToggle = () => {
        $("#speedText").css("display", "block");
        $("#reliabilityText").css("display", "none");
        $("#affordableText").css("display", "none");
        $("#speedBtn").addClass('active');
        $(".uniqueButton2").addClass('active');
        $(".uniqueButton1").removeClass('active');
        $(".uniqueButton3").removeClass('active');
        $("#reliabilityBtn").removeClass('active');
        $("#affordableBtn").removeClass('active');
    }

    $(".uniqueButton2").click(speedToggle);
    $("#speedBtn").click(speedToggle);

    affordableToggle = () => {
        $("#affordableText").css("display", "block");
        $("#reliabilityText").css("display", "none");
        $("#speedText").css("display", "none");
        $(".uniqueButton3").addClass('active');
        $(".uniqueButton1").removeClass('active');
        $(".uniqueButton2").removeClass('active');
        $("#affordableBtn").addClass('active');
        $("#reliabilityBtn").removeClass('active');
        $("#speedBtn").removeClass('active');
    };

    $("#affordableBtn").click(affordableToggle);
    $(".uniqueButton3").click(affordableToggle);

    reliabilityToggle = () => {
        $("#reliabilityText").css("display", "block");
        $("#speedText").css("display", "none");
        $("#affordableText").css("display", "none");
        $(".uniqueButton1").addClass('active');
        $(".uniqueButton3").removeClass('active');
        $(".uniqueButton2").removeClass('active');
        $("#reliabilityBtn").addClass('active');
        $("#affordableBtn").removeClass('active');
        $("#speedBtn").removeClass('active');
    };

    $("#reliabilityBtn").click(reliabilityToggle);
    $(".uniqueButton1").click(reliabilityToggle);
    

    $(".navbar-toggler").click(function(){
        $(".navbar-toggler i").toggleClass("fa-close fa-motorcycle");
        $(".navbar-toggler i").toggleClass("text-danger text-primary");
        $("#navbarSupportedContent").toggleClass("active");
      });
  });