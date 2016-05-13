document.getElementsByClassName("create")[0].onclick = function () {

    var type_new_word = get_type();

    document.getElementsByClassName("dictionary")[0].appendChild(create_new_element("span", "word", get_word));
    
    document.getElementsByClassName("dictionary")[0].appendChild(create_new_element("span", get_type(), get_part_of_speech));
};
function get_part_of_speech() {
    var type = get_type();
    if(type === "noun"){
        return "сущ."
    }
    if(type === "adjective"){
        return "прил."
    }
    if(type === "verb"){
        return "глаг."
    }
    if(type === "pronoun"){
        return "местоим."
    }
    if(type === "adverb"){
        return "нар."
    }

}
function get_word() {
    var english_word = document.getElementsByClassName("english-word")[0].value;
    var russian_word = document.getElementsByClassName("russian-word")[0].value;
    return english_word + "-" + russian_word;
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