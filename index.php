<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/styles.css">
<script src="script/dragdrop.js"></script>
<script src="script/logic.js"></script>
<title>Organizational Chart</title>
</head>

<body>
Please Drag + Drop to crete the Org-Chart

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img/img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

</body>

</html>