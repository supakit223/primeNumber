function cal(){
    const input1 = document.getElementById("input1").value
    let count = 0
    let output1 = ""            
    for(i=1 ; i<=input1 ; i++){       
        if (input1%i == 0) {
            count++
            if (i < input1) {
                output1 = output1 + ` ${i} , `
            } else {
                output1 = output1 + ` ${i}`
            }            
        }        
    }         
    const inpObj = document.getElementById("input1")
    if (!inpObj.checkValidity()) {
        document.getElementById("alert").classList.remove("invisible")
        document.getElementById("alert").classList.add("visible")
        document.getElementById("output1").classList.remove("visible")
        document.getElementById("output1").classList.add("invisible")   

        document.getElementById("alert").innerHTML = inpObj.validationMessage         
    }else{        
        document.getElementById("output1").classList.remove("invisible")
        document.getElementById("output1").classList.add("visible")   
        document.getElementById("alert").classList.remove("visible")
        document.getElementById("alert").classList.add("invisible")

        if (count > 2) {
            document.getElementById("output1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${input1} ไม่ใช่จำนวนเฉพาะ เพราะ มี ${output1} เป็นตัวประกอบ`           
        }else{
            document.getElementById("output1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${input1} คือ จำนวนเฉพาะ เพราะ มีเพียง 1 และ ${input1} เป็นตัวประกอบ`            
        }        
    }    
}
function resetPage() {
    // window.location.reload()
    setTimeout(function(){location.reload()}, 100)
}
