<template>
  <div>
    <div class="sticky top-0 z-50 bg-gray-800">
      <div
        class="flex items-center justify-between max-w-5xl p-4 mx-auto text-white "
      >
        <img src="logo_light.png" alt="" class="w-32" />
        <div class="flex">
          <div
            class="px-2 py-1 mr-2 text-xs font-bold uppercase transition bg-blue-600 rounded-sm cursor-pointer hover:bg-blue-800 "
          >
            create list
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-start max-w-5xl p-4 mx-auto md:flex-row md:items-end "
    >
      <img
        class="w-full rounded shadow"
        src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
        alt=""
      />

      <div class="pt-3 md:pt-0 md:pl-4">
        <div class="text-xs uppercase">category</div>
        <div class="font-serif text-2xl font-bold leading-6 capitalize">
          This is an actual Headline
        </div>
        <div class="pt-1">Subtitle</div>
        <div class="pt-2 text-sm text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          exercitationem sint alias aspernatur commodi.
        </div>
      </div>
    </div>

    <div class="max-w-5xl p-4 mx-auto">
      <div class="flex flex-col w-full sm:flex-row">
        <div class="w-8 h-8 text-center border rounded-full">1</div>
        <div>
          <div class="flex">
            <div class="w-full pl-2 sm:w-1/4">
              <img
                src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
                alt=""
                class="object-cover w-full border rounded shadow-lg max-h-24"
              />
            </div>
            <div class="px-4 text-left sm:pt-0 sm:w-3/4">
              <!-- <div class="flex justify-between pb-1"> -->
              <div class="text-xl font-bold leading-none">name</div>
              <div class="text-sm">
                show_name
                <span>S1E2</span>
              </div>
              <!-- </div> -->
              <div class="pt-2 text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                nihil ad et commodi deleniti magni. Quidem totam voluptatum
                possimus magnam pariatur impedit sequi placeat, in doloremque,
                accusantium aspernatur ducimus voluptatibus.
              </div>
              <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
            </div>
          </div>
          <div class="pt-2 pl-2 pr-4"></div>
        </div>
      </div>
      <div class="flex flex-col w-full sm:flex-row">
        <div class="w-8 h-8 text-center border rounded-full">1</div>
        <div>
          <div class="flex">
            <div class="w-full pl-2 sm:w-1/4">
              <img
                src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
                alt=""
                class="object-cover w-full border rounded shadow-lg max-h-24"
              />
            </div>
            <div class="px-4 text-left sm:pt-0 sm:w-3/4">
              <!-- <div class="flex justify-between pb-1"> -->
              <div class="text-xl font-bold leading-none">name</div>
              <div class="text-sm">
                show_name
                <span>S1E2</span>
              </div>
              <!-- </div> -->
              <div class="pt-2 text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                nihil ad et commodi deleniti magni. Quidem totam voluptatum
                possimus magnam pariatur impedit sequi placeat, in doloremque,
                accusantium aspernatur ducimus voluptatibus.
              </div>
              <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
            </div>
          </div>
          <div class="pt-2 pl-2 pr-4"></div>
        </div>
      </div>
      <div class="flex flex-col w-full sm:flex-row">
        <div class="w-8 h-8 text-center border rounded-full">1</div>
        <div>
          <div class="flex">
            <div class="w-full pl-2 sm:w-1/4">
              <img
                src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
                alt=""
                class="object-cover w-full border rounded shadow-lg max-h-24"
              />
            </div>
            <div class="px-4 text-left sm:pt-0 sm:w-3/4">
              <!-- <div class="flex justify-between pb-1"> -->
              <div class="text-xl font-bold leading-none">name</div>
              <div class="text-sm">
                show_name
                <span>S1E2</span>
              </div>
              <!-- </div> -->
              <div class="pt-2 text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                nihil ad et commodi deleniti magni. Quidem totam voluptatum
                possimus magnam pariatur impedit sequi placeat, in doloremque,
                accusantium aspernatur ducimus voluptatibus.
              </div>
              <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
            </div>
          </div>
          <div class="pt-2 pl-2 pr-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCardHorizontal from "../../episodez-nuxt/components/BaseCardHorizontal.vue";
export default {
  components: { BaseCardHorizontal },
};
</script>

<style>
</style>