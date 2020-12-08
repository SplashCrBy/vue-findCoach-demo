<!--
 * @Author: Sizhao Li
 * @Date: 2020-12-04 13:36:30
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-04 13:40:11
 * @Description: file content
-->
<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
