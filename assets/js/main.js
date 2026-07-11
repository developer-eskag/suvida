document.addEventListener("DOMContentLoaded", function () {
    /* Nav */
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.menu-overlay');

    if(menuToggle){
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
        });
        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    /* Sticky Header */
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 80){
            header.classList.add('scrolled');
        }else{
            header.classList.remove('scrolled');
        }
    });

    /* HERO TEXT TYPING */
    const phrases = [
        "Trusted by Millions",
        "Empowering Womanhood",
        "Affordable with Efficacy",
        "Best OCP in India"
    ];

    const typingElement = document.getElementById('hero-typing');

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect(){

        const currentPhrase = phrases[phraseIndex];
        if(!isDeleting){

            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if(charIndex === currentPhrase.length){

                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }
        }else{

            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if(charIndex === 0){

                isDeleting = false;
                phraseIndex++;

                if(phraseIndex >= phrases.length){
                    phraseIndex = 0;
                }
            }
        }
        setTimeout(
            typeEffect,
            isDeleting ? 50 : 100
        );
    }
    if(typingElement){
        typeEffect();
    }

    /*=========================================
    REUSABLE VIDEO MODAL
    =========================================*/

    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubeVideo");
    const closeBtn = document.getElementById("closeVideo");

    /* Every element with data-video opens the modal */

    document.querySelectorAll("[data-video]").forEach(trigger => {

        trigger.addEventListener("click", function(e){

            e.preventDefault();

            iframe.src = this.dataset.video;

            modal.classList.add("active");

        });

    });

    /* Close */

    closeBtn.addEventListener("click", closeVideo);

    modal.addEventListener("click", function(e){

        if(e.target === modal){

            closeVideo();

        }

    });

    document.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            closeVideo();

        }

    });

    function closeVideo(){

        modal.classList.remove("active");

        iframe.src = "";

    }

    /*=========================================
        HEALTH BENEFITS
    =========================================*/
    const benefitItems = document.querySelectorAll(".benefit-item");
    benefitItems.forEach(item => {
        item.querySelector(".benefit-header").addEventListener("click",()=>{
            benefitItems.forEach(i=>{
                if(i!==item){
                    i.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });

    /*=========================================
        WOMEN'S HEALTHCARE PRODUCTS
    =========================================*/

    const products = [
    {
        name: "Suvida",
        subtitle: "Daily Oral Contraceptive Pill",
        image: "assets/images/suvida.png",
        description:
        "Suvida is a trusted combined oral contraceptive pill designed to provide safe, reliable and affordable family planning support. Its simple 28-day regimen helps women confidently manage their reproductive health.",

        therapy: "Family Planning",
        dosage: "Tablet",
        pack: "28 Tablets",
        division: "Eskag Pharma",

        composition: [
            "Levonorgestrel IP 0.15 mg",
            "Ethinylestradiol IP 0.03 mg",
            "Ferrous Fumarate IP 75 mg"
        ],

        link: "#"
    },

    {
        name: "Mukty",
        subtitle: "Medical Termination Kit",
        image: "assets/images/mukty.png",

        description:
        "Mukty Kit is a combipack containing Mifepristone and Misoprostol tablets intended for medical termination of pregnancy under appropriate medical supervision.",

        therapy: "Gynecology",
        dosage: "Tablet",
        pack: "1 Kit",
        division: "Eskag Pharma",

        composition: [
            "Mifepristone Tablets IP 200 mg",
            "Misoprostol Tablets IP 200 mcg (4 Tablets)"
        ],

        link: "https://www.eskag.in/gynaecology/mukty/"
    },

    {
        name: "Aparajita Kit",
        subtitle: "Emergency Obstetric Care",
        image: "assets/images/aparajita.png",

        description:
        "Aparajita Kit is designed to support emergency obstetric care with a carefully selected combination of medicines for clinical use.",

        therapy: "Gynecology",
        dosage: "Kit",
        pack: "1 Kit",
        division: "Eskag Pharma",

        composition: [
            "Combination Therapy",
            "Emergency Obstetric Care Kit"
        ],

        link: "https://www.eskag.in/gynaecology/aparajita-kit/"
    },

    {
        name: "Suvida 72",
        subtitle: "Emergency Contraceptive Pill",
        image: "assets/images/suvida72.png",

        description:
        "Suvida 72 is an emergency contraceptive pill intended to help prevent unintended pregnancy when taken within the recommended time after unprotected intercourse.",

        therapy: "Emergency Contraception",
        dosage: "Tablet",
        pack: "1 Tablet",
        division: "Eskag Pharma",

        composition: [
            "Levonorgestrel IP 1.5 mg"
        ],

        link: "https://www.suvida.in/womens-health-care/suvida-72/"
    }];


    /*=========================================
        ELEMENTS
    =========================================*/

    const productImage = document.getElementById("productImage");
    const productTitle = document.getElementById("productTitle");
    const productSubtitle = document.getElementById("productSubtitle");
    const productDescription = document.getElementById("productDescription");
    const therapy = document.getElementById("therapy");
    const dosage = document.getElementById("dosage");
    const pack = document.getElementById("pack");
    const division = document.getElementById("division");
    const composition = document.getElementById("composition");
    const learnMore = document.getElementById("learnMore");
    const navButtons = document.querySelectorAll(".product-nav button");

    /*=========================================
        SETTINGS
    =========================================*/
    let currentIndex = 0;
    let autoSlide;

    /*=========================================
        UPDATE PRODUCT
    =========================================*/

    function showProduct(index){
        const product = products[index];
        productImage.style.opacity = 0;
        productImage.style.transform = "translateY(15px) scale(.96)";
        setTimeout(()=>{
            productImage.src = product.image;
            productImage.alt = product.name;
            productTitle.textContent = product.name;
            productSubtitle.textContent = product.subtitle;
            productDescription.textContent = product.description;
            therapy.textContent = product.therapy;
            dosage.textContent = product.dosage;
            pack.textContent = product.pack;
            division.textContent = product.division;
            learnMore.href = product.link;
            composition.innerHTML = "";
            product.composition.forEach(item=>{
                composition.innerHTML += `<li>${item}</li>`;

            });
            productImage.style.opacity = 1;
            productImage.style.transform = "translateY(0) scale(1)";
        },220);
        navButtons.forEach(btn=>btn.classList.remove("active"));
        navButtons[index].classList.add("active");
        currentIndex = index;
    }


    /*=========================================
        AUTO ROTATE
    =========================================*/

    function startAutoSlide(){
        autoSlide = setInterval(()=>{
            currentIndex++;
            if(currentIndex >= products.length){
                currentIndex = 0;
            }
            showProduct(currentIndex);
        },6000);
    }


    /*=========================================
        RESET TIMER
    =========================================*/

    function resetAutoSlide(){
        clearInterval(autoSlide);
        startAutoSlide();
    }


    /*=========================================
        BUTTON EVENTS
    =========================================*/

    navButtons.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            showProduct(index);
            resetAutoSlide();
        });
    });


    /*=========================================
        INITIAL LOAD
    =========================================*/
    showProduct(0);
    startAutoSlide();

});