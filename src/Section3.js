import blackdot from './img/blackdot.png';
import icon5 from './img/icon5.png';
import icon6 from './img/icon6.png';
import icon7 from './img/icon7.png';

const Section3 = () => {
    return (
        <section>
            <h2 className="section-title">
            <img className="dot" src={blackdot}></img>
                
                الفئة المستهدفة</h2>
            <div className="grid3col grid container">
            <div className="borders">
                <img src={icon5}></img>
                <br/>
                <h3>رواد الأعمال</h3>
            </div>
            <div className="borders">
                <img src={icon6}></img>
                <h3>المنشآت الناشئة</h3>
            </div>
            <div className="borders">
                <img src={icon7}></img>
                <h3>الشركات الصغيرة والمتوسطة</h3>
            </div>
            </div>
        </section>
    );
}

export default Section3;