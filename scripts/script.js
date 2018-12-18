$(function(){

    $(".header__hamburgerMenu").on("click", function () {
        $(this).toggleClass("hidden");
        $(".header__nav--list").toggleClass("hidden");
    });

    $(".header__nav--exitItem").on("click", function () {
        $(".header__hamburgerMenu").toggleClass("hidden");
        $(".header__nav--list").toggleClass("hidden");
    })





    $(".skills__itemRowOne").waypoint(
      function() {
        $(".skills__itemRowOne").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    // $(".skills__itemRowOne").waypoint(
    //   function() {
    //     $(".skills__itemRowOne").removeClass("addColor");
    //   },
    //   {
    //     offset: "20%"
    //   }
    // );

    $(".skills__itemRowTwo").waypoint(
      function() {
        $(".skills__itemRowTwo").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );
    
    // $(".skills__itemRowTwo").waypoint(
    //   function() {
    //     $(".skills__itemRowTwo").removeClass("addColor");
    //   },
    //   {
    //     offset: "20%"
    //   }
    // );

    $(".skills__itemRowThree").waypoint(
      function() {
        $(".skills__itemRowThree").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    // $(".skills__itemRowThree").waypoint(
    //   function() {
    //     $(".skills__itemRowThree").removeClass("addColor");
    //   },
    //   {
    //     offset: "20%"
    //   }
    // );

    $(".skills__itemRowFour").waypoint(
      function() {
        $(".skills__itemRowFour").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    // $(".skills__itemRowFour").waypoint(
    //   function() {
    //     $(".skills__itemRowFour").removeClass("addColor");
    //   },
    //   {
    //     offset: "20%"
    //   }
    // );

    $(".skills__itemRowFive").waypoint(
      function() {
        $(".skills__itemRowFive").addClass("addColor");
      },
      {
        offset: "75%"
      }
    );

    // $(".skills__itemRowFive").waypoint(
    //   function() {
    //     $(".skills__itemRowFive").removeClass("addColor");
    //   },
    //   {
    //     offset: "20%"
    //   }
    // );

  $(".skills__itemRowSix").waypoint(
    function () {
      $(".skills__itemRowSix").addClass("addColor");
    },
    {
      offset: "75%"
    }
  );

})
