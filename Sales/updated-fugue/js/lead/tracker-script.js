$(document).ready(function(){
$(".pop").each(function() {
	
    var $pElem= $(this);
  html: true, 
    $pElem.popover(
        {
       
          content: getPopContent($pElem.attr("id"))
		  
        }
    );
});

  $('#demo-htmlselect').ddslick({
            showSelectedHTML: true,
            onSelected: function(selectedData){
                var str = $('.dd-selected-value').val();
                $('.followups-selct').val(str);
            }   
        });
       
        $('#time-select').ddslick({
            onSelected: function(selectedData){
                //callback function: do something with selectedData;
            }   
        });
        $('#dur-select').ddslick({
            onSelected: function(selectedData){
                //callback function: do something with selectedData;
            }   
        });
  $('.followupnote').summernote({
            height: 150,
            toolbar: [
              ['style', ['bold', 'italic', 'underline']],
         
        ['para', ['ul', 'ol', 'paragraph']],
            ]
        });

        var save = function() {
            var makrup = $('.addnote').summernote('code');
            $('.addnote').summernote('destroy');
        };
 $('.popover  .popclose').click(function(){
	 console.log('close');

		
	$('.rating a').addClass('ratestar_on');
	//$('[data-toggle="popover"]').popover('hide');
		
	
}); 
$('.lddatesel input').datepicker({
	format: " D dd-M-yyyy"
});
	$('body').on('click', function (e) {

		$('[data-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
	});
	 $('#LeadFollowupsModalBox').on('shown.bs.modal', function () {
       $("#followupcalendar").fullCalendar('render');
});
	$('#followupcalendar').fullCalendar({
		header: {
                left: '',
                center: '',
                right:'prev,next'
            },
			 events: [
        {
            title  : 'event1',
            start  : '2016-05-01'
        },
        {
            title  : 'event2',
            start  : '2016-06-05',
            end    : '2016-06-07'
        },
        {
            title  : 'event3',
            start  : '2016-06-09T12:30:00',
            allDay : false // will make the time show
        }
    ],
            defaultView: 'agendaDay',
            editable: true,
            nowIndicator:true
        });

});
 function getPopContent(target) {
    return $("#" + target + "_content > div.popContent").html();
}

