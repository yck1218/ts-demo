import React from 'react';


type Props = {
    src: string,
    show: boolean,
  }

export default class  Home  extends React.Component{
    constructor(props:Props){
        super(props)
    }

    render(){
        return (
            <div>我是一个ts组件</div>
        )
    }
}