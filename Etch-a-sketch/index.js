window.onload = function() {
    const container = document.getElementById('container');
    let isMouseDown = false;

    colorPicker.addEventListener('input', function () {
        // Update the drawing color when the color picker value changes
        currentColor = colorPicker.value;
    });

    for (let i = 0; i < 256; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-item');

        grid.addEventListener('mousedown', function() {
            isMouseDown = true;
            grid.style.backgroundColor = currentColor;
        });

        grid.addEventListener('mouseup', function() {
            isMouseDown = false;
        });

        grid.addEventListener('mouseover', function() {
            if (isMouseDown) {
                grid.style.backgroundColor = currentColor;
            }
        });

        container.appendChild(grid);
    }
};
