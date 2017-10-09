$(document).ready(function () {

    $('#headerdiv').html('<div class="gr-clr"></div>'+
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
                        '<ul class="nav navbar-nav">'+
						    '<li><a href="#">Dashboard </a></li>'+
  						    '<li class="active"><a href="#">Portfolio <span class="sr-only">(current)</span> </a></li>'+
							 '<li><a href="#">Lead </a></li>'+
                            '<li><a href="#">Termsheet </a></li>'+
							'<li><a href="#">Collections </a></li>'+
							'<li><a href="#">Invoices </a></li>'+
							'<li><a href="#">Tracking </a></li>'+
							'<li><a href="#">Business Partner </a></li>'+
							'<li class="dropdown">'+
								'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="#">Campaign</a></li>' +
                                     '<li><a href="#">Factsheet</a></li>' +
                                      '<li><a href="#">Email</a></li>' +
                                '</ul>'+
                            '</li>'+
                            '<li class="dropdown">'+
								'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Masters<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="#">Campaign</a></li>' +
                                     '<li><a href="#">Factsheet</a></li>' +
                                      '<li><a href="#">Email</a></li>' +
                                '</ul>'+
                            '</li>'+
							'<li class="dropdown">'+
								'<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="#">Campaign</a></li>' +
                                     '<li><a href="#">Factsheet</a></li>' +
                                      '<li><a href="#">Email</a></li>' +
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
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
            '</nav>');


    $('#' + sessionStorage.tabid + '').addClass('active');

    $('.btnView').click(function () {
        sessionStorage.tabid = "job";
    });
    $('.btnView').click(function () {
        sessionStorage.tabid = "hirerequest";
    });

});