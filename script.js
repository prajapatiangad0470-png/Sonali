cat << 'EOF' > script.js
const galleryData = [
    { img: "Sonali1.jpg", shayari: "Teri muskurahat hi meri pehchan hai, Sonali tum me hi basi meri jaan hai. ❤️" },
    { img: "Sonali2.jpg", shayari: "Ishu, tum se shuru aur tum par hi khatam, meri har khushi ka rasta bas tum hi ho." },
    { img: "Sonali3.jpg", shayari: "Chaand se bhi pyaara hai Sonali ka chehra, is dil par bas tumhara hi pehra hai. 💕" },
    { img: "Sonali4.jpg", shayari: "Jab se dekha hai Ishu tumhari aankhon me, hum apna dil wahi bhool aaye hain." },
    { img: "Sonali5.jpg", shayari: "Duniya ki sabse khoobsurat shayari ho tum Sonali, jise hum baar baar padhna chahte hain." },
    { img: "Sonali6.jpg", shayari: "Har dua me tera hi naam aata hai Ishu, tum mil gaye to lagta hai zindagani mil gayi." },
    { img: "Sonali7.jpg", shayari: "Sonali, tumhari ek jhalak hi kaafi hai mera poora din banane ke liye. ✨" },
    { img: "Sonali8.jpg", shayari: "Ishu, dil karta hai bass tumhe dekhta rahu, tum meri zindagi ka sabse pyara khwab ho." },
    { img: "Sonali9.jpg", shayari: "Mohabbat ki har ada tumse seekhi hai Sonali, tum mere dil ki dhadkan ho." },
    { img: "Sonali10.jpg", shayari: "Pyaar to bahut log karte hain Ishu, par mera pyaar tumse beinteha aur sabse juda hai. ❤️" },
    { img: "Sonali11.jpg", shayari: "Sonali, jitni khoobsurat tum ho, utni hi khoobsurat meri duniya tumhare aane se hui hai." },
    { img: "Sonali12.jpg", shayari: "Mere har lamhe me bas tera hi zikr hai Ishu, tum se hi mera har kal hai." },
    { img: "Sonali13.jpg", shayari: "Sonali, tum sirf mera pyaar nahi, mera sab kuch ho. 💞" },
    { img: "Sonali14.jpg", shayari: "Hamesha mere sath rehna Ishu, kyunki tumhare bina ye dil adhura hai. 🔥❤️" }
];

let currentIndex = 0;

function updateSlide() {
    const currentImg = document.getElementById('currentImg');
    const shayariText = document.getElementById('shayariText');
    const photoNumber = document.getElementById('photoNumber');

    currentImg.style.opacity = 0;
    shayariText.style.opacity = 0;

    setTimeout(() => {
        currentImg.src = galleryData[currentIndex].img;
        shayariText.innerText = galleryData[currentIndex].shayari;
        photoNumber.innerText = `${currentIndex + 1} / ${galleryData.length}`;

        currentImg.style.opacity = 1;
        shayariText.style.opacity = 1;
    }, 200);
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= galleryData.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = galleryData.length - 1;
    }
    updateSlide();
}

window.onload = () => {
    updateSlide();
};
EOF
