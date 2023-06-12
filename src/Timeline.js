import timeline from './img/timeline.png'
import bluedot from './img/bluedot.png';

const Timeline = () => {
    return (
        <div className="section">
            <h2>
            <img className="dot" src={bluedot}></img>
                
                الجدول الزمني</h2>
            <div>
                <div className="timeline"><img src={timeline} className='img-fluid'></img></div>
            </div>
        </div>
    );
}

export default Timeline;