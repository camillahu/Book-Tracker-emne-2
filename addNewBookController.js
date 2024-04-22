
// function getTitleInput(title) {
//     model.input.newBook.title = title;
// }
// function getAuthorInput(author) {
//     model.input.newBook.author = author;
// }
// function getPublicationYearInput(publicationYear) {
//     model.input.newBook.publicationYear = publicationYear;
// }
// function getGenreInput(genre) {
//     model.input.newBook.genre = genre;
// }
// function getRatingInput(rating) {
//     model.input.newBook.rating = rating;
// }

function getNewBookInput(value, property) {
    model.input.newBook[property] = value;
}

function pushNewBook() {
    const newBook = {
            id: model.data.savedBooks.length,
            title: model.input.newBook.title,
            author: model.input.newBook.author,
            publicationYear: model.input.newBook.publicationYear,
            genre: model.input.newBook.genre,
            rating: model.input.newBook.rating,

    }
    if(Object.values(newBook).includes('')) {
        alert('Please fill in all the required info before saving book.')
    } else {
        model.data.savedBooks.push(newBook);
    updateNewBookView();
    }
    
}