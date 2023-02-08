class LibraryCards {

    constructor () {
        this.cards = document.querySelectorAll(".memory-card");
    }

    shuffling() {
        this.cards.forEach((card) => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
    }

};