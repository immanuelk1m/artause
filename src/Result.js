import Header from './Header'; // Header 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴

export default function Result() {
    return (
      <>
      <Header></Header>
      <div>
        <h1 className="p-12">A.I 추천 공연!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="flex flex-col items-start space-y-4 p-4 rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={500}
            src="./posters/7.jpg"
            width={400}
          />
          <h2 className="text-2xl font-bold">ㅉㅅㅉㅅ 하고 싶은 말이 뭐야?</h2>
          <p className="text-gray-800 dark:text-gray-400">
            서울 시립 공연장
          </p>
          <p className="text-gray-400 dark:text-gray-400">
            2023.12.21 ~ 2023.12.22
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4 p-4 rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={500}
            src="./posters/8.jpg"
            width={400}
          />
          <h2 className="text-2xl font-bold">수녀가 아이를 죽이다</h2>
          <p className="text-gray-800 dark:text-gray-400">
            서울 시립 공연장
          </p>
          <p className="text-gray-400 dark:text-gray-400">
            2023.12.21 ~ 2023.12.22
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4 p-4 rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={500}
            src="./posters/9.jpg"
            width={400}
          />
          <h2 className="text-2xl font-bold">Musical 소믈리에</h2>
          <p className="text-gray-800 dark:text-gray-400">
            서울 시립 공연장
          </p>
          <p className="text-gray-400 dark:text-gray-400">
            2023.12.21 ~ 2023.12.22
          </p>
        </div>
      </div>
    </div>
    <hr class="h-px my-8 bg-gray-800 border-3 dark:bg-gray-600 w-[80%] mx-auto"></hr>


    <div>
        <h1 className="p-12">지역 공연 추천</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="flex flex-col items-start space-y-4 p-4 rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={500}
            src="./posters/7.jpg"
            width={400}
          />
          <h2 className="text-2xl font-bold">Performance 1</h2>
          <p className="text-gray-800 dark:text-gray-400">
            서울 시립 공연장
          </p>
          <p className="text-gray-400 dark:text-gray-400">
            2023.12.21 ~ 2023.12.22
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4 p-4 rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={500}
            src="./posters/8.jpg"
            width={400}
          />
          <h2 className="text-2xl font-bold">Performance 2</h2>
          <p className="text-gray-800 dark:text-gray-400">
            서울 시립 공연장
          </p>
          <p className="text-gray-400 dark:text-gray-400">
            2023.12.21 ~ 2023.12.22
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4 p-4 rounded-lg">
          <img
              alt="Performance Poster"
              className="aspect-[3/4] object-cover rounded-lg"
              height={500}
              src="./posters/9.jpg"
              width={400}
          />
          <h2 className="text-2xl font-bold">Performance 3</h2>
          <p className="text-gray-800 dark:text-gray-400">
            서울 시립 공연장
          </p>
          <p className="text-gray-400 dark:text-gray-400">
            2023.12.21 ~ 2023.12.22
          </p>
      </div>

      </div>
    </div>
    
      <Footer></Footer>
    </>
    )
  }
  
  