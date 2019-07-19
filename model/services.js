
var data = { 1: "Tony",
             2: "Lisa",
             3: "Michael",
             4:"Ginger"
            };
            


class Services{
    get_mongo_connection(){

    }
    get_users(){
        return(data);
    }
    get_user(id){
        user = data[id];
        return(user);
    }

}
module.exports = Services;
