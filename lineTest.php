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

<svg height="300" width="824">
	<g class="svgWrapper" transform="translate(412,80)">
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
     <path class="exampleGlow" d="M 10 30 C 40 10, 65 10, 95 80 S 150 150, 180 80" style="fill-opacity: 0; stroke-width: 2; filter: url(#glow);" transform="translate(-250,-80)"/></path>
	</g></svg>




</body>

</html>