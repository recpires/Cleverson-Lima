document.addEventListener("DOMContentLoaded", function () {
    // Example of a simple script to handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log("Form submitted:", data);
        alert("Formulário enviado com sucesso!");
        form.reset();
    });

    // Example of a script to handle smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});