/**
 * Created by mistermagikarp on 18/09/15.
 */

var Contact = Contact || {};
Contact = (function (self) {
    "use strict";

    /* testContactsProxy */
    self.ProxyCache = function (tableauContact) {
        var tableauProxy = [];
        var init = function (tableauContact) {

            tableauProxy = tableauContact;


        };

        var cache = [];
        this.search = function (strategie) {
            var resultat = null;
            for (var iter in tableauProxy) {
                resultat = strategie.search(tableauProxy[iter].list());
                if (resultat !== null) {
                    cache.push(strategie);
                    return resultat;
                }
            }
            return resultat;
        };

        this.inCache = function (strategie){
            for (var iter=0;iter<cache.length;iter++) {
                if (cache[iter] === strategie) {
                    return true;
                }
            }return false;
        }
        init(tableauContact);
    };
    return self;
}(Contact || {}));