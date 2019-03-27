import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './dialog.scss'

export default class Dialog extends Component {
    render () {
        return (
            <View className='dialog-body'>
                {this.props.children}
            </View>
        )
    }
}