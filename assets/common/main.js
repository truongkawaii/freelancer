const menu = {
    init: function() {
        this.clickShowmenu(".humberger", '.header__menu', "showmenu");
    },
    clickShowmenu: function(btn, menu, showmenu) {
        const buttonClick = document.querySelector(btn);
        let navMenu = document.querySelector(menu);

        buttonClick.addEventListener('click', () => {
            navMenu.classList.toggle(showmenu);
        });

    }
}

const navMenu = {
    init: function() {
        this.clickMenu('.menu--item #click1', '#services');
        this.clickMenu('.menu--item #click2', '#protfolio');
        this.clickMenu('.menu--item #click3', '#about');
        this.clickMenu('.menu--item #click4', '#team');
        this.clickMenu('.menu--item #click5', '#contact');
        this.bgmenu('.header', 'menu--black');
    },
    clickMenu: function(navItem, divSelectorId) {
        // get height  id Div 
        let heightSelect = document.querySelector(divSelectorId).offsetTop;
        // get click navItem
        let navClick = document.querySelector(navItem);
        navClick.addEventListener('click', () => {
            // get height of Menu
            let heightMenu = document.querySelector('.header').offsetHeight;
            // scroll window to Div - menu height
            window.scrollTo(0, heightSelect - heightMenu);
        });
    },
    bgmenu: function(header, bgStyle) {

        let nav = document.querySelector(header);
        let heightMenu = document.querySelector(header).offsetHeight;
        window.addEventListener('scroll', () => {
            let ScrollWindow = window.pageYOffset;
            if (ScrollWindow > (heightMenu / 2)) {
                nav.classList.add(bgStyle);
            } else nav.classList.remove(bgStyle);
        });
    }
}
const webModal = {
    init: function() {
        this.clickShowModal('.protfolio__overlay', '.wrapperOverlay', ' .wrapperOverlay .modal__content .modal__button a', '.wrapperOverlay .modal', '.wrapper');
    },
    clickShowModal: function(btnOpen, wrapperOverlay, buttonCloses, contents, wrapperWeb) {
        let btns = document.querySelectorAll(btnOpen);
        let overlay = document.querySelector(wrapperOverlay);
        let btnCloses = document.querySelectorAll(buttonCloses);
        let items = document.querySelectorAll(contents)
        let wrapper = document.querySelector(wrapperWeb);
        btns.forEach((btn, index) =>
            btn.addEventListener('click', () => {
                wrapper.classList.add('wrapper2');
                overlay.classList.add('activeOverlay');
                items[index].classList.add('active');
            })
        );
        btnCloses.forEach((btnclose, index) =>
            btnclose.addEventListener('click', () => {
                wrapper.classList.remove('wrapper2');
                overlay.classList.remove('activeOverlay');
                items[index].classList.remove('active');
            })
        );



    }
}
navMenu.init();
webModal.init();
menu.init();