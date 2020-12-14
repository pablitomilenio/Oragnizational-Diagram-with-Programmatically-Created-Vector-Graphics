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

<path class="glowLine" d="M 45 225 C 55 279 236 231 218 285" transform="translate(-250,-280)"/></path>
<path class="glowLine" d="M 164 225 C 164 275 218 235 218 285" transform="translate(-250,-280)"/></path>
<path class="glowLine" d="M 273 225 C 273 275 218 235 218 285" transform="translate(-250,-280)"/></path>
<path class="glowLine" d="M 382 225 C 382 279 218 231 218 285" transform="translate(-250,-280)"/></path>		
		
		</g></svg>




</body>

</html>