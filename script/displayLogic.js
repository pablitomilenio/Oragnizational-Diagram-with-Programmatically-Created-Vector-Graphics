function addBox() {
    $("#employee1")
    .clone()
    .removeAttr('id')
    .appendTo("#subord_list");
}