function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.calculateResult = function() {
        let result = 0;
        let notDivisible = "";

        switch (this.operator) {
            case '+':
                result = this.leftOperand + this.rightOperand;
                break;
            case '-':
                result = this.leftOperand - this.rightOperand;
                break;
            case '*':
                result = this.leftOperand * this.rightOperand;
                break;
            case '/':
                if (this.rightOperand === 0) {
                    notDivisible = 'Not divisible by zero!';
                }
                result = this.leftOperand / this.rightOperand;
                break;
        }

        return notDivisible.length === 0 ? result : notDivisible;
    }
}

module.exports = Calculator;