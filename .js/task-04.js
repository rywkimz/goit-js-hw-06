<div id="counter">
          <button type="button" data-action="decrement">-1</button>
          <span id="value">0</span>
          <button type="button" data-action="increment">+1</button>
        </div>

        <script>
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
        </script>