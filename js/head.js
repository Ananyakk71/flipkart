export function loadHead(data) {
    const head1 = document.querySelector(".head1.dis");
    const menu = document.createElement("a");
    menu.className = "menu";
    menu.href = "#";
    head1.appendChild(menu);

    const menuImg = document.createElement("img");
    menuImg.src = data.head.menu;
    menu.appendChild(menuImg);

    const logo = document.createElement("div");
    logo.className = "logo";
    head1.appendChild(logo);
    const logoImg = document.createElement("img");
    logoImg.src = data.head.logo;
    logo.appendChild(logoImg);

    const search = document.createElement("div");
    search.className = "search";
    head1.appendChild(search);
    search.innerHTML = `
    <form class="form-search">
                            <div class="search-optn">
                                <button class="search-btn" type="submit">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </button>
                                <div class="search-item">
                                    <input class="search-input" type="text" placeholder="Search for Products, Brands and More">
                                </div>
                            </div>
                        </form>
    `;

    const head2 = document.querySelector(".head2.dis");
    const accountDiv = document.createElement("div");
    accountDiv.className = "pd20 dis";
    head2.appendChild(accountDiv);
    
    const logAcc = document.createElement("div");
    logAcc.className = "log-acc";
    accountDiv.appendChild(logAcc);
    const accountLink = document.createElement("a");
    accountLink.className = "account dis";
    logAcc.appendChild(accountLink);

    const accountImg = document.createElement("img");
    accountImg.src = data.head.account.img;
    accountLink.appendChild(accountImg);

    const accountText = document.createElement("span");
    accountText.textContent = data.head.account.text;
    accountLink.appendChild(accountText);

    const arrowImg = document.createElement("img");
    arrowImg.src = data.head.account.arrow;
    arrowImg.className = "select";
    logAcc.appendChild(arrowImg);

    const logItems = document.createElement("ul");
    logItems.className = "log-items";
    logItems.style.width = "280px";
    accountDiv.appendChild(logItems);

    const signUpLink = document.createElement("a");
    signUpLink.className = "sign-up";
    logItems.appendChild(signUpLink);

    const newCustomerText = document.createElement("span");
    newCustomerText.textContent = data.head.account.logItems.newCustomer;
    signUpLink.appendChild(newCustomerText);

    const signUpText = document.createElement("span");
    signUpText.className = "sign1";
    signUpText.textContent = data.head.account.logItems.signUp;
    signUpLink.appendChild(signUpText);

    if (window.innerWidth >= 767) {
    logAcc.addEventListener("mouseenter", () => {
        logItems.style.display = "block";
    })
    logAcc.addEventListener("mouseleave", () => {
        logItems.style.display = "none";
    })
} else {
    logAcc.addEventListener("mouseenter", () => {
        logItems.style.display = "none";
    })
}

    const cartDiv = document.createElement("div");
    cartDiv.className = "pd20 dis";
    head2.appendChild(cartDiv);

    const cartLink = document.createElement("a");
    cartLink.className = "top-img";
    cartDiv.appendChild(cartLink)

    const cartImg = document.createElement("img");
    cartImg.src = data.head.cart.img;
    cartLink.appendChild(cartImg);

    const cartText = document.createElement("a");
    cartText.className = "top-text";
    cartText.textContent = data.head.cart.text;
    cartDiv.appendChild(cartText);

    const sellerDiv = document.createElement("div");
    sellerDiv.className = "pd20 dis";
    head2.appendChild(sellerDiv);

    const sellerLink = document.createElement("a");
    sellerLink.className = "top-img";
    sellerDiv.appendChild(sellerLink);

    const sellerImg = document.createElement("img");
    sellerImg.src = data.head.seller.img;
    sellerLink.appendChild(sellerImg);

    const sellerText = document.createElement("a");
    sellerText.className = "top-text";
    sellerText.textContent = data.head.seller.text;
    sellerDiv.appendChild(sellerText);

    const dotDiv = document.createElement("div");
    dotDiv.className = "pd20 dis";
    head2.appendChild(dotDiv);

    const topDots = document.createElement("div");
    topDots.className = "top-dots";
    dotDiv.appendChild(topDots);  

    const dotImg = document.createElement("img");
    dotImg.src = data.head.dot.img;
    topDots.appendChild(dotImg);

    const dotUl = document.createElement("ul");
    dotUl.className = "dot-items";
    dotUl.style.width = "210px";
    dotUl.style.right = "0"
    dotDiv.appendChild(dotUl);

    data.head.dot.dotItems.forEach(item => {
        const link = document.createElement("a");
        link.className = "dot-inside";
        link.textContent = item;
        dotUl.appendChild(link);
    });

    topDots.addEventListener("mouseenter", ()=>{
        dotUl.style.display = "block";
    })
    topDots.addEventListener("mouseleave", ()=>{
        dotUl.style.display = "none";
    })
}