/*
 * -------------------------------------------------------------------------------------------------------------------
 * Auteur Initial :
 * Retouche personnel : Alain GUILLON
 * -------------------------------------------------------------------------------------------------------------------
 * Date dernière modification :
 * -------------------------------------------------------------------------------------------------------------------
 */

$ ( document ).ready(function(){ // Début du code JQUERY

    var animeHover = "easeOutBounce";
    var animeOutHover = "jswing";
    
    var animeSpeedHover = "1000";
    var animeSpeedOutHover = "300";

    $(".menu ul li a").hover(function() {

        $(this).next("span").animate({
            opacity : "show",
            top: "0"
        },
        {
            duration: animeSpeedHover,
            easing: animeHover
        })
    }, function (){

        $(this).next("span").animate({
            opacity : "hide",
            top: "20"
        },
        {
            duration : animeSpeedOutHover,
            easing : animeOutHover
        })
    
    });

}); // Fin du code JQUERY