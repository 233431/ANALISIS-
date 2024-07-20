let miGrafico; 
async function obtenerDatos(tipo) {
    try {
        const response = await fetch(`/data?type=${tipo}`);
        const data = await response.json();
        actualizarGrafico(data.labels, data.times, tipo);
    } catch (error) {
        console.error('Error obteniendo datos:', error);
    }
}

function actualizarGrafico(labels, times, tipo) {
    const ctx = document.getElementById('miGrafico').getContext('2d');

    if (miGrafico) {
        miGrafico.destroy();
    }

    miGrafico = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: `Tiempos de ${tipo}`,
                data: times,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
