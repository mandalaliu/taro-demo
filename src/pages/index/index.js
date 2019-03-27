import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'
import AddQuestion from './addQuestion'

function getStore(key){
  const str =  Taro.getStorageSync(key)
  if (!str) return []
  return JSON.parse(str)
}

function setStore(key, obj){
  let str = obj
  if (typeof obj == 'object') {
    str = JSON.stringify(obj)
  }
  Taro.setStorageSync(key, str)
}

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    isShowModal: false,
    lists: getStore('userInfo')
  }

  

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  addQuestionModal = () => {
    this.setState({
      isShowModal: true
    })
  }
  closeQuestionModal = () => {
    this.setState({
      isShowModal: false
    })
  }
  addData = (options) => {
    const {lists} = this.state
    options.id = this.state.lists.length
    const item = {...options}
    lists.push(item)
    this.setState({
      lists
    }, () => {
      setStore('userInfo', this.state.lists)
      this.closeQuestionModal()
    })
  }


  render () {
    const {isShowModal, lists} = this.state
    console.log('-------',lists)
    return (
      <View className='index'>
        <View className='title'>填写个人信息</View>
        <View className='info-lists'>
          {
            lists.map((item, index) => {
              return(
                <View key={index}>
                  <View>{item.title}</View>
                  <View>{item.des}</View>
                </View>
              )
            })
          }
        </View>
        <Button onClick={this.addQuestionModal} className='btn-question'>开始填写</Button>
        {isShowModal ? <AddQuestion onCloseQuestionModal={this.closeQuestionModal} onAddData={this.addData} /> : null}
      </View>
    )
  }
}

