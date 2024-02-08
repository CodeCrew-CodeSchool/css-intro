function changeDivDisplayToInlineBlock() {
    // Select all div elements on the page
    const divs = document.querySelectorAll('div');

    // Iterate over each div
    divs.forEach(function(div) {
        div.style.display = "inline-block"
        div.style.boxSizing = "border-box"
        div.style.border = "3px solid black"
        div.style.minWidth = "1%"
        div.style.minHeight = "1%"
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        div.style.border = `3px solid ${randomColor}`
    });
}

// Run the function to change the colors
changeDivDisplayToInlineBlock();
