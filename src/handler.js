var Contact = Contact || {}; // déclaration d'une chose qu'il ne connait pas, il se peut que contact soit définie dans un autre .js,  si il a pas été créé on va créé un namespace vide. Erreur qu'on ne peut pas enlever
Contact = ( function (self) {
    "use strict";
    self.Handler = function (contacts, handler) {

        var parent;
        var enfant;

        var init = function(contacts, handler) {
            parent = contacts;
            enfant = handler;
        }
        init(contacts,handler);

        this.parent = function(){
            return parent;
        };

        this.enfant = function(){
            return enfant;
        };

        };

    self.Chain = function(handler){

        var chain;

        var init = function(handler){
            chain = handler;
        };
        init(handler);

        this.processRequest = function(request){
            var tempChain = chain;
            do {
                if (tempChain.parent().size() === 0 || tempChain.parent().contientTag(request.getContact().tag())) {
                    tempChain.parent().add(request.getContact());
                    return true;
                } else {
                    tempChain = tempChain.enfant();
                }
            } while (tempChain.parent() !== null);
        };

        self.Request = function(req) {
            var contact;
            var init = function(req){
                contact = req;
            };
            this.getContact = function(){
                return contact;
            };
            init(req);
        };

    };
    return self;
}(Contact || {}));