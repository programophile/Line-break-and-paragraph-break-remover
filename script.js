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
        // Create a notification element
        const notification = document.createElement('div');
        notification.textContent = 'Output text copied to clipboard!';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        
        document.body.appendChild(notification);
        
        // Automatically remove the notification after 3 seconds
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
