import { useSearchParams } from "react-router-dom"

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get("mode")) // get(): 쿼리스트링 key의 value값 확인

  return (
    <main className={["MainPage", searchParams.get("mode")].join(" ")}>
      <h1>여기는 홈!</h1>
      <button onClick={() => setSearchParams({ mode: "Dark" })}>다크모드</button>
    </main>
  )
}

export default MainPage
