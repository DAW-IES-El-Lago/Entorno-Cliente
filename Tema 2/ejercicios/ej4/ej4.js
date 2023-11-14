let dividendo = prompt("Introduce el dividendo: ");
      let divisor = prompt("Introduce el diviso: (No puede ser 0)");

      divisor == 0
        ? document.write("Operacion no valida, No se puede dividir por 0")
        : document.write(dividendo / divisor);