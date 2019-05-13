$(document).ready(function() {

    window.onscroll = function() {scrollFunction()};

    navSmall = () => {
        if(document.body.scrollTop >50 || document.documentElement.scrollTop >50) {
            $("nav").addClass(".smallNav");
        }
    }


    // var infoRing = $(".ring");

    console.log("hello world");

// const rotate = (degrees) => {
//         infoRing.css({
//         '-webkit-transform' : 'rotate('+ degrees +'deg)',
//         '-moz-transform' : 'rotate('+ degrees +'deg)',
//         '-ms-transform' : 'rotate('+ degrees +'deg)',
//         'transform' : 'rotate('+ degrees +'deg)'});
// };

// infoRing.click(function() {
//     var rotation;
//     rotation += 5;
//     rotate(rotation);
// });
var amount = Math.floor(Math.random()*1);

// infoRing.click(function() {
//     let rotate =40;
//         infoRing.css("transform","rotate("+amount+"deg)");
//     amount = amount + rotate;
//             console.log(amount);


$("<img>").click(function(){
    bigImage();
})
const bigImage = () => {
    $("<img>").css({"-webkit-filter":"grayscale(0%)"});
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $("nav").css({"height":"30px"});
    //   $("nav").animate({"opacity":"0"}, 100);
    } else {
        $("nav").css({"height":"210px"})
        // $("nav").animate({"opacity":"1"}, 0);
    }
  }



  $("nav").click(function() {
      ($('link[href="main.css"]')==true) ? true : $('link[href="main.css"]').attr('href','alternate-main.css');
});

// $("nav").toggle(
//     function(){ 
//         $('link[href="main.css"]').attr('href','alternate-main.css');
//     };
//     function(){
//         $('link[href="alternate-main.css"]').attr('href','main.css');
//     };
// );

// $("nav").click(function() {
    // ($('link[href="alternate-main.css"]')==true) ? true : $('link[href="alternate-main.css"]').attr('href','main.css');
// })


})

