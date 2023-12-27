import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useEffect } from "react";
import logoImage from './images/gonbal.png';
import './App.css';
import Header from './Header'; // Footer 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

function App() {
    useEffect(() => {
        const roller = document.getElementById('roller1');
        const clone = roller.cloneNode(true);
        clone.id = 'roller2';
        document.querySelector('.wrap').appendChild(clone);

        roller.classList.add('original');
        clone.classList.add('clone');
    }, []);
    
    const imageNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div>
            <Header />

            <main className="container mx-auto my-10 p-4">
                <section className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">다양한 예술 시장 활성화를 위한 플랫폼, 알터즈!</h1>
                    <img src={logoImage} alt="" width="320" height="120" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />

                    <p className="mb-6">국내 여러 지역의 공연 추천 AI </p>
                    <p className="mb-8">우리 지역 근처의 값 싼 공연을 추천해드려요.</p>
                    <Link to="/step" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">시작하기</Link> {/* Link to Step.js */}
                </section>
            </main>
            <div className="wrap">
            <div className="rolling-list" id="roller1">
            <ul>
                    {imageNumbers.map(num => (
                        <li key={num}>
                            <div className="image-wrap">
                                <img src={`posters/${num}.jpg`} alt={`Slide ${num}`}  width='240px'/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer />
        </div>
        
    );
}

export default App;
