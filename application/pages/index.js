import React from 'react'
import Router from 'next/router'

class ManagementLogin extends React.Component {
  // 状态机
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  // 将要加载页面之前
  componentWillMount() {
  }
  // 加载完成页面之后
  componentDidMount() {
  }
  // 跳转home页面
  onSkipHomeFn = () => {
    // Router.push('/management/home/home')
  }

  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-center'>
          <div className='logo'>
            <h1>logo</h1>
          </div>
          <div className='switch-login'>
            <ul>
              <li
                className={this.state.switchStatus ? 'active' : null}
                onClick={() => { this.setState({ switchStatus: true }) }}
              >
                账号密码登录
                </li>
            </ul>
          </div>
          <div className='input-wrapper'>
            <ul className='common-login'>
              <li>
                <input type="text" placeholder='账号' />
              </li>
              <li>
                <input type="text" placeholder='密码' />
              </li>
            </ul>
          </div>
          <div className='login-text'>
            {/* <div className='auto-text'>
              <div className='check'></div>
              <span>自动登录</span>
            </div>
            <a href='#'>忘记密码</a> */}
          </div>
          <div className='submit-btn' onClick={this.onSkipHomeFn}>登录</div>
        </div>
      </div>
    )
  }
}

export default ManagementLogin
