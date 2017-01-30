//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
   
  
//   listens for clicks on "login" button
    $('#login-form').on('click', function(){
          $('#login-form').fadeOut(300);
              $('div.user-info').delay(300).fadeIn(300);
              $('.user-fullname').html(userInfo.firstName + " " + userInfo.lastName); 
      
    });
//   listening for clicks on "Logout" button
   $('#logout-button').on("click", function(){
        $('div.user-info').fadeOut(300);
        $('#login-form').delay(300).fadeIn(300);
    });

// Listens for cliks on all "View Details" and "Learn More" buttons, allows user to hide or display details text
    $('.view-details').on('click', function(event){
        console.log(event);
        var targetElement = event.target;
        var container = targetElement.parentElement.parentElement;
        $(container).find('.details').each(function(index, el){
            if ($(el).is(':visible')){
                $(el).fadeOut();
                targetElement.innerText = "View Details";
            } else{
                $(el).fadeIn();
                targetElement.innerText = "Hide Details";
            }

    });
    });
// Listens for clicks on vote buttons and counts and updates status bar
  var voteCounts = {
        great: 10,
        greatest: 30,
        total: 0
    };
    
	$("#voteGreat").on('click', function(event) {
		voteCounts.great++;
		var currentWidth = $(".great-progress").width(voteCounts.great + '%');
	});
	
	
	$("#voteGreatest").on('click', function(event) {
		voteCounts.greatest++;
		var currentWidth = $(".greatest-progress").width(voteCounts.greatest + '%');
	});  
    
});