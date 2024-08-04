<input id="font-size-control" type="range" min="16" max="96" />
        <br />
        <span id="text">Abracadabra!</span>

        <script>
          // Select the input and text elements
          const fontSizeControl = document.getElementById("font-size-control");
          const text = document.getElementById("text");

          // Add an event listener for the input event
          fontSizeControl.addEventListener("input", () => {
            const currentFontSize = fontSizeControl.value + "px";

            text.style.fontSize = currentFontSize;
          });

          // Set the initial font size based on the initial value of the input
          text.style.fontSize = fontSizeControl.value + "px";
        </script>