let bookLink = "https://striveschool-api.herokuapp.com/books";
let main = document.querySelector("main");
let cartPrice = document.getElementById("cart-price");

let totalPrice = parseFloat(localStorage.getItem("prezzo")) || 0;
cartPrice.innerText = totalPrice.toFixed(2);

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
        cardContainer.className = "flex flex-col items-center justify-between border shadow-md p-2";
        cardContainer.innerHTML = `<img src="${obj[i].img}" alt="booking" class="h-full w-full"/>
        <h2 class="text-center font-bold mt-2" style="text-align: center">${obj[i].title}</h2>
        <div class="flex mt-2 justify-between w-full">
       <h3 class="text-slate-400 price">${obj[i].price} $</h3>
       <div class="cursor-pointer delete-button" style="color:red">X</div>
       <button class="bg-sky-400 text-white p-2 rounded-md hover:bg-orange-500 active:bg-blue-600">Buy Now</button>
        </div>`;
        main.appendChild(cardContainer);

        cardContainer.querySelector(".delete-button").addEventListener("click", function () {
          cardContainer.remove();
        });

        cardContainer.querySelector("button").addEventListener("click", function () {
          let priceElement = cardContainer.querySelector(".price");
          let priceText = priceElement.innerText;
          let priceValue = parseFloat(priceText.replace(" $", ""));

          totalPrice += priceValue;

          localStorage.setItem("prezzo", totalPrice);

          cartPrice.innerText = totalPrice.toFixed(2);
        });
      }
    })
    .catch((err) => {
      console.log("errore generico");
    });
};

loadBooks();
