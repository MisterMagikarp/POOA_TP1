/**
 * Created by mistermagikarp on 10/09/15.
 */

var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = ( function (self) {
    "use strict";
    self.Gender = {MR: 1, MME: 2};

    self.Contact = function (value, value2, value3) {


        this.list = function () {
            return l;
        };

        this.toObjet = function(){
            return {
                "firstname": firstname,
                "lastname": lastname
            };

        };
        var numid, gender, firstname, lastname, init, mail, phone, Contacts;

        this.gender = function () {
            return gender;
        };

        this.firstName = function () {
            return firstname;
        };

        this.lastName = function () {
            return lastname;
        };

        this.id = function() {
            return id;
         };

        this.mails = function(){
            return mail;
        };

        this.add_mail = function (value4){
            mail.push(value4);
        }

        this.phones = function(){
            return phone;
        };

        this.add_phone = function (tel){
            phone.push(tel);
        }

        this.addPhone = function(tel){
            phone.push(tel);
        }

        this.removePhone = function (tel) {
            for (var iter = 0; iter < phone.length; iter++) {
                if(phone[iter] === tel){
                    phone[iter].pop();
                }
            }
        }

        this.FromNameSearchStrategy = function (nom, prenom){

        };


        var id= function(){
            return id ='xxxx-xxxx-xxxx-xxxx-xxxx'. replace (/x/g , function (c) {
                var r = Math . random () *16|0 , v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString (16) ;
            });
        };


        // dans test.js on a dans le test testInitContact on utilise Contact.Contact(Contact.Gender.MR, 'Eric','Ramat') donc on va créé une fonction Contact qui va assigner la personne
        init = function (value, value2, value3) {
            gender = value;
            firstname = value2;
            lastname = value3;


            numid=id();
            mail = new Array(0);
            phone = new Array(0);
        };

        this.changePhone = function(numero,newnumero){
            for (var iter = 0; iter < phone.length; iter++) {
                if(phone[iter].number() === numero){
                    phone[iter] = new Contact.Phone(newnumero,phone[iter].type(), phone[iter].category());
                }
            }

            for (var i =0; i < observer.length; i++){
                observer[i].notified(this);
            }

        };
        var observer=[];
        this.register = function(proxy){
            observer.push(proxy);
        };

        var tag;

        this.addTag = function(tag1){
            tag = tag1;
        };

        this.tag = function(){
            return tag;
        };

        init(value, value2, value3);


    };
    return self;
}(Contact || {}));