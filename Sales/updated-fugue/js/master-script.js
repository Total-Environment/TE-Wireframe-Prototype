$(document).ready(function () {
	var sdat= "2016-04-10 12:30:00"; 
var edat= '2016-04-10 12:40:50';

		$('#calendarnew').fullCalendar({
			 header: {
        left: '',
        center: '',
        right:'prev,next'
    },
    defaultView: 'agendaDay',
    editable: true,
    nowIndicator:true
	
   });
  
 

$('#demo-htmlselect').ddslick({
    showSelectedHTML: true,
    onSelected: function(selectedData){
        var str = $('.dd-selected-value').val();
        $('.followups-selct').val(str);
    }   
});
$('.usericondate .clear').click(function(){
  $('.date-pick').val("");
});


 $('.selectionentry').hide();
 $('.addnoteinitialscreen').show();
 $('.tab-list li').click(function (e) {
	 $('.addnoteinitialscreen').hide();
  
    $('.tab-list li a').removeClass('selt');
	 $('.selectionentry').hide();
  var tabindexval = $('.tab-list li').index(this);
  $('.selectionentry').eq(tabindexval).fadeIn();
 // alert(tabindexval);
 $('.tab-list li a').eq(tabindexval).addClass('selt'); 
  
 $('#calendarnew').fullCalendar('render');
   
 

});
$('.followupnote').summernote({
        height: 150,
        toolbar: [
          ['style', ['bold', 'italic', 'underline']],
         
    ['para', ['ul', 'ol', 'paragraph']],
        ]
      });
 $('.addnoteinitialscreen').show();
$('.addnoteinitialscreen').click(function(e){
 e.preventDefault();
	 $('.addnoteinitialscreen').hide();
	$('.selectionentry').eq(0).fadeIn();
	 $('.tab-list li a').eq(0).addClass('selt'); 
	 
});


/* $('#exTab1 .nav-pills .dropdown a').on('click', function(){    
    $('#exTab1 .nav-pills .dropdown-toggle').html($(this).html());    
}); */
$('#demo-htmlselect').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
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
$('#datepicker').datepicker();

});




