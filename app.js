const searchInput = document.querySelector("#searchInput");
const giphyGallery = document.querySelector("#giphyGallery");
const removeBtn = document.querySelector("#removeBtn");

function createGif(response) {
  let searchResults = response.data.length;
  console.log(searchResults);
  let randomPickIndex = Math.floor(Math.random() * searchResults);

  const newDiv = document.createElement("div");
  newDiv.classList.add("box", "zone");
  const newGif = document.createElement("img");
  newGif.src = response.data[randomPickIndex].images.original.url;
  newDiv.appendChild(newGif);
  giphyGallery.append(newDiv);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let searchTerm = searchInput.value;

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "fhOSvuZU5Sc0kU6GT0hTwkJPAoSA2KQW",
    },
  });
  createGif(response.data);
});

removeBtn.addEventListener("click", function (e) {
  e.target = giphyGallery.innerHTML = "";
});
