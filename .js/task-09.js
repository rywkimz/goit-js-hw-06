    <div class="widget">
              <p>Background color: <span class="color">-</span></p>
              <button type="button" class="change-color">Change color</button>
            </div>

            <script>
              function getRandomHexColor() {
                return `#${Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, "0")}`;
              }

              // Select the button and span elements
              const changeColorButton = document.querySelector(".change-color");
              const colorSpan = document.querySelector(".color");

              // Add event listener for the button click
              changeColorButton.addEventListener("click", () => {
                const newColor = getRandomHexColor();

                document.body.style.backgroundColor = newColor;

                colorSpan.textContent = newColor;
              });
            </script>