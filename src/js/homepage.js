import '../css/Homepage.css'
import { Link } from 'react-router-dom';
function Homepage() {
    return (
        <div className='black-box d-flex flex-column justify-content-center align-items-center'>
            <h1>Homepage</h1>
            <p>This is the homepage.</p>
            <Link to='/About'>Go to the about page</Link>
            <Link to='/AnimatedComponent'>Go to the animated component</Link>
            <Link to='/SmoothScrollComponent'>Go to the smooth scrolling component</Link>
        </div>
    );
}

export default Homepage;