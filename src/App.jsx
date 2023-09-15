import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Content dark={dark} />
    </>
  );
};

export default App;
