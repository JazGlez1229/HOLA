const calcular=()=>{
    let Total=0;
      let SALCHICHA=document.querySelector("#sa")
      let JAMON=document.querySelector("#ja")
      let CHULETA=document.querySelector("#ch")
      let HUEVO=document.querySelector("#hu")
      let VERONICA=document.querySelector("#ve")
      let PACHUQUEÑA=document.querySelector("#pa")
      let TEXANA=document.querySelector("#te")
      let TOLUQUEÑA=document.querySelector("#to")
      let CUBANA=document.querySelector("#cu")
      let REFRESCO=document.querySelector("#re")
      let SD=document.querySelector("#sd")
      
  
      if (SALCHICHA.checked){
        Total+=35;
  
      }
      if (JAMON.checked){
        Total+=35;
  
      }
  
      if (CHULETA.checked){
        Total+=35;
  
      }
  
      if (HUEVO.checked){
        Total+=35;
  
      }
  
      if (VERONICA.checked){
        Total+=45;
  
      }
  
      if (PACHUQUEÑA.checked){
        Total+=45;
  
      }
  
      if (TEXANA.checked){
        Total+=45;
  
      }
  
      if (TOLUQUEÑA.checked){
        Total+=45;
  
      }
  
      if (CUBANA.checked){
        Total+=60;
  
      }
  
      if (REFRESCO.checked){
        Total+=60;
  
      }
  
      if (SD.checked){
        Total+=60;
  
      }
  
  
  
  document.querySelector("#total").innerHTML=`<h3>Precio: $${Total.toFixed(2)} MXN</h3>`
  
  
  
    }
  
  
  