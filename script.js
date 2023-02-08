function openTabs(evt, tabName) {
  var i, links, tablinks;
  links = document.getElementsByClassName("tabcontent");
  for (i = 0; i < links.length; i++) {
    links[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


$(document).ready(() => {
  const cards = new LibraryCards()
  cards.shuffling()
  const librarySettings = new LibrarySettings()
  const cardClass = new LibraryCard("")

  cardClass.instance()


  $("#save_settings").click(() => {

    const name = $("#player_name").val();
    const cardnum = $("#num_cards").val();

    librarySettings.setName("player_name", name)
    librarySettings.setNumbCards("num_cards", cardnum)
    librarySettings.reloadPage()

  });
  $("#player").text(librarySettings.getName("player_name") == undefined ? "Player : Please Enter your name": "Player : " + sessionStorage.player_name);
});
