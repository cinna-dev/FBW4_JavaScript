class Header {
    constructor(text, backgroundColor, color, height, padding) {
        this.text = text;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.height = height;
        this.padding = padding;
    }
    createHeader() {
        let header = document.createElement('header');
        let a = document.createElement('a');
        a.append(this.text);
        a.style.display = 'block'
        a.style.paddingTop = this.padding;
        a.style.paddingBottom = this.padding;
        a.style.paddingLeft = this.padding;
        a.setAttribute('href', '#')
        a.style.color = this.color;
        header.append(a)
        header.style.backgroundColor = this.backgroundColor;
        header.style.height = this.height;
        document.body.append(header)
    }
}

export {
    Header
}