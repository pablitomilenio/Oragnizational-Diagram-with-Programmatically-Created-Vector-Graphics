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
Please Drag + Drop to crete the Org-Chart

<div id="div1" ondrop="drop(event);addBox();" ondragover="allowDrop(event)"></div>

<div id='subord_list'>
<div id='anEmployee' ondrop="drop(event)" ondragover="allowDrop(event)"></div>
</div>

<img id="drag1" src="img/oneEmployee.png" draggable="true" ondragstart="drag(event)" width="180">

</body>

</html>