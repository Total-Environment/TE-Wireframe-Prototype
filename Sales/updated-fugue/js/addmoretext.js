$(document).ready(function() {
  
    var max_text_fields      = 10; //maximum input boxes allowed
    var phonewrapper         = $(".input_fields_wrap_phone"); //Fields wrapper
  
    
    var x = 1; //initlal text box count
    $('.add_button_text').click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_text_fields){ //max input box allowed
            x++; //text box increment
            $(phonewrapper).append('<div class="removeablediv"><div class="input-group"><input class="form-control" type="text" placeholder="Additional Phone Number" name="mytext[]"/><span class="input-group-addon right-btn"><button type="button" class="remove_text_field"><i class="glyphicon glyphicon-remove"></i></button></span></div></div></div>'); //add input box
        }
    });
    
    $(phonewrapper).on("click",".remove_text_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).closest('div.removeablediv').remove(); x--;
    })


    var max_email_fields      = 10; //maximum input boxes allowed
    var emailwrapper         = $(".input_fields_wrap_email"); //Fields wrapper
  
    
    var x = 1; //initlal text box count
    $('.add_button_email').click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_email_fields){ //max input box allowed
            x++; //text box increment
            $(emailwrapper).append('<div class="removeablediv"><div class="input-group"><input class="form-control" type="text" placeholder="Additional Email Address" name="mytext[]"/><span class="input-group-addon right-btn"><button type="button" class="remove_field_email"><i class="glyphicon glyphicon-remove"></i></button></span></div></div></div>'); //add input box
        }
    });
    
    $(emailwrapper).on("click",".remove_field_email", function(e){ //user click on remove text
        e.preventDefault(); $(this).closest('div.removeablediv').remove(); x--;
    })
}); 