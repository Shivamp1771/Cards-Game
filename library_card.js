class LibraryCard {

    constructor(name) {
        this.cards = document.querySelectorAll(".memory-card");
        this.rotate = false;
        this.lock = false;
        this.firstCard;
        this.secondCard;
    }

    instance() {
        this.cards.forEach((card) => card.addEventListener("click",this.flipCard.bind(this)));
    }

    flipCard(card) {

        if (this.lock) return;
        if (card.currentTarget === this.firstCard) return;

        card.currentTarget.classList.add("flip");

        if (!this.rotate) {

            this.rotate = true; 
            this.firstCard = card.currentTarget;

            return;
        }

        this.secondCard = card.currentTarget;
        this.matchingFunction();
    }

    matchingFunction() {
        let isMatch = this.firstCard.dataset.framework === this.secondCard.dataset.framework;

        isMatch ? this.stopppCards() : this.unflipCards();
    }

    stopppCards() {
    this.firstCard.removeEventListener("click", this.flipCard);
    this.secondCard.removeEventListener("click", this.flipCard);

    this.defaultBoard();
    }

    unflipCards() {
    this.lock = true;

    setTimeout(() => {
        this.firstCard.classList.remove("flip");
        this.secondCard.classList.remove("flip");

        this.defaultBoard();
    }, 2000);
    }

    defaultBoard() {
    [this.rotate, this.lock] = [false, false];
    [this.firstCard, this.secondCard] = [null, null];
    }
}