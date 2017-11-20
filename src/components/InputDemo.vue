<template>
  <div id="input">
   <Form class="step-form" ref="form" :model="form" :rules="rules" :label-width="100">
                    <FormItem label="姓名:" prop="name">
                        <Input v-model="form.name" type="text" placeholder="请输入名称"/>
                    </FormItem>
   </Form>
  </div>
</template>
<script>
  export default {
    name: 'InputDemo',
    data () {
      return {
        form: {
          name: ''
        },
        rules: {
          name: [{ required: true, message: '请填写姓名', trigger: 'blur' }]
        }
      }
    },
    methods: {
      onchange () {}
    }
  }
</script>
<style scoped>
  .ivu-tooltip-popper {
    background-color: red !important;
  }
</style>


