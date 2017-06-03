# react-pop-dropdown
> Pop dropdown component for react.


## properties:
```javascript

  static propTypes = {
    visible:PropTypes.bool,
    items: PropTypes.array,
    freeElement: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  };

  static defaultProps = {
    visible:false,
    animating:false,
    items:[],
    freeElement:null,
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-pop-dropdown --save
// import : import {ReactPopDropdown,ReactPopDropdownCtrl} from 'react-pop-dropdown'

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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

