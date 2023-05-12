import mongoose, {ConnectOptions} from 'mongoose';

const dbUrl = 'mongodb://127.0.0.1:27017/mydb';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as ConnectOptions).then(() => {
  console.log('Connected to database!');
}).catch((err) => {
  console.error(err);
});

const userSchema = new mongoose.Schema({
    name: String,
    department: String,
    testnumber: Number,
  },{
    versionKey: false
});
  
  // Define the model
  const MawModel = mongoose.model("dbtest", userSchema);
  
  export default MawModel;
  

// //ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
// module.exports.saveProduct=function(model,data){
//     model.save(data)
// }