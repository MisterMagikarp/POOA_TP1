/**
 * Created by mistermagikarp on 17/09/15.
 */

var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = (function (self) {
    "use strict";

    /* testContactsUndo */
    self.AddCommand = function () {
        var temp;
        this.execute = function (contact) {
            temp = contact;
            Contact.Contacts.instance().add(contact);
        };
        this.undo = function () {
            Contact.Contacts.instance().remove(temp.id());
            temp = null;
        };

    };

    /* testContactsUndo2 */
    self.RemoveCommand = function () {
        var temp;
        this.execute = function (contactId) {
            temp = Contact.Contacts.instance().get(contactId);
            Contact.Contacts.instance().remove(contactId);
        };

        this.undo = function () {
            Contact.Contacts.instance().add(temp);
            temp = null;
        };
    };

    return self;
}(Contact || {}));