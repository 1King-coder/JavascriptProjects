class ValidateForm {
    constructor () {
        this.form = document.querySelector('form');
        this.events();
    };

    events () {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    };

    handleSubmit (e) {
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPasswords = this.validatePasswordFields();

        if (validFields && validPasswords) {
            alert('Fomulário enviado.');
            this.form.submit();
        };
    };

    validatePasswordFields() {
        let valid = true;

        const password = this.form.querySelector('.password')
        const repeatPassword = this.form.querySelector('.repeat-password')

        if (password.value !== repeatPassword.value) {
            valid = false;
            this.createError(repeatPassword, 'Campos senha e repetir senha precisam ser iguais.');
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais.');
        };

        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(repeatPassword, 'Senha tem que ter entre 6 e 12 caracteres.');
            this.createError(password, 'Senha tem que ter entre 6 e 12 caracteres.');
        };

        return valid;
    };

    isValidFields () {
        let valid = true;

        for (let errorText of this.form.querySelectorAll ('.error-text')) {
            errorText.remove();
        };
        
        for(let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;

            if(!field.value) {
                this.createError(field, `Campo ${label.slice(0 , label.length-1)} não pode estar vazio.`)
                valid = false;
            };
            
            if (field.classList.contains('cpf')) {
                if (!this.validateCpf(field)) valid = false; 
            };

            if (field.classList.contains('username')) {
                if (!this.validateUsername(field)) valid = false; 
            };
        };

        return valid;
        
    };

    validateCpf (field) {
        const cpf = new ValidateCPF(field.value);
        
        if (!cpf.validate()) {
            this.createError(field, 'CPF inválido.');
            return false;
        };

        return true
    };

    validateUsername (field) {
        const username = field.value;
        let valid = true;

        if (username.length < 3 || username.length > 12) {
            this.createError(field, 'Usuário tem que ter entre 3 e 12 caracteres.')
            valid = false;
        };

        if (!username.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Usuário tem que ter somente letras e/ou números.')
            valid = false;
        };

        return valid
    };
    createError (field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div)
    }

};


const validate = new ValidateForm();