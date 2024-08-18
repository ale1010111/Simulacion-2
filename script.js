const cartas = [
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
];

document.getElementById('barajarBtn').addEventListener('click', barajar);

function barajar() {
    const numBarajadas = document.getElementById('numBarajadas').value;
    let contadorCartas = {};

    document.getElementById('resultados').innerHTML = '';

    for (let i = 0; i < numBarajadas; i++) {
        let cartasSeleccionadas = [];
        for (let j = 0; j < 4; j++) {
            const cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];
            cartasSeleccionadas.push(cartaAleatoria);
            contadorCartas[cartaAleatoria] = (contadorCartas[cartaAleatoria] || 0) + 1;
        }
        mostrarCartas(cartasSeleccionadas);
    }

    mostrarResultados(contadorCartas, numBarajadas);
}

function mostrarCartas(cartasSeleccionadas) {
    const resultadosDiv = document.getElementById('resultados');
    const cartasHtml = cartasSeleccionadas.map(carta => `<span class="card">${carta}</span>`).join(' ');
    resultadosDiv.innerHTML += `<div>${cartasHtml}</div>`;
}

function mostrarResultados(contadorCartas, numBarajadas) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML += `<h3>Resultados:</h3>`;
    for (let carta in contadorCartas) {
        const porcentaje = ((contadorCartas[carta] / (numBarajadas * 4)) * 100).toFixed(2);
        resultadosDiv.innerHTML += `<div>${carta}: ${contadorCartas[carta]} veces (${porcentaje}%)</div>`;
    }
}
