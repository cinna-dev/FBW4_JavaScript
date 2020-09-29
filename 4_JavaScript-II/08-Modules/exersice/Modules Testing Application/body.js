class Article {
    constructor(text, backgroundColor, color, height, width, margin) {
        this.text = text;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.height = height;
        this.width = width;
        this.margin = margin;
        this.input;
        this.title
    }
    createArticle() {
        let article = document.createElement('article')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let input = document.createElement('input')
        input.id = 'input'
        input.style.margin = this.margin;
        input.style.border = '2px solid black'
        article.append(input)
        h2.append('Title')
        h2.id = 'title'
        h2.style.margin = this.margin;
        article.append(h2)
        p.append(this.text)
        p.style.margin = this.margin
        article.append(p)
        article.style.height = this.height;
        article.style.float = 'left'
        article.style.backgroundColor = this.backgroundColor;
        article.style.width = this.width;
        document.body.append(article)
    }
}

class Aside {
    constructor(content, backgroundColor, color, height, width, margin, left = false, clear = false, textCenter = false) {
        this.content = content;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.height = height;
        this.width = width;
        this.margin = margin;
        this.left = left;
        this.clear = clear;
        this.textCenter = textCenter;
    }

    createAside() {
        let aside = document.createElement('aside')
        aside.style.backgroundColor = this.backgroundColor;
        aside.style.height = this.height;
        aside.style.width = this.width;
        aside.style.color = this.color;
        aside.style.float = this.left ? 'left' : 'right';
        aside.style.clear = this.clear ? 'left' : ''
        aside.style.textAlign = this.textCenter ? 'center' : ''
        aside.style.padding = this.margin;
        aside.innerHTML = this.content;
        document.body.append(aside)
    }

}
class ClearFix {
    createClearFix() {
        let clearFix = document.createElement('div')
        clearFix.style.clear = 'both'
        document.body.append(clearFix)
    }
}

export {
    Article,
    Aside,
    ClearFix
}