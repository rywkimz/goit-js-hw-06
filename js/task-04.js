
          let counterValue = 0;

          const valueSpan = document.getElementById("value");
          const decrementButton = document.querySelector(
            '[data-action="decrement"]'
          );
          const incrementButton = document.querySelector(
            '[data-action="increment"]'
          );

          decrementButton.addEventListener("click", () => {
            counterValue -= 1;
            valueSpan.textContent = counterValue;
          });

          incrementButton.addEventListener("click", () => {
            counterValue += 1;
            valueSpan.textContent = counterValue;
          });
