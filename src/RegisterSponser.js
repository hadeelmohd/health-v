import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegisterSponser = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3pe2hyl', 'template_rjjpr4i', form.current , 'wh-qraS49GfIr61JV')
        .then((result) => {
            alert("تم التقديم بنجاح");
        }, (error) => {
            return alert("حدث خطأ! الرجاء التقديم مرة اخرى لاحقاً");
        });
    }

    return (
        <section>

            <header className="rs-header">
            <Navbar/>
            <h1>الانضمام كراعي</h1>
            </header>

            <form ref={form} onSubmit={sendEmail}>
                <label for="name">اسم الشركة او المؤسسة :<br/>
            <input
                    id="name"
                    placeholder=""
                    type="text"
                    name="name"
                    required
                /></label>
                
                <label for="name">اسم المسؤول :<br/>
            <input
                    id="name"
                    placeholder=""
                    type="text"
                    name="name"
                    required
                /></label>

                <label for="email">البريد الالكتروني :<br/>
            <input
                    id="email"
                    placeholder=""
                    type="email"
                    name="email"
                    required
                /></label>
                <label for="phoneNumber">رقم الجوال :<br/>
            <input
                    id="phoneNumber"
                    placeholder=""
                    type="phoneNumber"
                    name="phoneNumber"
                    required
                /></label>
                <label for="region">المنطقة :<br/>
            <input
                    id="region"
                    placeholder=""
                    type="region"
                    name="region"
                    required
                /></label>

                <label for="city">المدينة :<br/>
            <input
                    id="city"
                    placeholder=""
                    type="city"
                    name="city"
                    required
                /></label>

                <label for="workNature">مجال الشركة :<br/>
            <input
                    id="workNature"
                    placeholder=""
                    type="workNature"
                    name="workNature"
                    required
                /></label>

                <label for="projectStatus">نوع الرعاية :<br/>
            <input
                    id="projectStatus"
                    placeholder=""
                    type="projectStatus"
                    name="projectStatus"
                    required
                /></label> 

                <label for="projectDescription">الموقع الالكتروني للشركة :<br/>
            <input
                    id="projectDescription"
                    placeholder=""
                    type="projectDescription"
                    name="projectDescription"
                    required
                /></label>

            <input className='btn' type="submit" value="سجل الان" />
            </form>

            <Footer/>
            
        </section>
    );
}
export default RegisterSponser;