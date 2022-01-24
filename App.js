import FetchUsers from "./FetchUsers.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
      <FetchUsers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
