import blackdot from './img/blackdot.png';
import icon8 from './img/Ministryofhealth.png';
import icon9 from './img/monshaat.png';
import icon10 from './img/kafalah.png';
import icon11 from './img/kku.png';
import icon12 from './img/ssha.png';
import icon13 from './img/scupeer.png';

const Section6 = () => {
    return (
        <section id='bootcampLevels'>

            {/* مراحل المعسكر */}

<h2 className="section-title" >
            <img className="dot" src={blackdot}></img>
              مراحل المعسكر
            </h2>
            <div className="grid2col container section">
                <div className="invisible-borders right-center">

                    <div className='nowrap'>
                    <h1 className="bigger-number">1</h1>
                    <h3>المرحلة الأولى</h3> </div>

                    <ul>

                        <li>-الابتكار التصميمي.</li>
                        <li>-إعداد نموذج العمل.</li>
                        <li>-التأهل للمرحلة الثانية.</li>
                    </ul>
                    
                </div>
                <div className="invisible-borders right-center">
                <div className='nowrap'>
                <h1 className="bigger-number">2</h1>
                    <h3>المرحلة الثانية</h3></div>
                    <ul>
                        <li>-معسكر تدريبي.</li>
                    </ul>
                </div>
                <div className="invisible-borders right-center">
                <div className='nowrap'>
                <h1 className="bigger-number">3</h1>
                    <h3>المرحلة الثالثة</h3></div>
                    <ul>
                        <li>-حفل التخريج.</li>
                    </ul>
                </div>
                <div className="invisible-borders right-center">
                <div className='nowrap'>
                <h1 className="bigger-number">4</h1>
                    <h3>المرحلة الرابعة</h3></div>
                    <ul>
                        <li>-متابعة العمل على <br/> المشاريع.</li>
                    </ul>
                </div>
            </div>
<br></br>
            <div className="btn-outline">
            <button className="btn">للتسجيل بالمعسكر</button>
            </div>



                  {/* الشركاء */}

            <h2 className="section-title">
            <img className="dot" src={blackdot}></img>
            الشركاء
            </h2>
            <br/>
            <div className="logo-section">
                <img className="logos img-fluid" src={icon8}></img>
                <img className="logos img-fluid" src={icon9}></img>
                <img className="logos img-fluid" src={icon10}></img>
                <img className="logos img-fluid" src={icon11}></img>
                <img className="logos img-fluid" src={icon12}></img>
                <img className="logos img-fluid" src={icon13}></img>

            </div>
            <br/>

                <h2 className="section-title">
            <img className="dot" src={blackdot}></img>
            الرعاة
            </h2>
            <div className="grid3col grid container section">
            </div>
        </section>
    );
}

export default Section6;