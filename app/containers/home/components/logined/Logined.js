import React, {Component} from 'react'
import style from './style.css'
import {Button} from 'antd'
var divStyle = {    
    padding: "5px",    
  };
export default class Logined extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = ()=>{
        console.log(this.props.logout);
        this.props.logout();
    };


    render() {        
        return (
            <div className={style.container}>
            <img src={require('./timg.jpeg')}/>
            <p>欢迎：{this.props.userInfo.username}</p>
            <p className={style.centerP}>光临我的博客~</p>
            
            {this.props.userInfo.userType === 'admin' ?
                <Button className={style.button} onClick={() => this.props.history.push('/admin')} type="primary">管理</Button> : null}
            <br>
            </br>

            <Button  className={style.button} onClick={this.handleLogout}>退出</Button>

            <br>
            </br>
        </div>
        )
    }
}
