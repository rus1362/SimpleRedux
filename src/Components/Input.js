import React, { Component } from 'react'

export default class Input extends Component {
 
  render() {
    const {name, desc,type, onchange,value} = this.props;
    const onChangedProxy =(e)=>{
      //This proxy is here to be able to pass e,name as argument to parent function onchange.
      //i couldnt find a better way, i got error when tried to "onChange={()=> onchnage(name)}"
      //Some how Event object gets undefined and dont pass through.
      //I tried to Call o bind this but get the same Error.
      //UnComment 22: "onChange= {()=> onchange(name)}"  to See
            onchange(e); 
    }
    return (
      <div style={{'margin':'1rem', display : this.props.isinline ?  'inline' : 'block'    }}>
        <label htmlFor={name}>{desc+ ' :'}</label>
          <input  style={{'margin-left' : "1.5rem"}} 
                  name={name} 
                  type= {type} placeholder={desc}
                  onChange= {onChangedProxy}
                  value={value}
                 //  onChange= {()=> onchange(name)}
          />
      </div>
    )
  }
}
