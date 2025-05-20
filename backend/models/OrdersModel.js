const {model}=require("mongoose")

const {OrdersSchema}=new require("../scemas/OrdersSchema")

const OrdersModel=new model("order",OrdersSchema);