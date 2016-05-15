document.getElementsByClassName("create")[0].onclick = function () {

    document.getElementsByClassName("dictionary")[0].appendChild(create_new_element("span", "eword", get_english_word));
    document.getElementsByClassName("dictionary")[0].appendChild(create_new_element("span", "rword", get_russian_word));
    document.getElementsByClassName("dictionary")[0].appendChild(create_new_element("span", get_type(), get_part_of_speech));
};
function get_part_of_speech() {
    var type = get_type();
    if(type === "noun"){
        return "сущ."+"<br>"
    }
    if(type === "adjective"){
        return "прил."+"<br>"
    }
    if(type === "verb"){
        return "глаг."+"<br>"
    }
    if(type === "pronoun"){
        return "местоим."+"<br>"
    }
    if(type === "adverb"){
        return "нар."+"<br>"
    }

}
function get_english_word() {
   return document.getElementsByClassName("english-word")[0].value;
}
function get_russian_word() {
    return document.getElementsByClassName("russian-word")[0].value;
}
function get_type() {
    var types = document.getElementsByName("gender");
    for (var i = 0; i < types.length; i++) {
        if (types[i].checked) {
            return types[i].value;
        }
    }

}
function create_new_element(type, class_name, action) {
    var new_element= document.createElement(type);
    new_element.className = class_name;
    new_element.innerHTML = action();
    return new_element;
}