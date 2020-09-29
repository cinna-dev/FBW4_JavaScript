class LeftSide {
    static create() {
        const left = document.createElement('div');
        left.className = 'LeftSide';
        const ul = document.createElement('ul');
        ul.innerHTML = `<li><img src="https://simply-communicate.com/wp-content/uploads/2019/03/facebook-2661207_960_720.jpg"></img> </li>
        <li><img src="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview"></img></li>`;
        /*  
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.setAttribute('src', '')
        li.append(img)
        ul.append(li)
        li = document.createElement('li')
        img = document.createElement('img')
        img.setAttribute('src', '')
        li.append(img)
        ul.append(li)
        */
        left.append(ul);

        return left;
    }
}

export default LeftSide;