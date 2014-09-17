<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Apply</title>
	<link rel="stylesheet" type="text/css" href="foundation/css/normalize.css">
	<link rel="stylesheet" type="text/css" href="foundation/css/foundation.min.css">
	<link rel="stylesheet" type="text/css" href="foundation/icons/foundation-icons.css">
	<link rel="stylesheet" type="text/css" href="style2.css">
	<script src="foundation/js/vendor/modernizr.js"></script>
</head>
<body>
<?php 
  require('header2.php');

 ?>

<br><br><br><br>
<div class='row long-row apply-form-contain'>
	<h3>A100 Program Application Form</h3>
	<h5>If you are looking for our Partner Company Application, please <a href="partner-apply.php">click here</a>.</h5>
	<p>
	Please fill in all required fields and submit supporting documents below.
	<br>
	 If you have additional documents or materials you wish to submit for consideration, please contact Program Manager Krishna Sampath at krishna@indie-soft.com.
	<br>
	<div id='top'></div>
	The deadline for the Spring Cohort is February 20,. Applications are being evaluated on a rolling basis, so apply today!
	<br>
	By submitting an application below, you agree to these Terms and Conditions of the A100 Program.
	</p>

	<dl class="tabs vertical" data-tab id='apply-form-tabs'>
	  <dd class="active"><a href="#panel1a">Personal Information</a></dd>
	  <dd><a href="#panel2a">Schedule Information</a></dd>
	  <dd><a href="#panel3a">Technical Experience</a></dd>
	  <dd><a href="#panel4a">Supporting Materials</a></dd>
	  <dd><a href="#panel5a">Review / Submit</a></dd>
	</dl>
	<div class="tabs-content vertical apply-form">
	  <div class="content active" id="panel1a">
<?php 
require ('apply-personal-details.php');
 ?>
 		<a href="#top">Go back to top of application to continue</a>
	  </div>
	  <div class="content" id="panel2a">
<?php 
require ('apply-schedule-info.php');
 ?>
 		<a href="#top">Go back to top of application to continue</a>
	  </div>
	  <div class="content" id="panel3a">
<?php 
require ('apply-tech-exp.php');
 ?>
 		<a href="#top">Go back to top of application to continue</a>
	  </div>
	  <div class="content" id="panel4a">
<?php 
require ('apply-support.php');
 ?>
 		<a href="#top">Go back to top of application to continue</a>
	  </div>
	  <div class="content" id="panel5a">
	    <h3>Please review your application before submitting.</h3>
	    <h4>If you have questions regarding your application please contact us at info@indie-soft.com</h4>
	    <input type='submit'>
	  </div>
	</div>

</div>
<hr class='white-hr'>

 <?php 
	require('footer.php');
 ?>


</body>

<script type="text/javascript" src='//code.jquery.com/jquery-1.10.2.min.js'></script>
<script src="foundation/js/vendor/jquery.js"></script>
<script src="foundation/js/vendor/fastclick.js"></script>
  <script src="foundation/js/foundation.min.js"></script>
  <script type="text/javascript">
	$(document).foundation();
	</script>

<script type="text/javascript">

</script>



</html>