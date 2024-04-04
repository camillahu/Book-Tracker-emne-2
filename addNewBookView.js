const app = document.getElementById('app');

updateNewBookView();
function updateNewBookView(){
    app.innerHTML = /*HTML*/ `
    <div class="NBVInputContainer">
    <input type="text" placeholder="Title" onchange="getTitleInput(this.value)"> <br>
    <input type="text" placeholder="Author" onchange="getAuthorInput(this.value)"> <br>
    
    <input type="text" placeholder="Publication year" onchange="getPublicationYearInput(this.value)"> <br>
    <label for="genreSelect">Genre: </label> 
    <select id="genreSelect" onchange="getGenreInput(this.value)">${genreDisplay()}<select><br>
    
    <label for="starsSelect">Stars: </label> 
    <select id="starsSelect" onchange="getRatingInput(this.value)">${ratingDisplay()}<select><br>
    
    <button class="NBVSaveBtn" onclick="pushNewBook()">Save book</button>
    </div>
    `
}
function genreDisplay () {
    return model.data.genres.map(genre => `<option>${genre}</option>`).join('');
}

function ratingDisplay() {
    return model.data.rating.map(rating => `<option>${rating}</option>`).join('');
}