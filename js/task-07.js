
          const fontSizeControl = document.getElementById("font-size-control");
          const text = document.getElementById("text");

          fontSizeControl.addEventListener("input", () => {
            const currentFontSize = fontSizeControl.value + "px";

            text.style.fontSize = currentFontSize;
          });

          text.style.fontSize = fontSizeControl.value + "px";
