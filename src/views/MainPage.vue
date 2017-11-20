<template>
  <div class="hello">
    <!--i18n-->
    {{$t('message.hellow')}}
    <ul>
      <li v-for="(item,index) in items" :key="index" v-if="item.name!='MainPage'">
        <router-link :to="item.path">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '@/router/config'
export default {
  name: 'MainPage',
  data () {
    return {
      items: data
    }
  }
}
</script>
<style lang="less" scoped>
.hello{
  font-family: '微软雅黑';
  font-size: 14px;
  &>ul{
    list-style-type: disc;
    li>a{
      color: red;
    }
  }
}
</style>


