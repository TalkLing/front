const signupErrorMessages = {
  400: "Здається, щось було вказано не вірно. Спробуйте, будь ласка, ще раз.",
  409: "Користувач з такою електронною поштою вже зареєстрований.",
};

const getTextError = (errors) => (status) =>
  errors[status] || "Щось пішло не так, спробуйте повторити пізніше :)";

export const getSignupError = getTextError(signupErrorMessages);
