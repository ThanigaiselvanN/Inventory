import mongoose from "mongoose";
import config from "config";
import { createMongoUri } from "./../../utils/URIUtil";

mongoose.Promise = global.Promise;
const mongoConfig = config.get('mongo');
var uri = "mongodb://lyncspace:ssaug%4029@cluster0-shard-00-00-b3lls.mongodb.net:27017,cluster0-shard-00-01-b3lls.mongodb.net:27017,cluster0-shard-00-02-b3lls.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(uri, function (err) {
    console.log("MongoDB Connection URI: ", createMongoUri(mongoConfig));
    if (err) {
        console.log("Failed to connect to MongoDB");
        console.error(err);
    } else {
        console.log("Successfully connected to MongoDB");
    }
});
