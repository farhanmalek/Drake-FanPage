const album = document.querySelectorAll(".album");
albumArray = Array.from(album);

albumArray.forEach((album) => {
    album.addEventListener('click', displayAlbum)
})

function displayAlbum(e) {
    const allOtherItems = document.querySelectorAll('.album:not(.clicked)');

    const allOtherItemsArray = Array.from(allOtherItems);
    console.log(allOtherItemsArray);

    allOtherItemsArray.forEach((album) => 
    album.style.cssText = "display:none")

    const selectedItem = e.target;
    selectedItem.classList.add("display-item");
}