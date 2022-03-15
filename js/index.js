$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").toggle()
      $("#design").toggle();
    });
    $("#design").click(function(){
      $("#design").toggle()
      $("#design-image").toggle()
    });


    $("#development-image").click(function(){
        $("#development-image").toggle();
        $("#development").toggle();
    });
    $("#development").click(function(){
        $("#development").toggle();
        $("#development-image").toggle();    
});

    $("#product-image").click(function(){
        $("#product-image").toggle();
        $("#product").toggle();
    });
    $("#product").click(function(){
        $("#product").toggle();
        $("#product-image").toggle();    
});
});