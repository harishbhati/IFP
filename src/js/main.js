$( document ).ready(function() {
	//TOGGLING NESTED ul
	$(".drop-down .selected a").click(function() {
	    $(".drop-down .options ul").toggle();
	});

	//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
	$(".drop-down .options ul li a").click(function() {
	    var text = $(this).html();
	    $(".drop-down .selected a span").html(text);
	    $(".drop-down .options ul").hide();
	}); 


	//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
	$(document).bind('click', function(e) {
	    var $clicked = $(e.target);
	    if (! $clicked.parents().hasClass("drop-down"))
	        $(".drop-down .options ul").hide();
	});


	//tabs
	$('.nav-option').each(function(){
	  // For each set of tabs, we want to keep track of
	  // which tab is active and its associated content
	  var $active, $content, $links = $(this).find('a');

	  // If the location.hash matches one of the links, use that as the active tab.
	  // If no match is found, use the first link as the initial active tab.
	  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	  $active.addClass('active');

	  $content = $($active[0].hash);

	  // Hide the remaining content
	  $links.not($active).each(function () {
	    $(this.hash).hide();
	  });

	  // Bind the click event handler
	  $(this).on('click', 'a', function(e){
	    // Make the old tab inactive.
	    $active.removeClass('active');
	    $content.hide();

	    // Update the variables with the new link and content
	    $active = $(this);
	    $content = $(this.hash);

	    // Make the tab active.
	    $active.addClass('active');
	    $content.show();

	    // Prevent the anchor's default click action
	    e.preventDefault();
	  });
	});	

	//Height calculate
    $('.sidebar-option-holder').each(function() {
    var fullHeight = $('.ifp-sidebar').outerHeight();
    var topNav = $('.sidebar-header').outerHeight();   
    var actionLink = $('.sidebar-action-holder').outerHeight(); 
    var optionsHeight = fullHeight - (topNav + actionLink);
    $('.sidebar-option-holder').css("height",optionsHeight+"px");
    });

    //Accordion
    $(".accordion a:first").addClass("active");
	$(".accordion ul:not(:first)").hide();

	$(".accordion a").click(function(){
		$(this).next("ul").slideToggle("slow")
		.siblings("ul:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("a").removeClass("active");
	});

	//modals
	$("#shareBtn").click(function(){
		$("#shareModal,.draw-modal-bg").css('display','flex');
	});

	$("#planSave").click(function(){
		$("#signInModal,.draw-modal-bg").css('display','flex');
	});

	$("#planPrint").click(function(){
		$("#printModal,.draw-modal-bg").css('display','flex');
	});
});