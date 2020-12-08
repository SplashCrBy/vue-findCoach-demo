<!--
 * @Author: Sizhao Li
 * @Date: 2020-12-03 19:53:37
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 17:54:46
 * @Description: file content
-->
<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
