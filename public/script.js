let bookLink = "https://striveschool-api.herokuapp.com/books";

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
    })
    .catch(
      (err) =>
        function () {
          console.log("errore generico");
        }
    );
};

loadBooks();
