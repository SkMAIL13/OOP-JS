class ModernButton extends Button {
   constructor(width, height, background, value, borderRadius) {
      super(width, height, background, value);
      this.borderRadius = borderRadius;
   }
   render() {
      let element = super.render();
      element.style.borderRadius = this.borderRadius + 'px';
      return element
   }
}