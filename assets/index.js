const createElement = (text) => {
    const elem = document.createElement("div");
    elem.innerHTML = text;
    const newNode = elem.firstChild
    elem.remove()
    return newNode;
}

(async () => {
    const navbarHtml = await fetch("/assets/templates/navbar.html").then(res => res.text())
    const footerHtml = await fetch("/assets/templates/footer.html").then(res => res.text())

    const navbarPlaceholder = document.getElementById("navbar-placeholder")
    const footerPlaceholder = document.getElementById("footer-placeholder")

    navbarPlaceholder?.replaceWith(createElement(navbarHtml))
    footerPlaceholder?.replaceWith(createElement(footerHtml))
})()