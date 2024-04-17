import React from 'react';
import Header from './header';
import Footer from './footer';

const LayoutInit = ({ children }) => {
    return (
      <div className="">
        <div className="">
          <div className="">
            
            <Header/>
  
            <section className="">
              <div className="">
                {children}
              </div>
            </section>
  
            <Footer/>
  
          </div>
        </div>
      </div>
    );
  };
  

export default LayoutInit;
