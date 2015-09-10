/**
 * Created by mistermagikarp on 10/09/15.
 */

var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = ( function (self) {
    "use strict";
    self.Gender = {MR: 1, MME: 2};

    self.Contact = function (value, value2, value3) {

        var id, gender, firstname, lastname, init, mail, phone;

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

        this.add_phone = function (value5){
            phone.push(value5);
        }


        // dans test.js on a dans le test testInitContact on utilise Contact.Contact(Contact.Gender.MR, 'Eric','Ramat') donc on va créé une fonction Contact qui va assigner la personne
        init = function (value, value2, value3) {
            gender = value;
            firstname = value2;
            lastname = value3;

            id ='xxxx - xxxx - xxxx - xxxx - xxxx'. replace (/ x /g , function ( c ) {
                var r = Math . random () *16|0 , v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString (16) ;
            });

            mail = new Array(0);
            phone = new Array(0);
        };

        init(value, value2, value3);


    };
    return self;
}(Contact || {}));