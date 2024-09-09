const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const textareaMessage = form.elements.message;
const localStorageKey = "feedback-form-state";
const storedFormData = localStorage.getItem(localStorageKey);
const parsedFormData = JSON.parse(storedFormData);

if (parsedFormData != null) {
    textareaMessage.value = parsedFormData.message ?? "";
    emailInput.value = parsedFormData.email ?? "";
    formData.email = parsedFormData.email ?? "";
    formData.message = parsedFormData.message ?? "";
    console.log(parsedFormData);
};

form.addEventListener("input", event => {
    event.preventDefault();

    if (textareaMessage == event.target) {
       formData.message = event.target.value.trim();
    } else if (emailInput == event.target) {
       formData.email = event.target.value.trim();
    }

    console.log(formData);

    localStorage.setItem(localStorageKey, JSON.stringify(formData));

});

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();    
    
    if(formData.email === "" || formData.message === ""){
        console.log(formData);
        alert ("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
        formData.email = "";
        formData.message = "";
    }

});