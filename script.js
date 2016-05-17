document.getElementsByClassName("create")[0].onclick = function () {

    document.getElementsByClassName("dictionary")[0].appendChild(createNewElement("span", "eword", getEnglishWord));
    document.getElementsByClassName("dictionary")[0].appendChild(createNewElement("span", "rword", getRussianWord));
    document.getElementsByClassName("dictionary")[0].appendChild(createNewElement("span", getType(), getPartOfSpeech));
};

function getPartOfSpeech() {
    // var type = getType();
    // if(type === "noun"){
    //     return "сущ."+"<br>"
    // }
    // if(type === "adjective"){
    //     return "прил."+"<br>"
    // }
    // if(type === "verb"){
    //     return "глаг."+"<br>"
    // }
    // if(type === "pronoun"){
    //     return "местоим."+"<br>"
    // }
    // if(type === "adverb"){
    //     return "нар."+"<br>"
    // }
    
    return TYPES[type];

}

function getEnglishWord() {
   return document.getElementsByClassName("english-word")[0].value;
}

function getRussianWord() {
    return document.getElementsByClassName("russian-word")[0].value;
}

function getType() {
    var types = document.getElementsByName("gender");
    for (var i = 0; i < types.length; i++) {
        if (types[i].checked) {
            return types[i].value;
        }
    }
}

function createNewElement(type, className, action) {
    var newElement= document.createElement(type);
    newElement.className = className;
    newElement.innerHTML = action();

    return newElement;
}

var TYPES = {
    noun: "сущ.\n"
};
