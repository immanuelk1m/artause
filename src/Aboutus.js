import { Link } from 'react-router-dom';
import Header from './Header'; // Header 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴

import aboutImage1 from './images/aboutus/1.jpg';
import aboutImage2 from './images/aboutus/2.jpg';
import aboutImage3 from './images/aboutus/3.jpg';
import aboutImage4 from './images/aboutus/step.jpg';
import aboutImage5 from './images/aboutus/4.jpg';
import aboutImage6 from './images/aboutus/5.jpg';
import aboutImage7 from './images/aboutus/6.jpg';

const aboutImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4, aboutImage5, aboutImage6, , aboutImage7];

export default function Aboutus() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <section className="w-full">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-9xl">Artause</h1>
              <br />
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                예술을 통한 긍정적인 영향력 다양한 예술시장 활성화를 위한 플랫폼을 꿈꾸다
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:gap-12 lg:max-w-5xl">
              {aboutImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`About Us Image ${index + 1}`}
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
