<template>
  <div class="max-w-xl mx-auto my-2">
    <div v-if="results.length" class="py-2 text-center">Found {{results.length}} results for {{queryString}}</div>
    <div class="flex space-x-1 overflow-scroll">
      <!-- <transition-group name="slide-in-up"> -->
        <div v-for="item in results" :key="item.id">
          <BaseCardImg
            @clicked="clickHandler(item)"
            class="text-center border-2 border-transparent cursor-pointer hover:border-red-500"
            :item="item"
          />
        </div>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script>
import BaseCardImg from "./BaseCardImg.vue";
export default {
  components: { BaseCardImg },
  props: ["results", "queryString"],
  setup(props, { emit }) {
    const result = [
      {
        backdrop_path: "/vNpuAxGTl9HsUbHqam3E9CzqCvX.jpg",
        first_air_date: "2005-03-24",
        genre_ids: [35],
        id: 2316,
        name: "The Office",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Office",
        overview:
          "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
        popularity: 121.866,
        poster_path: "/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
        vote_average: 8.6,
        vote_count: 1929,
      },
      {
        backdrop_path: "/ZYmHf5hSAIaeEENXh0FGAbLSCQ.jpg",
        first_air_date: "2001-07-09",
        genre_ids: [35],
        id: 2996,
        name: "The Office",
        origin_country: ["GB"],
        original_language: "en",
        original_name: "The Office",
        overview:
          "Documentary-style sitcom set in the offices of a Slough paper merchant.",
        popularity: 18.514,
        poster_path: "/orzJbkbocfSz9D1SY9H8Rhh8a27.jpg",
        vote_average: 7.9,
        vote_count: 467,
      },
      {
        backdrop_path: "/5ZLWXldWkfOYqd34gxNZg5vScQI.jpg",
        first_air_date: "2019-06-28",
        genre_ids: [35],
        id: 90762,
        name: "The Office",
        origin_country: ["IN"],
        original_language: "hi",
        original_name: "The Office",
        overview:
          "Life at Wilkins Chawla, a mediocre paper company is as boring as the humour of its 'Fun'jabi boss. Add to it some ordinary employees, an uncomfortable receptionist, the boss' sycophant, and the mediocrity goes a notch higher!",
        popularity: 3.005,
        poster_path: "/p61QSlJor7edi2DJIH0jFL3whfa.jpg",
        vote_average: 6.8,
        vote_count: 6,
      },
      {
        backdrop_path: "/e3h97EqlVpsgJrlWsNHIcZOl2od.jpg",
        first_air_date: "1995-03-11",
        genre_ids: [35],
        id: 24876,
        name: "The Office",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Office",
        overview:
          "A look at office life seen though the eyes of Rita Stone, a secretary who has worked at the packaging department of an ad agency called Package, Inc for 19 years. ",
        popularity: 1.378,
        poster_path: "/bQ7HIZd71VYQRhTvZHBVDBkQ43I.jpg",
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: "/kF14AckGEzuUI98DSPdQnTKESXL.jpg",
        first_air_date: "2021-10-22",
        genre_ids: [],
        id: 128822,
        name: "The Office PL",
        origin_country: [],
        original_language: "pl",
        original_name: "The Office PL",
        overview: "",
        popularity: 1.872,
        poster_path: "/w8aYyxk9Hl9eQanbIUSjLCiPSYW.jpg",
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "2018-06-26",
        genre_ids: [],
        id: 80428,
        name: "The Office - Luxembourg",
        origin_country: [],
        original_language: "nl",
        original_name: "The Office - Luxembourg",
        overview: "",
        popularity: 0.6,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "1994-09-26",
        genre_ids: [35],
        id: 25800,
        name: "Nice Day at the Office",
        origin_country: ["GB"],
        original_language: "en",
        original_name: "Nice Day at the Office",
        overview:
          "Nice Day at the Office is a British sitcom starring Timothy Spall, John Sessions and David Haig as put-upon and frustrated employees of a large company.",
        popularity: 0.629,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "2008-08-21",
        genre_ids: [10764],
        id: 7819,
        name: "The Principal's Office",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Principal's Office",
        overview:
          "A reality television program set in American high schools and features dramatic and humorous encounters between students and principals. Some events that lead to such encounters are students being late to class, truancy, food fights, smoking, and disruptive conduct in class.",
        popularity: 0.6,
        poster_path: "/i2wOnt2i0NBoSqVHnfmviVJMYAK.jpg",
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "",
        genre_ids: [],
        id: 56860,
        name: "The Singing Office",
        origin_country: ["AU"],
        original_language: "en",
        original_name: "The Singing Office",
        overview: "",
        popularity: 0.6,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "2004-10-21",
        genre_ids: [10764],
        id: 24781,
        name: "The 1970s Office",
        origin_country: ["GB"],
        original_language: "en",
        original_name: "The 1970s Office",
        overview:
          "Two teams of advertising executives compete to win the Raleigh of Nottingham's 'Raleigh Chopper' Christmas ad campaign. One team live and work the 1970s - without computers, mobile phones, internet or even motorcycle couriers - and has two weeks to put together a pitch. The other has team access to all modern technology, but only has a day to do the job.",
        popularity: 0.6,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "2008-06-29",
        genre_ids: [10764],
        id: 25477,
        name: "The Singing Office",
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Singing Office",
        overview:
          "Groups of office coworkers compete against each other in a singing competition -- hosted by ex-Spice Girl Melanie Brown and ex-NSYNC member Joey Fatone.",
        popularity: 0.6,
        poster_path: "/fJGTlJSyrynMRzMwqa7E5D6wjij.jpg",
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "",
        genre_ids: [],
        id: 56813,
        name: "In the Production Office",
        origin_country: ["US"],
        original_language: "en",
        original_name: "In the Production Office",
        overview: "",
        popularity: 0.6,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: "/52P4xCfXrhCsU1BSKfpwuH6A7ge.jpg",
        first_air_date: "2018-11-15",
        genre_ids: [],
        id: 132777,
        name: "Inside the Foreign Office",
        origin_country: ["GB"],
        original_language: "en",
        original_name: "Inside the Foreign Office",
        overview:
          "Over a compelling and turbulent year, film-maker Michael Waldman gains privileged access to the strange, secretive and fascinating world of British diplomats.",
        popularity: 0.6,
        poster_path: "/3D1HMJa0APQZWwuc6TaftDBgYhP.jpg",
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: "/dmVj3aNLcyzIxS1EM5GvL7Cg16W.jpg",
        first_air_date: "2017-03-03",
        genre_ids: [35],
        id: 70633,
        name: "The Office",
        origin_country: ["FI"],
        original_language: "fi",
        original_name: "Konttori",
        overview: 'Finnish adaption of the British TV series "The Office".',
        popularity: 1.705,
        poster_path: "/gXRVl5vnlvy3erURyKXd0ZsoZtt.jpg",
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "2015-07-29",
        genre_ids: [],
        id: 118039,
        name: "Signed, Sealed, Delivered: Inside the Post Office",
        origin_country: ["GB"],
        original_language: "en",
        original_name: "Signed, Sealed, Delivered: Inside the Post Office",
        overview:
          "An eye-opening look inside the Post Office - an iconic national institution undergoing the biggest shake-up in its nearly 400-year history as it battles to reinvent itself for the modern world.",
        popularity: 0.6,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: null,
        first_air_date: "2010-08-10",
        genre_ids: [35],
        id: 37054,
        name: "The Office",
        origin_country: ["IL"],
        original_language: "he",
        original_name: "המשרד",
        overview:
          "“The Office” is a mocumentary series based on the British show of the same name. Somewhere within the industrial area of Yahud is a grey, drab office, the failing branch of an office supply company heroically named “Paper-Office”. The branch is run by the show’s protagonist, Avi Meshulam, a 40-year-old loser, who’s overweight and has severe self-image issues that turn him into a liar, a suck-up, and a generally unbearable human being. He’s absolutely sure that he’s a wonderful standup comedian, who wound up in this boring, humiliating job purely by chance.\n\nManagement is constantly trying to fire him, his employees despise him, yet he is ever the optimist, and he talks in catch phrases lifted from the most banal management books. He is surrounded by the range of characters that make up the impossible mosaic of Israeli society. Romance flourishes, schemes are hatched, lamination machines are sold on sale– and everybody tries to make it through yet another day with their unbearable boss.",
        popularity: 1.169,
        poster_path: null,
        vote_average: 0,
        vote_count: 0,
      },
      {
        backdrop_path: "/dVISMO3TdX9HfcnA4gt3PSqcfjL.jpg",
        first_air_date: "2009-04-09",
        genre_ids: [35],
        id: 8592,
        name: "Parks and Recreation",
        origin_country: ["US"],
        original_language: "en",
        original_name: "Parks and Recreation",
        overview:
          "Hilarious ensemble comedy that follows Leslie Knope, a mid-level bureaucrat in the Parks and Recreation Department of Pawnee, Indiana, and her tireless efforts to make her quintessentially American town just a little bit more fun.",
        popularity: 66.087,
        poster_path: "/6Kv43MLJOOm6HxWFHcTQMtzD0J7.jpg",
        vote_average: 8,
        vote_count: 813,
      },
      {
        backdrop_path: null,
        first_air_date: "2014-04-13",
        genre_ids: [35],
        id: 63545,
        name: "The Office Blanik",
        origin_country: ["CZ"],
        original_language: "cs",
        original_name: "Kancelář Blaník",
        overview:
          "Do not pull punches and rigorously governed by politics - it is a lobbyist Tony Blanik.",
        popularity: 0.672,
        poster_path: null,
        vote_average: 7,
        vote_count: 1,
      },
      {
        backdrop_path: null,
        first_air_date: "1974-02-17",
        genre_ids: [18],
        id: 60647,
        name: "In the Registrar's Office",
        origin_country: ["HR"],
        original_language: "hr",
        original_name: "U registraturi",
        overview:
          "Based on the Ante Kovačić's novel \"U registraturi\" (In the Registrar's Office, 1888.)",
        popularity: 1.009,
        poster_path: "/gI5FU238TkroGG0InCzpWQUBKQw.jpg",
        vote_average: 8,
        vote_count: 1,
      },
      {
        backdrop_path: "/tESyWvpMZczQCYL6dWuKoqdGrpi.jpg",
        first_air_date: "2013-04-01",
        genre_ids: [35, 18],
        id: 78163,
        name: "The Queen of Office",
        origin_country: ["KR"],
        original_language: "ko",
        original_name: "직장의 신",
        overview:
          "Temporary employee Ms. Kim is a remarkable woman. She possesses highly advanced skills in seemingly all work fields. She's also highly confident and always sticks to her ideals. Jang Kyu-Jik is a hot-shot foreign educated MBA, hired to turn around a flagging corporation. As they begin work together at their new jobs, can they ever co-exist?",
        popularity: 2.531,
        poster_path: "/eIoNr2dLb427yYJiRc7vuElgVcp.jpg",
        vote_average: 7,
        vote_count: 1,
      },
    ];

    const clickHandler = (e) => {
      console.log("clicked", e);
      emit("clicked", e);
    };

    return { result, clickHandler };
  },
};
</script>

<style>
</style>