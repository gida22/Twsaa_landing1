let currentLang = 'ar';

function toggleLang() {
    const langBtn = document.querySelector('.lang-btn');
    const formTitle = document.querySelector('.form-title');
    const formSubtitle = document.querySelector('.form-subtitle');
    const inputs = document.querySelectorAll('form input');
    const submitBtn = document.querySelector('.submit-btn');

    if (currentLang === 'ar') {
        currentLang = 'en';
        document.documentElement.lang = 'en';
        document.body.dir = 'ltr';

        langBtn.textContent = 'AR';
        formTitle.textContent = 'Register with us in the E-commerce Initiative';
        formSubtitle.textContent = 'This initiative aims to support freelance document holders by providing free online stores for a limited period, in addition to training courses to help you develop your skills in e-commerce and manage your online store professionally.';
        inputs[0].placeholder = 'Name';
        inputs[1].placeholder = 'Mobile Number';
        inputs[2].placeholder = 'Email';
        inputs[3].placeholder = 'Freelance Document Number';
        submitBtn.textContent = 'Register';
    } else {
        currentLang = 'ar';
        document.documentElement.lang = 'ar';
        document.body.dir = 'rtl';

        langBtn.textContent = 'EN';
        formTitle.textContent = 'سجل معنا في مبادرة التجارة الإلكترونية';
        formSubtitle.textContent = 'تهدف هذه المبادرة إلى دعم حاملي وثيقة العمل الحر من خلال تقديم متاجر إلكترونية مجانية لفترة محددة بالإضافة إلى دورات تدريبية تساعدك على تطوير مهاراتك في التجارة الإلكترونية وإدارة متجرك باحترافية';
        inputs[0].placeholder = 'الاسم';
        inputs[1].placeholder = 'رقم الجوال';
        inputs[2].placeholder = 'البريد الإلكتروني';
        inputs[3].placeholder = 'رقم وثيقة العمل الحر';
        submitBtn.textContent = 'تسجيل';
    }
}
