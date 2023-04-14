let dispay_input = document.getElementById("result")
let delete_input = document.getElementById("btn1")

function clearScreen() {
    document.getElementById("result").value = "";
    }



    //     }
        delete_input.addEventListener('click', () => {
            dispay_input.value = dispay_input.value.slice(0, -1);
        })

    

    function display(value) {
    document.getElementById("result").value += value;
    }
    
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }