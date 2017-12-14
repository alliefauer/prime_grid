window.onload = function () {

function isPrime(num) {
    if (num === 1 || num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

    const grid = document.getElementById('grid');
    console.log(grid)
    let gridhtml = '';

    for (let i = 1; i <= 100; i++) {
        gridhtml += `<tr id="row-${i}">`;
        for (let j = 1; j <= 100; j++) {
            const cell = i * j;
            if (isPrime(cell)) {
                gridhtml += `<td class="prime">${cell}</td>`;
            } else {
                gridhtml += `<td>${cell}</td>`;
            }
        }
        gridhtml += '</tr>';
    }

    grid.innerHTML = gridhtml;
}