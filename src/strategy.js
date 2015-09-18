/**
 * Created by mistermagikarp on 10/09/15.
 */

var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = (function (self) {
        "use strict";

        /* testContactsSearchWithStrategy */
        self.FromNameSearchStrategy = function (firstName, lastName) {
            this.search = function (contact) {
                for (var iter = 0; iter < contact.length; iter++) {
                    if (contact[iter].firstName() === firstName && contact[iter].lastName() === lastName) {
                        return contact[iter];
                    }
                }
            };

        };


        /* testContactsSearchWithStrategy2 */
        self.FromMailSearchStrategy = function (email) {
            this.search = function (contact) {

                for (var iter = 0; iter < contact.length; iter++) {
                    for (var it = 0; it < contact[iter].mails().length; it++) {
                        if (contact[iter].mails()[it].address() === email) {
                            return contact[iter];
                        }
                    }
                }
                return null;
            };
        };

        /* testContactsSearchWithStrategy3  && testContactsSearchWithStrategy3 (return null)*/

        self.FromPhoneSearchStrategy = function (tel) {
            this.search = function (contact) {
                for (var iter = 0; iter < contact.length; iter++) {
                    for (var it = 0; it < contact[iter].phones().length; it++) {
                        if (contact[iter].phones()[it].number() === tel) {
                            return contact[iter];

                        }
                    }
                }
                return null;

            };
        };

        return self;
    }
    (Contact || {})
);




