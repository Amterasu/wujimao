import App from '../App'

const HomePage = r => require.ensure([], () => r(require('../pages/home/HomePage')), 'HomePage')

export default [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

