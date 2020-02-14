function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName(firstName, lastName) {
    return (firstName + " " + lastName);
};

function makeHalfPrice(price) {
    return (price * 0.5);
};

function countBooks(bookTitles) {
    //bookTitles is the array of the test
    return bookTitles.length;
};

function isInStock(bookTitle) {
    if (bookTitle.quantity > 0)
        return true
}

function isOutOfStock(bookTitle) {
    if (bookTitle.quantity === 0)
        return false
}

function getTotalOrderPrice(price, quantity) {
    getTotalOrderPrice = (price * quantity)
    return (getTotalOrderPrice) + (getTotalOrderPrice * 0.2)

    // note to James: I think I went about this the long way! 
}
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    isOutOfStock,
    getTotalOrderPrice
};