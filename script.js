$(document).ready( function(){
    
});


getElements("create")[0].onclick = function () {
    getElements("dictionary-table")[0].appendChild(createNewRow());
};

function getPartOfSpeech() {
    var type = getType();
    return TYPES[type];
}

function getEnglishWord() {
   return getElements("english-word")[0].value;
}

function getRussianWord() {
    return getElements("russian-word")[0].value;
}

function getType() {
    var types = getElements("type-speech");
    var array = Array.prototype.slice.apply(types);

    return array.find(function(element){ return element.checked; }).value;
}

function createNewRow() {
    var td1 = createNewElement("td", "eword", getEnglishWord);
    var td2 = createNewElement("td", "rword", getRussianWord);
    var td3 = createNewElement("td", getType(), getPartOfSpeech);

    var tr1 =  document.createElement("tr");
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    return tr1;
}

function createNewElement(type, className, wayCreate) {
    var newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerHTML = wayCreate();

    return newElement;
}

function getElements(field) {
    return document.getElementsByClassName(field);
}

var TYPES = {
    noun: "сущ.\n",
    adjective: "прил.\n",
    verb: "глаг.\n",
    pronoun: "местоим. \n",
    adverb: "нар.\n"
};
