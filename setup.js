/*
 * 创建数据库，建立连接
*/


var Sequelize = require("sequelize"),
	config    = require("./config");

var sequelize = new Sequelize(config.database , config.user , config.password , { "host":config.host , "port":config.port , "timezone":config.timezone , logging:console.log });


/* Users table */
var User = sequelize.define("User" , {
	"name" : Sequelize.STRING,
	"phone": { type : Sequelize.CHAR(11) , allowNull : false , unique : true },
	"password" : { type: Sequelize.STRING , allowNull : false },
	"level" : { type : Sequelize.CHAR(2) , allowNull : false },
	"email" : Sequelize.STRING,
	"city" : Sequelize.STRING
});


/*User.build({"name":"mast2" , "phone":15210593134 , "password" : "abc123" , "level" : "01" , "email" : "123456789@qq.com" , "city" : "深圳"}).save();*/


/* Orders table */
var Order = sequelize.define("Order" , {
	"u_id" : { type : Sequelize.INTEGER , allowNull : false },
	"operator" : Sequelize.STRING,
	"seller" : Sequelize.STRING,
	"total" : Sequelize.DECIMAL(9,2)
});

/*Order.build({"u_id":1 ,"operator" : "佐助" , "seller":"九尾32"  , "total" : 3215.46}).save();*/


/* Goods table */
var Goods = sequelize.define("Goods" , {
	"u_id" : { type : Sequelize.INTEGER , allowNull : false },
	"o_id" : { type : Sequelize.INTEGER , allowNull : false },
	"operator" : Sequelize.STRING,
	"seller"  : Sequelize.STRING,
	"type_name" : { type : Sequelize.STRING , allowNull : false },
	"type_id" : { type : Sequelize.INTEGER , allowNull : false },
	"price" : { type : Sequelize.DECIMAL(9,2) , allowNull : false  },
	"weight" : { type : Sequelize.DECIMAL(8,3) , allowNull : false  },
	"one_total" : { type : Sequelize.DECIMAL(9,2) , allowNull : false  }
});

/*Goods.build({ "u_id":1 , "o_id":1 , operator:"佐助" , "seller":"九尾" , "type_name":"一级铁" ,"type_id":1, "price":"1.2" , "weight":"200" , "one_total":"240" }).save();*/

/* types table */
var Type = sequelize.define("Type" , {
	"u_id" : { type : Sequelize.INTEGER , allowNull : false },
	"name" : { type : Sequelize.STRING , allowNull : false },
	"price": { type : Sequelize.DECIMAL(9,2) , allowNull : false  }
});

/*Type.build({ "u_id" : 1 , "name":"一级铁" , "price":1.2 }).save();*/




// sequelize.sync({force:true});
sequelize.sync();



module.exports = {
	"User" : User,
	"Order": Order,
	"Type": Type,
	"Goods":Goods
}




