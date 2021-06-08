class Form {

    constructor(selectorForm, objectValidate) {
        this.objectValidate = new ValidField(objectValidate);
        this.form = null;
        this.allFields = [];
        this.addEventInput = 1;
        this.getForm(selectorForm);
    }

    getForm(selForm) { // Получаем форму по селектору
        this.form = document.querySelector(selForm);
        Form.bindEvent('submit', this.form, this.sendForm);
        this.getAllFields(this.form); 
    }

    static bindEvent(ev, elem, callBack) { // Функция для подвешивания события
        elem.addEventListener(ev, callBack);
    }

    sendForm = (e) => {  // Функция для отправки формы
        e.preventDefault();
        
        this.objectValidate.zeroCheck(this.allFields);
        this.addFieldsEventInput(this.allFields);
        
    }

    getAllFields(form) { // Добавляем поля формы в маассив

        form.querySelectorAll('.form__field').forEach(el => {
                this.allFields.push(el);
            })
    }

    addFieldsEventInput(fields) {
        if(this.addEventInput) {
            fields.forEach(el => {
                // if(!(el.tagName == 'TEXTAREA')) {
                    Form.bindEvent('input', el, this.checkingChanges);
                // }
            })
        }
        this.addEventInput = 0;
    }

    checkingChanges = (e) => {
        this.objectValidate.zeroCheck(this.allFields);
    }

    
}

