$(function(){

  // Smooth scroll added to nav list items and back to top button
  $(".header__nav--listItem, .contact__backToTop").smoothScroll();

  // When hamburger menu is clicked
    $(".header__hamburgerMenu").on("click", function () {
      // Hide hamburger menu
        $(this).toggleClass("hidden");
        // Show nav menu, with exit button and angle borders
        $(".header__nav--list, .header__navLeft, .header__navRight").toggleClass("hidden");
    });

    // When exit button is clicked, or nav list item is clicked
    $(".header__nav--exitItem, .header__nav--listItem").on("click", function () {
      // Show hamburger menu
        $(".header__hamburgerMenu").toggleClass("hidden");
        // Hide nav menu/exit button and angled borders
      $(".header__nav--list, .header__navLeft, .header__navRight").toggleClass("hidden");
    })


// Change skill icon from greyscale to color as user scrolls past them
    $(".skills__itemRowOne").waypoint(
      function() {
        $(".skills__itemRowOne").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    $(".skills__itemRowTwo").waypoint(
      function() {
        $(".skills__itemRowTwo").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );
    
    $(".skills__itemRowThree").waypoint(
      function() {
        $(".skills__itemRowThree").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    $(".skills__itemRowFour").waypoint(
      function() {
        $(".skills__itemRowFour").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    $(".skills__itemRowFive").waypoint(
      function() {
        $(".skills__itemRowFive").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

  $(".skills__itemRowSix").waypoint(
    function () {
      $(".skills__itemRowSix").addClass("addColor");
    },
    {
      offset: "75%"
    }
  );
  
  // Listen for scroll and add clas to hamburger menu when it reaches area with yellow background
  $(window).on("scroll", function () {
    // Listens to position of scroll bar
    let y = $(window).scrollTop();
    // Vertical position of skills and project section
    let skillTop = $(".skills").offset().top;
    let projectsTop = $(".projects").offset().top;
    // Adds blackOutline class if hamburger menut
    if (y > skillTop - 50) {
      $(".header__hamburgerMenu").addClass("header__hamburgerMenu--blackOutline");
    } 
    if (y < skillTop - 50 || y > projectsTop - 10) {
      $(".header__hamburgerMenu").removeClass("header__hamburgerMenu--blackOutline");
    }
  })

})

