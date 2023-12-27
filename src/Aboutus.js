import { Link } from 'react-router-dom';
import Header from './Header'; // Header 컴포넌트를 불러옴
import Footer from './Footer'; // Footer 컴포넌트를 불러옴

import { CardHeader, CardContent, Card } from "./@/components/ui/card"

export default function Component() {
  return (
    <>
      <Header/>
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <section className="w-full">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Artause</h1>
              <br></br>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                예술을 통한 긍정적인 영향력 다양한 예술시장 활성화를 위한 플랫폼을 꿈꾸다
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">Artuase</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Artist deserves applause
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-bold">공연 발굴단</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    미친듯이 공연들을 발굴해버리는 자체제작 공연추천 A.I.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
