<template>
  <div>
    <q-list bordered padding>
      <q-item-label header>About Me</q-item-label>

      <q-item>
        <q-item-section top avatar>
          <q-avatar square size="5rem"
            ><img src="~/assets/kevin-halloween.jpg"
          /></q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>About Me</q-item-label>
          <q-item-label caption>
            Hi! I'm Kevin. I'm a Software Engineer, collector of things, and an
            avid learner! I love collecting Pok&eacute;mon cards and vinyl
            records. I love working with Python and Javascript, and I enjoy
            wearing multiple hats. Whether it's front end, back end, or full
            stack, I love learning and finding out new things.
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item-label header>Hobbies</q-item-label>
      <q-item>
        <q-item-section top avatar>
          <q-icon color="red" size="4rem" name="catching_pokemon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Pok&eacute;mon Cards</q-item-label>
          <q-item-label caption>
            I love collecting Pok&eacute;mon cards! I'm currently mostly after
            EX era EX cards, as I want to complete the entire collection (about
            ~160 cards).
          </q-item-label>
        </q-item-section>
        <q-separator vertical />

        <q-item-section top avatar>
          <q-icon
            color="black"
            size="4rem"
            name="mdi-record-circle"
            padding="1rem"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>Records</q-item-label>
          <q-item-label caption>
            I also love collecting vinyl records! I'm currently mostly looking
            for City Pop and J-Pop records, but I have a collection of just
            about every genre and decade!
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section top avatar>
          <q-icon color="green" size="4rem" name="directions_run" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Running</q-item-label>
          <q-item-label caption
            >I'm an avid runner, and even though I mostly only cover short
            distances right now (3-5mi.), I hope to one day be able to complete
            a marathon! Until then, catch me at the local 5K!
          </q-item-label>
        </q-item-section>
        <q-separator vertical />
        <q-item-section top avatar>
          <q-icon color="yellow-10" size="4rem" name="mdi-tea" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Tea</q-item-label>
          <q-item-label caption
            >I can't go a morning without making myself a cup of tea. I love
            trying new teas, I love learning about tea. It's my goal to explore
            the world and try all of the teas I can! My current favorite is from
            Harney & Sons, their Hao Ya 'A' .</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section top avatar>
          <q-icon
            color="deep-purple"
            size="4rem"
            name="mdi-nintendo-game-boy"
            padding="1rem"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>Video Games</q-item-label>
          <q-item-label caption>
            I mostly play competitive online games. Some of my most played are:
            League of Legends, VALORANT, and Counter Strike. But, I also have
            been enjoying Fallout 76, Minecraft and COD Zombies. I've reached as
            high as Masters in League of Legends, and Diamond in both Apex
            Legends and VALORANT.
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>
