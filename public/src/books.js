function findAuthorById(authors, id) {
  let result = authors.find((authors)=>{
    return authors.id === id
    })
    return result
}

function findBookById(books, id) {
  let found = books.find((book) => {
    if (book.id === id) {
      return book;
    }
  });
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => {
    ///declaring borrowed var as books array is filtered
    let borrowers = book.borrows; ///destructuring borrows into roster var
    let isNotReturned = borrowers.some((book) => {
      /// loop thru every book
      return book.returned === false; /// checks if books return status is false
    });
    return isNotReturned;
  });

  let returned = books.filter((book) => {
    let borrowers = book.borrows;
    let isReturned = borrowers.every((book) => {
      return book.returned === true;
    });
    return isReturned;
  });
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) { ///book is object taken from books array??? books.book...???
  return book.borrows // accessing borrows from books array
  .map((borrow) => { /// applying .map method to book.borrows
    let account = accounts.find((account) => account.id === borrow.id) ///within the .map use .find on a different array !!!!!!!!
    return {...borrow, ...account }  ///returning all of book.borrows and accounts...
    })
    .slice(0,10) ///only returns indexes 0 thru 9
  }
//   let borrowers = book.filter(obj => {
//     if(obj.id === accounts.id){
//       accounts.map(account => {
//         return account
//       })
//     }
//   })
//   return borrowers
// }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
