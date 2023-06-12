import blackdot from './img/blackdot.png';
import img2 from './img/img2.png';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';

const Section2 = () => {
    return (
        <section>
            <h2 className="section-title">
                <img className="dot" src={blackdot}></img>
                رؤية المعسكر</h2>

            <div className="about-grid section">
                <div className="img-item"><img src={img2} className="img-fluid"></img></div>
                <div className="item-1">
                    <h4>
                        <img className="md-icons" src={icon1}></img>
                    صحة أفضل
                    </h4>
                </div>
                <div className="item-2">
                    <h4>
                    <img className="md-icons" src={icon2}></img>

                    رعاية أفضل
                    </h4>
                    </div>
                <div className="item-3">
                    <h4>
                    <img className="md-icons" src={icon3}></img>
                    استدامة أفضل
                    </h4>
                    </div>
                <div className="item-4">
                    <h4>
                    <img className="md-icons" src={icon4}></img>
                    قوى عاملة أفضل
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default Section2;