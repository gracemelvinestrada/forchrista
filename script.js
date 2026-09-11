const popup = document.getElementById("questionPopup");

const popupNumber = document.getElementById("popupNumber");

const popupTitle = document.getElementById("popupTitle");

const popupAnswer = document.getElementById("popupAnswer");


const answers = {

    1: {
        number: "01",
        title: "KEHADIRAN CHRISTA",
        answer: "mungkin momen ini bukan apa-apa, but… when christa invited me as part of her monologue team (for the 2nd time) i was so glad. honestly, it was not about the experience or something, but… untuk menjauh dari lingkungan toxic… bahkan di saat itu beberapa orang berkata kurang lebih begini, “gausah dibantuin lagi si christa pas fls2n, dapet apa sih kamu vin?” puji Tuhan aku tidak terlalu mendengarkan mereka, meskipun akan selalu kuingat. semenjak aku & christa berbeda kelas, aku BINGUNG PARAH tentang pergaulanku, ternyata banyak banget orang-orang ‘fake’ yang telat banget aku sadarin & itu sangat mempengaruhi hidupku, aku menjadi toxic, menjadi seorang pembenci tanpa alasan & aku menyesalinya. di sini christa memang tidak secara langsung membantuku (karena sepertinya aku tidak pernah menceritakannya, hehe) tapi kehadiran christa di sini sangat membantuku tanpa dia sadari. bagaimana christa merespons sesuatu sangat memotivasi ku untuk menjadi pribadi yang lebih positif. energi positifnya tidak dapat menipu apapun yang orang katakan tentangnya. begitulah cerita tentang kehadirannya di hidupku."
    },

    2: {
        number: "02",
        title: "KEBIASAAN KECIL CHRISTA",
        answer: "tentang kebiasaan kecil christa… lupa-lupa ingat sih, tapi… the way she decided to keep quiet when i was mad or badmood is helping me so much HAHAHA, jujur recall2 kejadian di masa lalu bikin malu ya nginget kelakuan sendiri yang childish ini WKWK. idk but, in that time i think christa yang paling ngerti how was my feeling & i’m sooo glad! she really knows how to treats person well & somehow christa sangat peka terhadap keadaan sekitarnya, she’s the best!"
    },

    3: {
        number: "03",
        title: "LET ME TELL YOU ABOUT CHRISTA",
        answer: "don’t you know christa? you should know about her! christa itu orang gila yang pernah aku kenal. gila? yes. dia orang yang gak kenal lelah… she has tried soo much things in her life no matter how her situation that time. dia orang paling positif yang pernah ku kenal sejauh ini, dia gak pernah kepikiran mikirin cowok, dia gak pernah kepikiran buat ngomongin orang lebih dulu, dan… DIA GAK PERNAH MENYERAH. that’s it. aku sendiri aja kagum ngeliat dia terus berjuang dalam hidupnya. di tengah badai dia tetep teguh cuy, memang HEBAT. kalo diliat dari depan rasanya gak ada kata gagal di dalam hidup christa, padahal… itu karena dia selalu bisa mengubah kegagalan itu menjadi suatu hal yang lebih dahsyat. memang sih, dibalik itu semua, dia juga punya Tuhan yang hebat, tapi gila nya lagi… dia selalu ingat Tuhan & gak pernah ninggalin Tuhan. gak tau lagi deh, intinya kalo nanti ketemu yang namanya christa & dia workholic, ya itu lah orang yang ku maksud."
    },

    4: {
        number: "04",
        title: "ONE MEMORIE",
        answer: "kenangan yang akan kusimpan selamanya sih… di saat kita hangout di kenep alias rumah ku HAHAHA. i know ini hanya kenangan kecil, tapi nyatanya itu lah yang paling seru! ga perlu mikir outfit, jajan di BM, lanjut ngemil di rumah sambil cerita, wah… gak pernah ada yang bisa ngalahin sih! bangganya lagi, christa ini nggak sungkan kalo mau ambil snack di rumah ku WKWK memang mantap lahhh!!!"
    },

    5: {
        number: "05",
        title: "MESSAGE FOR CHRISTA",
        answer: "pesan yang belum sempat aku sampaikan ke christa selama ini adalah… MAAF… maaf ya christa, aku belum bisa jadi teman yang benar-benar baik buat kamu. aku sadar aku bukan orang yang peka, aku orang yang keras kepala, gengsi, mudah terprovokasi, mudah tersinggung, yaa begitulah. selama ini aku ngerasa gak pernah minta maaf sama christa, padahal kamu udah banyak membantuku huhuhu. and ofc TERIMA KASIH BANYAK YA CHRISTA! terima kasih udah mau jadi temanku selama ini. AKU BANGGA BANGET SAMA KAMU. i know you will always, but i also wanna say DON’T GIVE UP! no matter what people say, tetapi banyak orang yang sayang sama kamu, banyak orang yang menunggu kesuksesanmu:) satu pesan terakhir, ayo kita sukses bersama dan ceritakan semua dibalik kesuksesan itu kala nanti, ya! I LOVE YOU! SEE YOU ON TOP!!!"
    }

};


function openQuestion(number) {

    const question = answers[number];

    popupNumber.textContent = question.number;

    popupTitle.textContent = question.title;

    popupAnswer.textContent = question.answer;

    popup.classList.add("active");

    document.body.classList.add("popup-open");

}


function closeQuestion() {

    popup.classList.remove("active");

    document.body.classList.remove("popup-open");

}


/* Klik area luar popup untuk menutup */

popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        closeQuestion();

    }

});


/* Tombol ESC juga bisa menutup */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeQuestion();

    }

});


/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".reveal, .question-card, .memory-photo, .final-message"
    )
    .forEach((element) => {

        observer.observe(element);

    });


/* ========================= */
/* SCROLL PROGRESS */
/* ========================= */

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);


window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ========================= */
/* FLOATING HEARTS */
/* ========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent = Math.random() > 0.5
        ? "♡"
        : "✦";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (10 + Math.random() * 10) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


/* Muncul sesekali */

setInterval(() => {

    if (Math.random() > 0.35) {

        createHeart();

    }

}, 2500);

/* ========================= */
/* SCRAPBOOK PARALLAX */
/* ========================= */

const parallaxPhotos =
    document.querySelectorAll(".memory-photo");


function updateParallax() {

    const windowHeight = window.innerHeight;

    parallaxPhotos.forEach((photo) => {

        const rect = photo.getBoundingClientRect();

        const speed =
            parseFloat(photo.dataset.speed) || 0.1;

        /*
         * Posisi tengah foto terhadap
         * tengah layar
         */

        const center =
            rect.top + rect.height / 2;

        const distance =
            center - windowHeight / 2;


        /*
         * Gerakan vertikal kecil
         */

        const movement =
            distance * speed * -0.12;


        /*
         * Pertahankan rotasi asli
         */

        if (photo.classList.contains("photo-one")) {

            photo.style.transform =
                `translateY(${movement}px) rotate(-5deg)`;

        } else if (
            photo.classList.contains("photo-two")
        ) {

            photo.style.transform =
                `translateY(${movement}px) rotate(4deg)`;

        } else {

            photo.style.transform =
                `translateY(${movement}px)`;

        }

    });

}


window.addEventListener(
    "scroll",
    updateParallax,
    { passive: true }
);


updateParallax();