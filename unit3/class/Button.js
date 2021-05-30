class Button {
    constructor(width, height, background, value) {
        this.width = width,
        this.height = height,
        this.background = background,
        this.value = value
    }

    render() {
        let element = document.createElement('button');
        element.style.width = this.width + 'px';
        element.style.height = this.height + 'px';
        element.style.background = this.background;
        element.innerText = this.value;
        return element;
    }
}