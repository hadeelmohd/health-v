import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3pe2hyl', 'template_rjjpr4i', form.current , 'wh-qraS49GfIr61JV')
        .then((result) => {
            alert("تم التقديم بنجاح");
        }, (error) => {
            alert("حدث خطأ! الرجاء التقديم مرة اخرى لاحقاً");
        });
    }

    return (
        <section>
            <header className="r-header">
            <Navbar/>
            <h1>الانضمام للمعسكر</h1>
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
                    placeholder=''
                    type="tel"
                    name="phoneNumber"
                    required
                /></label>

                <label for="city">المدينة :<br/>
            <input
                    id="city"
                    placeholder=''
                    type="text"
                    name="city"
                    required
                /></label>

                <label for="gender">الجنـس :<br/>
            <select
                    id="gender"
                    placeholder=''
                    type="text"
                    name="gender"
                    required
                >
                    <option value="انثى">انثى</option>
                    <option value="ذكر">ذكر</option>
                </select></label>

                <label for="workNature">طبيعة العمل :<br/>
            <input
                    id="workNature"
                    placeholder=''
                    type="workNature"
                    name="workNature"
                    required
                /></label>

                <label for="projectStatus">حالة المشروع :<br/>
            <input
                    id="projectStatus"
                    placeholder=''
                    type="projectStatus"
                    name="projectStatus"
                    required
                /></label> 

                <label for="projectDescription">وصف المشروع :<br/>
            <input
                    id="projectDescription"
                    placeholder=''
                    type="projectDescription"
                    name="projectDescription"
                    required
                /></label>

                <label for="foundingYear">سنة التأسيس :<br/>
            <input
                    id="foundingYear"
                    placeholder=''
                    type="date"
                    name="foundingYear"
                    required
                /></label>

                <label for="experience">في حال وجود خبرة سابقة يرجى تسجيلها :<br/>
            <input
                    id="experience"
                    placeholder=''
                    type="experience"
                    name="experience"
                /></label>

                <label for="stateCompetitors">من هم المنافسين و ماذا يميزك عنهم :<br/>
            <input
                    id="stateCompetitors"
                    placeholder=''
                    type="stateCompetitors"
                    name="stateCompetitors"
                    required
                /></label>

                <label for="projectIncome">مصادر دخل المشروع :<br/>
            <input
                    id="projectIncome"
                    placeholder=''
                    type="projectIncome"
                    name="projectIncome"
                    required
                /></label>

                <label for="projectWebsite">رابط الموقع الالكتروني او حسابات المشروع :<br/>
            <input
                    id="projectWebsite"
                    placeholder=''
                    type="projectWebsite"
                    name="projectWebsite"
                    required
                /></label>

                <label for="role">ماهو دورك في المشروع و ماهي خبراتك :<br/>
            <input
                    id="role"
                    placeholder=''
                    type="role"
                    name="role"
                    required
                /></label>

                <label for="workTeam">هل لديك فريق عمل :<br/>
            <select
                    id="workTeam"
                    placeholder=''
                    type="workTeam"
                    name="workTeam"
                    required
                >
                    <option value="نعم">نعم</option>
                    <option value="لا">لا</option>
                </select></label>

                <label for="projectFinance">هل انت مهتم بتمويل مشروعك :<br/>
            <input
                    id="projectFinance"
                    placeholder=''
                    type="projectFinance"
                    name="projectFinance"
                    required
                /></label> 

                <label for="projectField">مجال المشروع :<br/>
            <input
                    id="projectField"
                    placeholder=""
                    type="projectField"
                    name="projectField"
                    required
                /></label>
                <label for="powerPoint">العرض التقديمي للمشروع (إن وجد) :<br/>
            <input
                    id="powerPoint"
                    placeholder=''
                    type="file"
                    name="powerPoint"
                /></label>
            <input className='btn' type="submit" value="سجل الان" />
            </form>

            <Footer/>

        </section>
    );
}
export default Register;