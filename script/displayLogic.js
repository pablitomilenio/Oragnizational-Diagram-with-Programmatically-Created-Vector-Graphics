function addBox() {
    $("#employee1")
    .clone()
    .removeAttr('id')
    .appendTo("#subord_list");
}

function dupIcon () {
// this function runs on drop
// 

$("#origSymb")
.clone()
.appendTo(".anEmployee:first");
//.attr('id','dupE');

//fixes iContain
    $("#icontain").empty();

    $("#origSymb")
    .clone()
    .appendTo("#icontain");
}