$(document).ready(function () {
$('.parent-row.has-children').click(function(){
//$('.child-row,.child-child-row').hide();
$('tr.rowgap').css('display','table-row');	
console.log('parent');
	var $element = $(this).next();
    while(!$element.hasClass('parent-row')){

        $element.toggle();
        if($element.next().length >0){
         	$element = $element.next();
	$('.child-child-row').hide();				
        }
        else{
		
            return;
        }
    }
});
 $('table.tstable tr.child-child-row').click(function () {
        window.location.href = $(this).data('url');
    });
$('.child-row.has-children').click(function(){
$('.child-child-row').hide();	
console.log('child');
	var $element = $(this).next();
    while($element.hasClass('child-child-row')){
	
        $element.toggle();
        if($element.next().length >0){
         	$element = $element.next();   
        }
        else{
            return;
        }
    }
});
	$("#fixTable").tableHeadFixer({"head" : false, "left" : 2}); 
	$('.salestracker_content').eq(0).show();
	$('ul.strack li').click(function(){
		$('.salestracker_content').hide();
		var strackindex = $('ul.strack li').index(this);
		$('.salestracker_content').eq(strackindex).show();
		   $('#salestrackerfolow').fullCalendar('render');
	});
		$(".specchangemenu li a").click(function(){
	//	$('.pdftitle').removeClass('bgcolor_808080');
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'))
  console.log($(this).data('value'));
  var colrval= $(this).data('value');
  if(colrval=='Green')
  {
	$('.specific_color, .specific_col_one').addClass('bgcolor_76913a');
	$('.specific_color, .specific_col_one').removeClass('bgcolor_f79647 bgcolor_224162 bgcolor_60477a');
	$('.specific_color').html(colrval);
	$('.specific_col_one span').html(colrval);
	$('.specchange').addClass('color_76913a');
	$('.specchange').removeClass('color_f79646 color_224162 color_60477a');
  }
  if(colrval=='Orange')
  {	
$('.specific_color, .specific_col_one').addClass('bgcolor_f79647');
	$('.specific_color, .specific_col_one').removeClass('bgcolor_76913a bgcolor_224162 bgcolor_60477a');
	$('.specific_color').html(colrval);
	$('.specific_col_one span').html(colrval);
	$('.specchange').addClass('color_f79646');
	$('.specchange').removeClass('color_76913a color_224162 color_60477a');
	
  }
  if(colrval =='Blue')
  {
	  $('.specific_color, .specific_col_one').addClass('bgcolor_224162');
	$('.specific_color, .specific_col_one').removeClass('bgcolor_f79647 bgcolor_76913a  bgcolor_60477a');
	$('.specific_color').html(colrval);
	$('.specific_col_one span').html(colrval);
	$('.specchange').addClass('color_224162');
	$('.specchange').removeClass('color_76913a color_f79646 color_60477a');

  }
   if(colrval =='Purple')
  {
	   $('.specific_color, .specific_col_one').addClass('bgcolor_60477a');
	$('.specific_color, .specific_col_one').removeClass('bgcolor_224162 bgcolor_f79647 bgcolor_76913a  ');
	$('.specific_color').html(colrval);
	$('.specific_col_one span').html(colrval);
	$('.specchange').addClass('color_60477a');
	$('.specchange').removeClass('color_76913a color_f79646 color_224162');
  }
});
$(".submenu").hide();
	$(".subsec a").click(function(){
		$(this).next(".submenu").slideToggle(600); 
		var plusmin;
		plusmin = $(this).children(".plus_minus").text();
 
		if( plusmin == '+')
		$(this).children(".plus_minus").text('-');
		else
		$(this).children(".plus_minus").text('+');
	});
	
	/** followup*/
	 $('#salestrackerfolow').fullCalendar({
            header: {
                left: '',
                center: '',
                right:'prev,next'
            },
            defaultView: 'agendaDay',
            editable: true,
            nowIndicator:true
        });
		
		 $('.saletrackfollow').summernote({
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
        $('#datepicker').datepicker();
	/*** Notes**/
	$('.salestracker_notes').summernote({
            height: 120,
            toolbar: [
					  ['style', ['bold', 'italic', 'underline', 'clear']],
					  ['fontsize', ['fontsize']],
					  ['color', ['color']],
					  ['para', ['ul', 'ol', 'paragraph']],
					 ]
        });
});


 function printDiv(elem)
{
	//console.log(data);
	var divElements = document.getElementById(elem).innerHTML;
//	console.log(divElements);
      Popup($('<div/>').append($(divElements).clone()).html());
}

function Popup(data) 
{
	
    var mywindow = window.open('', 'SOA', 'height=900,width=1000');
    mywindow.document.write('<!doctype html><html moznomarginboxes mozdisallowselectionprint><head><title>Term Sheets</title>');
    mywindow.document.write('<link  href="css/lead/print.css" media="print" rel="stylesheet" type="text/css" /><link href="css/lead/termsheet-style.css" rel="stylesheet" /><link href="css/style.css" rel="stylesheet" />'+
	
'<link href="css/tefont.css" rel="stylesheet" />');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
setTimeout(function(){  mywindow.print(); mywindow.close();}, 200);
    //
  

    return true;
}
  