class RightSide {
    static create() {
        const right = document.createElement('div');
        right.className = 'RightSide';
        right.innerHTML = `<ul>
        <li>Olliver</li>
        <li>Isac</li>
        <li>Ruth</li>
        <li>Sascha</li>
        </ul>`;

        return right;
    }
}

export default RightSide;