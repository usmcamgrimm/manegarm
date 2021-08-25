const constraints = {
  name: {
    presence: { allowEmpty: false }
  },
  email: {
    presence: { allowEmpty: false },
    email: true
  },
  message: {
    presence: { allowEmpty: false }
  }
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  const formValues = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };

  const errors = validate(formValues, constraints);

  if (errors) {
    event.preventDefault();
    const errorMessage = Object
      .values(errors)
      .map(function (fieldValues) { return fieldValues.join(', ') })
      .join("\n");

    alert(errorMessage);
  }
}, false);