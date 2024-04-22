editBookView();

function editBookView(index) {
    index=0;
    app.innerHTML= /*HTML*/ 
    `<div>${model.data.savedBooks[index].title} → 
    <input type=text onchange="getEditedBookData(this.value, 'title', ${index})"></div>

    <div>${model.data.savedBooks[index].author} → 
    <input type=text onchange="getEditedBookData(this.value, 'author', ${index})"></div>

    <div> Published: ${model.data.savedBooks[index].publicationYear} → 
    <input type=text onchange="getEditedBookData(this.value, 'publicationYear', ${index})"></div>

    <div> Genre: ${model.data.savedBooks[index].genre} → 
    <select id="genreSelect" onchange="getEditedBookData(this.value, 'genre', ${index})">${genreDisplay()}<select></div>

    <div>Stars: ${model.data.savedBooks[index].rating} → 
    <select id="starsSelect" onchange="getEditedBookData(this.value, 'rating', ${index})">${ratingDisplay()}<select><br></div>

    <img src=${model.data.savedBooks[index].picture}> <br>`
    console.log(index)
}