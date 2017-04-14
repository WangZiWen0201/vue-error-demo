import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import PartOne from '../components/partone/one'
import PartTwo from '../components/parttwo/two'
import PartThree from '../components/partthree/three'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'hello', component: Hello},
    {path: '/part-one', name: 'one', component: PartOne},
    {path: '/part-two', name: 'two', component: PartTwo},
    {path: '/part-three', name: 'three', component: PartThree}
  ]
})
