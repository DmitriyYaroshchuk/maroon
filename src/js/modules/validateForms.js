import JustValidate from "just-validate";
import Inputmask from "inputmask/lib/inputmask";
import submitForm from "./submitForm";
function validateForms(selectorForm) {
    const telInput = document.querySelector("input[type='tel']");
    const telMask = new Inputmask('+38 (999) 999-99-99');
    telMask.mask(telInput);


    const validate = new JustValidate(selectorForm);
    validate.addField('[name="name"]',[
        {
            rule: 'required',
            errorMessage: "Поле ИМЯ обязательное для заполнения",
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
    ]);
    validate.addField('[name="surname"]',[
        {
            rule: 'required',
            errorMessage: "Поле ФАМИЛИЯ обязательное для заполнения",
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
    ]);
    validate.addField('[name="tel"]',[
        {
            validator: (value) => {
                const phone = telInput.inputmask.unmaskedvalue()
                return Boolean(Number(phone) && phone.length > 0)
            },
            errorMessage: 'Введите телефон'
        },
        {
            validator: (value) => {
                const phone = telInput.inputmask.unmaskedvalue()
                return Boolean(Number(phone) && phone.length === 10)
            },
            errorMessage: 'Введите телефон полностью'
        }

    ]);
    validate.onSuccess(() => {
        submitForm('.basket-form');
    });
}
export default validateForms;