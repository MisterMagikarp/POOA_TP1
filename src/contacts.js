/**
 * Created by mistermagikarp on 10/09/15.
 */

var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = (function (self) {
    "use strict";

    var liste = null;

    //private
    var List = function () {
        var l = [];

        this.clear = function () {
            l = [];
        };

        this.size = function () {
            return l.length;
        };

        this.add = function (value) {
            l.push(value);
        };

        this.remove = function (id) {
            for(var iter=0;iter< l.length;iter++){
                if(l[iter].id() === id){
                    l.splice(iter,1);
                }

            }
        };

        this.getFromName = function (firstName,lastName) {
            var foo=[];

            for (var iter=0; iter< l.length;iter++){
                if (l[iter].firstName() === firstName && l[iter].lastName() === lastName){
                    foo.push(l[iter]);
                }

            }
            if (foo.length >1){
                return foo;
            } else if (foo.length == 0){
                return null;
            } else{
                return foo[0];
            }

        };

        this.get = function (id) {

            for (var iter = 0;iter< l.length;iter++){

                if (l[iter].id() == id){
                    return l[iter];
                }
            }

            };


    };


    // public
    self.Contacts = {

        /*function createInstance() {
         var liste = new Array(0);
         return liste;
         }*/

        //dans les tests on a "Contact.Contacts.instance().clear();" Contacts n'est pas une classe
        instance: function () {
            if (!liste) {
                liste = new List();
            }
            return liste;
        }
};
return self;
}
(Contact || {})
)
;




