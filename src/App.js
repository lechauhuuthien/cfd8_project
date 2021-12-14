import './App.css';
import "./assets/styles/style.scss";
import DropdownMenu from './components/DropdownMenu';
import Footer from './components/Footer';
import Header from './components/Header';
import InformationBar from './components/InformationBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <InformationBar />
      <Header />
      <DropdownMenu />

      {/* Body */}
      <Home />
      {/* <CategoryPage /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
