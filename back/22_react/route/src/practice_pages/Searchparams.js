import { useParams, useSearchParams, useNavigate } from "react-router-dom"

const Searchparams = () => {
  const news = useParams()
  let navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(news.new)
  console.log(searchParams.get("name")) // get(): 쿼리스트링 key의 value값 확인

  return (
    <>
      <div className="container">
        <div>
          학생의 이름은 <span>{news.new}</span>입니다.
        </div>
        <div>
          실제 이름은 <span>{searchParams.get("name")}</span>입니다.
        </div>
        <button
          onClick={() => {
            navigate(-1)
          }}
        >
          이전페이지로
        </button>
      </div>
    </>
  )
}

export default Searchparams
