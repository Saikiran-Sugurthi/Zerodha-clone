const {model}=require("mongoose");

const WatchListSchema=require("../schemas/WatchListSchema");

const WatchListModel=new model("wacthlist",WatchListSchema);

module.exports={WatchListModel}