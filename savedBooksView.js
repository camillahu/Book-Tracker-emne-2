
function savedBooksView() {
    app.innerHTML = /*HTML*/ `
    <div class="SBVContainer">
    ${savedBooksLoop()}
    </div>
    `
}

function savedBooksLoop() {
   html =''
   for(let i=0; i< model.data.savedBooks.length; i++) {
    html += `
    
    <div>${model.data.savedBooks[i].title}</div>
    <div>${model.data.savedBooks[i].author}</div>
    <div> Published: ${model.data.savedBooks[i].publicationYear}</div>
    <div> Genre: ${model.data.savedBooks[i].genre}</div>
    <div>${model.data.savedBooks[i].rating} of 5 stars</div>
    <img src=${model.data.savedBooks[i].picture}> <br>
    <button onclick="editBookView(${i})">Edit</button>
    <button onclick="deleteBook(${i})">Delete</button>
    `
   }
   return html; 
}



