<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/styles.css">
<script src="script/dragdrop.js"></script>
<script src="script/objectLogic.js"></script>
<script src="script/displayLogic.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<title>Organizational Chart</title>
</head>

<body>
Org Chart

<div id='cont'>
<svg height="300" width="824">
	<g id="wr" transform="translate(412,80)">
		<defs>
			<filter id="glow">
				<fegaussianblur class="blur" result="coloredBlur" stddeviation="8"></fegaussianblur>
				<femerge>
					<femergenode in="coloredBlur"></femergenode>
          <femergenode in="coloredBlur"></femergenode>
          <femergenode in="coloredBlur"></femergenode>
					<femergenode in="SourceGraphic"></femergenode>
				</femerge>
			</filter>
		</defs>

	</g></svg>
</div>




</body>

</html>