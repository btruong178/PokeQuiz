import '../css/Homepage.css'
import pokeball from '../css/images/pokeball-thumbnail.png'
import HrLine from './hr-line'

function Homepage() {
    return (
        <div className='container-fluid full-height'>
            {/* Row 1 */}
            <div className="row text-center">
                <div className="col-md-12 mt-5 d-flex align-items-center justify-content-center">
                    <img src={pokeball} alt="Pokeball" className="pokeball"></img>
                    <h1 className="welcome">Welcome</h1>
                    <img src={pokeball} alt="Pokeball" className="pokeball"></img>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <p className="introduction">
                        PokeQuiz is the collection of all
                        Pokemon related quizzes. Test your knowledge about Pokemon and
                        become the Pokemon Master.
                        Challenge your friends and see who knows the most about the world of Pokemon.
                        Enjoy a variety of quizzes and have fun!
                    </p>
                </div>
                <div className="col-md-12">
                    <HrLine style={{ height: '10px' }} />
                </div>
            </div>
            {/* Row 2 */}
            <div className="row text-center">
                <div className="col-md-12">
                    <h1 className="welcome">How to Play</h1>
                    <HrLine />
                </div>
            </div>
        </div>
    );
}

export default Homepage;