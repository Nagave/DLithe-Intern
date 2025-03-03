document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertBtn").addEventListener("click", convert);
    document.getElementById("clearBtn").addEventListener("click", clearFields);
});

function convert() {
    let fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit.trim() === "") {
        alert("⚠️ Please enter a temperature in Fahrenheit.");
        return;
    }

    let celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    document.getElementById("result").textContent = `Result: ${celsius.toFixed(2)} °C`;
}

function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").textContent = "Result: -- °C";
}
