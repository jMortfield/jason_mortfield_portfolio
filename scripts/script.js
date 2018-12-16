$(function(){

    $(".header__hamburgerMenu").on("click", function () {
        $(this).toggleClass("hidden");
        $(".header__nav-list").toggleClass("hidden");
    });

    $(".header__nav-exitItem").on("click", function () {
        $(".header__hamburgerMenu").toggleClass("hidden");
        $(".header__nav-list").toggleClass("hidden");
    })

})
