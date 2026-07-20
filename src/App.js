import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sections from './sections/Sections';

const App = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Sections />
      </main>
      <Footer />
    </>
  )
}

export default App;