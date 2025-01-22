document.getElementById('processButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    let outputText = inputText;

    const removeLineBreaks = document.getElementById('removeLineBreaks').checked;
    const removeParagraphBreaks = document.getElementById('removeParagraphBreaks').checked;

    if (removeLineBreaks) {
        outputText = outputText.replace(/\n/g, ' '); // Replace line breaks with a space
    }

    if (removeParagraphBreaks) {
        outputText = outputText.replace(/\n\n/g, ' '); // Replace paragraph breaks with a space
    }

    document.getElementById('outputText').value = outputText;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('removeLineBreaks').checked = false;
    document.getElementById('removeParagraphBreaks').checked = false;
});
