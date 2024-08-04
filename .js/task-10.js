<div id="controls">
          <input type="number" min="1" max="100" step="1" />
          <button type="button" data-create>Create</button>
          <button type="button" data-destroy>Destroy</button>
        </div>

        <div id="boxes"></div>

        <script>
          function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0")}`;
          }

          const controls = document.getElementById("controls");
          const input = controls.querySelector("input");
          const createButton = controls.querySelector("[data-create]");
          const destroyButton = controls.querySelector("[data-destroy]");
          const boxesContainer = document.getElementById("boxes");

          createButton.addEventListener("click", () => {
            const amount = parseInt(input.value, 10);
            createBoxes(amount);
          });

          destroyButton.addEventListener("click", destroyBoxes);

          function createBoxes(amount) {
            destroyBoxes(); 
            const boxSize = 30;
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < amount; i++) {
              const box = document.createElement("div");
              const size = boxSize + i * 10;
              box.style.width = `${size}px`;
              box.style.height = `${size}px`;
              box.style.backgroundColor = getRandomHexColor();
              box.classList.add("box");
              fragment.appendChild(box);
            }

            boxesContainer.appendChild(fragment);
          }

          function destroyBoxes() {
            boxesContainer.innerHTML = "";
          }
        </script>