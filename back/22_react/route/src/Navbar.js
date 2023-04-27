import { Link } from "react-router-dom"

const style = { margin: "4px" }

const Navbar = () => {
  return (
    <>
      <header className="header">
        <h2>ReactRouter 실습</h2>
        <nav>
          <ul>
            <li style={style}>
              <Link to="/student/sean">학생</Link>
            </li>

            <li style={style}>
              <Link to="/student/codingon">코딩온</Link>
            </li>

            <li style={style}>
              <Link to="/student/new?name=jisu">searchParams</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
