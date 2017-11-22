import { destroyVM, createTest } from '../utils'
import HelloWorld from '@/components/InputDemo.vue'

describe('InputDemo.vue', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('测试获取默认元素内容', () => {
    vm = createTest(HelloWorld, {}, true)
    expect(vm.$el.querySelector('input.ivu-input').placeholder).to.equal('请输入名称')
  })
  it('测试属性渲染', () => {
    vm = createTest(HelloWorld, { form: {name: 'xbw'} }, true)
    expect(vm.$el.querySelector('input.ivu-input').value).to.equal('xbw')
  })
})
