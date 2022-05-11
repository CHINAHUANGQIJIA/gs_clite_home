<template>
  <div id="app">
    <div class="page">
      <div class="header"><Header></Header></div>
      <div class="home"><router-view></router-view></div>
      <div class="footer"><Footer></Footer></div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "APP",
  components: { Header, Footer },
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
</style>
