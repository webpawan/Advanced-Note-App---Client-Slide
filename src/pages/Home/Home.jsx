import React from 'react'
import Header from '../../components/Header';
import CreateNote from '../../components/CreateNote';

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="content  mx-auto">
            <Header />
            <CreateNote />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home