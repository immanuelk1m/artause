import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useEffect } from "react";
import logoImage from './images/gonbal.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

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
            <header className="brand-color text-white py-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span className="font-weight-bold h5 mb-0">Artause</span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto my-10 p-4">
                <section className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">다양한 예술 시장 활성화를 위한 플랫폼, 알터즈!</h1>
                    <img src={logoImage} alt="" width="320" height="120" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />

                    <p className="mb-6">국내 여러 지역의 공연 추천 AI </p>
                    <p className="mb-8">우리 지역 근처의 값 싼 공연을 추천해드려요.</p>
                    <Link to="/step" className="btn button-purple my-2">시작하기</Link> {/* Link to Step.js */}
                    <button className="btn btn-outline-secondary my-2">더 알아보기</button>
                </section>
            </main>
            <div className="wrap">
            <div className="rolling-list" id="roller1">
            <ul>
                    {imageNumbers.map(num => (
                        <li key={num}>
                            <div className="image-wrap">
                                <img src={`posters/${num}.jpg`} alt={`Slide ${num}`} height='300px'/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    );
}

export default App;
