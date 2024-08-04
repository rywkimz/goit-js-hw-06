<input
          type="text"
          id="name-input"
          placeholder="Please enter your name"
        />
        <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

        <script>
          // Select the input and output elements
          const nameInput = document.getElementById("name-input");
          const nameOutput = document.getElementById("name-output");

          // Add an event listener to the input element
          nameInput.addEventListener("input", () => {
            // Update the text content of the nameOutput span
            nameOutput.textContent =
              nameInput.value.trim() === "" ? "Anonymous" : nameInput.value;
          });
        </script>