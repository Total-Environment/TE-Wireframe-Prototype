$(document).ready(function(){
 $('table.fortcolltable').each(function() {
        var $table = $(this);
        $table.find('.parent').click(function() {
            $(this).nextUntil('.parent').toggle("slow"); // must use jQuery 1.4 for nextUntil() method
        });
        var $childRows = $table.find('tbody tr').not('.parent').hide();
    });
	
	
	 $('table.annualcolltable').each(function() {
        var $table = $(this);
        $table.find('.parent').click(function() {
            $(this).nextUntil('.parent').toggle("slow"); // must use jQuery 1.4 for nextUntil() method
        });
        var $childRows = $table.find('tbody tr').not('.parent').hide();
    });
	$('input.dailyrec').datepicker({
      format: "mm/yyyy",
    startView: 2
});
$('input.annualrec').datepicker({
    
    startView: 2
});
});