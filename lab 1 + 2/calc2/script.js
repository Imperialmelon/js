window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    clr_flag = true
    let size = 75;
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }

            outputElement.innerHTML = a
            if(outputElement.scrollWidth > outputElement.offsetWidth){
                alert(1);
                el = document.getElementById("result");
                // size = el.style.fontSize - el.style.fontSize[-1]
                // size = toString(Number(size*2)) + "%" ;
                el.style.fontSize = size*2 + "%";
                size/=2;
                // outputElement.innerHTML = "test";
            }
        } else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_percent").onclick = function() { 
        if (a === '') return
        selectedOperation = '%'
    }
    document.getElementById("root").onclick = function() { 
        if (a === '') return
        selectedOperation = '√'
    }
    document.getElementById("square").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x²'
    }
    document.getElementById("fact").onclick = function() { 
        if (a === '') return
        selectedOperation = 'x!'
    }
    document.getElementById("btn_op_sign").onclick = function() { 
        if (a === '') return
        selectedOperation = '+/-'
    }
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    function fact_ (a){
        if (a==0){
            return 1;
        }
        if(a == 1){
            return 1;
        }
        else {
            return a*fact_(a-1);
        }
    }
    document.getElementById("back").onclick = function() { 
        if (a == ''){
            return
        }
        else{
            a = a.slice(0, -1);
            if(a.length == 0){

                outputElement.innerHTML = 0
                return
            }
            outputElement.innerHTML = a;
            }

        }

    document.getElementById("clr").onclick = function(){
        if(clr_flag){
            document.body.style.background = "darkgrey";
            clr_flag = false;
        }
        else{
            document.body.style.background = "white";
            clr_flag = true;
        }
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a!=='' && b === '' && selectedOperation == '√') {
            expressionResult = (+a)**0.5;
        }   
        else if (a!=='' && b === '' && selectedOperation == 'x²') {
            expressionResult = (+a)**2;
        }   
        else if (a!=='' && b === '' && selectedOperation == 'x!') {
            expressionResult = fact_(a);
        }  
        else if (a!=='' && b === '' && selectedOperation == '+/-') {
            expressionResult = -1 * (a);
        }
        else if ((a === '' || b === '' || !selectedOperation)){
            return
        }
        
        
        // if (a!=='' && b === '' && selectedOperation) {
            
        //     expressionResult = (+a)**0.5;
        // }   
        // alert(selectedOperation);
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = (+a) / (+b) * 100
                break;
            // case '√':
            //     expressionResult = (+a) **0.5;
            //     break;
        }

        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };