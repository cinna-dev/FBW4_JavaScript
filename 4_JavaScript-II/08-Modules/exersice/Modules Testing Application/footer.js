class Footer {
    constructor(text, backgroundColor, color, height, padding) {
        this.text = text;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.height = height;
        this.padding = padding;
    }
    createFooter() {
        let footer = document.createElement('footer')
        let p = document.createElement('p')
        p.append(this.text)
        footer.style.paddingTop = this.padding
        footer.style.paddingBottom = this.padding
        footer.append(p)
        footer.style.height = this.height;
        footer.style.textAlign = 'center'
        footer.style.backgroundColor = this.backgroundColor;
        document.body.append(footer)

    }
}

export {
    Footer
}