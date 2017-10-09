$(function(){
	$('.dash_filter').click(function(){
		$('.dashfilter_container').slideToggle();
	});
	
	$('#filterslider1')
  .anythingSlider({
   toggleControls : true,
   buildNavigation:false,
     buildStartStop :false,
   enableArrows        : true,
toggleArrows        : true,
buildArrows         : true ,
hashTags            : false ,
stopAtEnd:true,
infiniteSlides      : false
  });
  $('#filterslider2')
  .anythingSlider({
   toggleControls : true,
   buildNavigation:false,
     buildStartStop :false,
   enableArrows        : true,
toggleArrows        : true,
buildArrows         : true ,
hashTags            : false,
stopAtEnd:true,
infiniteSlides      : false
  });
  $('#dashboardaccodion').on('shown.bs.collapse', function (e) {
        var offset = $(this).find('.collapse.in').prev('.panel-heading');
        if(offset) {
            $('html,body').animate({
                scrollTop: $(offset).offset().top -60
            }, 500); 
        }
    }); 
});