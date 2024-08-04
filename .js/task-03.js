<ul class="gallery"></ul>

    <script>
      const images = [
        {
          url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
          alt: "White and Black Long Fur Cat",
        },
        {
          url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
          alt: "Orange and White Koi Fish Near Yellow Koi Fish",
        },
        {
          url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
          alt: "Group of Horses Running",
        },
      ];

      // Select the ul element with the class "gallery"
      const gallery = document.querySelector(".gallery");

      // Create HTML string for all gallery items
      const galleryItems = images
        .map(({ url, alt }) => {
          return `
        <li>
          <img src="${url}" alt="${alt}">
        </li>
      `;
        })
        .join("");

      // Insert all gallery items into the ul.gallery
      gallery.insertAdjacentHTML("beforeend", galleryItems);
    </script>