$(document).ready(function () {

    $('#headerdiv').html('<div class="headerContainerWrapper">'+
			'<div class="headerContainerShadow">'+
			'<div class="headerContainer">'+
			'<div class="gr-clr"></div>'+
            '<nav class="navbar-demo navbar-default header-space">'+
                '<div class="container-fluid">'+
                    '<div class="navbar-header">'+
                        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
                            '<span class="sr-only">Toggle navigation</span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                            '<span class="icon-bar"></span>'+
                        '</button>'+
                        '<a class="navbar-brand" href="index.html"><img src="images/fugue.png" class="fuguelogo" alt="Fugue Logo" /></a>'+
                    '</div>'+
                    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
                        '<ul class="nav navbar-nav">' +
                            '<li class="dropdown">' +
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Masters<span class="caret"></span></a>' +
                                '<ul class="dropdown-menu">' +
                                    '<li><a href="Rate-master.html">Rate Master</a></li>' +
                                    '<li><a href="cpr-master.html">CPR Master</a></li>' +
                                    '<li><a href="Category.html">Category Master</a></li>' +
                                    '<li><a href="upload-ratemaster.html">Upload Rate Master</a></li>' +
                                '</ul>' +
                            '</li>' +
                            '<li><a href="Aprove.html">Approve<span class="sr-only">(current)</span></a></li>' +
                            '<li class="dropdown">' +
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Rate Master<span class="caret"></span></a>' +
                                '<ul class="dropdown-menu">' +
                                    '<li><a href="price-book.html">Rate Book</a></li>' +
                                    '<li><a href="E-build-price-book.html">E-Build Price Book</a></li>' +
                                '</ul>' +
                            '</li>' +
                            '<li class="dropdown">' +
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">E-Build Price Book<span class="caret"></span></a>' +
                                '<ul class="dropdown-menu">' +
                                    '<li><a href="Apply-CPR.html">Apply CPR</a></li>' +
                                    '<li><a href="send-to-e-build.html">Send to E-Build</a></li>' +
                                '</ul>' +
                            '</li>' +
                            '<li class="dropdown">' +
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Configuration<span class="caret"></span></a>' +
                                '<ul class="dropdown-menu">' +
                                    '<li><a href="server-details.html">Server Details</a></li>' +
                                '</ul>' +
                            '</li>' +                           
                        '</ul>' +
                        '<ul class="nav navbar-nav navbar-right">'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+
                                '<span class="" ><img src="images/profile.png" class="img-circle" width="30px" border="0" style="border:solid 2px #646572; background-color:#585966" />&nbsp;&nbsp;Profile Name <span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;Profile</a></li>'+
                                    '<li><a href="#"><span class="fa fa-unlock-alt" aria-hidden="true"></span>&nbsp;&nbsp;Change Password</a></li>'+
                                    '<li>&nbsp;&nbsp;<a href="#"><span class="glyphicon glyphicon-off" aria-hidden="true"></span>&nbsp;&nbsp;Logout</a></li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>'+
			'</div>'+
			'</div>'+
			'</div>');
    $('#' + sessionStorage.tabid + '').addClass('active');

    $('.btnView').click(function () {
        sessionStorage.tabid = "job";
    });
    $('.btnView').click(function () {
        sessionStorage.tabid = "hirerequest";
    });

});

// get header height (without border)
	var getHeaderHeight = $('.headerContainerWrapper').outerHeight();

	// border height value (make sure to be the same as in your css)
	var borderAmount = 2;

	// shadow radius number (make sure to be the same as in your css)
	var shadowAmount = 30;

	// init variable for last scroll position
	var lastScrollPosition = 0;

	// set negative top position to create the animated header effect
	$('.headerContainerWrapper').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');

	$(window).scroll(function() {
		var currentScrollPosition = $(window).scrollTop();

		if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount + borderAmount) ) {

			$('body').addClass('scrollActive').css('padding-top', getHeaderHeight);
			$('.headerContainerWrapper').css('top', 0);

			if (currentScrollPosition < lastScrollPosition) {
				$('.headerContainerWrapper').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');
			}
			lastScrollPosition = currentScrollPosition;

		} else {
			$('body').removeClass('scrollActive').css('padding-top', 0);
		}
	});