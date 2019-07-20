var  User  =  require('../model/services.js');

exports.index = (req, res) => {
    User.get((err, users) => {
        if(err){
            res.json({
                status: "Error occured in getting users",
                message: err,
            });
        }
        res.json({
            status: "success!",
            message: "users retrieved successfully",
            data: users
        });
    });
};

exports.newUser = (req, res) => {
    var user = new User();
    console.log(req.body);
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email ? req.body.email : user.email;

    user.save((err) => {
        if(err){
            return res.json({
                status: 'Error in inserting',
                message: err,
            });
        }
        res.json({
            status: 'New User inserted successfully!',
            message: user,
        });
    });
};

exports.view = (req, res) => {
    // console.log(req.params.id);
    var id = req.params.id;
    
    User.findById(id, (err, user)=>{
        if(err){
            return res.json({
                status: "Error In fetching user",
                message: err,
            });
        }
        res.json({
            status: 'User Found in the DB!',
            message: user
        });
    });
};

exports.update = (req, res) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {

        if(err){
            return res.json({
                status: 'Error in finding user id',
                message: err,
            });
        }
        user.name = req.body.name?req.body.name:user.name;
        user.email = req.body.email?req.body.email: user.email
        user.save((err)=>{
            if(err){
                return res.json({
                    status: 'Error in updating user details',
                    message: userrer,
                });
            }
            res.json({
                status: 'User details successfully updated',
                message: user,
            });
        });
        
    });
};

exports.delete = (req, res) => {
    var id = req.params.id;
    User.findById(id, (err, user)=>{
        if(err){
            return res.json({
                status: 'Error in finding user to delete',
                message: err,
            });
        }
        user.delete((err)=>{
            if(err){
                return res.json({
                    status: 'Error in deleting user',
                    message: err,
                });
            }
            res.json({
                status: 'Successfully deleted',
                message: user
            });
        });
    });
};