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

            if (this.inCache(strategie) && cache[strategie] !== null) {
                return cache[strategie];
            }

           // console.log(tableauProxy.length);

            for (var i=0; i<tableauProxy.length; i++) {

               // console.log(tableauProxy[i].list().length);

                resultat = strategie.search(tableauProxy[i].list());

                if (resultat !== null) {
                    cache[strategie] = resultat;
                    resultat.register(this);
                    return resultat;
                }
            }
            return resultat;
        };

        this.inCache = function (strategie) {
            if(cache[strategie] !== undefined){
                return true;
            }
          return null;
        }

        this.notified = function(contact){
            for(var i in cache){
                if (cache[i] === contact){
                    cache[i] = null;
                }
            }
        };

        init(tableauContact);
    };
    return self;
}(Contact || {}));