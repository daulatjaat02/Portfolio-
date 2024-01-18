(function ($) {
  // Show current year
  $("#current-year").text(new Date().getFullYear());

  // Remove no-js class
  $("html").removeClass("no-js");

  // Animate to section when nav is clicked
  $("header a").click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  // Scroll to top
  $("#to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // Scroll to first element
  $("#lead-down span").click(function () {
    var scrollDistance = $("#lead").next().offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      500
    );
  });

  // Create timeline
  $("#experience-timeline").each(function () {
    $this = $(this); // Store reference to this
    $userContent = $this.children("div"); // user content

    // Create each timeline block
    $userContent.each(function () {
      $(this)
        .addClass("vtimeline-content")
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
        );
    });

    // Add icons to each block
    $this.find(".vtimeline-point").each(function () {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
      );
    });

    // Add dates to the timeline if exists
    $this.find(".vtimeline-content").each(function () {
      var date = $(this).data("date");
      if (date) {
        // Prepend if exists
        $(this)
          .parent()
          .prepend('<span class="vtimeline-date">' + date + "</span>");
      }
    });
  });

  // Open mobile menu
  $("#mobile-menu-open").click(function () {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function () {
    $("header, body").removeClass("active");
  });

  // Load additional projects
  $("#view-more-projects").click(function (e) {
    e.preventDefault();
    $(this).fadeOut(300, function () {
      $("#more-projects").fadeIn(300);
    });
  });
})(jQuery);

//////////////////////////////////////////////////////////////////////////////////////////////
!(function (n) {
  n("html").removeClass("no-js"),
    n("header a").click(function (e) {
      if (!n(this).hasClass("no-scroll")) {
        e.preventDefault();
        var t = n(this).attr("href"),
          i = n(t).offset().top;
        n("html, body").animate(
          { scrollTop: i + "px" },
          +Math.abs(window.pageYOffset - n(t).offset().top)
        ),
          n("header").hasClass("active") &&
            n("header, body").removeClass("active");
      }
    }),
    n("#to-top").click(function () {
      n("html, body").animate({ scrollTop: 0 }, 500);
    }),
    n("#lead-down span").click(function () {
      var e = n("#lead").next().offset().top;
      n("html, body").animate({ scrollTop: e + "px" }, 500);
    }),
    n("#experience-timeline").each(function () {
      ($this = n(this)),
        ($userContent = $this.children("div")),
        $userContent.each(function () {
          n(this)
            .addClass("vtimeline-content")
            .wrap(
              '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
            );
        }),
        $this.find(".vtimeline-point").each(function () {
          n(this).prepend(
            '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
          );
        }),
        $this.find(".vtimeline-content").each(function () {
          var e = n(this).data("date");
          e &&
            n(this)
              .parent()
              .prepend('<span class="vtimeline-date">' + e + "</span>");
        });
    }),
    n("#mobile-menu-open").click(function () {
      n("header, body").addClass("active");
    }),
    n("#mobile-menu-close").click(function () {
      n("header, body").removeClass("active");
    }),
    n("#view-more-projects").click(function (e) {
      e.preventDefault(),
        n(this).fadeOut(300, function () {
          n("#more-projects").fadeIn(300);
        });
    });
})(jQuery);
