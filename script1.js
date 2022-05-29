 // function coba() {
      //     if (!onclick) {
      //         alert('not work')
      //     }

      // }

      // for (let i = 0; i < 10; i++) {
      //     console.log(i + 1)
      // }
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      // function nameCity(arg) {
      //     const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
      //     const newArr = [];
      //     for (let i = 0; i < countries.length; i++) {
      //         newArr.push(countries[i].toUpperCase());
      //     }///////////
      //     return
      // }
      // console.log(

      // const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
      //  const newArr = [];
      // for (let i = 0; i < countries.length; i++) {
      //       newArr.push(countries[i].toUpperCase())
      // }
      // console.log(newArr);

      /// EXERCISE //////
      // const countries = [
      //     'Albania',
      //     'Bolivia',
      //     'Canada',
      //     'Denmark',
      //     'Ethiopia',
      //     'Finland',
      //     'Germany',
      //     'Hungary',
      //     'Ireland',
      //     'Japan',
      //     'Kenya'
      // ]

      // const webTechs = [
      //     'HTML',
      //     'CSS',
      //     'JavaScript',
      //     'React',
      //     'Redux',
      //     'Node',
      //     'MongoDB'
      // ]

      // PENGULANGAN DARI 10 KE 0 DENGAN FOR DAN WHILE
      // for (let i = 0; i < countries.length; i++) {
      //     console.log(`this is ${countries[i]} ke ${i}`)

      // for (let i = 0; i <= 5; i++) {
      //     console.log(i)
      // }
      // }

      // let i = 0
      // while (i <= webTechs.length) {
      //     if (i == 7) {
      //         break
      //     }
      //     console.log(`ini engine ${webTechs[i]} ke ${i}`)
      //     i++
      // }

      // PENGULANGAN DARI 0 KE 10 DENGAN FOR DAN WHILE
      // for (let i = countries.length; i >= 0; i--) {
      //     console.log(`this is ${countries[i]} ke ${i - 1}`)
      // }

      // let i = 0
      // while (i >= webTechs.length) {
      //     console.log(`ini engine ${webTechs[i]} ke ${i}`)
      //     i--
      // }

      // for (let i = 5; i >= 0; i--) {
      //     console.log(i)
      // }
      // PRINT SEGITIGA
      // let x = [];
      // for (let i = 0; i < 20; i++) {
      //     for (let j = 0; j <= i; j++) {
      //         x += '*'
      //     }
      //     x += '\n'
      // }
      // console.log(x)

      // let x = [];
      // for (let i = 20; i > 0; i--) {
      //     for (let j = 0; j < i; j++) {
      //         x += '#'
      //     }
      //     x += '\n'
      // }
      // console.log(x)

      /////// BELAJAR FUNCTION PADA JAVASCRIPT//////////////////////////////

      // function functTest(array) {
      //     let sum = 0
      //     for (let i = 0; i < array.length; i++) {
      //         sum += array[i]
      //     }
      //     return sum;
      // }
      // const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
      // console.log(functTest(ages))

      // CARA BUAT ARROW FUNCTION PADA JAVASCRIPT
      // const changeCase = arr => {
      //     const newArr = []
      //     for (const element of arr) {
      //         newArr.push(element.ToUpperCase())
      //     }
      //     return newArr;
      // }
      // const countries = [
      //     'Albania',
      //     'Bolivia',
      //     'Canada',
      //     'Denmark',
      //     'Ethiopia',
      //     'Finland',
      //     'Germany',
      //     'Hungary',
      //     'Ireland',
      //     'Japan',
      //     'Kenya'
      // ]

      // console.log(changeCase(countries));

      // const name = (firsName, lastName) => {

      //     return firsName + lastName
      // }
      // alert(name('Abi', 'zarah'))

      // KALKULASI UMUR

      // function fullName(firsName, lastName = 'zarah') {
      //     return firsName + lastName
      // }
      // alert(fullName('Abi'));

      // function addNmber(a, b) {
      //     let sum = a + b;
      //     return sum;
      // }
      // console.log(addNmber(4, 5))

      // function areaOfRectangle(length, witdh) {
      //     let sum = length * witdh;
      //     return sum;
      // }
      // console.log(areaOfRectangle(40, 20))

      // function perimeterOfRectangle(length, width) {
      //     let perimeter = 2 * (length + width)
      //     return perimeter
      // }
      // console.log(perimeterOfRectangle(2, 4))

      // function volumeOfRectangle(length, width, height) {
      //     let volume = length * width * height;
      //     return volume
      // }
      // console.log(volumeOfRectangle(2, 4, 6));

      // function areaOfCircle(length, width) {
      //     let area = 3.14 * length * width
      //     return area
      // }
      // console.log(areaOfCircle(8, 8))

      // function circumOfCircle(length, width) {
      //     let circumFerence = 2 * 3.14 * length * width
      //     return circumFerence
      // }
      // console.log(circumOfCircle(8, 8))

      // function reverseArray(arr) {
      //     let myNewArr = [];
      //     for (let i = 0; i < arr.length; i++) {
      //         console.log(`${i} index ke:  ${i - 0}`)
      //     }
      //     return myNewArr

      // }
      // const arrBaru = [1, 2, 3, 4, 5];
      // console.log(reverseArray(arrBaru))

      // function reverseArray(arr) {
      //     let myNewArr = [];
      //     for (let i = arr.length; i >= 0; i--) {
      //         console.log(`${i} index ke:  ${i - 0}`)
      //     }
      //     return myNewArr

      // }
      // const arrBaru = [1, 2, 3, 4, 5];
      // console.log(reverseArray(arrBaru))

      // function sumNmber(arr){
      //     sum = 0;
      //     for(let i =0;i <arr.length;i++){
      //         sum+=arr[i];
      //     }
      //     return sum;
      // }
      // const newArr = [10,20,30];
      // console.log(sumNmber(newArr));

      // function hitungHrufA(nama){
      //     namaBaru = 0
      //     for (let i=0; i<nama.length;i++){
      //         if( nama[i] === 'a' ){
      //             namaBaru = namaBaru+1
      //         // }else if(nama[i] === 'b'){
      //         //     namaBaru += 1
      //         // }
      //         // return namaBaru;
      //     }
      //     return namaBaru
      // }}
      // const newArr = 'aa bbb'
      // console.log(hitungHrufA(newArr))

      // function jmlhAngka(conth){
      //     sum = 0
      //     for (let i = 0; i < conth.length;i++){
      //         sum += conth[i]
      //     }
      //     return sum
      // }
      // console.log(jmlhAngka(1,2,3,4,5));

      // const person = {
      //     firstName : 'Abi',
      //     lastName : 'zarah',
      //     umur : 20,
      //     skills : ['Html','CSS','JavaScript']
      // }
      // person.religion = 'muslim'
      // person.skills.push('Python')

//const users = {
//         Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//         },
//         Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//         },
//         Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//         },
//         Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//         },
//         John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//         },
//         Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//         },
//         Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//         }
//     }

//     // let count = []
//     // for((i) in users){
//     //     let test = users[i].skills.length


//     // }

//     const count = Object.entries(users)
//     for (let i of count){
//         namaObj = i[0];
//         lotPoins = i[1].points
//         if(lotPoins >= 50){
//             console.log(`${namaObj} adalah User dengan point terbanyak ${lotPoins}`);
//         }else{
//             console.log(`${namaObj} you can brooo`);
//         }

        
    // }
    // console.log(namaObj)
    // console.log(skillName)

        
        // console.log(`${i} ${b}`);
        // console.log(i);
        
        // function cleanText(arr){
            
            
        //     let pattern = /[%;@#$!&]/g
        //     let regEx = arr.replace(pattern, '')
        //     return regEx
        // }
        // sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
        // console.log(cleanText(sentence))

        // const throwErrorExampleFun = () => {
        //     let message
        //     let x = prompt('Enter a number: ')
        //     try {
        //         if (x == '') throw 'empty'
        //         if (isNaN(x)) throw 'not a number'
        //         x = Number(x)
        //         if (x < 5) throw 'too low'
        //         if (x > 10) throw 'too high'
        //     } catch (err) {
        //         console.log(err)
        //     }
        //     }
        //     throwErrorExampleFun()




    // for ((i) in users){
    //     console.log(i);
    // }
    // const newEntries = Object.entries(users)
    // console.log(newEntries);
    
    // const newEntries = Object.entries(users)
    // // const kunci = Object.keys(users)
    // for ((i) in newEntries){
    //     console.log(`test ${newEntries}`)
    // }


    /// Class pada javaScript (how tu use constructor, get, and set )

//     class ContohClass {
//         constructor(namaAwal, namaAkhir, score, skills){
//         console.log(this)
//         this.namaAwal = namaAwal
//         this.namaAkhir = namaAkhir
//         this.score = 67
//         this.skills = []
//     }
//     testNamaLengkap(){
//         const namaLengkap = this.namaAwal +  this.namaAkhir
//         return namaLengkap
//     }
//     get infoScore(){
//         return this.score
//     }
//     get infoSkills(){
//         return this.skills
//     }
//     set masukSkill(power){
//         this.skills.push(power)
//     }
// }
    
//     const cnthCls1 = new ContohClass('abi', 'zarah')
//     cnthCls1.masukSkill =  ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node']

//     console.log(cnthCls1.testNamaLengkap())
//     console.log(cnthCls1.score)
//     console.log(cnthCls1.skills)

// class Car {
//     constructor(type, color) {
//         this.type =  type
//         this.color = color
//         this.engineStatus = 'off'
//     }
    
//     engineStart () {
    
//         this.engineStatus = 'on'
//         console.log('engine start')
//     }
    
//     engingeStop () {
//         this.engineStatus = 'off'
//         console.log('engine start')
//     }
    
//     static isEngineOn (car) {
//         if (car.engineStatus === 'on') {
//         console.log('Engine On')
//         } else {
//         console.log('Engine off')
//         }
//     }  
//     static showDateTime(){
//         let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth() + 1
//         let date = now.getDate()
//         let hour = now.getHours()
//         let minute = now.getMinutes()
//         if(hour < 10){
//             hour = '0' + hour
//             console.log(hour)
//         }
//         if(minute < 10){
//             minute = '0'+minute
//         }
//         let tanggal = date + '.' + month + '.' + year
//         let waktu = hour + ":" + minute
//         let fullWaktu = tanggal + ' '+ waktu
//         return fullWaktu
//     }  
    
//     }

//     const car = new Car('red', 'suv')
//     Car.showDateTime()
//     Car.isEngineOn(car) // Engine Off
//     car.engineStart()
//     Car.isEngineOn(car) // Engine On 
// setInterval(testWaktu,1000)
// function testWaktu(){
//     let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth() + 1
//         let date = now.getDate()
//         let hour = now.getHours()
//         let minute = now.getMinutes()
//         let second = now.getSeconds()
//         if(hour < 10){
//             hour = '0' + hour
//             console.log(hour)
//         }
//         if(minute < 10){
//             minute = '0'+minute
//         }
//         if(second < 10){
//             second = '0' + second
//         }
//         let tanggal = date + '.' + '0'+ month + '.' + year
//         let waktu = hour + ":" + minute + ':' + second
//         let fullWaktu = tanggal + ' '+ waktu
//         return fullWaktu
// }
// console.log(testWaktu())
// setInterval(function(){
//     let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth() + 1
//         let date = now.getDate()
//         let hour = now.getHours()
//         let minute = now.getMinutes()
//         let second = now.getSeconds()
//         if(hour < 10){
//             hour = '0' + hour
//             console.log(hour)
//         }
//         if(minute < 10){
//             minute = '0'+minute
//         }
//         if(second < 10){
//             second = '0' + second
//         }
//         let tanggal = date + '.' + '0'+ month + '.' + year
//         let waktu = hour + ":" + minute + ':' + second
//         let fullWaktu = tanggal + ' '+ waktu
//         return fullWaktu
// },1000 )

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerText = date.toLocaleTimeString();
}