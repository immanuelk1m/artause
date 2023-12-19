export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          내 맞춤 공연 추천 확인하기!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          사는 곳과 취향 A.I. 분석하고 공연을 추천 받자!
        </div>
        <a className="mt-10" href="/user/dashboard">
          <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100">
            추천 공연 확인하기
          </button>
        </a>
      </div>
    </div>
  );
}
