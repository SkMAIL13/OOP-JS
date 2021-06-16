class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(a){
        if(typeof a == 'number'){
            return true;
        }
        return false;
    }
    static isInt(a){
        return Number.isInteger(a)
    }
    static isFloat(a){
        if(Number.isInteger(a) == false){
            return true;
        }
        return false;
    }
    static isChar(a){
        if(a.length >= 2){
            return false;
        }
        return true;
    }
    static isString(a){
        if(typeof a == 'string'){
            return true;
        }
        return false;
    }
    static isBoolean(a){
        if(typeof a == 'boolean'){
            return true;
        }
        return false;
    }
    static isArray(a){
        return Array.isArray(a)
    }
    static toMoney(num) {
            num = num.toString();
            let paramArray = num.split('.');
            let intPart = '';
            let floatPart = '';

            if (paramArray.length == 1) {
                floatPart = '00';
            }
            else if (paramArray[1].length == 1) {
                floatPart = paramArray[1] * 10;
            }
            else if (paramArray[1].length >= 2) {
                floatPart = paramArray[1][0] + paramArray[1][1];
            }

            intPart = paramArray[0];
            let intArray = [];
            let out = 0;
            for (let i = intPart.length - 1; i >= 0; i--) {
                if (out % 3 == 0 & out !== 0) {
                    intArray.push(' ');
                    intArray.push(intPart[i]);
                    out++;

                } else {
                    intArray.push(intPart[i])
                    out++;
                };
            }
            intPart = intArray.reverse().join('');
            return intPart + '.' + floatPart;
        }

}