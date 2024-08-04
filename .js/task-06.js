<input
          type="text"
          id="validation-input"
          data-length="6"
          placeholder="Please enter 6 symbols"
        />

        <script>
          // Select the input element
          const validationInput = document.getElementById("validation-input");

          // Add an event listener for the blur event
          validationInput.addEventListener("blur", () => {
            const requiredLength = parseInt(
              validationInput.getAttribute("data-length"),
              10
            );

            if (validationInput.value.length === requiredLength) {
              validationInput.classList.add("valid");
              validationInput.classList.remove("invalid");
            } else {
              validationInput.classList.add("invalid");
              validationInput.classList.remove("valid");
            }
          });
        </script>