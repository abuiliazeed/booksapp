import BookShelf from "./components/BookShelf";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";


function App() {
  return (
    <>
    
    <Header />
    <Search />
    <SearchResult />
    <BookShelf title="Currently Reading" />
    <BookShelf title="Want to Read" />
    <BookShelf title="Read" />

    </>
  );
}

export default App;
