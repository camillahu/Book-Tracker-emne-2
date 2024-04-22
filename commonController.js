function genreDisplay () {
    return model.data.genres.map(genre => `<option>${genre}</option>`).join('');
}

function ratingDisplay() {
    return model.data.rating.map(rating => `<option>${rating}</option>`).join('');
}