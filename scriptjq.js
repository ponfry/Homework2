$(document).ready(function () {
    init();
});

function init() {
    getFirstElement(".create").click(function () {
        getFirstElement(".dictionary-table").append(formRow())
    });
}
function getFirstElement(selector) {
    return getElements(selector).eq(0);
}

function getElements(selector) {
    return $(selector);
}

function formRow() {
    var rusword = russianWord();
    var enword = englishWord();
    var partword = partOfSpeech();

    var result = "<tr>";
    result += enword;
    result += rusword;
    result += partword;
    result += "</tr>";

    return result;
}

function russianWord() {
    var result = "<td class='rword'>";
    result += getFirstElement(".russian-word").val();
    result += "</td>";

    return result;
}

function englishWord() {
    var result = "<td class='eword'>";
    result += getFirstElement(".english-word").val();
    result += "</td>";

    return result;
}

function partOfSpeech() {
    var element = $("input[name=speech]:checked");
    var result = "<td class='"+element.val()+"'>";
    result += TYPES[element.val()];
    result += "</td>";

    return result;
}
var TYPES = {
    noun: "сущ.\n",
    adjective: "прил.\n",
    verb: "глаг.\n",
    pronoun: "местоим. \n",
    adverb: "нар.\n"
};
//String.prototype.concat()