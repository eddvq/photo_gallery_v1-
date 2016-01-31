
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);

$overlay.append($caption);

$('body').append($overlay);

//You forgot to set the display of the overlay to none.

$('#image_pool a').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

$overlay.click(function(){
    $overlay.hide();
});

$("#image_name").keyup(function(e){
    // This gets the value from the search box
/*
    if(e.which == 13) {
*/
        
    var inputTxt = $("#image_name").val();
        
    //Store img in var
    all_Images = $("img");
        
    //images with the the out class are stored in var
    outImages = $(".out");
        
    //I want the images to be shown in each iteration
    outImages.show();
    outImages.each(function(){
        
        //gets the alt attribute in $("img")
        all_Images.each(function(){
        var altTexts = $(this).attr("alt"); 
        
        if(altTexts.indexOf(inputTxt) === -1 ){
            $(this).hide();  //turn to hide remove top
      
           };
        });
        });
    

    })
    
    
/*
    };  // this one
*/
});



//foreach instead of each jquery methods for looping 
//keyup any key 

/*$("#image_name").focus().keyup(function(e){
    if(e.which == 13) {
        var inputTxt = $("#image_name").val();
        
    all_Images = $("img");
        
    console.log(all_Images);
        
    all_Images.each(function(){
        var altTexts = $(this).attr("alt"); 
            console.log(altTexts);
            if(altTexts !== inputTxt) {
            console.log("no mimes")} });        
                                                                    
};
});

    */
        
