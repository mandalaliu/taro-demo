import Taro, { Component } from '@tarojs/taro'
import { View, Button, Input, Textarea } from '@tarojs/components'
import Dialog from './dialog'
import './addQuestion.scss'

export default class AddQuestion extends Component {
    btnCancel = () => {
        this.props.onCloseQuestionModal()
    }
    state = {
        title: '',
        des: ''
    }
    btnOk = () => {
        this.props.onAddData(this.state)
    }
    changeTitle = (event) => {
        console.log('event', event.target.value)
        this.setState({
            title: event.target.value
        })
    }
    changeDes = (event) => {
        this.setState({
            des: event.target.value
        })
    }
    render () {
        return (
            <View className='add-question-modal'>
                <Dialog>
                    <View>
                        <Input onInput={this.changeTitle} className='question-title' placeholder='请输入标题' />
                        <Textarea onInput={this.changeDes} className='question-des' placeholder='请输入描述' />
                    </View>
                    <View className='dialog-footer'>
                        <Button className='btn cancel' onClick={this.props.onCloseQuestionModal}>取消</Button>
                        <Button className='btn ok' onClick={this.btnOk}>确定</Button>
                    </View>
                </Dialog>
            </View>
        )
    }
}