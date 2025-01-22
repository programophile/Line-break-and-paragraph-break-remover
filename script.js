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

    // Replace multiple spaces with a single space and trim leading spaces
    outputText = outputText.replace(/\s+/g, ' ').trim();

    document.getElementById('outputText').value = outputText;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    document.getElementById('removeLineBreaks').checked = false;
    document.getElementById('removeParagraphBreaks').checked = false;
});

// New functionality for copying output text to clipboard
document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText').value;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Output text copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
