// ======CHANGE NAVBAR Background====== //
window.addEventListener('scroll', function (e) {
    document.querySelector('nav').classList.toggle('window_scroll', (window.scrollY > 0));
});


// =============FAQs section============== //
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', function (e) {
        const answer = faq.children[1].children[1].style;

        if (answer.display === 'none' || answer.display === '')
            answer.display = 'block'
        else
            answer.display = 'none';

        if (this.children[0].children[0].classList.contains('uil-plus')) {
            this.children[0].children[0].classList.remove('uil-plus');
            this.children[0].children[0].classList.add('uil-minus');
        } else {
            this.children[0].children[0].classList.remove('uil-minus');
            this.children[0].children[0].classList.add('uil-plus');
        }

    });
});


// /* === === CATEGORIES SECTION === ===  */ //
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#menu_btn');
const closeBtn = document.querySelector('#close_btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
});


closeBtn.addEventListener('click', function () {
    menu.style.display = 'none'
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

// /* === === CATEGORIES SECTION === ===  */ //
const four50 = document.querySelector('#four50');
const seven9 = document.querySelector('#seven9');
const two6 = document.querySelector('#two6');
let i = 0, j = 0, k = 0;

function _four50() {
    if (i <= 45) {
        four50.innerHTML = i * 10;
        i++;
        const x = setTimeout(_four50, 10);
    } else {
        four50.innerHTML += '+';
    }
}

function _seven9() {
    if (j <= 79) {
        seven9.innerHTML = j * 1000;
        j++;
        const y = setTimeout(_seven9, .5);
    } else {
        seven9.innerHTML += '+';
    }
}

function _two6() {
    if (k < 26) {
        two6.innerHTML = k + 1;
        k++;
        const two6y = setTimeout(_two6, 10);
    } else {
        two6.innerHTML += '+';
    }
}

window.onload = function () {
    setTimeout(_four50, 10);
    setTimeout(_seven9, 1);
    setTimeout(_two6, 10);
}