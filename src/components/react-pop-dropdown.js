import './style.scss';

import React,{PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import {ReactBackdrop} from 'react-backdrop';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class ReactPopDropdown extends ReactBackdrop{
  /*===properties start===*/
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
  /*===properties end===*/


  static newInstance(inProps) {
    return appendToDocument(ReactPopDropdown, inProps, {
      className: 'react-pop-dropdown-container'
    });
  }


  constructor(props){
    super(props);
    this.state = objectAssign(this.state,{
      items:props.items,
      freeElement:props.freeElement,
    });
  }

  _onClick = (inEvent) => {
    this.setState({visible:false});
  };


  show(inOptions,inCallback){
    const options = objectAssign({ ...this.props},inOptions);
    this.setState(options,()=>{
      super.show(inCallback);
    });
  }


  get children(){
    const {items} = this.state;
    return items.map((item,index)=>{
      return (
        <li key={index} className="item" onClick={item.onClick ? item.onClick.bind(this,item) : noop}>
            {item.icon && <i className={item.icon} />}
            <span>{item.text}</span>
        </li>
      )
    })
  }

  render(){
    const {className,animating,visible,items,template,freeElement,...props} = this.props;
    return (
      <div {...props}
      data-visible={this.state.visible}
      hidden={this.state.hidden}
      onTransitionEnd={this._onTransitionEnd}
      className={classNames('react-pop-dropdown',className)}>
        {freeElement && typeof(freeElement)==='object' && <span className="free-element">{freeElement}</span>}
        {freeElement && typeof(freeElement)==='string' && <span className="free-element" dangerouslySetInnerHTML={{html:freeElement}} />}
        <ReactBackdrop ref='backdrop' onClick={this._onClick} style={{zIndex:99,opacity:0.01}} visible={this.state.visible} />
        <menu className="react-pop-dropdown-menu">
          {this.children}
        </menu>
      </div>
    );
  }
}
