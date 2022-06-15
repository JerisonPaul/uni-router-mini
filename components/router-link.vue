<template>
    <view @click="gotoPage()">
        <slot></slot>
    </view>
</template>

<script>
    import { getRequestParameters } from '../utils/Validate'
  export default {
    name: "router-link",
    props: {
      to: {
        type: String,
        default: '',
      },
      navType: {
        type: String,
        default: 'push',
      }
    },
    methods: {
      gotoPage() {
        if(!this.to){
          console.error("Wrong routing information:" + JSON.stringify(this.to))
          return;
        }
        const path = this.to.split('?')[0]
        const query = getRequestParameters(this.to)
        this.$router[this.navType]({
          path,
          query
        });
      }
    }
  }
</script>

<style scoped>

</style>
