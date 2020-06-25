// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function Temperature(value, unit = "C") {
    unit = unit.toUpperCase();
    var result = 0;
    if (unit == "F") {
        result = (value - 32) * 5 / 9;
        return value + "\u00B0" + unit + " is " + result + "\u00B0C"
    } else if (unit == "C") {
        result = (value * 9 / 5) + 32;
        return value + "\u00B0" + unit + " is " + result + "\u00B0F"
    }
}