class Test4 extends Test2 {
   set testProp(a) {
      this._testProp = a * 10;
   }
   set testValue(b) {
      this._testValue = b;
   }
   settestValue(b) {
      if (b > 100) {
         this._testValue = b;
         return b
      } else {return false}
   }
   get testValue() {
      return this._testValue
   }
}