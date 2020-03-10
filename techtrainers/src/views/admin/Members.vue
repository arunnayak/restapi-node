<template>
  <div>Members</div>
</template>
<script>
import axios from "axios";
export default {
  name: "Members",
  methods: {
    getAllMembers: function() {
      axios.get(`http://localhost:3000/users`).then(response => {
        console.log(response.data);
      });
    }
  },
  mounted () {
    this.getAllMembers();
  }
};
</script>