/**
 * User: puti.
 * Time: 2018/1/27 下午9:55.
 * GitHub:https://github.com/puti94
 * Email:guoquanxie@foxmail.com
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react'
import {appTheme} from '../store/Theme'
/**
 * 默认错误视图,如果想自定义错误视图可继承此类重载renderErrorView()方法并声明成observer。
 */
@observer
export class ErrorView extends Component {
    static propTypes = {
        btnTitle: PropTypes.string,
        onPress: PropTypes.func,
        store: PropTypes.object.isRequired,
        errorView: PropTypes.object
    };

    static defaultProps = {
        btnTitle: '重新加载'
    };

    renderErrorView() {
        return (<View style={style.container}>
            {
                this.props.errorView ? this.props.errorView :
                    <View>
                        <Text>{this.props.store.errorMsg}</Text>
                        <TouchableOpacity style={[style.btn_style, {borderColor: appTheme.themeColor}]}
                                          onPress={this.props.onPress}>
                            <Text>{this.props.btnTitle}</Text>
                        </TouchableOpacity>
                    </View>
            }

        </View>)
    }

    render() {
        return this.props.store.isError ? this.renderErrorView() : null;
    }
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: '#e6e6e6'
    },
    btn_style: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 3,
        borderWidth: 1,

    }
});

