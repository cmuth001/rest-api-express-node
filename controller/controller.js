var  Model  =  require('../model/services.js');
var modelObj = new Model();
class Controller{

    get_users(){
        var result = modelObj.get_users();
        return(result);
    }
    get_user(id){
        var result = modelObj.get_user(id);
        return(result);
    }
}
module.exports =  Controller;
