let numeroVuelta = 0;
let tiempoVuelta = 0;
let intervalID = null;

function iniciarContador() {
    numeroVuelta = 0;
    tiempoVuelta = 0;
    clearInterval(intervalID);
    intervalID = setInterval(actualizarTiempo, 1000);
}

function actualizarTiempo() {
    tiempoVuelta++;
    document.getElementById('tiempoVueltaPreview').textContent = segundosATiempo(tiempoVuelta);
}

function registrarVuelta() {
    numeroVuelta++;
    const numeroChapa = document.getElementById('numeroChapa').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${numeroChapa}</td>
        <td>${segundosATiempo(tiempoVuelta)}</td>
        <td>${numeroVuelta}</td>
    `;
    document.getElementById('tablaVueltas').appendChild(newRow);
}

function segundosATiempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    segundos %= 3600;
    const minutos = Math.floor(segundos / 60);
    segundos %= 60;
    return `${horas}h ${minutos}m ${segundos}s`;
}




