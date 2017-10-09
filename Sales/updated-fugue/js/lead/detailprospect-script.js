  $(function() { // document ready
  $('[data-toggle="tooltip"]').tooltip(); 
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
		
        $('.addnote').summernote({
            height: 120,
            toolbar: [
					  ['style', ['bold', 'italic', 'underline', 'clear']],
					  ['fontsize', ['fontsize']],
					  ['color', ['color']],
					  ['para', ['ul', 'ol', 'paragraph']],
					 ]
        });
		 $('.popovernote').summernote({
            height: 60,
            toolbar: [
					  ['style', ['bold', 'italic', 'underline', 'clear']],
					  ['fontsize', ['fontsize']],
					  ['color', ['color']],
					  ['para', ['ul', 'ol', 'paragraph']],
					 ]
        });
		 $('.comm_note').summernote({
            height: 350,
			  focus:true,
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['fontsize', ['fontsize']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['misc', ['fullscreen','undo','redo','codeview']]
            ]
           
        });
		$('.bccsel').click(function(){
			$('.bccview').fadeIn();
			$('.bccsel').hide();
		});
		$('.remvebcc').click(function(){
			$('.bccview').hide();
			$('.bccsel').show();
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

        var selectdate;
        $('#datepicker').datepicker({
            format: "dd/mm/yyyy",
            autoclose: true,
            todayHighlight:true,
        }).on('changeDate', function (ev) {
            // /console.log("Date changed: ", ev.target.value);
            selectdate = ev.target.value;
  
            $(this).datepicker('hide');
        });

        /*$('#datepicker').on('change',function(){
            var vale = $('.date-pick').data("datepicker");
            console.log(vale.date);
            var date = vale.date;
            var formatted =date.getDate()+ "/" + (date.getMonth() + 1) + "/" +  date.getFullYear()  ;
            alert(formatted);
        
        });*/
		
		$('.creemailcomm').click(function(){
			$('.notfolup').hide();
			$('.detailpgtermsheet').hide();
			$('.communicationcontainer').fadeIn();
		});
	
$('.prjlsttable tr').click(function(){
	$('.communicationcontainer').hide();
	$('.communicationdetailscontainer').hide();
	$('.prjlsttable tr').removeClass('selectrow');
	$(this).addClass('selectrow');
	$('.notfolup').hide();
	$('.detailpgtermsheet').fadeIn(1000);
	
    var customerId = $(this).find("td").eq(4).html();  
console.log(customerId);	
if(customerId=='Draft')
{
	$('.watermark').show();
	
}
else{
	$('.watermark').hide();
}	

});
$('.commtable tr').click(function(){
	$('.communicationdetailscontainer').fadeIn(1000);
		$('.communicationcontainer').hide();
	$('.commtable tr').removeClass('selectrow');
	$(this).addClass('selectrow');
	$('.notfolup').hide();
	
	
   

});
$('#fullname').click(function(){
    var name = $(this).text();
    $(this).html('');
    $('<input></input>')
        .attr({
            'type': 'text',
            'name': 'fname',
            'id': 'txt_fullname',
           
            'value': name
        })
        .appendTo('#fullname');
    $('#txt_fullname').focus();
});
$('.savesplnote').click(function(){
	var spltextareaval =$('.specialcondition').summernote('code');
	var formattextareaval= $.parseHTML(spltextareaval);
	var splnotevalue = $('.displaycontent').html(formattextareaval);
	$('.special_entries').toggle();
	$('.specialdata').append($('.displaycontent').html());

});
 $('.specialcondition').summernote({
            height: 50,
			placeholder: 'Special Condition here...',
            toolbar: [
              ['style', ['bold', 'italic', 'underline', 'clear']],
               ['fontsize', ['fontsize']],
       
        ['para', ['ul', 'ol', 'paragraph']],
            ]
        });
	$('.discountview').click(function(){
		$('#costspt').hide();
			$('#npvcal').hide();
				$('#discont').toggle('slide', {direction: 'right'});
				$('#discont').animate({ right: '50px', height:'380px' }, 50);  
			});
			
			$('.costsplit').click(function(){
				$('#discont').hide();
				$('#npvcal').hide();
				$('#costspt').toggle('slide', {direction: 'right'});
				$('#costspt').animate({ right: '50px', height:'260px' }, 50);  
			
				
			});
			$('input.exdate1').datepicker({
    format: "dd-M-yyyy",
    todayBtn: true,
    todayHighlight: true
});
		 $('.exdate1').change(function() {
		NewNPV();
console.log('cjange')		
		}); 
		$('#NPVDiscount	').blur(function() {
		NewNPV();	
		});
			$('.npvcalculator').click(function(){
				$('#discont').hide();
				$('#costspt').hide();
				$('#npvcal').toggle('slide', {direction: 'right'});
				$('#npvcal').animate({ right: '50px', height:'520px' }, 50);  
			
				
			});
			$('.specialconditionview').slideUp();
			$('.specialview').click(function(){
				$('.specialconditionview').slideToggle();
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
        $('.personaleditinfo').hide();
        $('.enqeditinfo').hide();
        $('.editinfoper').on('click', function (e) {
            $('.personalinfodetails').hide();
            $('.personaleditinfo').slideDown();
        });

        $('.submitperbtn').on('click', function (e) {
            $('.personalinfodetails').show();
            $('.personaleditinfo').hide();
        });

        $('.personaleditinfo').hide();
        $('.editinfoper').click(function(){
            $('.personalinfodetails').hide();
            $('.personaleditinfo').slideDown();
        });

        $('.editinfoenq').on('click', function (e) {
            $('.enqinfodetails').hide();
            $('.enqeditinfo').slideDown();
        });


        $('.submitbtn').on('click', function (e) {
            $('.enqinfodetails').show();
            $('.enqeditinfo').hide();
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
		$('.addmilestone').on('click',function(event){
	event.stopPropagation();
	 $('.pdf-format tr.milestoneadding').after('<tr><td class="txtalgncenter inline-edit" width="20" contenteditable="true">&nbsp;</td>'+ 
	 '<td class="inline-edit" style="text-align:left; padding:3px 0 3px 15px;" contenteditable="true"></td>'+
	   '<td class="txtalgncenter inline-edit" style="padding:3px 2px 3px 3px;" contenteditable="true"></td>'+
	   	   '<td class="txtalgnright inline-edit" style="position:relative;padding:3px 2px 3px 3px;"><span contenteditable="true">&nbsp;</span><span class="removemilestone pull-right"><i class="fa fa-times" aria-hidden="true"></i></span></td></tr>');
		    var $div=$('.slnoedit'), isEditable=$div.is('.editable');
    $('.slnoedit').prop('contenteditable',!isEditable).toggleClass('editable');
	   $('.removemilestone').on('click',function(event){
	event.stopPropagation();
	 $(this).parent().parent().remove();
    });	
});	
        $('.addnoteinitialscreen').show();
        $('.addnoteinitialscreen').click(function(e){
            e.preventDefault();
            $('.addnoteinitialscreen').hide();
            $('.selectionentry').eq(0).fadeIn();
            $('.tab-list li a').eq(0).addClass('selt'); 
	 
        });
          $('.enqcurrentinfo,.assigninfo,.hideinfoenq,.hideinfoass,.terminfo,.hideterminfo,.editinfoass,.comminfo,.hidecomminfo').hide();
        $('.editinfoassign').on('click', function (e) {
			 e.preventDefault();
            $('.assinfodetails').hide();
            $('.editinfoass').slideDown();
        });
        $('.showinfoenq').click(function(e){
			 e.preventDefault();
	        $('.enqcurrentinfo').slideDown();
            $('.showinfoenq').hide();
            $('.hideinfoenq').show();
        });
        $('.hideinfoenq').click(function(e){
	 e.preventDefault();
            $('.enqcurrentinfo').slideUp();
            $('.showinfoenq').show();
            $('.hideinfoenq').hide();
        });
        $('.showinfoass').click(function(e){
	 e.preventDefault();
            $('.assigninfo').slideDown();
            $('.showinfoass').hide();
            $('.hideinfoass').show();
        });
        $('.hideinfoass').click(function(e){
	 e.preventDefault();
            $('.assigninfo').slideUp();
            $('.showinfoass').show();
            $('.hideinfoass').hide();
        });
		
		 $('.showterminfo').click(function(e){
	 e.preventDefault();
            $('.terminfo').slideDown();
            $('.showterminfo').hide();
            $('.hideterminfo').show();
        });
        $('.hideterminfo').click(function(e){
	 e.preventDefault();
            $('.terminfo').slideUp();
            $('.showterminfo').show();
            $('.hideterminfo').hide();
        });
			 $('.showcomminfo').click(function(e){
	 e.preventDefault();
            $('.comminfo').slideDown();
            $('.showcomminfo').hide();
            $('.hidecomminfo').show();
        });
        $('.hidecomminfo').click(function(e){
	 e.preventDefault();
            $('.comminfo').slideUp();
            $('.showcomminfo').show();
            $('.hidecomminfo').hide();
        });
        $('.subassbtn').click(function(e){
			 e.preventDefault();
            $('.assinfodetails').show();
            $('.editinfoass').hide();
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
	    $(".contelcode").intlTelInput({
            allowExtensions: true,
            autoFormat: false,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "auto",
            ipinfoToken: "yolo",
            nationalMode: false,
            numberType: "MOBILE",
           
            preventInvalidNumbers: true
        });
		$('.tempmeter p').click(function() {
	var  tempmeterindex= $(this).index() ;
	
	$parentid = $(this).parent('.tempmeter');
	console.log($parentid);
	if(parseInt(tempmeterindex)==0)
	{
	$parentid.find('p.level1').addClass('bgcolor_f6cdcb');
	$parentid.find('p.level2').removeClass('bgcolor_f18b89');
	$parentid.find('p.level3').removeClass('bgcolor_de5855');
	$parentid.find('p.level4').removeClass('bgcolor_cd3e38');
	$parentid.find('p.level5').removeClass('bgcolor_b20700');
	}
	
	if(parseInt(tempmeterindex)==1)
	{
	
	$parentid.find('p.level1').addClass('bgcolor_f6cdcb');
	$parentid.find('p.level2').addClass('bgcolor_f18b89');
	$parentid.find('p.level3').removeClass('bgcolor_de5855');
	$parentid.find('p.level4').removeClass('bgcolor_cd3e38');
	$parentid.find('p.level5').removeClass('bgcolor_b20700');
	}
	if(parseInt(tempmeterindex)==2)
	{
	
	$parentid.find('p.level1').addClass('bgcolor_f6cdcb');
	$parentid.find('p.level2').addClass('bgcolor_f18b89');
	$parentid.find('p.level3').addClass('bgcolor_de5855');
	$parentid.find('p.level4').removeClass('bgcolor_cd3e38');
	$parentid.find('p.level5').removeClass('bgcolor_b20700');
	}
	if(parseInt(tempmeterindex)==3)
	{
	
	$parentid.find('p.level1').addClass('bgcolor_f6cdcb');
	$parentid.find('p.level2').addClass('bgcolor_f18b89');
	$parentid.find('p.level3').addClass('bgcolor_de5855');
	$parentid.find('p.level4').addClass('bgcolor_cd3e38');
	$parentid.find('p.level5').removeClass('bgcolor_b20700');
	}
	if(parseInt(tempmeterindex)==4)
	{
	
	$parentid.find('p.level1').addClass('bgcolor_f6cdcb');
	$parentid.find('p.level2').addClass('bgcolor_f18b89');
	$parentid.find('p.level3').addClass('bgcolor_de5855');
	$parentid.find('p.level4').addClass('bgcolor_cd3e38');
	$parentid.find('p.level5').addClass('bgcolor_b20700');
	}

	
	
	});
$('[data-toggle="tooltip"]').tooltip(); 
$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
$("input[type*=radio]").each(function(i,value){ 
    $(this).attr("title");
    });
    $('label').tooltip({
        placement : 'top'
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

$('.addcarpark').on('click',function(event){
	 event.stopPropagation();
	 $('.pdf-format tr.carparkadding').after('<tr><td class="txtalgncenter" width="20">&nbsp;</td>'+ 
	 '<td style="text-align:left; padding:3px 0 3px 15px;"><select class="selectpicker"><option>Regular Independent Car Park/s</option>'+
	'<option>Large Independent Car Park/s</option><option>Small Independent Car Park/s</option><option>Large Twin Car Park/s</option>'+
	'<option>Regular Twin Car Park/s</option><option>Small Twin Car Park/s</option><option>Large Special Car Park/s</option>'+	'<option>Regular Special Car Park/s</option><option>Small Special Car Park/s</option><option>Large Open to Sky Car Park/s</option></select></td>'+
	   '<td class="txtalgnright" style="padding:3px 2px 3px 3px;"><span class="inline-edit" contenteditable="true">1</span></td>'+
	   '<td class="txtalgnright" style="padding:3px 2px 3px 3px;">1</td>'+
	   '<td class="txtalgnright inline-edit" style="position:relative;padding:3px 2px 3px 3px;"><span contenteditable="true">&nbsp;</span><span class="removecarpark pull-right"><i class="fa fa-times" aria-hidden="true"></i></span></td></tr>');
$('.removecarpark').on('click',function(event){
	event.stopPropagation();
	 $(this).parent().parent().remove();
    });	
});
$('.rating > label.full').click(function(){
	  var $this = $(this);
    if ($this.hasClass('clicked')){
        $(this).css('color','#b12525');
        return;
    }/* else{
        $this.addClass('clicked');
        $(this).css('color','#ffd203');
        setTimeout(function() { 
        $this.removeClass('clicked'); },500);
    }//end of else */
	
});

  
$(".pop").each(function() {
	
    var $pElem= $(this);
  html: true, 
    $pElem.popover(
        {
       
          content: getPopContent($pElem.attr("id"))
		  
        }
    );
});
 $('.popover  .popclose').click(function(){
	 console.log('close');

		
	$('.rating a').addClass('ratestar_on');
	//$('[data-toggle="popover"]').popover('hide');
		
	
}); 
	$('body').on('click', function (e) {

		$('[data-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$(this).popover('hide');
			}
		});
	});
	
/****** NPV Calculator functions***/
function NewNPV()
{
	
	// var NPVDiscount=parseInt($('#npvtableper #NPVDiscount').text());
	var NPVDiscount=$('.dispercent').closest("tr").children().eq(2).html();
	 NPVDiscount=Number(NPVDiscount.replace(/[^0-9\.]+/g,""));
						   NPVDiscount=parseInt(NPVDiscount);
 //console.log(NPVDiscount);
	  var sumofNPVamount=0;
      var sumofSALESamount = 0;
					$('.Nms').each(function () {
						   var OfferedDate=$(this).find('.exdate1').val();//$(this).closest("tr").children().eq(0).html();
						  console.log("offerdate"+OfferedDate);
						   var NPVDate=$(this).closest("tr").children().eq(1).html();
						//   alert(NPVDate);
						   var OfferedAmount=$(this).closest("tr").children().eq(3).text();
						 //  alert(OfferedAmount);
						   OfferedAmount=Number(OfferedAmount.replace(/[^0-9\.]+/g,""));
						   OfferedAmount=parseInt(OfferedAmount);
						   sumofSALESamount +=OfferedAmount;
						   $('.total').closest("tr").children().eq(3).html(sumofSALESamount);
						  //alert(OfferedAmount);
						 var totlval = $('.total').closest("tr").children().eq(3).html();
						  totlval=Number(totlval.replace(/[^0-9\.]+/g,""));
						   totlval=parseInt(totlval);
						// alert(totlval);
						
						
						
						  var percentcal= parseInt((OfferedAmount/totlval)*100);
						  $(this).closest("tr").children().eq(2).html(percentcal+'%') ;
						   var NPVAmount=parseInt($(this).attr('NPVAmount'));
						  // NPVAmount=Number(NPVAmount.replace(/[^0-9\.]+/g,""));
						   //NPVAmount=parseInt(NPVAmount);
						  var oneDay = 24*60*60*1000;	// hours*minutes*seconds*milliseconds
                          var firstDate = new Date(OfferedDate);
                          var secondDate = new Date(NPVDate);

                           var diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
						        
                          // alert(diffDays);
						  
							    diffDays=diffDays/365;
								//alert(diffDays);
							  // diffDays=diffDays.toFixed(2);
							  // alert(baselineAmount);
							    diffDays=Math.round(diffDays * 100) / 100;
						       // console.log(diffDays);
								$(this).closest("tr").children().eq(4).html(diffDays) ;
								var  tmpNPVDiscount=NPVDiscount/100;
								 var temp=Math.pow((1+tmpNPVDiscount),diffDays);
								//temp= Math.round(temp);
								//console.log('temp'+temp);
								OfferedAmount=OfferedAmount/Math.pow((1+tmpNPVDiscount),diffDays);
								OfferedAmount=Math.round(OfferedAmount);
								// console.log(OfferedAmount);
								$(this).closest("tr").children().eq(5).html(OfferedAmount) ;// $(this).find('#NpvAmount').html(OfferedAmount);
								sumofNPVamount +=OfferedAmount;
								//console.log(sumofNPVamount);
								$('.total').closest("tr").children().eq(5).html(sumofNPVamount);
								
								var totnpvamonut=$('.total').closest("tr").children().eq(5).html();
								var subnpvsales = parseInt(totlval) - parseInt(totnpvamonut);
								$('.total').closest("tr").children().eq(6).html(subnpvsales);
								var disamont = ((subnpvsales / parseInt(totlval))*100);
								 disamont=Math.round(disamont * 100) / 100;
								 $('.total').closest("tr").children().eq(7).html(disamont+"%");
								//console.log(disamont);
								  CommaSeparation();
								// $(this).find('#baselineAmount2').attr("OfferedAmount",OfferedAmount);
								 $(this).attr("NPVAmount",OfferedAmount);
						  
						   
			          
				      
						   
						   
					    
	              });
}		
    });

 	
function printDivNew(elem)
{
	//console.log(data);
	var divElements = document.getElementById(elem).innerHTML;
//	console.log(divElements);
      Popup($('<div/>').append($(divElements).clone()).html());
}
function Popup(data) 
{
    var mywindow = window.open('', 'Term Sheets', 'height=900,width=1000');
    mywindow.document.write('<!doctype html><html moznomarginboxes mozdisallowselectionprint><head><title>Term Sheets</title>');
    mywindow.document.write('<link  href="css/lead/print.css" media="print" rel="stylesheet" type="text/css" /><link href="css/lead/lead-details-style.css" rel="stylesheet" /><link href="css/style.css" rel="stylesheet" />'+
'<link href="css/tefont.css" rel="stylesheet" /><style>ul.dropdown-menu{display:none !important;}</style>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
setTimeout(function(){   mywindow.print();  mywindow.close();}, 100);
}


function CommaSeparation()
{

$('.currency').each(function(){
if($(this).text() != "")
$(this).text(($(this).text().split(".",1)))
})

//script to define Indian format
$(".currency").each(function(){
       $(this).text( $(this).text().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") );
   });	
}

 function getPopContent(target) {
    return $("#" + target + "_content > div.popContent").html();
}
