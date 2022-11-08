@@include('jquery-1.12.1.js');
@@include('flatpickr.js');
@@include('choices.min.js');
@@include('jquery.maskedinput.js');
@@include('jquery.filer.min.js');

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



        $('.file-input').filer({
            limit: null,
            maxSize: null,
            extensions: null,
            changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-cloud-up-o"></i></div><div class="jFiler-input-text"><h3>Перетащите файл сюда или кликните по полю</h3> <span>Выберите файл с расширением (jpg, jpeg, png, pdf) и размером не превышающим 1мб</span></div></div></div>',
            showThumbs: true,
            appendTo: null,
            theme: "dragdropbox",
            templates: {
                box: '<ul class="jFiler-item-list"></ul>',
                item: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <li>{{fi-progressBar}}</li>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
                itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
                progressBar: '<div class="bar"></div>',
                itemAppendToEnd: false,
                removeConfirmation: false,
                _selectors: {
                    list: '.jFiler-item-list',
                    item: '.jFiler-item',
                    progressBar: '.bar',
                    remove: '.jFiler-item-trash-action',
                }
            },
            uploadFile: {
                url: "upload.php",
                data: {},
                type: 'POST',
                enctype: 'multipart/form-data',
                beforeSend: function(){},
                success: function(data, el){
                    var parent = el.find(".jFiler-jProgressBar").parent();
                    el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                        $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> Success</div>").hide().appendTo(parent).fadeIn("slow");    
                    });
                },
                error: function(el){
                    var parent = el.find(".jFiler-jProgressBar").parent();
                    el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                        $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> Error</div>").hide().appendTo(parent).fadeIn("slow");    
                    });
                },
                statusCode: {},
                onProgress: function(){},
            },
            dragDrop: {
                dragEnter: function(){},
                dragLeave: function(){},
                drop: function(){},
            },
            addMore: true,
            clipBoardPaste: true,
            excludeName: null,
            beforeShow: function(){return true},
            onSelect: function(){},
            afterShow: function(){},
            onRemove: function(){},
            onEmpty: function(){},
            captions: {
                button: "Выберите файлы",
                feedback: "Choose files To Upload",
                feedback2: "Выберите файлы для Загрузки",
                drop: "Поместите файл сюда для загрузки",
                removeConfirmation: "Вы уверены, что хотите удалить этот файл?",
                errors: {
                    filesLimit: "Разрешается загружать только файлы {{fi-limit}}.",
                    filesType: "К загрузке допускаются только изображения.",
                    filesSize: "{{fi-name}} слишком большой! Пожалуйста, загрузите файл размером до {{fi-maxSize}} Мб.",
                    filesSizeAll: "Выбранные вами файлы слишком велики! Пожалуйста, загружайте файлы размером до {{fi-maxSize}} Мб."
                }
            }
        });

            // ------------------РАБОТА С МОДАЛЬНЫМИ ОКНАМИ------------------
    /**
     * showModal - функция выводящая модальное окно 
     * @param {string} classModalWindow - уникальный класс или индификатор модального окна.
     */
    function showModal(classModalWindow){
        let modalContainer = $('.modal-container');
        let modal = $(`.modal-container ${classModalWindow}`); 
        modalContainer.addClass('modal-container--show');
        setTimeout(function(){
            modal.fadeIn(100);
        }, 100);
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
            modalContainer.removeClass('modal-container--show');
        }, 100);
    } 
    
    let modalContainer = $('.modal-container');
    modalContainer.on('click', function(e){
        if(e.target.classList.contains('modal-container')){ 
            hideModal('.modal');
        } 
    });

    let showModalBtn = $('.btn--show-modal'); //элементы открывающие модалки.
    let btnCloseModal = $('.close-modal'); //какой то элемент в модалке с классом close-modal нужный  для закрытия модалки (по умолчанию крестик)

    //открытие конкретной модалки
    showModalBtn.on('click', function(e){
        e.preventDefault();
        if(e.target.getAttribute('data-open-modal')){   
            showModal('.'+ e.target.getAttribute('data-open-modal'));
        } 
    });
    //закрытие всех модалок
    btnCloseModal.on('click', function(e){
        e.preventDefault(); 
        hideModal('.modal');
    });

    // ----------SPOILER-------------
    let spoilerBtn = $('.spoiler .spoiler__header');
    spoilerBtn.on('click', function(){
        $(this).toggleClass('spoiler__header--active');
        $(this).next('.spoiler__container').slideToggle(200);
    })
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
        if(select.classList.contains('form__category-select--no-search')){
            arFormCategory.push(new Choices(select,{  
                // placeholder: false, 
                placeholder: true,
                placeholderValue: '',  
                searchEnabled: false, 
            })); 
        }else{
            arFormCategory.push(new Choices(select,{ 
                noResultsText: 'Значение не найдено',
                loadingText: 'Загрузка...',  
                // placeholder: false, 
                placeholder: true,
                placeholderValue: '', 
                searchPlaceholderValue: 'Введите искомое значение', 
                searchEnabled: true, 
            })); 
        }
        
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
let arrAllInputGroup = document.querySelectorAll('.form-elem__input--validation-group');
 
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
    let arElemValidationGroup = container.querySelectorAll('.form-elem__input--validation-group');
    let containerInputs = container.querySelectorAll('.form-elem__input--validation'); 
    let groupFlag = true;
    let itemFlag = true;
    let fullesFlag = false; 

    if(arElemValidationGroup){ 
        for(let key in arElemValidationGroup){
            if(arElemValidationGroup[key].checked){ 
                groupFlag = true;
                break;
            }else{
                groupFlag = false; 
            }
        }
    } 
    if(containerInputs){
        containerInputs.forEach(input=>{ 
            if(!input.value){
                itemFlag = false;
            } 
        });
    }
    
    if(groupFlag && itemFlag){
        fullesFlag = true;
    }else{
        fullesFlag = false;
    }
    
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

arrAllInputGroup.forEach(item=>{
    item.addEventListener('change', function(){
        toggleActiveTabElements(checkingFullnessContainerFields(this)); 
    });
});

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
                    // placeholder: false, 
                    placeholder: true,
                    placeholderValue: '',  
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