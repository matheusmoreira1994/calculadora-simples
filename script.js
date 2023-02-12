
  function calcularGastos() {
    var gasto1 = parseFloat(document.getElementById("gasto1").value);
    var gasto2 = parseFloat(document.getElementById("gasto2").value);
    var gasto3 = parseFloat(document.getElementById("gasto3").value);

    var total = gasto1 + gasto2 + gasto3;
    document.getElementById("total").innerHTML = "Total: R$" + total.toFixed(2);

    localStorage.setItem("gasto1", gasto1);
    localStorage.setItem("gasto2", gasto2);
    localStorage.setItem("gasto3", gasto3);
    localStorage.setItem("total", total);
  }

  window.onload = function() {
    if (localStorage.getItem("gasto1")) {
      document.getElementById("gasto1").value = localStorage.getItem("gasto1");
    }
    if (localStorage.getItem("gasto2")) {
      document.getElementById("gasto2").value = localStorage.getItem("gasto2");
    }
    if (localStorage.getItem("gasto3")) {
      document.getElementById("gasto3").value = localStorage.getItem("gasto3");
    }
    if (localStorage.getItem("total")) {
      document.getElementById("total").innerHTML = "Total: R$" + localStorage.getItem("total");
    }
  };

