let ctitle = document.getElementsByClassName("hh1");
        ctitle.style.color = "blue";

        let ctitles = document.querySelectorAll(".card-title");
        ctitles[0].style.color = "blue";
        ctitles[1].style.color = "red";
        ctitles[2].style.color = "green";
        console.log(ctitles);

        document.querySelector(".this").style.color = "cyan";
        document.querySelector(".this").style.background = "red";

        console.log(document.getElementBytagName("a"));
        console.log(document.querySelector(".card-title").getElementsByTagName("a"));