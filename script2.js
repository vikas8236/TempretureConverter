
function convertTemperature() {
    var fromScale = document.getElementById('fromScale').value;
    var toScale = document.getElementById('toScale').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    if (isNaN(temperature)) {
        document.getElementById('result').innerHTML = 'Invalid temperature value';
        return;
    }

    if (fromScale === toScale) {
        document.getElementById('result').innerHTML = temperature.toFixed(2);
        return;
    }

    var convertedTemperature;

    // Perform the temperature conversion
    if (fromScale === 'Celsius') {
        if (toScale === 'Fahrenheit') {
            convertedTemperature = temperature * 9 / 5 + 32;
        } else if (toScale === 'Kelvin') {
            convertedTemperature = temperature + 273.15;
        }
    } else if (fromScale === 'Fahrenheit') {
        if (toScale === 'Celsius') {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else if (toScale === 'Kelvin') {
            convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
        }
    } else if (fromScale === 'Kelvin') {
        if (toScale === 'Celsius') {
            convertedTemperature = temperature - 273.15;
        } else if (toScale === 'Fahrenheit') {
            convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
        }
    }

    document.getElementById('result').innerHTML = convertedTemperature.toFixed(2);
}
