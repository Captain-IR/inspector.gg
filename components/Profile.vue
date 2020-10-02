<template>
  <div class="profile flex justify-center ">
    <div class="bg-white flex items-center p-4 rounded mt-4">
      <img
        :src="staticUrl + `/profileicon/${summoner.profileIconId}.png`"
        class="rounded-full h-24 w-24"
      />
      <div class="ml-4">
        <h1>{{ summoner.name }}</h1>
        <small>Level: {{ summoner.summonerLevel }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['staticUrl', 'summoner'],
};
</script>

<style scoped></style>
