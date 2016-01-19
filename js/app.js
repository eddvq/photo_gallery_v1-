
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


//Give the input box the value that was passed inside it. 

//Compare that value with the img alt attribute

//If they are not the same hide the image

//when the input bux is out of focus show all images like before


//what is e.which???
//why does it remove all of the images on the first search?
//Add: If the input box is empty don't run anything //inputText.length === 0


$("#image_name").focus().keyup(function(e){
    // This gets the value from the search box
    if(e.which == 13) {
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
        
        if(altTexts.indexOf(inputTxt) > -1){
            $(this).hide();
           };
        })
        });
    };
});


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
        
/*        var altText = $("img").each(function(){
            var altTexts = $(this).attr("alt");
            if(altTexts !== inputTxt){
                $("img").hide;
            }
                });*/

/*        $("img").each(function(){
            var altTexts = $(this).attr("alt");
            if(altTexts !== inputTxt){
                $("img").hide;
            }
                });*/
        
        
/*        $("img").each(function(){
            var altTexts = $("img").attr("alt");
          console.log(altTexts);
            console.log(inputTxt);
            console.log(altTexts);

                });*/
        


/*

so 1. keyup
2. if 13 {
3. var inputtxt= form_id.value()
4. $ ("img").attr("alt").each(){
if attr("alt").value() !contains inputtxt {
img.hide()
}
}


        var altText = $("img").each(function(){
            var mim = $(this).attr("alt");
            console.log(mim);
            
        });
       };

$("#image_name").focus().keyup(function(e){
    if(e.which == 13) {
       var inputTxt = $("#image_name").val();
        console.log(inputTxt);
        var imageAlt =$("img").attr("alt");
        console.log(imageAlt);
       };
});


$("#image_name").keyup(function(e){
    if(e.which == 13) {
       var inputTxt = $("#image_name").val();
       var image = $("img").attr("alt");
        console.log(image);
       };
});







so 1. keyup
2. if 13 {
3. var inputtxt= form_id.value()
4. $ ("img").attr("alt").each(){
if attr("alt").value() !contains inputtxt {
img.hide()
}
}




var $altTag = $("#image_pool").find("alt");

$("#image_name").focus(function(){
    if($(this).val() != $altTag){
        console.log('no mimes.');
    }
});



$("div").each(function (i) {
        if (this.style.color != "blue") {
          this.style.color = "blue";
        } else {
          this.style.color = "";
        }


if it !contains "input str" {
.hide()
}

    */
