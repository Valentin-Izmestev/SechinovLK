@@include('jquery-1.12.1.js');
@@include('flatpickr.js');
@@include('choices.min.js');
@@include('jquery.maskedinput.js');

$(function(){
    let $eventBtn = $('.events');
    let $notificationTab = $('.notification-tab');
    
    function showNotificationWindow(elem) {
        elem.addClass('events--active');
        $notificationTab.slideDown(100);
    }
    
    function hideNotificationWindow(elem) {
        elem.removeClass('events--active');
        $notificationTab.slideUp(100);
    }
    
    if($eventBtn){
    $eventBtn.on('click', function () {
        if ($(this).hasClass('events--active')) {
            hideNotificationWindow($(this));
        } else {
            showNotificationWindow($(this));
        }
    });
    }
    // notification-tab код работы таба в окне уведомлений
    let $notificationControlBtn = $('.notification-tab__control .btn');
    let $notificationTabField = $('.notification-tab__field');
    if($notificationControlBtn){
       $notificationControlBtn.on('click', function () {
           if (!$(this).hasClass('active')) {
               $notificationControlBtn.removeClass('active');
               $(this).addClass('active');
               $notificationTabField.hide();
               $notificationTabField.eq($(this).index()).show();
           }
       });
    }


    // обрабатываю все клики в документе.
    $(document).on('click', function (e) {
    
        //если клик вне окна уведомлений, то скрываю коно уведомлений.
        if ($eventBtn.hasClass('events--active')) {
            if (!$eventBtn.is(e.target) && $eventBtn.has(e.target).length === 0 && !$notificationTab.is(e.target) && $notificationTab.has(e.target).length === 0) {
                hideNotificationWindow($eventBtn);
            }
        } 
    });
    
    
    let tabControlItems = $('.great-tab__control-elem');
    let tabDisplayItems = $('.great-tab__display-elem');
    if(tabControlItems){
        tabControlItems.on('click', function(){
            tabControlItems.removeClass('active');
            $(this).addClass('active');
            tabDisplayItems.hide();
            tabDisplayItems.eq($(this).index()).show();
        })
    }
    // Подключаю маски для полей ввода
 
        // $("#date").mask("99/99/9999");
        $(".tel").mask("+7 (999) 999-99-99"); 
        $(".snils").mask("999-999-999 99");  
});

let greatShadow = document.querySelector('.great-shadow');
let burgerBtn = document.querySelector('.btn-burger');
let mainMenuBox = document.querySelector('.main-menu-box');

// если нет меню, то бургер кнопка удаляется.
if(!mainMenuBox && burgerBtn){
    burgerBtn.remove();
}
 
// показ и скрытие мобильного меню.
function toggleMenu(){
    burgerBtn.classList.toggle('btn-burger--active');
    mainMenuBox.classList.toggle('main-menu-box--show');
    greatShadow.classList.toggle('great-shadow--show');
}
if(burgerBtn){
    burgerBtn.addEventListener('click', toggleMenu);
    greatShadow.addEventListener('click', toggleMenu);
}

// показ и скрытие пароля
let passEye = document.querySelectorAll('.form-elem--password svg');
if(passEye){
    passEye.forEach(svgItem=>{
        svgItem.addEventListener('click', function(e){
            let container = this.parentElement;
            let passInput = container.firstElementChild;
            if(passInput.getAttribute('type') === 'password'){
                passInput.setAttribute('type', 'text');
            }else{
                passInput.setAttribute('type', 'password');
            }
            container.classList.toggle('form-elem--password-show');  
        });
    });
}

// если у ссылки стоит класс указывающий что она не активна, то кодом ниже отключаю возможность срабатывания перехода при клике на эту  ссылку.
let allLinls = document.querySelectorAll('a');
allLinls.forEach(link=>{
    link.addEventListener('click', function(e){ 
        if(this.classList.contains('disabled')){
            e.preventDefault(); 
        }
    });
});

// подключаю плагин календарь
let arInputDateElem = document.querySelectorAll('.flatpickr'); 
if(arInputDateElem.length > 0){
    arInputDateElem.forEach(item=>{
        flatpickr(item, {
            enableTime: false,
            dateFormat: 'd.m.Y',
            time_24hr: true
        });
    })
    
}

// подключаю плагин селект
let arFormCategory = []; 
let formCategorySelects = document.querySelectorAll('.form__category-select'); 
if(formCategorySelects.length > 0){
    formCategorySelects.forEach(select=>{
        arFormCategory.push(new Choices(select,{ 
            noResultsText: 'Значение не найдено',
            loadingText: 'Загрузка...',  
            // placeholder: false, 
            placeholder: true,
            placeholderValue: '', 
            searchPlaceholderValue: 'Введите искомое значение', 
            searchEnabled: false, 
        })); 
        let thisSelect = select.parentElement.parentElement;
        
        select.addEventListener('change', function(){
            if(this.value != ''){
                this.closest('.form-elem').classList.add('form-elem--active'); 
            } 
        });
        
    });
} 


// Код работы большого таба с формой - НАЧАЛО
 
let arStatusItems = document.querySelectorAll('.status-list__item'); //массив со статус элементами (из левого сайдбара)
let arContainers = document.querySelectorAll('.form-questionnaire__item'); //массив с контейнерами 
let arrAllInput = document.querySelectorAll('.form-elem__input--validation'); //массив с элементами формы обязательными к заполнению

/**
 * функция плавного показа элемента - аналог fadeIn() из jQuery
 * @param {object} elem - элемент DOM с которым будут проводится манипуляции
 */
 function fadeIn(elem) {
	var opacity = 0.01;
	elem.style.display = "block";
  
	var timer = setInterval(function() {
		if(opacity >= 1) {
			clearInterval(timer);
		}
		elem.style.opacity = opacity;
		opacity += opacity * 0.2;
	}, 1)
	
}
/**
 * функция плавного показа элемента - аналог fadeOut() из jQuery
 * @param {object} elem - элемент DOM с которым будут проводится манипуляции
 */
function fadeOut(elem) { 
	var opacity = 1; 
	var timer = setInterval(function() {
		if(opacity <= 0.1) {
			clearInterval(timer);
			elem.style.display = "none";
		} 
		elem.style.opacity = opacity; 
		opacity -= opacity * 0.1; 
	}, 1); 
}

/**Функция проверки на заполнненость полей страницы таба
 * @param {object} elem - елемент input 
 * возвращает массив с id контейнера и статусом его заполненности.
 */
function checkingFullnessContainerFields(elem){ 
    let container = elem.closest('.form-questionnaire__item');
    let containerInputs = container.querySelectorAll('.form-elem__input');
    let fullesFlag = true; 
    containerInputs.forEach(input=>{
        if(!input.value){
            fullesFlag = false;
        } 
    });
    let arAnswer = [container.getAttribute('id'), fullesFlag]; 
    return arAnswer; 
}
/**
 * Функция по введенным параметрам активирует кнопки перехода (или кнопку отправки данных формы), а так же пункты в статус списке в левом сайтбаре
 *  @param {array} arr-  массив возвращаемый функцией checkingFullnessContainerFields 
 */
function toggleActiveTabElements(arr){
    let currentBtnNext = document.querySelector('#' + arr[0] + ' .btn-next');
    let condition = document.querySelector('#' + arr[0] + ' .form-questionnaire__condition');
 
    if(arr[1]){  
        arStatusItems.forEach(item=>{ 
            if(item.getAttribute('href') == '#' + arr[0]){ 
               let currentStatusItem =  item.querySelector('.status-marker');
               if(!currentStatusItem.classList.contains('status-marker--filled')){
                    currentStatusItem.classList.add('status-marker--filled');
               }
            } 
        }); 

        if(currentBtnNext.tagName === 'A'){
            currentBtnNext.classList.remove('disabled'); // активирую кнопку-ссылку
        }else{
            currentBtnNext.removeAttribute('disabled') //активирую кнопку
        }
        
        if(condition){
            condition.classList.add('form-questionnaire__condition--hide'); //убираю предупреждение под кнопкой ссылкой
        }
        
    }else{
        arStatusItems.forEach(item=>{
            if(item.getAttribute('href') == '#' + arr[0]){
                let currentStatusItem =  item.querySelector('.status-marker');
                if(currentStatusItem.classList.contains('status-marker--filled')){
                    currentStatusItem.classList.remove('status-marker--filled');
               }
            }
        });
        // console.log(currentBtnNext)
         if(currentBtnNext.tagName === 'A'){
            currentBtnNext.classList.add('disabled'); // активирую кнопку-ссылку
        }else{
            currentBtnNext.setAttribute('disabled', 'disabled') //активирую кнопку
        }

        if(condition){
            condition.classList.remove('form-questionnaire__condition--hide');
        } 
    } 
}
 /**
  * функция перехода по табу
  * @param {string} idContainer -  это id контейнера, он же href  в кнопках ссылках
  */
  function toggleShowContainer(idContainer){

    arStatusItems.forEach(item=>{
        item.classList.remove('current-item')
    });
    let currentStatusItem = document.querySelector('.status-list__item[href="'+idContainer+'"]');

    currentStatusItem.classList.add('current-item')
    currentStatusItem.classList.remove('disabled');

    let container = document.querySelector(idContainer); 
    arContainers.forEach(item=>{
        item.style.display = 'none'; 
    });
    fadeIn(container); 
} 

// навешиваю на все input обязательыне к заполнению событие проверки их заполненности
if(arrAllInput){
    arrAllInput.forEach(input=>{
        input.addEventListener('change', function(){  
            toggleActiveTabElements(checkingFullnessContainerFields(this));
        })
    });
} 

// обработка кликов по элементам статус бара в левом сайтбаре
arStatusItems.forEach(item=>{
    item.addEventListener('click', function(e){ 
        e.preventDefault();
        if(!this.classList.contains('disabled')){
            toggleShowContainer(this.getAttribute('href'));
        }
    })
});

//обработка кликов по кнопкам пеерхода по контейнерам таба
let arTabBtn = document.querySelectorAll('.form-questionnaire__btn-box a.btn');
arTabBtn.forEach(btn=>{
    btn.addEventListener('click', function(e){ 
        if(!this.classList.contains('disabled')){  
            toggleShowContainer(this.getAttribute('href'));
        }
    });
})



// Код работы большого таба с формой - КОНЕЦ

// Вставка полей для дополнительного родственника
let btnAddRelative = document.querySelector('.btn-add-relative');
let relativeBoxNumber = 1;
if(btnAddRelative){
    btnAddRelative.addEventListener('click', function(e){
        let relativeBox = document.querySelector('.relative-box');   
        let submitBtn = document.querySelector('.form-questionnaire .btn[type="submit"]');
 
        submitBtn.setAttribute('disabled', 'disabled');
        let newRelativeBox = `<div class="relative-box relative-box-${relativeBoxNumber} relative-box-separator"><div class="columns-box columns-box--two-col"><label class="form-elem"><select class="form__category-select form-elem__input--validation" name="contact-face-relative-${relativeBoxNumber}" id="cazwt127" required><option value="">This is a placeholder</option><option value="f">Отец</option><option value="m">Мать</option><option value="gf">Дедушка</option><option value="gm">Бабушка</option></select><span>Кем приходится<sup>*</sup></span></label><label class="form-elem"><input type="text" class="form-elem__input form-elem__input--validation" name="contact-face-full-name-${relativeBoxNumber}" placeholder="Ф.И.О." autocomplete="off"><span>Ф.И.О.<sup>*</sup></span></label><label class="form-elem"><input type="tel" class="form-elem__input form-elem__input--validation" name="contact-face-phone-namber-${relativeBoxNumber}" placeholder="Номер телефона" autocomplete="off"><span>Номер телефона<sup>*</sup></span></label><label class="form-elem"><input type="text" class="form-elem__input form-elem__input--validation" name="contact-face-place-of-work-${relativeBoxNumber}" placeholder="Место работы" autocomplete="off"><span>Место работы<sup>*</sup></span></label></div><label class="form-elem"><input type="tel" class="form-elem__input form-elem__input--validation" name="contact-face-contact-address-${relativeBoxNumber}" placeholder="Контактный адрес" autocomplete="off"><span>Контактный адрес<sup>*</sup></span></label></div>`;

        relativeBox.insertAdjacentHTML('afterend', newRelativeBox);
        
        let arFormSelets = []; 
        let relativeSelects = document.querySelectorAll(`.relative-box-${relativeBoxNumber} .form__category-select`); 
        if(relativeSelects.length > 0){
            relativeSelects.forEach(select=>{
                arFormSelets.push(new Choices(select,{ 
                    noResultsText: 'Значение не найдено',
                    loadingText: 'Загрузка...',  
                    // placeholder: false, 
                    placeholder: true,
                    placeholderValue: '', 
                    searchPlaceholderValue: 'Введите искомое значение', 
                    searchEnabled: false, 
                })); 
                let thisSelect = select.parentElement.parentElement;
                
                select.addEventListener('change', function(){
                    if(this.value != ''){
                        this.closest('.form-elem').classList.add('form-elem--active'); 
                    } 
                });
                
            });
        } 
        relativeBoxNumber ++;
    })
}


// ------------------РАБОТА С МОДАЛЬНЫМИ ОКНАМИ------------------
/**
 * showModal - функция выводящая модальное окно 
 * @param {string} classModalWindow - уникальный класс или индификатор модального окна.
 */
function showModal(classModalWindow){
    let modalContainer = $('.modal-container');
    let modal = $(`.modal-container ${classModalWindow}`); 
    modalContainer.fadeIn(100);
    setTimeout(function(){
        modal.fadeIn(100);
    }, 300);
}
/**
 * hideModal - функция скрывающее модальное окно 
 * @param {string} classModalWindow - уникальный класс или индификатор модального окна.
 */
function hideModal(classModalWindow){
    let modalContainer = $('.modal-container');
    let modal = $(`.modal-container ${classModalWindow}`); 
    modal.fadeOut(100);
    setTimeout(function(){
        modalContainer.fadeOut(100); 
    }, 300);
}

// !!!!!!!!!!!!!!!Пример кода вызова модального окна. Удалить его на боевом сайте!!!!!!!!!!!!!!!!
let submitBtn = $('.form-questionnaire .btn[type="submit"]'); 
if(submitBtn){
    submitBtn.on('click', function(e){
        e.preventDefault();
        showModal('.modal-message');
    });
} 
let modalMessageCloseBtn = $('.modal-message');
if(modalMessageCloseBtn){
    modalMessageCloseBtn.on('click', function(){
        hideModal('.modal-message');
    });
}