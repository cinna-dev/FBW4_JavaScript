class Footer {
    static create() {
        const footer = document.createElement('footer')
        footer.className = "Footer"
        footer.innerHTML = `<p>Modules Testing Application</p>`
        return footer
    }
}

export default Footer;