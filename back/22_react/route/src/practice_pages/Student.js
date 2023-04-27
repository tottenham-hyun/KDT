import { useNavigate } from "react-router-dom"

const Student = (props) => {
  let data = props.sean
  let navigate = useNavigate()
  return (
    <>
      <div className="container">
        <div>
          학생의 이름은 <span>{data}</span>입니다.
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

export default Student
