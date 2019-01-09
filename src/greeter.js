import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.text}
      </div>
    );
  }
}

export default Greeter

// class addInner{
//     add(obj,inner,objParents){
//         let element = document.createElement(obj);
//         element.textContent = inner;
//         objParents.appendChild(element);
//     }
// }
//
// export default addInner








// module.exports = function(){
//     let greeter = document.createElement("div");
//     greeter.textContent = "我想好好学习",
//     return greeter
// }
