/**
 * Created by mistermagikarp on 18/09/15.
 */

var Contact = Contact || {};
Contact = (function (self) {
    "use strict";
    self.ChangePhoneStrategy = function (prenom, nom, numero, newnumero) {
        this.change = function(prenom, nom, numero, newnumero){
            var contact = Contact.FromNameSearchStrategySearchStrategy(prenom,nom);
            console.log(contact);

        };
    };
    return self;
}(Contact || {}));