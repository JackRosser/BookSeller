let bookLink = "https://striveschool-api.herokuapp.com/books";
let main = document.querySelector("main");

const loadBooks = function () {
  fetch(bookLink)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Sono dentro al then ma c'è qualche problema");
      }
    })
    .then((obj) => {
      console.log(obj);

      for (let i = 0; i < obj.length; i++) {
        let cardContainer = document.createElement("div");
        cardContainer.className = "flex flex-col items-center justify-between border shadow-md p-2 min-h-[300px]";
        cardContainer.innerHTML = `<img src="${obj[i].img}" alt="booking" class="h-48 w-full object-cover"/>
        <h2 class="text-sm font-bold mt-2">${obj[i].title}</h2>
        <div class="flex mt-2 justify-between w-full">
       <h3 class="text-slate-400">${obj[i].price} $</h3>
       <button class="bg-sky-400 text-white p-2 rounded-md hover:bg-orange-500 active:bg-blue-600">Buy Now</button>
        </div>`;
        main.appendChild(cardContainer);
      }
    })
    .catch(
      (err) =>
        function () {
          console.log("errore generico");
        }
    );
};

loadBooks();
