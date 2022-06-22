exports.welcome = async(req, res, next)=>{
  try {
    res.send({message: "Hello World!"});
  } catch (error) {
    next();
  }
}