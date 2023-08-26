// Register input from Add Song search bar and add it to playlist
const addBtn = document.querySelector("input[type=submit]");
const playList = document.querySelector(".playlist");
addBtn.addEventListener('click',addToPlaylist);

//Create function that creates a new list item by dynamically creating it.
function addToPlaylist(e) {
    e.preventDefault()
    const songName = document.querySelector("#song-input").value
    const newSongName = formatInput(songName);
    const newSong = document.createElement("li");
    newSong.classList.add("playlist-item");
    newSong.appendChild(document.createTextNode(newSongName));

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.appendChild(document.createTextNode("delete"));
    newSong.appendChild(deleteBtn);
    playList.appendChild(newSong);
    document.querySelector("#song-input").value = "";
}


//Delete function
playList.addEventListener('click',deleteItem)
function deleteItem(e) {
    if (e.target.classList.contains("delete-button")) {
        const li = e.target.parentElement;
        playList.removeChild(li);
    }
    
    
}

//Filter function

const searchItem = document.querySelector("#search-item")


searchItem.addEventListener('keyup', filterList)

function filterList(e) {
    const input = e.target.value.toLowerCase()
    const songList = document.querySelectorAll(".playlist-item");
    const songArray = Array.from(songList);
    songArray.forEach( (song) => {
        const songText = song.firstChild.textContent.toLowerCase();
        if (songText.includes(input)) {
            song.style.display = "flex";
        } else {
            song.style.display = "none";
        }
    })
}

function formatInput(input) {
    const words = input.split(' ');
    const formattedWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    });

    return formattedWords.join(' ');
}
////////////////////////////////////////////////////////////////////////////////

