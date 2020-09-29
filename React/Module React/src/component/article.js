class Article {
    
    static create() {
        const article = document.createElement('div');
        article.className = 'Article';

        article.innerHTML = `<input type="text" id="inpt"  placeholder="Enter title" "/>
        <h2 id="title"></h2>
        <p>this is an example of class compnents using only normal JS ES6 modules</p>
        <p>we will test the module export and import capabilities</p>`;

        return article;
    }
}

//onchange="changeTitle(event)
//onChange={(event)=>{this.ChangeTitle(event)}}
export default Article;