function getEditedBookData(newValue, property, index) {
    model.input.editBook[property] = newValue;
    model.input.editBook.id = index.valueAsNumber;
}

function editBookData() {
    let id = model.data.savedBooks[model.input.editBook.id]
    
    model.data.savedBooks[id].title = model.input.editBook.title
    model.data.savedBooks[id].author = model.input.editBook.author
    model.data.savedBooks[id].publicationYear = model.input.editBook.publicationYear
    model.data.savedBooks[id].genre = model.input.editBook.genre
    model.data.savedBooks[id].rating = model.input.editBook.rating


}

// neste: sjekk om det funker
// koble editBookData til knapp
// passe på at hvis verdien ikke blir endret i getEditedBookData, 
//      så forblir verdien den samme. 