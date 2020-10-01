<template>
  <div class="profile flex justify-center ">
    <div class="bg-white flex items-center p-4 rounded">
      <img
        :src="staticUrl + `/profileicon/${getSummoner.profileIconId}.png`"
        class="rounded-full h-24 w-24"
      />
      <div class="ml-4">
        <h1>{{ getSummoner.name }}</h1>
        <small>Level: {{ getSummoner.summonerLevel }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['staticUrl', 'getSummoner'],
};
</script>

<style scoped></style>
