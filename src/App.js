import BookShelf from "./components/BookShelf";
import Header from "./components/Header";
import ShelfChanger from "./components/ShelfChanger";


function App() {
  return (
    <>
    <Header />
    <BookShelf title="Currently Reading" />
    <BookShelf title="Want to Read" />
    <BookShelf title="Read" />

    </>
  );
}

export default App;
