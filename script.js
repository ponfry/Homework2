document.getElementsByClassName("create")[0].onclick = function () {
    var englishword = document.getElementsByClassName("english-word")[0].value;
    var russianword = document.getElementsByClassName("russian-word")[0].value;
    var new_word = englishword + "-" + russianword;
    var type_new_word;
    var types = document.getElementsByName("gender");
    for (var i=0;i<types.length; i++) {
        if (types[i].checked) {
            type_new_word = types[i].value;
        }
    }
    new_word=new_word+type_new_word;
    var new_element = document.createElement("span");
    new_element.className = "word";
    new_element.innerHTML = new_word;
    document.getElementsByClassName("dictionary")[0].appendChild(new_element);
};
