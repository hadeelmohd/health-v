import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegisterInvestor = () => {

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

            <header className="ri-header">
            <Navbar/>
            <h1>الانضمام كمستثمر</h1>
            </header>

            <form ref={form} onSubmit={sendEmail}>
                <label for="name">الاسم الثلاثي :<br/>
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

                <label for="city">حسابك على تويتر :<br/>
            <input
                    id="city"
                    placeholder=""
                    type="city"
                    name="city"
                    required
                /></label>

                <label for="gender">هل سبق لكم الاستثمار في احد الشركات الناشئة :<br/>
            <input
                    id="gender"
                    placeholder=""
                    type="gender"
                    name="gender"
                    required
                /></label>

                <label for="workNature">ماهو متوسط مبلغ الاستثمار للمشاريع السابقة :<br/>
            <input
                    id="workNature"
                    placeholder=""
                    type="workNature"
                    name="workNature"
                    required
                /></label>

                <label for="projectStatus">ماهو متوسط مبلغ الاستثمار للمشاريع الحالية :<br/>
            <input
                    id="projectStatus"
                    placeholder=""
                    type="projectStatus"
                    name="projectStatus"
                    required
                /></label> 

                <label for="projectDescription">كم عدد الاستثمارات التي قمتم بها خلال العامين الماضية:<br/>
            <input
                    id="projectDescription"
                    placeholder=""
                    type="projectDescription"
                    name="projectDescription"
                    required
                /></label>

                <label for="foundingYear">ما المشاريع التي تفضل الاستثمار فيها :<br/>
            <input
                    id="foundingYear"
                    placeholder=""
                    type="foundingYear"
                    name="foundingYear"
                    required
                /></label>

            <input className='btn' type="submit" value="سجل الان" />
            </form>

            <Footer/>

        </section>
    );
}
export default RegisterInvestor;