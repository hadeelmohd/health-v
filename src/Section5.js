import blackdot from './img/blackdot.png';

const Section5 = () => {
    return (
        <section id='howtoreg'>
                        <h2 className="section-title">
            <img className="dot" src={blackdot}></img>
            آلية التقديم
            </h2>
            <div className="grid3col container section">

            <div className="invisible-borders">
                <h1 className="number">01</h1>
                <p>انقر على زر  «التسجيل» الموجود أسفل هذه الصفحة، واحرص على إجابة كافة الأسئلة لنتمكن من التواصل معك.</p>
            </div>

            <div className="invisible-borders">
                <h1 className="number">02</h1>
                <p>إذا كنت من ضمن المرشدين الذين وقع الاختيار عليهم سنقوم بالتواصل معك لإجراء مقابلة.</p>
            </div>
            <div className="invisible-borders">
                <h1 className="number">03</h1>
                <p>عند الانتهاء من جميع المقابلات سنعاود التواصل معك مرة أخرى في حالة تم اختيارك للإنضمام معنا للمعسكر الصحي.</p>
            </div>
            </div>
        </section>
    );
}

export default Section5;