class LibraryScores {

    constructor(name) {
        this.highestScore = 0;
        this.highestScore = sessionStorage.getItem(name) == undefined ? 0 : sessionStorage.getItem(name) 
    }

    
}