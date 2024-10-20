import '../css/Homepage.css'
import { Link } from 'react-router-dom';
function Homepage() {
    return (
        <div className='full-height'>
            <div className="row">
                <div className="col-md-2 text-center bg-black">
                    <h1>My React App</h1>
                </div>
                <div className="col-md-2 text-center">
                    <h1>Homepage</h1>
                    <p>This is the homepage.</p>
                    <Link to='/About'>Go to the about page</Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;