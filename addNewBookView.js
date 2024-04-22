const app = document.getElementById('app');

function updateNewBookView(){
    app.innerHTML = /*HTML*/ `
    <div class="NBVInputContainer">
    <input type="text" placeholder="Title" onchange="getNewBookInput(this.value, 'title')"> <br>
    <input type="text" placeholder="Author" onchange="getNewBookInput(this.value, 'author')"> <br>
    
    <input type="text" placeholder="Publication year" onchange="getNewBookInput(this.value, 'publicationYear')"> <br>
    <label for="genreSelect">Genre: </label> 
    <select id="genreSelect" onchange="getNewBookInput(this.value, 'genre')">${genreDisplay()}<select><br>
    
    <label for="starsSelect">Stars: </label> 
    <select id="starsSelect" onchange="getNewBookInput(this.value, 'rating')">${ratingDisplay()}<select><br>
    
    <button class="NBVSaveBtn" onclick="pushNewBook()">Save book</button>
    </div>
    `
}
