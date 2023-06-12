import Header from "./Header";
import ImgGallery from "./ImgGallery";
import img1 from './img/img1.jpg';
import blackdot from './img/blackdot.png';
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";

const Home =() => {
      
    return (
        <div>
            <Header/>
            <h2 className="eliminate-margin-top section-title">
            <img className="dot" src={blackdot}></img>
                نبذة عن المعسكر</h2>
            <div className="grid2col grid container">
            <div className="item"><img src={img1} className="img-fluid"></img></div>
            <div className="item"><p>معسكر وادي الصحة هو معسكر دعم شامل لرواد الاعمال في مجال الصحة، حيث يتم تزويدهم بالمرشدين والخبراء وورش العمل العملية التي تساعدهم على تحسين مشاريعهم، يوفر المعسكر مساحة محفزة للعمل الجماعي و يساعد على تقييم الأفكار المبتكرة و تحويلها إلى نماذج تجارية مستدامة، وذلك بالتعاون مع المستثمرين والجهات التمويلية المناسبة في نهاية فترة الاحتضان.</p></div>
            </div>
            <br/>
            <Section2/>
            <br/>
            <Section3/>
            <br/>
            <Section4/>
            <br/>
            <Section5/>
            <br/>
            <Section6/>
            <br/>
            <ImgGallery/>
            <br/>
            <h2 className="section-title">
            <img className="dot" src={blackdot}></img>
            الأسئلة الشائعة
            </h2>
            <br/>
            <Footer/>

        </div>
    );
}
export default Home;