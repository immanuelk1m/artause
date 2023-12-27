import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useEffect } from "react";
import logoImage from './images/gonbal.png';
import './App.css';
import Header from './Header'; // Header 컴포넌트를 불러옴
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
        <div className='wrapper'>
            
                <Header />

                <main className="container mx-auto my-10 p-4">
                    <section className="text-center mb-10">
                        <h1 className="text-3xl font-bold mb-4">다양한 예술 시장 활성화를 위한 플랫폼, 알터즈!</h1>
                        <img src={logoImage} alt="" width="320" height="120" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                    </section>
                    <section className="text-center mb-10">
                        <p className="mb-6">국내 여러 지역의 공연 추천 AI </p>
                        <p className="mb-8">우리 지역 근처의 값 싼 공연을 추천해드려요.</p>
                        
                        <div className="relative">
                            <Link to="/step"
                                className="relative z-10 inline-flex items-center justify-center w-full px-10 py-3 text-lg font-bold text-white transition-all duration-200 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 no-underline"
                                role="button"
                                style={{ backgroundColor: '#FFA500' }}>
                                공연 추천 시작하기!
                            </Link>
                        </div>
                        <br />
                        <div className="relative">
                            <Link to="/subscribe"  // Update this path as per your routing setup
                                className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 no-underline"
                                role="button">
                                매월 새로운 공연 구독하기!
                            </Link>
                        </div>

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
