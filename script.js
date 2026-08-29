// =========================
// MOBILE MENU
// =========================

const menuIcon =
    document.getElementById("menuIcon");

const navLinks =
    document.getElementById("navLinks");


if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// Close mobile menu after clicking a link

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});



// =========================
// TYPING EFFECT
// =========================

const typingElement =
    document.getElementById("typing");


const roles = [

    "Full Stack Developer",

    "Java Developer",

    "Web Developer"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }


    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;


            if (
                roleIndex ===
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 50 : 50

    );

}


typeEffect();



// =========================
// CLICKABLE SKILLS
// =========================

const skillCategories =
    document.querySelectorAll(
        ".skill-category"
    );


skillCategories.forEach(category => {

    const header =
        category.querySelector(
            ".skill-header"
        );


    if (!header) {
        return;
    }


    header.addEventListener(
        "click",
        () => {


            const isOpen =
                category.classList.contains(
                    "active"
                );


            // Close every category

            skillCategories.forEach(
                otherCategory => {

                    otherCategory.classList.remove(
                        "active"
                    );

                }
            );


            // Open clicked category

            if (!isOpen) {

                category.classList.add(
                    "active"
                );

            }

        }
    );

});



// =========================
// EDUCATION TABS
// =========================

const educationSteps =
    document.querySelectorAll(
        ".education-step"
    );


const educationContents =
    document.querySelectorAll(
        ".education-content"
    );


educationSteps.forEach(step => {

    step.addEventListener(
        "click",
        () => {


            const target =
                step.getAttribute(
                    "data-education"
                );


            // Remove active from
            // every education step

            educationSteps.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            // Hide every education detail

            educationContents.forEach(content => {

                content.classList.remove(
                    "active"
                );

            });


            // Activate selected step

            step.classList.add(
                "active"
            );


            // Find education content
            // using data-content

            const selectedContent =
                document.querySelector(
                    `.education-content[data-content="${target}"]`
                );


            // Show selected details

            if (selectedContent) {

                selectedContent.classList.add(
                    "active"
                );

            }

        }
    );

});



// =========================
// CONTACT FORM - EMAILJS
// =========================

// Initialize EmailJS

emailjs.init({
    publicKey: "McyMQymM7vKPS7C_"
});


const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            emailjs.sendForm(
                "portfolio_gmail",
                "template_wecb4tm",
                contactForm
            )

            .then(function() {

                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been sent successfully."
                );

                contactForm.reset();

            })

            .catch(function(error) {

                console.error(
                    "EmailJS Error:",
                    error
                );

                alert(
                    "Sorry,Your message could not be sent. Please try again later."    );

            });

        }
    );

}