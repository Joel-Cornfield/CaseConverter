// buttonFunctionality.js

// JavaScript code is executed only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let textArea = document.getElementById("freeform");


    // event listeners for buttons
    document.getElementById("upper-case").addEventListener("click", function() {
        // Code to convert text to upper case
        textArea.value = textArea.value.toUpperCase();
    });

    document.getElementById("lower-case").addEventListener("click", function() {
        // Code to convert text to lower case
        textArea.value = textArea.value.toLowerCase();
    });
    document.getElementById("proper-case").addEventListener("click", function() {
        // Code to convert text to proper case
        textArea.value = toProperCase(textArea.value);

    });

    document.getElementById("sentence-case").addEventListener("click", function() {
        // Code to convert text to sentence case
        textArea.value = toSentenceCase(textArea.value);
    });

    document.getElementById("save-text-file").addEventListener("click", function() {
        // Code to save text to a file
        download("text.txt", textArea.value);
    });

    function toProperCase(text) {
        let words = text.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase();
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }

    function toSentenceCase(text) {
        // Split the text into an array of sentences using regular expression to cover different punctuation marks
        let sentences = text.split(".");

        for (let i = 0; i < sentences.length; i++) {
            // Remove leading spaces from each sentence
            sentences[i] = sentences[i].trim().toLowerCase();

            // Capitalize the first letter of each sentence
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
        }
        // Join the sentences back into a single string with appropriate punctuation marks
        return sentences.join(". ").trim(); // Add period and space after each sentence, and trim any leading/trailing spaces
    }

    function download(filename, text) {
        // Here, we create a new <a> (anchor) element programmatically using document.createElement('a'). This element will be used to simulate the file download.
        let element = document.createElement('a');

        /*
        We set two attributes for the anchor element:
            href: This attribute specifies the URL of the resource to be downloaded. Here, we're using a data URL (data:text/plain;charset=utf-8,) followed by the encoded text content. This data URL represents the content of the file to be downloaded.
            download: This attribute specifies the filename that the downloaded file should have.
        */
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        // We set the display style property of the anchor element to 'none' to ensure that it's not visible on the page. The user won't see this element, but it will be used to trigger the file download programmatically.
        element.style.display = 'none';

        // We append the anchor element to the <body> of the document. This step is necessary for the element to be included in the DOM, even though it's not visible.
        document.body.appendChild(element);

        // We simulate a click on the anchor element programmatically. This action triggers the browser's default behavior for a download link, resulting in the file download prompt.
        element.click();

        // After the download is initiated, we remove the anchor element from the document. This cleanup step ensures that the anchor element doesn't remain in the DOM after it has served its purpose.
        document.body.removeChild(element);
    }

});