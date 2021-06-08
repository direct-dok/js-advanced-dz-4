class ValidField {

    constructor(objectValidate) {
        this.objectValidate = objectValidate;
    }

    zeroCheck(fields) {
        fields.forEach(el => {
            if(el.dataset.err == '1') {
                this.removeClassError(el);
                this.removeMessageError(el);
            }

            if(el.value == '') {
                el.setAttribute('data-err', '1');
                this.addClassError(el);
                this.addMessageError(el, 'Заполните поле, оно не должно быть пустым');
            } else {
                el.tagName != 'TEXTAREA' ? this.inputValid(el) : false;
            }            
        });
    }

    addClassError(el) {
        el.classList.add('form__field--error');
    }

    removeClassError(el) {
        el.classList.remove('form__field--error');
        el.removeAttribute('data-err');
    }

    addMessageError(el, message) {
        el.insertAdjacentHTML('afterend', `<p class="form__message-error">${message}</p>`);
    }

    removeMessageError(el) {
        el.nextElementSibling.remove();
    }

    inputValid(el) {
        let result = el.value.match(this.objectValidate[el.name].pattern);
        if(!result) {
            el.setAttribute('data-err', '1');
                this.addClassError(el);
                this.addMessageError(el, this.objectValidate[el.name].error)
        }
    }

}

var Swapper = {
    name: {
        pattern: /^[a-zA-Zа-яА-Яё]{2,}$/,
        error: "Имя должно содержать как минимум 2 символа, только буквы русского или латинского алфавита"
    }, 
    phone: {
        pattern: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
        error: "Номер телефона должен быть указан в формате \"+7(000)000-0000\""
    }, 
    email: {
        pattern: /^[a-zA-Z0-9.\-_]+@[a-z.]+\.[a-z]{2,5}$/,
        error: "Неверный формат электронного адреса, адрес должен соответствовать примеру \"name@gmail.com\""
    }
}