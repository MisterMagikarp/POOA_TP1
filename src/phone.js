/**
 * Created by mistermagikarp on 10/09/15.
 */


var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = ( function (self) {
    "use strict";
    self.PhoneCategory = {PERSO: 1, PRO: 2};
    self.PhoneType = {MOBILE: 1, FIXE: 2};
    self.Phone = function (value,value2,value3) {

        var numero, categorie, type, init;

        this.number = function () {
            return numero;
        };

        this.category = function(){
            return categorie;
        };

        this.type = function() {
            return type;
        };



        // dans test.js on a dans le test testInitContact on utilise Contact.Contact(Contact.Gender.MR, 'Eric','Ramat') donc on va créé une fonction Contact qui va assigner la personne
        init = function (value, value2,value3) {
            numero = value;
            categorie = value2;
            type = value3;
        };

        init(value,value2,value3);


    };
    return self;
}(Contact || {}));