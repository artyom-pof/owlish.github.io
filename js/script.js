window.onload = () => {
    // local storage init
    LocalStorageInit();
    
    // notify
    const notify = document.querySelector('.notify');
    
    if (!JSON.parse(localStorage.getItem('notify')).notify) {
        setTimeout(() => {
            notify.classList.add('active');
            localStorage.notify = JSON.stringify({ "notify": true });
        }, 25000);
    };

    // local storage init FUNCTION INIT
    function LocalStorageInit() {
        if (!localStorage.getItem('notify')) {
            localStorage.setItem('notify', JSON.stringify({ "notify": false }));
        }
    };

    // burger
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })
};  