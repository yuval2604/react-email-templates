import { renderSignupWelcomeEmail } from './renderEmail'

(() => {
    const htmlContent = renderSignupWelcomeEmail({
        subject: "",
        userName: "",
        confirmationUrl: ""
    });

    console.log(htmlContent);
})();