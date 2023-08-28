const submit = document.querySelector("button[type=submit]");
submit.addEventListener('click', sortItems);

function sortItems(e) {
    e.preventDefault();
    const selection = e.target.previousElementSibling.value;
    const albums = document.querySelectorAll(".album");
    const albumArray = Array.from(albums);
    const changeBg = document.querySelector("body");
    if (selection === "option1") {
       albumArray[0].style.cssText = "order: 13";
       albumArray[1].style.cssText = "order: 12";
       albumArray[2].style.cssText = "order: 11";
       albumArray[3].style.cssText = "order: 9";
       albumArray[4].style.cssText = "order: 10";
       albumArray[5].style.cssText = "order: 5"
       albumArray[6].style.cssText = "order: 2";
       albumArray[7].style.cssText = "order: 6";
       albumArray[8].style.cssText = "order: 4";
       albumArray[9].style.cssText = "order: 1";
       albumArray[10].style.cssText = "order: 8";
       albumArray[11].style.cssText = "order: 3";
       albumArray[12].style.cssText = "order: 7";

       changeBg.style.cssText = "background: linear-gradient(0deg, rgba(14,17,13,1) 0%, rgba(59,73,2,1) 0%, rgba(0,0,0,1) 100%)";



    } else if (selection === "option2") {
        let i = 0;
  albumArray.forEach((album) => {
    album.style.cssText = `order: ${i}`;
    i++;
  });
  changeBg.style.cssText = "background: linear-gradient(0deg, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 61%)";

    } else if (selection === "option3") {
        albumArray[0].style.cssText = "order: 13";
        albumArray[1].style.cssText = "order: 4";
        albumArray[2].style.cssText = "order: 7";
        albumArray[3].style.cssText = "order: 6";
        albumArray[4].style.cssText = "order: 8";
        albumArray[5].style.cssText = "order: 5"
        albumArray[6].style.cssText = "order: 2";
        albumArray[7].style.cssText = "order: 3";
        albumArray[8].style.cssText = "order: 1";
        albumArray[9].style.cssText = "order: 9";
        albumArray[10].style.cssText = "order: 12";
        albumArray[11].style.cssText = "order: 10";
        albumArray[12].style.cssText = "order: 11";
        changeBg.style.cssText = "background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(99,99,99,1) 100%)";
    }
   
}

//Loop through each album, and on click pop up the pop up.
const albumContainers = document.querySelectorAll(".album");
const albumContainerArray = Array.from(albumContainers);

albumContainerArray.forEach((album) => {
  album.onclick = () => {
    const myImg = album.querySelector("img");
    const myText = album.querySelector("p").textContent;
    document.querySelector(".popup-container").style.display = "flex";
    document.querySelector(".one img").src = myImg.getAttribute('src');
    document.querySelector(".text p").textContent = myText;
  };
});

document.querySelector(".one span").onclick = () => {
  document.querySelector(".popup-container").style.display = "none";
}




albumContainerArray.forEach(album => {
  const link = album.querySelector("a");
  link.addEventListener("click", (e) => e.preventDefault() )
});

