import App from '../App'

const HomePage = r => require.ensure([], () => r(require('../pages/home/HomePage')), 'HomePage')
const CommunityPage = r => require.ensure([], () => r(require('../pages/community/CommunityPage')), 'CommunityPage')
const CoursePage = r => require.ensure([], () => r(require('../pages/course/CoursePage')), 'CoursePage')
const MicroClassPage = r => require.ensure([], () => r(require('../pages/microClass/MicroClassPage')), 'MicroClassPage')

export default [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/index',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/microclass',
    name: 'MicroClassPage',
    component: MicroClassPage
  },
  {
    path: '/course',
    name: 'CoursePage',
    component: CoursePage
  },
  {
    path: '/community',
    name: 'CommunityPage',
    component: CommunityPage
  },
]

