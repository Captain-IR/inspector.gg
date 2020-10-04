<template>
  <div
    class="match bg-white mt-4"
    :class="getMainSummoner.win ? 'win' : 'loss'"
  >
    <div class="info flex">
      <div class="info-type px-2 border-r-2">
        <div>{{ getMainSummoner.win ? "VECTORY" : "DEFEAT" }}</div>
      </div>
      <div class="info-player px-2 border-r-2">
        <div class="flex-col">
          <img
            class="rounded-full h-12 w-12"
            :src="`${staticUrl}/champion/${match.champion}.png`"
          />
          <div v-show="match.lane !== 'NONE'" class="text-xs mt-1">
            <strong>{{ match.lane }}</strong>
          </div>
        </div>
        <div class="info-kda ml-2 flex-col">
          <div>
            {{ getMainSummoner.stats.kills }}/{{
              getMainSummoner.stats.deaths
            }}/{{ getMainSummoner.stats.assists }}
          </div>
          <div>
            {{
              (
                (getMainSummoner.stats.kills + getMainSummoner.stats.assists) /
                getMainSummoner.stats.deaths
              ).toFixed(2)
            }}
            KDA
          </div>
        </div>
      </div>
      <div class="info-items px-2 border-r-2">
        <div class="info-items__items grid gap-1 grid-cols-3">
          <img
            v-show="getMainSummoner.stats.item0"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item0}.png`"
          />
          <img
            v-show="getMainSummoner.stats.item1"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item1}.png`"
          />
          <img
            v-show="getMainSummoner.stats.item2"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item2}.png`"
          />
          <img
            v-show="getMainSummoner.stats.item3"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item3}.png`"
          />
          <img
            v-show="getMainSummoner.stats.item4"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item4}.png`"
          />
          <img
            v-show="getMainSummoner.stats.item5"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item5}.png`"
          />
        </div>
        <div class="info-items__ward ml-2">
          <img
            v-show="getMainSummoner.stats.item6"
            :src="`${staticUrl}/item/${getMainSummoner.stats.item6}.png`"
          />
        </div>
      </div>

      <div class="info-players p-3">
        <div class="grid gap-1 grid-cols-2">
          <div v-for="gamer in match.game" :key="gamer.participantId">
            <div class="flex">
              <img
                class="rounded-full h-4 w-4"
                :src="`${staticUrl}/champion/${gamer.championId}.png`"
              />
              <p class="text-xs">{{ gamer.player.summonerName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["summoner", "match", "staticUrl"],
  computed: {
    getMainSummoner: function () {
      const mainSummoner = this.match.game.find((obj) => {
        return obj.player.summonerName === this.summoner.name;
      });
      return mainSummoner;
    },
  },
};
</script>

<style scoped>
.info-type {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-player {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-items {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-items img {
  width: 2rem;
  height: 2rem;
}

.info-players {
  width: 100%;
}

.info-players p {
  margin-left: 0.5rem;
}

.win {
  border-top: 5px solid #08a6ff;
}
.loss {
  border-top: 5px solid #ff4e50;
}
</style>
