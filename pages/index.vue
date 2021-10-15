<template>
  <div>

    <div class="text-gray-400 bg-gray-800">
      <div class="max-w-5xl p-4 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="flex flex-col items-start justify-center text-center md:text-left">
            <div class="font-serif text-3xl font-bold leading-7 capitalize">
              Create and share episode playlists
            </div>
            <div class="mt-4 leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              sequi.
            </div>
          </div>
          <div class="">
            <img src="couchsurfer.svg" alt="" />
          </div>
          <div class="flex flex-col justify-center space-y-2">
            <div class="p-2 text-gray-700 bg-red-100 rounded">
              <div class="font-bold">Pranking Is Fun</div>
              <div class="text-xs">
                8 Episodes from Brooklyn Nine Nine, Parks and Recreations and
                The Office
              </div>
            </div>

            <div class="p-2 text-gray-700 bg-red-100 rounded">
              <div class="font-bold">Pranking Is Fun</div>
              <div class="text-xs">
                8 Episodes from Brooklyn Nine Nine, Parks and Recreations and
                The Office
              </div>
            </div>

            <div class="p-2 text-gray-700 bg-red-100 rounded">
              <div class="font-bold">Pranking Is Fun</div>
              <div class="text-xs">
                8 Episodes from Brooklyn Nine Nine, Parks and Recreations and
                The Office
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-3">
      <ComponentsPlaygroundNew />
    </div>


  </div>
</template>

<script>
import tmdb from "assets/js/useTmdbApi";
import { ref, onMounted, useContext } from "@nuxtjs/composition-api";
import store from "~/store";
import SearchBar from "~/components/SearchBar.vue";
import ShowSearchResults from "~/components/ShowSearchResults.vue";
import BaseModal from "~/components/BaseModal.vue";
import SortableTableTransitions from "~/components/SortableTableTransitions.vue";
import ListPublisher from "~/components/ListPublisher.vue";
import ProfileDropdown from "~/components/ProfileDropdown.vue";
import ComponentsPlayground from "../../episodez-nuxt/components/ComponentsPlayground.vue";
export default {
  head: {
    script: [
      {
        src: "https://kit.fontawesome.com/34356f09a5.js",
        defer: true,
      },
    ],
  },
  components: {
    SearchBar,
    ShowSearchResults,
    BaseModal,
    SortableTableTransitions,
    ListPublisher,
    ProfileDropdown,
    ComponentsPlayground,
  },
  setup(props, { emit }) {
    const { $fire } = useContext();
    // const modalItem = ref();
    // const modalIsActive = ref(false);
    // const modalSeasonNumber = ref(0);

    // const newList = ref([]);
    // const searchResults = ref([]);

    onMounted(async () => {
      // let res = await readFromFirestore("lists");
      // console.log("res", res, res.length);
    });

    const readFromFirestore = async (collectionName) => {
      const lists = $fire.firestore.collection(collectionName);
      const items = [];
      try {
        const docs = await lists.get();
        docs.forEach((doc) => {
          items.push(doc.data());
          // console.log("doc", doc.data());
        });
        return JSON.stringify(items);
      } catch (error) {
        console.log("error", error);
        readFromFirestoreMsg.value = error.message;
        return;
      }
    };

    // const doSearch = async (val) => {
    //   // console.log("val", val);
    //   try {
    //     let results = await tmdb.search(val);
    //     searchResults.value = results.results;
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // };

    // const clickHandler = async (e) => {
    //   modalItem.value = await tmdb.getFormattedShowDetails(e.id, 1);
    //   modalIsActive.value = !modalIsActive.value;
    //   // console.log("modalItem", modalItem.value);
    // };

    

    const getSeason = async (seasonNumber) => {
      // console.log("seasonNumber", seasonNumber, modalItem.value);

      let res = await tmdb.getEpisodes(modalItem.value.id, seasonNumber);

      if (seasonNumber && seasonNumber > 0) {
        modalSeasonNumber.value = seasonNumber - 1;
      } else {
        modalSeasonNumber.value = seasonNumber;
      }
      modalItem.value.seasons[modalSeasonNumber.value].episodes = res.episodes;
      // modalItem.seasons[modalSeasonNumber]
      console.log("res", modalItem.value.seasons[modalSeasonNumber.value]);
    };

    const checkIfAlreadyInList = (val) => {
      // console.log("checkIfAlreadyInList", val);
      let found = false;

      for (const key in newList.value) {
        // console.log('item', item);
        if (newList.value[key].id == val) {
          found = true;
        }
      }

      return found;
    };

    return {
      tmdb,
      // doSearch,
      // clickHandler,
      // modalItem,
      // modalIsActive,
      // addToList,
      // newList,
      // searchResults,
      getSeason,
      // removeFromList,
      checkIfAlreadyInList,
      // modalSeasonNumber,
    };
  },
};
</script>

<style>
</style>