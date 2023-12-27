import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-white text-black p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-xs"> {/* text-xs makes the text smaller */}
          
          <div className="mb-4 w-full md:w-1/2"> 
            <p className="font-bold">Artist deserves applause!</p>
            <br></br>
            <p>알터즈 대표: 김광현</p>
            <p>TEL : 010-7917-6936</p>
            <p>E-mail : artause23@gmail.com</p>
          </div>
          
          <div className="mb-4 w-full md:w-1/2">
            <p></p>
            <p>위치 : 경상북도 포항시 북구 한동로558 한동대학교 창업보육센터 학생 창업 공간(2)</p>

          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
