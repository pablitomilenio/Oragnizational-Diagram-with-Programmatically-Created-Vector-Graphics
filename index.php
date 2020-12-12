<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/styles.css">
<script src="script/dragdrop.js"></script>
<title>Title of the document</title>
</head>

<body>
The content of the document......

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img/img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

</body>

</html>