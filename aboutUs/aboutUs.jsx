import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Layout from '@/components/Layout'
import './index.less'
import Common from '@/units/Common'

export default class Index extends Component {


	state = {

	}
	componentWillMount() {


	}

	componentDidMount() {
	}

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	render() {
		return (
			<Layout>
				<View id="aboutUs">
					<View className="aboutUsInfo">
						<View className="aboutUsInfoTop">
							<View style={{ backgroundImage: 'url(' + require('../../components/img/project/starticon.png') + ')' }} className="aboutUsInfoTopImg"></View>
							<View className="aboutUsInfoTopName">维客-客生客</View>
						</View>
						<View className="aboutUsInfoCustomBox">
							<View className="aboutUsInfoCustom">
								<Image src={require('../../components/img/project/copy.png')} className="aboutUsInfoCustomImg"></Image>
								<View className="aboutUsInfoCustomName">客服热线：400-0000-000</View>
							</View>
							<View className="aboutUsInfoCustom">
								<Image src={require('../../components/img/project/copy.png')} className="aboutUsInfoCustomImg"></Image>
								<View className="aboutUsInfoCustomName">客服邮箱：service@qq.com</View>
							</View>
							<View className="aboutUsInfoCustom">
								<Image src={require('../../components/img/project/copy.png')} className="aboutUsInfoCustomImg"></Image>
								<View className="aboutUsInfoCustomName">当前版本：v 3.2.1</View>
							</View>
						</View>
					</View>
					<View className=""></View>
				</View>
			</Layout>
		)
	}
}
