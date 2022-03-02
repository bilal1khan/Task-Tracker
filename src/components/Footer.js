import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        <Link to="/about" style={{ color: 'green', textDecoration: 'none'}}>About</Link>
    </footer>
  )
}

export default Footer