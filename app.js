function calcularVentas() {
    // Obtener los valores ingresados por cada vendedor
    var juanaAqua = parseInt(document.getElementById('juanaAqua').value);
    var juanaEmocion = parseInt(document.getElementById('juanaEmocion').value);
    var juanaAlegria = parseInt(document.getElementById('juanaAlegria').value);
    var juanaFrescura = parseInt(document.getElementById('juanaFrescura').value);
    var pedroAqua = parseInt(document.getElementById('pedroAqua').value);
    var pedroEmocion = parseInt(document.getElementById('pedroEmocion').value);
    var pedroAlegria = parseInt(document.getElementById('pedroAlegria').value);
    var pedroFrescura = parseInt(document.getElementById('pedroFrescura').value);

    // Validar que se hayan ingresado valores numéricos
    if (isNaN(juanaAqua) || isNaN(juanaEmocion) || isNaN(juanaAlegria) || isNaN(juanaFrescura) ||
        isNaN(pedroAqua) || isNaN(pedroEmocion) || isNaN(pedroAlegria) || isNaN(pedroFrescura)) {
    alert('Por favor, ingrese valores numéricos para las ventas.');
    return;
    }

    // Calcular la suma total de dinero recolectada por cada vendedor
    var juanaTotal = juanaAqua * 200 + juanaEmocion * 180 + juanaAlegria * 160 + juanaFrescura * 150;
    var pedroTotal = pedroAqua * 200 + pedroEmocion * 180 + pedroAlegria * 160 + pedroFrescura * 150;

    // Mostrar la cantidad de cada producto vendido por cada vendedor
    console.log('Juana:');
    console.log('Aqua:', juanaAqua);
    console.log('Emoción:', juanaEmocion);
    console.log('Alegría:', juanaAlegria);
    console.log('Frescura:', juanaFrescura);

    console.log('Pedro:');
    console.log('Aqua:', pedroAqua);
    console.log('Emoción:', pedroEmocion);
    console.log('Alegría:', pedroAlegria);
    console.log('Frescura:', pedroFrescura);

    // Mostrar la suma total de dinero recolectada por cada vendedor
    console.log('Suma total de dinero recolectada:');
    console.log('Juana:', juanaTotal);
    console.log('Pedro:', pedroTotal);

    // Determinar el empleado del mes
    var empleadoDelMes;
    if (juanaTotal > pedroTotal) {
        empleadoDelMes = 'Juana';
    } else if (pedroTotal > juanaTotal) {
        empleadoDelMes = 'Pedro';
    } else {
        empleadoDelMes = 'Empate';
    }

    // Mostrar el nombre del empleado del mes
    console.log('Empleado del mes:', empleadoDelMes);

    // Mostrar los resultados en la página
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'Juana:<br>' +
                            'Aqua: ' + juanaAqua + '<br>' +
                            'Emoción: ' + juanaEmocion + '<br>' +
                            'Alegría: ' + juanaAlegria + '<br>' +
                            'Frescura: ' + juanaFrescura + '<br><br>' +
                            'Pedro:<br>' +
                            'Aqua: ' + pedroAqua + '<br>' +
                            'Emoción: ' + pedroEmocion + '<br>' +
                            'Alegría: ' + pedroAlegria + '<br>' +
                            'Frescura: ' + pedroFrescura + '<br><br>' +
                            'Suma total de dinero recolectada:<br>' +
                            'Juana: ' + juanaTotal + '<br>' +
                            'Pedro: ' + pedroTotal + '<br><br>' +
                            'Empleado del mes: ' + empleadoDelMes;
}