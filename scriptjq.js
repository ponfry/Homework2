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
    var result = "<td class='noun'>";
    result += getElements("[checked].type-speech").val()
    console.log(getElements("[checked].type-speech"));
    result += "</td>";

    return result;
}
//String.prototype.concat()