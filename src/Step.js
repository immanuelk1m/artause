import React, { useState } from 'react';
import './Step.css';
import Header from './Header'; // Footer 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="max-w-xl mx-auto my-4">
      <ol className="flex justify-between items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <li 
              key={index}
              className={`flex flex-col items-center justify-center md:w-1/3 ${isCompleted || isActive ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400'} ${isActive ? 'font-bold' : ''}`}
            >
              <span className={`flex items-center justify-center h-10 w-10 rounded-full ${isCompleted ? 'bg-blue-600 text-white' : 'bg-gray-200'} mb-1`}>
                {isCompleted ? (
                  <span>✔️</span>
                ) : (
                  <span>{index + 1}</span>
                )}
              </span>
              <span className="text-xs sm:text-sm">{step}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};


const OptionButton = ({ label, isSelected, onClick }) => {
  return (
    <button
      style={isSelected ? { backgroundColor: '#FFA500' } : {}}
      className="px-4 py-2 m-1 text-sm font-medium leading-5 text-center transition-colors duration-150 border border-transparent rounded-lg focus:outline-none"
      onClick={onClick}
    >
      {isSelected && <span>✔ </span>} {label}
    </button>
  );
};






const SurveyPage = () => {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const maxImageSelections = 6;

  const regions = ['강원도', '경기도', '전라도', '경상도', '충청도', '제주도'];
  
  const options = ['슬픈', '아이들이랑 보기 좋은', '웃긴', '심호한', '감동적인',
    '로맨틱한', '미스터리한', '역사적인',
    '과학적인', '공포', '액션있는', '음악적인', 
    '교육적인', '역사적인', '스릴 있는', '다큐멘터리', '전통적인'
  ];
  
  const steps = [' 동네 선택', ' 장르 선택', ' 포스터 선택'];
  const images = Array.from({ length: 6 }, (_, i) => `posters/${i + 1}.jpg`);

  const handleRegionClick = (region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(reg => reg !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  const handleOptionClick = (option) => {
    if (currentPage === 2) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(opt => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else if (currentPage === 3) {
      if (selectedImages.includes(option)) {
        setSelectedImages(selectedImages.filter(img => img !== option));
      } else if (selectedImages.length < maxImageSelections) {
        setSelectedImages([...selectedImages, option]);
      }
    }
  };

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
      <div>
      <Header/>
      <div className="container mx-auto mt-5">
        <ProgressBar steps={steps} currentStep={currentPage - 1} />
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card">
              <div className="card-body">
                {currentPage === 1 && (
                  <div className="d-flex flex-wrap justify-content-center">
                    {regions.map((region) => (
                      <OptionButton
                        key={region}
                        label={region}
                        isSelected={selectedRegions.includes(region)}
                        onClick={() => handleRegionClick(region)}
                      />
                    ))}
                  </div>
                )}
                {currentPage === 2 && (
                  <div className="d-flex flex-wrap justify-content-center">
                    {options.map((option) => (
                      <OptionButton
                        key={option}
                        label={option}
                        isSelected={selectedOptions.includes(option)}
                        onClick={() => handleOptionClick(option)}
                      />
                    ))}
                  </div>
                )}
                
                {currentPage === 3 && (
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="col-span-1">
                          <img src={image} alt={`Poster ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg max-width-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center my-3">
              <button className="btn btn-secondary m-2" onClick={goToPreviousPage} disabled={currentPage === 1}>
                &larr;
              </button>
              <span>{`${currentPage}/${totalPages}`}</span>
              <button className="btn btn-secondary m-2" onClick={goToNextPage} disabled={currentPage === totalPages}>
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SurveyPage;
