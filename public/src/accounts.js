function findAccountById(accounts, id) {
  let result = accounts.find((account)=>{
return account.id === id
})
return result
}

// parks.sort((parkA, parkB) =>
//   parkA.name.toLowerCase() > parkB.name.toLowerCase() ? 1 : -1
// );

function sortAccountsByLastName(accounts) {
let result = accounts.sort((accountA, accountB) =>{
  return accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase()? -1: 1
})
return result
}



function getTotalNumberOfBorrows(account, books) {
 const {id} = account  //destructure account to id
 let total = books.reduce((total, book) =>{ /// ???? .reduce
  let borrowed = book.borrows.some((borrowsObj) => { ///creat borrow var from borrows array 
    return borrowsObj.id === id ///compare book.borrows.id to account.id 
  })
  if (borrowed){ //if borrowed returns a truthy output
    total++ // increase total count by 1
  }
  return total
 },0) ///???? extra parameter
 return total
}

// function getBooksPossessedByAccount(account, books, authors) {
//   let result = [];
//   let borrowMatch = [];
//   books.forEach((item) => {
//   const borrowed = item.borrows;
//   const book = {
//     id: item.id,
//     title: item.title,
//     genre: item.genre,
//     authorId: item.authorId,
//     author: {},
//     borrows: {},
//   };
//   const { id, title, genre, authorId, author, borrows } = book;
  
//   borrowed.forEach((borrow) => {
//     if (borrow.id === account.id && borrow.returned === false) {
//       result.push(book);
//       book.borrows = borrowMatch;
//       book.author = authors.filter((auth) => auth.id === book.authorId)[0];
//     }
//   });
//   });
//   return result;
// }

function getBooksPossessedByAccount(account, books, authors){
  let result = [];
  let borrowMatch = [];
  books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {},
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
      result.push(book);
      book.borrows = borrowMatch;
      book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    }
  });
  });
  return result;
}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
