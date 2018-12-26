<html>
<head>
<script>
$(document).ready(function(){
$("#flip").click(function(){
$("#panel").slideDown("slow");
});
});
$(document).ready(function(){
$("#hide").click(function(){
$("li").hide();
});
$("#show").click(function(){
$("li").show();
});
});
$(document).ready(function(){
$("#det").click(function(){
$("#p2").hide();
});
});
$(document).ready(function(){
$("#p1").mouseenter(function(){
alert("You entered Uki website");
});
});
$(document).ready(function(){
$("h2").mouseenter(function(){
$("h2").css("background-color", "lightblue");
});
$("h2").mouseleave(function(){
$("h2").css("background-color", "gray");
});
});
</script>
</head>
</html>
