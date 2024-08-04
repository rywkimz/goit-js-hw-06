<form class="login-form">
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>

        <script>
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
        </script>