    document.addEventListener("keypress", function(e) {
        if(e.key === 'b' || e.key === 'B') {
            var btn = document.querySelector("#submit");

            window.alert("Você não é o dinheiro perdido no bolso do casaco, mas fiquei muito feliz de te encontrar!");
          
          btn.click();
        }
      });