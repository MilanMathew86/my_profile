document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("year");

    if(year){
        year.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const href = this.getAttribute("href");

            // Placeholder links (href="#") until real URLs are added
            if(href === "#"){
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    document.querySelectorAll(".ba-slider").forEach(slider => {

        const range = slider.querySelector("input");

        range.addEventListener("input", () => {
            slider.style.setProperty("--pos", range.value + "%");
        });

    });

});
