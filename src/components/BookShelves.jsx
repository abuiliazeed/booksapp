import React from 'react'
import Header from './Header.jsx'
import BookShelf from './BookShelf.jsx'
import {Route} from 'react-router-dom'
import SearchPage from './SearchPage.jsx'



function BookShelves() {
  return (
    <>
    <Header />
    <BookShelf title="Currently Reading" />
    <BookShelf title="Want to Read" />
    <BookShelf title="Read" />
    </>
    
  )
}

export default BookShelves