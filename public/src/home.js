function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let total = books.reduce((total, book) => {
    //use .some to check if any return status is false
    let isBookCheckedOut = book.borrows.some((borrow) => {
        return borrow.returned === false /// returning value
    });
    if (isBookCheckedOut) { ///referencing value in if statement
      // saying if the function returns true...
        total++; ///adding to count if 
    }

    //reduce function has to return something to add to the total
    return total;
}, 0);

return total;
}

function getMostCommonGenresHelper(books) {
  let genre = {}
  books.forEach((book) => {
    let bookGenre = book.genre
    if(bookGenre in genre) {
      genre[bookGenre] += 1 
    }else{
      genre[bookGenre] = 1
    }
  })
  return genre
}

function getMostCommonGenres(books = []) {
  let genre = getMostCommonGenresHelper(books)
  let genreArr = Object.keys(genre)
  let result = genreArr.map((genreString) => {
    return {name: genreString, count: genre[genreString]}
  })
  result.sort((a,b) => (a.count < b.count ? 1 : -1))
  result = result.slice(0,5)
 return result
  }

function getMostPopularBooks(books) {
  books.sort((bookA, bookB) => {
    return bookB.borrows.length - bookA.borrows.length
  })
  let result = books.slice(0,5).map((book) => {
    return {name : book.title, count: book.borrows.length}
  })
  return result
}

function getMostPopularAuthors(books, authors) {
  let mostPopBooks = books.sort((bookA, bookB) => {
    return bookB.borrows.length - bookA.borrows.length
  })
  let topFive = mostPopBooks.slice(0,5)
  let result = topFive.map((book) => {
    let numAccounts = book.borrows.length
    let {authorId} = book
    let foundAuthor = authors.find((author) =>{
      return author.id === authorId
    })
    let fullName = foundAuthor.name.first + " " + foundAuthor.name.last 
    return {name: fullName, count: numAccounts}
  })
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
