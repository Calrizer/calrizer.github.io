//If you're reading this, yes I know the code is terrible...

$(document).ready(function(){

  var $homeButton = $("#home");
  var $aboutButton = $("#about");
  var $webButton = $("#web");
  var $uiButton = $("#ui");
  var $contactButton = $("#contact");

  var $contentView = $("#contentView");

  var $current = "home";

  $homeButton.click(function() {

    if ($current != "home"){

      $contentView.empty();
      $contentView.append('<img class="imgAnimate animated fadeIn" src="images/me.jpg" width="450px">');

      $current = "home";

    }

  });

  $aboutButton.click(function() {

    if ($current != "about"){

      $contentView.empty();
      $contentView.append('<div class="profileImageView"><img class="profileImage animated fadeIn" src="images/me-profile.jpg" width="100px"></div>');
      $contentView.append('<div class="aboutText animated fadeIn"><p>Hi I&#39;m Callum. I&#39;m a web and user interface designer based in London. Currently completing a bachelors degree in Computer Science at City, Univeristy of London. I have been a designer for over four years now with my focus being on clean, simple and functional interfaces.</br></br>Other than designing I enjoy programming in Swift and JavaScript to create iOS applications and NodeJS APIs to produce a front end application and backend server.</br></br>I am currently retired from producing commerical sites and interfaces to focus on my studies and building my professional portfolio. You can take a look at my work using the link on the left. I&#39;m always up for collaborating on cool projects so hit me up using the contact link.</p></div>');

      $current = "about";

    }

  });

  $webButton.click(function() {

    $contentView.empty();

    //load shit.

  });

  $uiButton.click(function() {

    $contentView.empty();

    //load shit.

  });

  $contactButton.click(function() {

    $contentView.empty();

    //load shit.

  });

    $("#web").click(function(){
        $(".mainimage").show();
    });

});
