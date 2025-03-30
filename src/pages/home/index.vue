<template>
  <div class="home">
    <header>
      <!-- <a @click="handleLinkMy('/')">我</a> -->
      <a @click="handleLinkMy('/CI-CD')">CI/CD部署</a>
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleLinkMy = (path) => {
  router.push({ path });
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 40px;
  background: rgb(41, 151, 229);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    cursor: pointer;
    margin-right: 30px;
  }
}
</style>
