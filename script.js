function cal1(){    
    const inpObj1 = document.getElementById("input1")
    if (!inpObj1.checkValidity()) {
        document.getElementById("alert1").classList.remove("invisible")
        document.getElementById("alert1").classList.add("visible")
        document.getElementById("alert2").classList.remove("visible")
        document.getElementById("alert2").classList.add("invisible")
        document.getElementById("output1").classList.remove("visible")
        document.getElementById("output1").classList.add("invisible")   

        document.getElementById("alert1").innerHTML = inpObj1.validationMessage         
    }else{        
        document.getElementById("output1").classList.remove("invisible")
        document.getElementById("output1").classList.add("visible")   
        document.getElementById("alert1").classList.remove("visible")
        document.getElementById("alert1").classList.add("invisible")
        document.getElementById("alert2").classList.remove("visible")
        document.getElementById("alert2").classList.add("invisible")
        
        const input1 = document.getElementById("input1").value
        let count = 0
        let output1 = ""            
        for(let i=1 ; i<=input1 ; i++){       
            if (input1%i == 0) {
                count++            
                if (i < input1) {
                    output1 = output1 + ` ${i} ,`
                } else {
                    output1 = output1 + ` ${i}`
                }            
            }        
        }    
        if (count > 2) {
            document.getElementById("output1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${input1} ไม่ใช่จำนวนเฉพาะ เพราะ มี ${output1} เป็นตัวประกอบ`           
        }else{
            document.getElementById("output1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${input1} คือ จำนวนเฉพาะ เพราะ มีเพียง 1 และ ${input1} เป็นตัวประกอบ`            
        }        
    }    
}
function cal2() {    
    const inpObj2 = document.getElementById("input2")
    if (!inpObj2.checkValidity()) {
        document.getElementById("alert1").classList.remove("visible")
        document.getElementById("alert1").classList.add("invisible")
        document.getElementById("alert2").classList.remove("invisible")
        document.getElementById("alert2").classList.add("visible")
        document.getElementById("output1").classList.remove("visible")
        document.getElementById("output1").classList.add("invisible")   

        document.getElementById("alert2").innerHTML = inpObj2.validationMessage         
    }else{        
        document.getElementById("output1").classList.remove("invisible")
        document.getElementById("output1").classList.add("visible")   
        document.getElementById("alert1").classList.remove("visible")
        document.getElementById("alert1").classList.add("invisible")
        document.getElementById("alert2").classList.remove("visible")
        document.getElementById("alert2").classList.add("invisible")

        const input2 = document.getElementById("input2").value   
        let output2 = "" 
        let amount = 0          
        for(let i=2 ; i<=input2 ; i++){         
            let count = 0      
            for(let j=1 ; j<=i ; j++){
                if (i%j == 0) {
                    count++                        
                }            
            }        
            if(count <= 2){
                amount++
                if (i < input2) {
                    output2 = output2 + ` ${i} , `
                } else {
                    output2 = output2 + ` ${i}`
                }       
            }
        }         
        document.getElementById("output1").innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;จำนวนเฉพาะจาก 2 ถึง ${input2} มี ${amount} ตัว ดังนี้ ${output2}`           
    }                
}
function resetPage() {
    // window.location.reload()
    setTimeout(function(){location.reload()}, 100)
}


