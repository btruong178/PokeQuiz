import '../css/Homepage.css'
import pokeball from '../css/images/pokeball-thumbnail.png'
import HrLine from './hr-line'

function Homepage() {
    return (
        <div className='container-fluid full-height'>
            {/* Row 1 */}
            <div className="row text-center">
                <div className="col-md-12 mt-3 d-flex align-items-center justify-content-center">
                    <img src={pokeball} alt="Pokeball" className="pokeball"></img>
                    <h1 className="welcome">Welcome</h1>
                    <img src={pokeball} alt="Pokeball" className="pokeball"></img>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <p className="introduction">
                        PokeQuiz is a collection of many
                        Pokemon related quizzes. Test your knowledge about Pokemon and
                        become the Pokemon Master.
                        Challenge your friends and see who knows the most about the world of Pokemon.
                        Enjoy a variety of quizzes and have fun!
                    </p>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
            </div>
            {/* Row 2 */}
            <div className="row text-center">
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <h1 className="welcome">Get Started</h1>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <p className="introduction">
                        Begin by selecting a quiz from the navigation bar located at the top left of the page.
                        The icon with three horizontal lines will open the navigation bar.
                    </p>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
            </div>
            {/* Row 3 */}
            <div className="row text-center">
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <h1 className="welcome">About</h1>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <p className="introduction">
                        PokeQuiz was created by a group of Pokemon
                        enthusiasts who wanted to share their love for Pokemon with others.
                        The website was created using React and Bootstrap.
                    </p>
                </div>
                <div className="col-md-12">
                    <HrLine />
                </div>
            </div>
        </div>
    );
}

export default Homepage;