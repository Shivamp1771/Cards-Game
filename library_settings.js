
class LibrarySettings {

    setName(key, value) {
        sessionStorage.setItem(key, value);
    }

    setNumbCards(key, value) {
        sessionStorage.setItem(key, value);
    }

    getName(key) {
        return sessionStorage.getItem(key)
    }

    reloadPage() {
        location.reload()
    }

}