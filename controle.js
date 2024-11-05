// Exercice1:
// var nom=''
// do{
//   nom=prompt('saisi votre nom')
// }while(nom==null ||nom==""||isNaN(nom)==false)
// document.write('votre nom est:'+nom)
// var prenom=''
// do{
//   prenom=prompt('saisi votre prenom')
// }while(prenom==null ||prenom==""||isNaN(prenom)==false)
// document.write('votre prenom est:'+prenom)
// var age=0
// do{
//   age= Number(prompt('entre age'))
// }while(age<=0 ||age>100||isNaN(age)==true)
// document.write('votre age est:'+age+'<br>')
// var adresse=''
// do{
//   adresse=prompt('saisi votre adresse')
// }while(adresse==null ||adresse=="")
// document.write('votre adresse est:'+adresse)
// var email=''
// do{
//   email=prompt('saisi votre email')
// }while(email==null ||email=="")
// document.write('votre email est:'+email)











// Exercice2
// function somme(){
//     var n1=Number(document.getElementById("n1").value)
//     var n2=Number(document.getElementById("n2").value)
//     var para=document.getElementById('para')
//     var plus=document.getElementById('plus')
//     var moins=document.getElementById('moins')
//     var mul=document.getElementById('mul')
//     var div=document.getElementById('div')
//     if (plus.checked) {
//         para.innerText=n1+n2
//     }else if (moins.checked) {
//         para.innerText=n1-n2
//     }else if (mul.checked) {
//         para.innerText=n1*n2
//     }else if (div.checked) {
//         if (n2==0) {
//             para.innerText="error"
//         }else{
//             para.innerText=n1/n2
//         }
//     }
//     else{
//         para.innerText="Errooooooooor"
//     }
// }











// Exercice3
// var rg =/^(0|\+212)\d{9}$/
// var tel = prompt('saisi votre tel')
// if(rg.test(tel)){
//     document.write('valider')
// }
// else{
//     alert('nom valider')
// }
// var rg =/^([0-2]{1}[1-9]{1}|30|31)\/(0[1-9]|1[0-2])\/\d{4}$/
// //var rg =/^\d{2}\/\d{2}\/\d{4}$/
// var datenaissance=prompt('entre votre date de naissance')
// if(rg.test(datenaissance)){
//     document.write('valider ')
// }
// else{
//     alert('nom valider')
// }











//exercice4:
// 1
// S1=new Stylo("nom:","stylobleue","marque:","bik","quantite:",)



// 2
// function Camion(ma, mo, mt) {
//    this.marque= ma;
//    this.module = mo;
//    this.matricule = mt;
// }
// c1=new Camion('fords',"suzuki","09118|A|68")
// document.write(c1.marque+" "+c1.matricule+" ")






// exercice5
var data = '{"cin":"jh6666","nom": "ahmed","prenom" :"slimani","age":35}'
var personn =JSON.parse(data)
document.write("<h2>"+"cin:"+personn.cin+"<br>"+"</h2>")
document.write("<h2>"+"nom:"+personn.nom+"<br>"+"</h2>")
document.write("<h2>"+"prenom:"+personn.prenom+"<br>"+"</h2>")
document.write("<h2>"+"age:"+personn.age+"<br>"+"</h2>")
