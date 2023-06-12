import linkedin from './img/linkedin.png'
import twitter from './img/twitter.png'
import insta from './img/insta.png'
import healthValleyLogo from './img/healthValleyLogo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const bootcampDates = document.getElementById('bootcampDates');
  const howtoreg = document.getElementById('howtoreg');
  const bootcampLevels = document.getElementById('bootcampLevels')

const scrolltobootcampDates =()=> {
  if (bootcampDates != null) 
  bootcampDates.scrollIntoView({ behavior: 'smooth'});
}


const scrolltohowtoreg =()=> {
  if (howtoreg != null)
    howtoreg.scrollIntoView({ behavior: 'smooth'})
}


const scrolltobootcampLevels =()=> {
  if (bootcampLevels != null) 
    bootcampLevels.scrollIntoView({ behavior: 'smooth'})
}




    return (
<footer className="text-center text-lg-start">

  <section>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
<img src={healthValleyLogo} className='logo-size img-fluid'></img>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="mb-4">
            الرئيسية
          </h6>
          <p>
            <Link to="/Register" className="scroll-to">الانضمام للمعسكر</Link>
          </p>
          <p>
            <Link to="/RegisterInvestor" className="scroll-to">الانضمام كمستثمر</Link>
          </p>
          <p>
            <Link to="/RegisterSponser" className="scroll-to">الانضمام كراعي</Link>
          </p>
          <p>
            <Link to="/" className="scroll-to">الانضمام كمرشد</Link>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{ color: 'white'}}>
          <h6 className="mb-4">
            نبذة عن المعسكر
          </h6>
          <p>
            <a onClick={scrolltobootcampDates} className="scroll-to">مواعيد المعسكر</a>
          </p>
          <p>
            <a className="scroll-to" onClick={scrolltohowtoreg}>آلية التقديم</a>
          </p>
          <p>
            <a className="scroll-to" onClick={scrolltobootcampLevels}>مراحل المعسكر</a>
          </p>
          <p>
            <Link to="/Register" className="scroll-to">للتسجيل في المعسكر</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase mb-4">للتواصل معنا</h6>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            support@helth-valley.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i>966558788819+</p>

          <li><div className='sm-icon-center'>
      <a href="">
      <img src={linkedin} className='sm-icon'></img>
      </a>
      <a href="">
      <img src={twitter} className='sm-icon'></img>
      </a>
      <a href="">
        <img src={insta} className='sm-icon'></img>
      </a>
    </div></li>
        </div>
      </div>
    </div>
  </section>
   © جميع الحقوق محفوظة لمعسكر الصحة 2023

</footer>
    );
}

export default Footer;