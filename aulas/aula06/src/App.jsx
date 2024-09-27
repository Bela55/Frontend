import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Erro404 from './pages/Erro404';
import Leiaute from './pages/Leiaute';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Leiaute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Route>
        <Route path="*" element={<Erro404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;