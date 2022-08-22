import { Link } from "react-router-dom";
import './/Intro.css'


const Intro = () => {
    
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title"> Welcome to Vikram's Playlist</h3>
                    <div className="card-text">
                        <Link to="/Player" className="btn"> Can't wait </Link>
                    </div>   
                </div>
            </div>
        </div>
    )
};

export default Intro;