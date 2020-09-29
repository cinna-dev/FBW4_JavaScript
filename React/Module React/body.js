import LeftSide from './leftSide.js'
import RightSide from './rightSide.js'
import Article from './article.js'


class Body {
    static create() {
        const body = document.createElement('div');
        body.className = 'Body';
        const left = LeftSide.create();
        const right = RightSide.create();
        const article = Article.create();
        body.append(left);
        body.append(article);
        body.append(right);

        return body;
    }
}

export default Body;