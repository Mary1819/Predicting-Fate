$(".noresponse").fadeOut("");
$(".yesresponse").hide("");
$(".question2").hide("");
$("body").css("background-color", "#D9939F");
$(".result").fadeOut("");
$(".finalstep").hide("");

$(".no").dblclick(function() {
    $(".firstpage").hide("");
    $(".noresponse").show("");
});

$(".yes").click(function() {
    $(".yesresponse").show("");
    $(".firstpage").fadeOut("");
    $(".kidney").css("width", "300px");
    $(".kidney").css("margin", "10px");
});

$(".bothbutton1").click(function() {
    $(".yesresponse").hide("");
    $(".question2").show("");
});

$(".bothbutton2").click(function() {
    $(".result").show("");
    $(".question2").hide("");
});

$(".resultbutton").hover(function() {
    $(".result").hide("");
    $(".finalstep").show("");
    $(".finalstep").css("font-size", "25px");
});

$(".onlyyes, .onlyyes2").click(function() {
    $(".yesr").show("");
    $(".bothr").hide("");
    $(".nor").hide("");
});

$(".onlyyes, .onlyno").click(function() {
    $(".bothr").show("");
    $(".yesr").hide("");
    $(".nor").hide("");
});

$(".onlyyes2, .onlyno2").click(function() {
    $(".bothr").show("");
    $(".yesr").hide("");
    $(".nor").hide("");
});

$(".onlyno, .onlyno2").click(function() {
    $(".nor").show("");
    $(".bothr").hide("");
    $(".yesr").hide("");
});