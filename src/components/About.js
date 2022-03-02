import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>Build By Mohammad Bilal Khan</h4>
        <h5>React Version 17.0.2</h5>
        <Link to="/" style={{ color: 'green', textDecoration: 'none'}}>Go Back</Link>
    </div>
  )
}

export default About