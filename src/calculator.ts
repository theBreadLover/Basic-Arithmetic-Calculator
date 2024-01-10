class Calculator {

    // Create variables for the class.
    private static previous_result: number;
    private static previous_value: number;
    private static result: number;
    private static buffer: string;
    private static operator: string;

    // Declare the default variables.
    constructor () {
        Calculator.previous_result = 0;
        Calculator.result = 0;
        Calculator.buffer = '0'
    }

    /*static handleOperation = (value1: number, value2: number, operator_value: string): number => {
      let result: number;

      switch (operator_value) {
        case ('+'):
          console.info(`successfully handled.\nFirst Value: ${value1};\nSecond Value: ${value2};\nOperation handled: Addition;`);
          result = value1  + value2;
          return result;

        case ('-'):
          console.info(`successfully handled.\nFirst Value: ${value1};\nSecond Value: ${value2};\nOperation handled: substraction;`);
          result = value2 - value2;
          return result;

        case ('/'):
          console.info(`successfully handled.\nFirst Value: ${value1};\nSecond Value: ${value2};\nOperation handled: division;`);
          result = value1 / value2;
          return result;

        case ('*'):
          console.info(`successfully handled.\nFirst Value: ${value1};\nSecond Value: ${value2};\nOperation handled: multipication;`);
          result = value1 * value2;
          return result;

        default:
          console.info(`successfully handled.\nFirst Value: ${value1};\nSecond Value: ${value2};\nOperation handled: show result;`);
          return value1;
      }
    }
     */

    /*static separate_values = (value_type: string, main_array: string[]): string[] => {
      let value_array: string[];
      let symbol_pattern: RegExp = /D/;
      let number_pattern: RegExp = /d/;

      if (value_type == 'symbol') {
        value_array = main_array.filter((val: string) => symbol_pattern.test(val));
      }
      else {
        value_array = main_array.filter((val: string) => number_pattern.test(val));
      }

      return value_array
  }
     */

    // How to handle the values
    static handle_values = (value: number, operation?: string): number => {
        // Handling the first value.
        if (this.previous_value == 0 || this.previous_value == undefined) {
            this.previous_value = value;
            this.previous_result = this.previous_value;
            this.operator = operation;
            return value
        }
        // Handling the next values.
        else {
            this.result  = Calculator.handle_operation(this.operator, this.previous_value, value);
            this.previous_result = this.result;
            this.buffer = this.result.toString();
        }

        return this.result

        /*
        let operations: string[] = this.separate_values('symbol', values);

        let operation_values: number[] = [];

        let numbers: string[] = this.separate_values('number', values);
        for (let i: number = 0; i < numbers.length; i++) {
          operation_values.push(parseInt(numbers[i]));
        }
        */
        return this.result
    }

    static handle_operation(operation: string, main_value: number, second_value: number): number {
        switch (operation) {
            case('+'):
                return main_value + second_value
            case('-'):
                return main_value - second_value
            case('/'):
                return main_value / second_value
            case('*'):
                return main_value * second_value
        }
    }

    // static handleValue  = (value: number, ...operator_value: string[]): number | void => {
    //   let previousValue: number[],
    //   previousOperators: string[];

    //   if (previousValue === undefined) {
    //     previousValue = value;

    //     return previousValue;
    //   } {
    //     previousOperators.forEach(operator => {
    //       Handler.handleOperation(previousValue, )
    //     })
    //   }
    // }
}
