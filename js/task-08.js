
          const loginForm = document.querySelector(".login-form");

          loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = event.target.elements.email.value;
            const password = event.target.elements.password.value;

            if (email === "" || password === "") {
              alert("All fields must be filled out");
              return;
            }

            const formData = {
              email: email,
              password: password,
            };

            console.log(formData);

            loginForm.reset();
          });
