import './dev.scss';

import {
  ReactPopDropdown,
  ReactPopDropdownCtrl,
} from './main';

/*===example start===*/

// install: npm install afeiship/react-pop-dropdown --save
// import : import ReactPopDropdown from 'react-pop-dropdown'

class App extends React.Component{
  constructor(props){
    super(props);
    window.dev = this;
  }

  componentWillMount(){
    ReactPopDropdownCtrl.createInstance();
  }


  _click1 = e =>{
    ReactPopDropdownCtrl.show({
      items:[
        {
          text:'发起群聊',
          icon:'ion-chatbubbles',
          onClick:function(){
            console.log('group chat!');
          }
        },
        {
          text:'添加好友',
          icon:'ion-person-add',
          onClick:function(){
            console.log('add friend');
          }
        },
        {
          text:'扫一扫',
          icon:'ion-qr-scanner'
        },
        {
          text:'收付款',
          icon:'ion-card'
        }
      ]
    })
  };


  render(){
    return (
      <div className="hello-react-pop-dropdown">
        <button onClick={this._click1}>show wechat popup</button>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
