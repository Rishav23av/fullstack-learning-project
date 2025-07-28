(function () {
    
    const articleTabButton = document.querySelector("#article-btn");
    const talkTabButton = document.querySelector("#talk-btn");

    const articleContent = document.querySelector("#article");
    const talkContent = document.querySelector("#talk");

    
    function toggleTabs(selectedButton) {
        if (selectedButton === articleTabButton) {
            articleContent.classList.remove("hide");
            articleTabButton.classList.add("active");
            talkContent.classList.add("hide");
            talkTabButton.classList.remove("active");
        } else if (selectedButton === talkTabButton) {
            talkContent.classList.remove("hide");
            talkTabButton.classList.add("active");
            articleContent.classList.add("hide");
            articleTabButton.classList.remove("active");
        }
    }

    
    articleTabButton.addEventListener("click", (e) => toggleTabs(e.currentTarget));
    talkTabButton.addEventListener("click", (e) => toggleTabs(e.currentTarget));

    
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            if (document.activeElement === articleTabButton && e.key === "ArrowRight") {
                talkTabButton.focus();
                talkTabButton.click();
            } else if (document.activeElement === talkTabButton && e.key === "ArrowLeft") {
                articleTabButton.focus();
                articleTabButton.click();
            }
        }
    });
})();