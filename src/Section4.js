import Timeline from "./Timeline";
import bluedot from './img/bluedot.png';
import circle1 from './img/انطلاقة@8x-8.png';
import circle2 from './img/برنامج-حاضنة@8x-8.png';
import circle3 from './img/الحفل-الختامي@8x-8.png';

const Section4 = () => {
    return (
        <section id="bootcampDates">
                        <div className="section-black">
            <h2>
            <img className="dot" src={bluedot}></img>
                
                مواعيد المعسكر</h2>
            <div className="grid3col grid container section section-black">
                <div className="item section-black-img">
                <img src={circle1}></img>
                    </div>
                <div className="item section-black-img">
                <img src={circle2}></img>

                </div>
                <div className="item section-black-img">
                <img src={circle3}></img>
                </div>
                </div>
            <Timeline/>
            </div>
        </section>
    );
}

export default Section4;