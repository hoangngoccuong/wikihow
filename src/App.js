import logo from './logo.svg';
import Header from './component/Header';
import Contenbody from './component/Contenbody';
import Footer from './component/Footer';
import Listconten from './component/Listconten';
import { Routes,Route } from 'react-router-dom';
import '../src/index.css'
import Homepage from './component/Homepage';
function App() {
  return (
    <div className="App">
    <Header />
    {/* <Contenbody /> */}
    <Routes>
      <Route path="/:Idtree" element={<Listconten />} />
      <Route path=":Idtree/:Idintroduction" element ={<Contenbody  />}></Route>
      <Route path='/' element ={<Homepage />}></Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
