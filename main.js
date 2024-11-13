// main js file for more common js functionality

function toggleImageSize() {
    var img = document.getElementById('profileImage');
    img.classList.toggle('enlarged');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("main.js loaded");

    const toggleAltTextButton = document.getElementById('toggle-alt-text');
    const enlargeTextButton = document.getElementById('enlarge-text-btn');
    const toggleColorButton = document.getElementById('toggle-color-btn');

    if (toggleAltTextButton) {
        toggleAltTextButton.addEventListener('click', function(event) {
            console.log("toggle-alt-text");
            event.preventDefault();

            // Select only mosaic items that have the data-alt attribute
            const mosaicItems = document.querySelectorAll('.mosaic-item[data-alt]');

            mosaicItems.forEach(item => {
                let altTextDiv = item.querySelector('.alt-text');
                if (!altTextDiv) {
                    altTextDiv = document.createElement('div');
                    altTextDiv.classList.add('alt-text');
                    altTextDiv.innerText = item.getAttribute('data-alt');
                    item.appendChild(altTextDiv);
                }
                altTextDiv.style.display = altTextDiv.style.display === 'none' || altTextDiv.style.display === '' ? 'block' : 'none';
            });
        });
    } else {
        console.error("toggle-alt-text button not found");
    }

    if (enlargeTextButton) {
        enlargeTextButton.addEventListener('click', function() {
            console.log("enlarge-text-btn");
            const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, div');

            textElements.forEach(element => {
                const currentSize = window.getComputedStyle(element).fontSize;
                const newSize = parseFloat(currentSize) * 1.2 + 'px';
                element.style.fontSize = newSize;
            });
        });
    } else {
        console.error("enlarge-text-btn button not found");
    }

    if (toggleColorButton) {
        toggleColorButton.addEventListener('click', function() {
            console.log("high-contrast");
            document.body.classList.toggle('high-contrast');
        });
    } else {
        console.error("toggle-color-btn button not found");
    }
});
