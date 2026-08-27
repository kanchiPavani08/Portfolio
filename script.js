// =========================
// MOBILE MENU
// =========================

const menuIcon =
    document.getElementById("menuIcon");

const navLinks =
    document.getElementById("navLinks");


menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

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
                1500
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

        deleting ? 50 : 100

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


            // Show selected details

            const selectedContent =
                document.getElementById(
                    target
                );


            if (selectedContent) {

                selectedContent.classList.add(
                    "active"
                );

            }

        }
    );

});



// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById(
        "contactForm"
    );


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


        alert(

            "Thank you, " +
            name +
            "! Your message has been received."

        );


        contactForm.reset();

    }
);