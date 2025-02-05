export function loadContent(data) {
    const firstItems = document.querySelector(".first-items");
    data.categories.forEach(category => {
        const itemIn = document.createElement(category.link ? "a" : "div");
        itemIn.className = "item-in";
        firstItems.appendChild(itemIn);

        const itemContent = document.createElement("div");
        itemContent.className = "item-contents";
        itemIn.appendChild(itemContent);

        const itemImg = document.createElement("div");
        itemImg.className = "item-image";
        itemImg.style.width = "64px";
        itemImg.style.height = "64px";
        itemContent.appendChild(itemImg);

        const img = document.createElement("img");
        img.src = category.image;
        itemImg.appendChild(img);

        const textSpan = document.createElement("span");
        textSpan.className = "text";
        textSpan.textContent = category.text;
        itemContent.appendChild(textSpan);

        if (category.downArrow) {
            const downArrow = document.createElement("span");
            downArrow.className = "down-arrow";
            textSpan.appendChild(downArrow);
        }
    })
}