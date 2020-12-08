<!--
 * @Author: Sizhao Li
 * @Date: 2020-12-03 19:54:23
 * @LastEditors: Sizhao Li
 * @LastEditTime: 2020-12-07 17:25:15
 * @Description: file content
-->
<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="ErrorHandler">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Request Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any request yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: { RequestItem },
  computed: {
    receivedRequests() {
      console.log(this.$store.getters['requests/requests']);
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created(){
    this.loadRequests()
  },
  methods: {
    ErrorHandler() {
      this.error = null;
    },
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'something failed';
      }
      this.isLoading = false;
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
