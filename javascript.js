$(document).ready(function(){
/////////////
  $(".home_button").click(function(){
    $(".head_logo").addClass("head_logo_after");

      $(".nav").css({"opacity": "100", "display":"block"});

    $(".home_button_container").css("display", "none");

    $(".head_container").addClass("head_container_nav_active");

    $(".about").addClass("nav_active");
    $(".footer_nav").removeClass("nav_active");

        $(".about_container").css({"display": "inline"});

    $(".footer_container").css({"display": "inline"});
  });
/////////////insert content for client
  $(".client").click(function(){
    $(".about_container").html('<div class="about_image"></div><div class="about_content_container"><br><h1>Info for Clients</h1><div class="rule"></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor purus, luctus id dolor eu, ullamcorper euismod mauris. Fusce in nisl quis elit tempor porttitor vitae ut felis. Vivamus vel massa sodales, pulvinar sapien a, tristique diam. Sed semper massa a pretium volutpat. Curabitur congue hendrerit purus. Fusce porttitor lacinia libero nec vulputate. Proin et mauris vitae magna euismod suscipit in nec ex. Ut dui nibh, pellentesque ut aliquam non, euismod at magna.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi facilisis nulla ac nulla ultricies, quis volutpat mauris tempor. Sed vel tempor justo. Integer feugiat ut orci et semper. Curabitur eget arcu eget lacus pellentesque commodo. Etiam nisi diam, venenatis non erat et, dictum iaculis velit. Mauris id mi sodales, imperdiet dui eget, pharetra lectus. Aenean malesuada, erat eget fermentum bibendum, neque nulla lobortis ipsum, placerat suscipit orci tellus porta mi. Ut ut nunc vulputate, lacinia purus id, consequat nibh. Suspendisse tincidunt risus sit amet interdum auctor.</p><p>Aliquam sit amet sodales sem. Integer non nibh ac leo finibus mattis non nec lectus. Donec non viverra tellus. Vestibulum imperdiet neque ultrices suscipit malesuada. Ut sit amet placerat ipsum. Integer tristique malesuada sagittis. Praesent libero neque, tristique a bibendum et, maximus sit amet nisi. Curabitur sagittis varius iaculis. Cras ac ante velit. Sed congue sapien eget lectus iaculis accumsan. Etiam ullamcorper urna dolor, sed vulputate mauris maximus et. Proin fermentum dui nibh, nec sodales nulla viverra et. Mauris non sagittis tellus. Ut auctor cursus sem, eget tempor urna pharetra ut.</p></div>');
  });
/////////////insert content for advisor
    $(".advisor").click(function(){
    $(".about_container").html('<div class="about_image"></div><div class="about_content_container"><h1>Info for Advisors</h1><div class="rule"></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor purus, luctus id dolor eu, ullamcorper euismod mauris. Fusce in nisl quis elit tempor porttitor vitae ut felis. Vivamus vel massa sodales, pulvinar sapien a, tristique diam. Sed semper massa a pretium volutpat. Curabitur congue hendrerit purus. Fusce porttitor lacinia libero nec vulputate. Proin et mauris vitae magna euismod suscipit in nec ex. Ut dui nibh, pellentesque ut aliquam non, euismod at magna.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi facilisis nulla ac nulla ultricies, quis volutpat mauris tempor. Sed vel tempor justo. Integer feugiat ut orci et semper. Curabitur eget arcu eget lacus pellentesque commodo. Etiam nisi diam, venenatis non erat et, dictum iaculis velit. Mauris id mi sodales, imperdiet dui eget, pharetra lectus. Aenean malesuada, erat eget fermentum bibendum, neque nulla lobortis ipsum, placerat suscipit orci tellus porta mi. Ut ut nunc vulputate, lacinia purus id, consequat nibh. Suspendisse tincidunt risus sit amet interdum auctor.</p><p>Aliquam sit amet sodales sem. Integer non nibh ac leo finibus mattis non nec lectus. Donec non viverra tellus. Vestibulum imperdiet neque ultrices suscipit malesuada. Ut sit amet placerat ipsum. Integer tristique malesuada sagittis. Praesent libero neque, tristique a bibendum et, maximus sit amet nisi. Curabitur sagittis varius iaculis. Cras ac ante velit. Sed congue sapien eget lectus iaculis accumsan. Etiam ullamcorper urna dolor, sed vulputate mauris maximus et. Proin fermentum dui nibh, nec sodales nulla viverra et. Mauris non sagittis tellus. Ut auctor cursus sem, eget tempor urna pharetra ut.</p></div>');
  });
/////////////insert content for institution
      $(".institution").click(function(){
    $(".about_container").html('<div class="about_image"></div><div class="about_content_container"><h1>Info for Institutions</h1><div class="rule"></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor purus, luctus id dolor eu, ullamcorper euismod mauris. Fusce in nisl quis elit tempor porttitor vitae ut felis. Vivamus vel massa sodales, pulvinar sapien a, tristique diam. Sed semper massa a pretium volutpat. Curabitur congue hendrerit purus. Fusce porttitor lacinia libero nec vulputate. Proin et mauris vitae magna euismod suscipit in nec ex. Ut dui nibh, pellentesque ut aliquam non, euismod at magna.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi facilisis nulla ac nulla ultricies, quis volutpat mauris tempor. Sed vel tempor justo. Integer feugiat ut orci et semper. Curabitur eget arcu eget lacus pellentesque commodo. Etiam nisi diam, venenatis non erat et, dictum iaculis velit. Mauris id mi sodales, imperdiet dui eget, pharetra lectus. Aenean malesuada, erat eget fermentum bibendum, neque nulla lobortis ipsum, placerat suscipit orci tellus porta mi. Ut ut nunc vulputate, lacinia purus id, consequat nibh. Suspendisse tincidunt risus sit amet interdum auctor.</p></div><p>Aliquam sit amet sodales sem. Integer non nibh ac leo finibus mattis non nec lectus. Donec non viverra tellus. Vestibulum imperdiet neque ultrices suscipit malesuada. Ut sit amet placerat ipsum. Integer tristique malesuada sagittis. Praesent libero neque, tristique a bibendum et, maximus sit amet nisi. Curabitur sagittis varius iaculis. Cras ac ante velit. Sed congue sapien eget lectus iaculis accumsan. Etiam ullamcorper urna dolor, sed vulputate mauris maximus et. Proin fermentum dui nibh, nec sodales nulla viverra et. Mauris non sagittis tellus. Ut auctor cursus sem, eget tempor urna pharetra ut.</p>');
  });
/////////////back to home
  $(".head_logo").click(function(){

    $(".head_logo").removeClass("head_logo_after");
    $(".head_container").removeClass("head_container_nav_active");
    $(".nav").removeClass("nav_active");
    $(".nav").css({"opacity": "100", "display":"none"});
    $(".footer_container").css({"display":"none"});

    $(".container").css("display","none");
    $(".home_button_container").css("display","inline");

  });
/////////////
  $(".our_team").click(function(){

  $(window).scrollTop(0);

  $(".container").css("display","none");

  $(".our_team_container").css("display","inline");

});
/////////////
  $(".products").click(function(){

  $(window).scrollTop(0);

  $(".container").css({"display":"none"});

  $(".products_container").css({"display":"inline"});

});
/////////////
  $(".about").click(function(){

  $(window).scrollTop(0);

  $(".container").css("display","none");

$(".about_container").css({"display":"inline"});

});
/////////////
    $(".news").click(function(){

    $(window).scrollTop(0);

    $(".container").css("display","none");

    $(".news_container").css({"display":"inline"});

});
/////////////
    $(".contact").click(function(){

    $(window).scrollTop(0);

  $(".container").css("display","none");

$(".contact_container").css({"display":"inline"});

});
/////////////
    $(".nav").click(function(){

      $(".nav").removeClass("nav_active");

      $(this).addClass("nav_active");

    });
//////////////
  $(".team_member").click(function(){

    $(".member_content_box").css("display", "inline");

  });
/////////////
  $(".escape").click(function(){

    $(".member_content_box").css("display", "none");

  });
/////////////
  $(".product_bar").click(function(){

    $(".product_bar").removeClass("product_bar_active");

    $(this).addClass("product_bar_active");

  });
////////////

  $(".product_bar_head").click(function(){

  });
////////////
$(".dropdown").click(function(){
  $(".nav_container").toggleClass("dropdown_active");
});
////////////
});
