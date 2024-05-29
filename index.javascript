const vehicles = {
    alto: { name: "Maruti Suzuki Alto", speed: 140, efficiency: 22.05, tank: 35, range: 771.75 },
    i20: { name: "Hyundai i20", speed: 180, efficiency: 20.35, tank: 37, range: 753.05 },
    nexon: { name: "Tata Nexon", speed: 180, efficiency: 17.57, tank: 44, range: 772.68 },
    city: { name: "Honda City", speed: 180, efficiency: 17.8, tank: 40, range: 712 },
    thar: { name: "Mahindra Thar", speed: 155, efficiency: 15.2, tank: 57, range: 866.4 },
    innova: { name: "Toyota Innova Crysta", speed: 179, efficiency: 11.25, tank: 55, range: 618.75 },
    seltos: { name: "Kia Seltos", speed: 170, efficiency: 16.8, tank: 50, range: 840 },
    kwid: { name: "Renault Kwid", speed: 150, efficiency: 22.3, tank: 28, range: 624.4 },
    ecosport: { name: "Ford EcoSport", speed: 182, efficiency: 15.9, tank: 52, range: 826.8 },
    tiago: { name: "Tata Tiago", speed: 150, efficiency: 23.84, tank: 35, range: 834.4 }
};

function calculate() {
    const distance = parseFloat(document.getElementById('distance').value);
    const vehicleType = document.querySelector('input[name="vehicle"]:checked').value;
    const vehicle = vehicles[vehicleType];

    if (distance > vehicle.range) {
        document.getElementById('results').innerHTML = <p>${vehicle.name} cannot travel ${distance} km. Out of range.</p>;
        return;
    }

    const time = distance / vehicle.speed;
    const fuelUsed = distance / vehicle.efficiency;

    let resultsHtml = <p>${vehicle.name}:</p>;
    resultsHtml += <p>Time to travel ${distance} km: ${time.toFixed(2)} hours</p>;
    resultsHtml += <p>Fuel consumption: ${fuelUsed.toFixed(2)} liters</p>;

    resultsHtml += '<h3>Comparison with other vehicles:</h3><ul>';
    for (const key in vehicles) {
        if (vehicles[key].name !== vehicle.name) {
            const otherVehicle = vehicles[key];
            if (distance <= otherVehicle.range) {
                const otherTime = distance / otherVehicle.speed;
                const otherFuelUsed = distance / otherVehicle.efficiency;
                resultsHtml += <li>${otherVehicle.name}: ${otherTime.toFixed(2)} hours, ${otherFuelUsed.toFixed(2)} liters</li>;
            } else {
                resultsHtml += <li>${otherVehicle.name}: Out of range</li>;
            }
        }
    }
    resultsHtml += '</ul>';

    document.getElementById('results').innerHTML = resultsHtml;
}