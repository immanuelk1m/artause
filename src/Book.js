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
                  Duration: 2 hours 30 minutes (with intermission)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Theater Location: Majestic Theatre, 245 West 44th Street, New York
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cast: John Doe, Jane Doe, Richard Roe, Jane Roe
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Running Time: 7:00 PM - 9:30 PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Age Availability: Suitable for ages 8 and up</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Price: $50 - $150</p>
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

