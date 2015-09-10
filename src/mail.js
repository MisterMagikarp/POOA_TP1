/**
 * Created by mistermagikarp on 10/09/15.
 */


var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = ( function (self) {
    "use strict";
    self.MailCategory = {PERSO: 1, PRO: 2};

    self.Mail = function (value,value2) {

        var addresse, categorie, init;

        this.address = function () {
            return addresse;
        };

        this.category = function(){
            return categorie;
        };

        // dans test.js on a dans le test testInitContact on utilise Contact.Contact(Contact.Gender.MR, 'Eric','Ramat') donc on va créé une fonction Contact qui va assigner la personne
        init = function (value, value2) {
            addresse = value;
            categorie = value2;
        };

        init(value,value2);


    };
    return self;
}(Contact || {}));