import { Link } from 'react-router-dom'; // Import Link
import Header from './Header'; // Header 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴

export default function Component() {
  return (
    <>
    <Header/>
    <div className="flex flex-col min-h-screen bg-gray-0 dark:bg-gray-800">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-start justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">수녀가 아이를 죽이다</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-6xl">
              <div className="grid gap-1">
                <img
                  alt="Performance Poster"
                  className="aspect-[4/6] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                  height={500}
                  src="./posters/8.jpg"
                  width={480}
                />
              </div>
              <div className="grid gap-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  러닝 타임 : 7:00 PM - 9:30 PM | 2시간 30분
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  공연 위치 : 서울 시립 공연장
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  출연진 : 김민수 이철수 박민지
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    관람 연령 : 만 7세 이상
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    가격 : 전석 20,000원	
                </p>

                <Link to="#" className="inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center">
                    예매하기
                </Link>

              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  )
}

