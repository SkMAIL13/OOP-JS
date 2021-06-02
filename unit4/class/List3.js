class List3 extends List {
    constructor(item, cssClass) {
        super(item);
        this.cssClass = cssClass
    }
    render() {
        let ul = super.render();
        for(let i = 0; i < this.cssClass; i++) {
            ul.classList.add(tihs.cssClass[i])
        }
        return ul
    }
}