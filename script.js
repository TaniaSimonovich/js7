//Калькулятор

// let Calc = function(){
//     this.setActive = function(status){
//         this.active = status;
//         if (this.active = true){
//             console.log('Vklychen calc');
//             this.get();
//         }else{
//             console.log('Viklychen calc');
//             // break
//         }
//     }
//     this.get = function(){
//         this.a = Number(prompt('Vvedite znachenie a:'));
//         this.b = Number(prompt('vvedite znachenie b:'));
//         this.operation = prompt('Vvedite deistvie: +, -, *, /');

//         this.deistvie();
//     }
//     this.deistvie = function(){
//         switch(this.operation){
//             case '+':
//                 this.result = this.a + this.b;
//                 break;
//             case '-':
//                 this.result = this.a - this.b;
//                 break;
//             case '*':
//                 this.result = this.a * this.b;
//                 break;
//             case '/':
//                 this.result = this.a / this.b;
//         }
//         this.show();
//     }
//     this.show = function(){
//         alert(this.a + '' + this.operation+ '' + this.b + '  =' + this.result);
//     }
// }

// let calc = new Calc();
// calc.setActive(false);

// Лампочка

// let Bulb = function(){
//     this.infoBulb = function(power, costElectricity){
//         this.power = power;
//         this.costElectricity = costElectricity;
//         this.consumption();
//     }
//     this.consumption = function(){
//         this.newConsumption = this.power * this.costElectricity;
//         this.gorenie();
//     }
//     this.gorenie = function(){
//         console.log(this.newConsumption);
//     }
// }

// let c = new Bulb();
// c.infoBulb(777, 779);

// Чайник

// let Kettle = function(){
//     this.Kettle = function(){
//         this.power = Number(prompt('Vvrdite moshnost'));
//         this.volume = Number(prompt('Vvrdite volume'));
//         this.water = Number(prompt('Vvrdite water'));

//         this.raschet();
//     }
//     this.raschet = function(){
//         // this.nachalnayT = Number(prompt('Введите начальную температуру'));
//         // this.konechnyT = Number(prompt('Введите конечную температуру'));
//         this.result = (0.00117 * this.volume * this.water) / this.power;
//         console.log(this.result);
//     }
// }

// let c = new Kettle();
// c.Kettle();

//car

// let Car = function(){
//     this.infoCar = function(){
//         this.marka = prompt('vvedite marky avto');
//         this.number = prompt('vvedite nomer');
//         this.speed();
//     }
//     this.speed = function(){
//         this.znachSpeed = Number(prompt('Vvedite skorost'));
//         this.raschet();
//     }
//     this.raschet = function(){
//         this.time = Number(prompt('vvedite vremy v pyti'));
//         this.result = this.znachSpeed * this.time;
//         alert('Вы проехали ' + this.result + ' км' );
//     }
// }

// let car2 = new Car();
// car2.infoCar();

//kontakti

// let Kontakti = function(){
//     this.info = function(){
//         this.name = prompt('vvedite fio');
//         this.age = prompt('vvedite vosrast');
//         this.phone = prompt('vvedite nomer telephona');
//         this.email = prompt('vvedite email');
//         this.proverka();
//     }
//     this.proverka = function(){
//         if (this.age > 0 && this.age > 18){
//             console.log('vosrast verniy');
//         } else {console.log('vosrast neverniy');
//     }
//     this.vivodOne();
//     }
//     this.vivodOne = function(){
//         this.oneFio = prompt('Vvedite fio cheloveka, dly polychenia inform');
//         alert('Имя: ' + this.name + ' Возраст: ' + this.age+ ' Номер телефона: '+ this.phone + ' Почта: ' +this.email);
//     }
// }

// let people = new Kontakti();
// people.info();