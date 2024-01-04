import Header from './Header'; // Header 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴

export default function Component() {
    return (
      <>
      <Header></Header>
      <div>
        <h1 className="p-4">A.I 추천 공연!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={400}
            src="./posters/7.jpg"
            width={300}
          />
          <h2 className="text-2xl font-bold">Performance 1</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief introduction to the performance. The performance is about...
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">예매하기</button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={400}
            src="./posters/8.jpg"
            width={300}
          />
          <h2 className="text-2xl font-bold">Performance 2</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief introduction to the performance. The performance is about...
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">예매하기</button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={400}
            src="./posters/9.jpg"
            width={300}
          />
          <h2 className="text-2xl font-bold">Performance 3</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief introduction to the performance. The performance is about...
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">예매하기</button>
        </div>
      </div>
    </div>
    <div>
        <h1 className="p-4">지역 공연 추천</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={400}
            src="./posters/7.jpg"
            width={300}
          />
          <h2 className="text-2xl font-bold">Performance 1</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief introduction to the performance. The performance is about...
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">예매하기</button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={400}
            src="./posters/8.jpg"
            width={300}
          />
          <h2 className="text-2xl font-bold">Performance 2</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief introduction to the performance. The performance is about...
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">예매하기</button>
        </div>
        <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
          <img
            alt="Performance Poster"
            className="aspect-[3/4] object-cover rounded-lg"
            height={400}
            src="./posters/9.jpg"
            width={300}
          />
          <h2 className="text-2xl font-bold">Performance 3</h2>
          <p className="text-gray-500 dark:text-gray-400">
            A brief introduction to the performance. The performance is about...
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">예매하기</button>
        </div>
      </div>
    </div>
    
      <Footer></Footer>
    </>
    )
  }
  
  