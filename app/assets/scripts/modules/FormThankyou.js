class FormThankyou {
    constructor() {
        this.events();
    }


    events() {
        var href = window.location.href;
        if(href === "https://study.kaplaninternational.com/en/038_staffsupport/#thank-you") {
            $('.wFormContainer').hide();
            $('#thank-you').show();
        }


    }

}

export default FormThankyou;
