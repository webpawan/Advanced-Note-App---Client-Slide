import React from 'react'
import Header from '../../components/Header';
import CreateNote from '../../components/CreateNote';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <div className="main ">
        <div className="row">
          <div className="content mainBody mx-auto">
            <Header />
            <CreateNote />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home