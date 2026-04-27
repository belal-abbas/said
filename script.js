// تأثير التمرير الناعم والتوقف قبل العنوان بـ 80 بكسل
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// التعامل مع الفورم ورسالة النجاح
const form = document.getElementById('main-form');
const popup = document.getElementById('success-popup');
const closeBtn = document.querySelector('.close-popup');

if(form) {
    form.addEventListener('submit', function(e) {
        // لو مش بتستخدم Formspree، شيل السطر الجاي ده
        // e.preventDefault(); 
        
        // إظهار البوب آب
        popup.style.display = "block";
        
        // تفريغ الفورم بعد الإرسال
        setTimeout(() => {
            form.reset();
        }, 1000); 
    });
}

// غلق البوب آب عند الضغط على X
if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });
}

// غلق البوب آب عند الضغط خارج المربع الأبيض
window.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
});


// جلب السنة الحالية ووضعها داخل العنصر اللي واخد id="year"
document.getElementById("year").textContent = new Date().getFullYear();

