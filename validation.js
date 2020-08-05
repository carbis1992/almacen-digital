
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const enviar = document.querySelector("#enviar");

    const checkInput = () => {
        if (email.value !== "" && message.value !== "") {
            enviar.disabled = "";
        } else {
            enviar.disabled = "disabled";
        }
    }

    email.addEventListener("change", checkInput );
    message.addEventListener("change", checkInput);
    




