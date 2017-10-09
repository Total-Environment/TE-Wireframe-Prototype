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
                            '<li><a href="index.html">Dashboard <span class="sr-only">(current)</span></a></li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Job<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="jobs.html">Jobs</a></li>'+
                                    '<li><a href="Job-templates.html">Job Templates</a></li>'+
                                    '<li><a href="job-create.html">Create Job Template</a></li>'+
                                '</ul>'+
                            '</li>' +
                            '<li class="dropdown">' +
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hiring Plan<span class="caret"></span></a>' +
                                '<ul class="dropdown-menu">' +
                                    '<li><a href="initiate-hiring-plan.html">Initiate Hiring Plan</a></li>' +
                                    '<li><a href="hiring-plan.html">Hiring Plan</a></li>' +
                                    '<li><a href="approvehiring-plan-landing-page.html">Approve Hiring Plan</a></li>' +
                                '</ul>' +
                            '</li>' +                            
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hire<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="hire-request-landing-page.html">Hire requests</a></li>' +
                                    '<li><a href="assign-to-channels-hire-requests.html">Assign to channels</a></li>'+
                                    '<li><a href="hr-shortlistinf-of-resume-landing-page.html">HR Shortlisting of  Resumes</a></li>' +
                                    '<li><a href="dept-shortlistinf-of-resume-landing-page.html">Department shortlisting of Resumes</a></li>' +
                                    '<li><a href="schedule-interview-hire-requests.html">Schedule Interviews</a></li>'+
                                    '<li><a href="recommend-for-final-section-hire-requests.html">Review and Recommend for final Selection</a></li>'+
                                    '<li><a href="offer-hire-requests.html">Offer</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Evaluation<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="conduct-evaluation.html">Conduct Evaluation</a></li>'+
                                '</ul>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Referral<span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li><a href="postresume-hire-requests.html">Post Resume</a></li>' +
                                '</ul>'+
                            '</li>'+
                            '<li><a href="Post-resume-from-database.html">Candidates</a></li>'+
                            '<li><a href="#">Master Data</a></li>'+
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