/**
 * Created by mistermagikarp on 10/09/15.
 */


var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = ( function (self) {
    "use strict";

    self.Builder = function () {

        var contact;

        this.createMinimalContact = function(value,value2,value3){
            contact = new Contact.Contact(value,value2,value3);
            return contact;
        };

        this.createContactWithProfessionalMail = function(value,value2,value3,value4){
            contact = new Contact.Contact(value,value2,value3);
            contact.add_mail(new Contact.Mail(value4, Contact.MailCategory.PRO));
            return contact;
        };

        this.createContactWithProfessionalMobile= function(value,value2,value3,value4){
            contact = new Contact.Contact(value,value2,value3);
            contact.add_phone(new Contact.Phone(value4,Contact.PhoneCategory.PRO,Contact.PhoneType.MOBILE));
            return contact;
        };

    };
    return self;
}(Contact || {}));