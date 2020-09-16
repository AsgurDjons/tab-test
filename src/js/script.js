window.addEventListener('DOMContentLoaded', () => {
    
    // Tabs
    const contents = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelector('.tabheader__items'),
        items = document.querySelectorAll('.tabheader__item'),
        wrapper = document.querySelector('.wrapper');


    function hideContent () {
        contents.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        items.forEach(item => {
            item.classList.remove('tabheader__item_show');
            item.classList.add('tabheader__item_hide');
        });
    }

    function showContent (i = 0) {
        contents[i].classList.remove('hide');
        contents[i].classList.add('show', 'fade');
        items[i].classList.add('tabheader__item_show');
        items[i].classList.remove('tabheader__item_hide');
    }
    hideContent ();
    showContent ();

    tabs.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            items.forEach((item, i) => {
                if (item == target) {
                    hideContent ();
                    showContent (i);
                }
            });
        }
    });
});