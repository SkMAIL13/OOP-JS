class ModernButton extends Button {
   constructor(width, height, background, value, borderRadius) {
      super(width, height, background, value, borderRadius);
      this.borderRadius = borderRadius;
   }
   render() {
      element = super.render();
      element = this.borderRadius + 'px';
      return element
   }
}