import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import style from '../styles/auto-complete.less';

function getItemValue (item) {
  return item.value || item;
}

class AutoComplete extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false, // 新增的下拉框显示控制开关
      displayValue: '',
      activeItemIndex: -1
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }
  handleChange(value){
    this.setState({
        activeItemIndex: -1, 
        displayValue: ''
    });
    // 原来的onValueChange改为了onChange以适配antd的getFieldDecorator
    this.props.onChange(value);
  }
  handleKeyDown(e){
    const {activeItemIndex} = this.state;
    const {options} = this.props;

    switch (e.keyCode){
      // 13为回车键的键码（keyCode）
      case 13:{
         // 判断是否有列表项处于选中状态
        if(activeItemIndex >= 0){
           // 防止按下回车键后自动提交表单
          e.preventDefault()
          e.stopPropagation()
          this.handleChange(getItemValue(options[activeItemIndex]))
        }
        break;
      }
      case 38:
      case 40:{
        e.preventDefault();
        // 使用moveItem方法对更新或取消选中项
        this.moveItem(e.keyCode === 38 ? 'up' : 'down')
        break;
      }
    }
  }
  moveItem(direction){
    const {activeItemIndex} = this.state
    const {options} = this.props;
    const lastIndex = options.length - 1;
    let newIndex = -1;

    // 计算新的activeItemIndex
    if(direction === 'up'){
      if(activeItemIndex === -1){
        // 如果没有选中项则选择最后一项
        newIndex = lastIndex
      }else{
        newIndex = activeItemIndex - 1;
      }
    }else{
      if(activeItemIndex < lastIndex){
        newIndex = activeItemIndex + 1;
      }
    }

    // 获取新的displayValue
    let newDisplayValue = ''
    if(newIndex >= 0){
      newDisplayValue = getItemValue(options[newIndex])
    }

    // 更新状态
    this.setState({
      displayValue:newDisplayValue,
      activeItemIndex:newIndex
    })
  }
  handleEnter(index){
      const currentItem = this.props.options[index]
      this.setState({
        activeItemIndex: index,
        displayValue: getItemValue(currentItem)
      })
  }
  handleLeave(){
    this.setState({activeItemIndex: -1, displayValue: ''});
  }

  render(){
    const {show, displayValue, activeItemIndex} = this.state;
    const {value, options} = this.props;

    return (
      <div className={style.wrapper}>
        <Input 
          value={displayValue || value}
          onChange={e => this.handleChange(e.target.value)}
          onKeyDown={this.handleKeyDown}
          onFocus={() => this.setState({show:true})}
          onBlur={() => this.setState({show: false})}
        />
        {show && options.length > 0 && (
          <ul className={style.options} onMouseLeave={this.handleLeave}>
            {
              options.map((item,index) => {
                return (
                  <li
                    key={index}
                    className={index === activeItemIndex ? style.active : ''}
                    onMouseEnter={() => this.handleEnter(index)}
                    onClick={() => this.handleChange(getItemValue(item))}
                    >
                    {item.text || item}
                  </li>
                )
              })
            }
          </ul>
        )}
      </div>
    )
  }
}
AutoComplete.propTypes = {
  value: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func // 原来的onValueChange改为了onChange以适配antd的getFieldDecorator
};
export default AutoComplete;
