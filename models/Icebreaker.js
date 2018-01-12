'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}
module.exports=Icebreaker
console.log(module.filename);
console.log(module.id);
console.log(module.exports);
