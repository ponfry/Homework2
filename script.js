document.getElementsByClassName("create")[0].onclick = function () {
    var englishword = document.getElementsByClassName("english-word")[0].value;
    var russianword = document.getElementsByClassName("russian-word")[0].value;
    var new_word = englishword + "-" + russianword;
    var new_element = document.createElement("label");
    new_element.className = "word";
    new_element.innerHTML = new_word;
    document.getElementsByClassName("dictionary")[0].appendChild(new_element);
};
