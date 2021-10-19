<template>
  <div class="text-gray-600 transition-colors duration-200 bg-gray-200 dark:bg-gray-800 dark:text-gray-300 ">
    <div
      class="flex flex-col items-start max-w-5xl p-4 mx-auto md:flex-row md:items-end "
    >
      <img
        class="w-full rounded shadow"
        src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
        alt=""
      />

      <div class="pt-3 md:pt-0 md:pl-4">
        <div class="text-xs font-semibold text-red-500 uppercase">category</div>
        <div
          class="font-serif text-2xl font-bold leading-6 text-gray-600 capitalize dark:text-gray-400 "
        >
          This is an actual Headline
        </div>
        <h2
          class="mb-2 text-xs font-semibold tracking-widest uppercase dark:text-gray-500 title-font "
        >
          Subtitle
        </h2>
        <div class="pt-2 leading-tight text-left dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          exercitationem sint alias aspernatur commodi. Recusandae culpa minima
          fugiat illo dolores!
        </div>
      </div>
    </div>

    <div class="max-w-5xl p-4 mx-auto">
      <div class="flex">
        <div class="w-2/3 pr-2">
          <SectionHeader
            title="episodes"
            highlighted="list"
            icon="list-alt"
            class="mb-4"
          />

          <div class="w-full divide-y divide-gray-600">
            <div class="py-6">
              <div class="flex flex-col sm:flex-row">
                <div class="relative w-full pl-2 sm:w-1/4">
                  <img
                    src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
                    alt=""
                    class="object-cover w-full border rounded shadow-lg max-h-24 "
                  />
                  <div
                    class="absolute flex items-center justify-center w-10 h-8 text-xs font-semibold text-center text-gray-700 bg-gray-300 border border-gray-400 rounded-r dark:text-gray-200 dark:border-gray-600 dark:bg-gray-700 top-2 -left-1 "
                  >
                    1
                  </div>
                </div>
                <div class="w-full px-4 pt-2 text-left sm:pt-0 sm:w-3/4">
                  <!-- <div class="flex justify-between pb-1"> -->
                  <div
                    class="text-xl font-bold leading-none text-gray-600 dark:text-gray-500 "
                  >
                    Lorem ipsum dolor sit.
                  </div>
                  <div class="text-sm font-bold text-red-600 dark:text-red-500">
                    The Office
                    <span
                      class="px-1 ml-1 text-xs border border-red-500 rounded-full "
                    >
                      <span class="font-bold text-gray-500">S</span
                      ><span class="font-bold text-gray-500">2</span
                      ><span class="font-bold text-gray-500">E</span
                      ><span class="font-bold text-gray-500">4</span>
                    </span>
                  </div>

                  <!-- </div> -->
                  <div class="pt-2 text-xs text-gray-600 dark:text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim nihil ad et commodi deleniti magni. Quidem totam
                    voluptatum possimus magnam pariatur impedit sequi placeat,
                    in doloremque, accusantium aspernatur ducimus voluptatibus.
                  </div>
                  <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
                </div>
              </div>
              <div
                class="p-2 my-2 text-xs leading-4 text-gray-400 bg-gray-700 border-l-4 border-blue-600 rounded-r "
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci odit consequuntur ex aliquid velit accusamus
                dignissimos a vero molestias ipsum?
              </div>

              <textarea
                rows="2"
                class="w-full p-2 my-2 text-xs leading-4 text-gray-400 transition bg-gray-700 border-l-4 border-blue-600 rounded-r focus:bg-gray-600 focus:outline-none "
              ></textarea>
            </div>
            <div class="py-6">
              <div class="flex">
                <div class="relative w-full pl-2 sm:w-1/4">
                  <img
                    src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
                    alt=""
                    class="object-cover w-full border rounded shadow-lg max-h-24 "
                  />
                  <div
                    class="absolute flex items-center justify-center w-10 h-8 text-xs font-semibold text-center text-gray-700 bg-gray-300 border border-gray-400 rounded-r dark:text-gray-200 dark:border-gray-600 dark:bg-gray-700 top-2 -left-1 "
                  >
                    1
                  </div>
                </div>
                <div class="px-4 text-left sm:pt-0 sm:w-3/4">
                  <!-- <div class="flex justify-between pb-1"> -->
                  <div
                    class="text-xl font-bold leading-none text-gray-600 dark:text-gray-500 "
                  >
                    Lorem ipsum dolor sit.
                  </div>
                  <div class="text-sm font-bold text-red-600 dark:text-red-500">
                    The Office
                    <span
                      class="px-1 ml-1 text-xs border border-red-500 rounded-full "
                    >
                      <span class="font-bold text-gray-500">S</span
                      ><span class="font-bold text-gray-500">2</span
                      ><span class="font-bold text-gray-500">E</span
                      ><span class="font-bold text-gray-500">4</span>
                    </span>
                  </div>

                  <!-- </div> -->
                  <div class="pt-2 text-xs text-gray-600 dark:text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim nihil ad et commodi deleniti magni. Quidem totam
                    voluptatum possimus magnam pariatur impedit sequi placeat,
                    in doloremque, accusantium aspernatur ducimus voluptatibus.
                  </div>
                  <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
                </div>
              </div>
              <div
                class="p-2 my-2 text-xs leading-4 text-gray-400 bg-gray-700 border-l-4 border-blue-600 rounded-r "
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci odit consequuntur ex aliquid velit accusamus
                dignissimos a vero molestias ipsum?
              </div>

              <textarea
                rows="2"
                class="w-full p-2 my-2 text-xs leading-4 text-gray-400 transition bg-gray-700 border-l-4 border-blue-600 rounded-r focus:bg-gray-600 focus:outline-none "
              ></textarea>
            </div>
            <div class="py-6">
              <div class="flex">
                <div class="relative w-full pl-2 sm:w-1/4">
                  <img
                    src="https://image.tmdb.org/t/p/w500/vKaDMLbdLrThldFj9Vavo6suTS2.jpg"
                    alt=""
                    class="object-cover w-full border rounded shadow-lg max-h-24 "
                  />
                  <div
                    class="absolute flex items-center justify-center w-10 h-8 text-xs font-semibold text-center text-gray-700 bg-gray-300 border border-gray-400 rounded-r dark:text-gray-200 dark:border-gray-600 dark:bg-gray-700 top-2 -left-1 "
                  >
                    1
                  </div>
                </div>
                <div class="px-4 text-left sm:pt-0 sm:w-3/4">
                  <!-- <div class="flex justify-between pb-1"> -->
                  <div
                    class="text-xl font-bold leading-none text-gray-600 dark:text-gray-500 "
                  >
                    Lorem ipsum dolor sit.
                  </div>
                  <div class="text-sm font-bold text-red-600 dark:text-red-500">
                    The Office
                    <span
                      class="px-1 ml-1 text-xs border border-red-500 rounded-full "
                    >
                      <span class="font-bold text-gray-500">S</span
                      ><span class="font-bold text-gray-500">2</span
                      ><span class="font-bold text-gray-500">E</span
                      ><span class="font-bold text-gray-500">4</span>
                    </span>
                  </div>

                  <!-- </div> -->
                  <div class="pt-2 text-xs text-gray-600 dark:text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim nihil ad et commodi deleniti magni. Quidem totam
                    voluptatum possimus magnam pariatur impedit sequi placeat,
                    in doloremque, accusantium aspernatur ducimus voluptatibus.
                  </div>
                  <!-- <div class="pt-2 text-xs">{{ item }}</div> -->
                </div>
              </div>
              <div
                class="p-2 my-2 text-xs leading-4 text-gray-400 bg-gray-700 border-l-4 border-blue-600 rounded-r "
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci odit consequuntur ex aliquid velit accusamus
                dignissimos a vero molestias ipsum?
              </div>

              <textarea
                rows="2"
                class="w-full p-2 my-2 text-xs leading-4 text-gray-400 transition bg-gray-700 border-l-4 border-blue-600 rounded-r focus:bg-gray-600 focus:outline-none "
              ></textarea>
            </div>
          </div>
        </div>

        <div class="w-1/3 pl-2">
         <div class="bg-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic temporibus quos autem quae architecto minus quasi consectetur deleniti rerum? Placeat?</div> 
        </div>
      </div>
    <AppComments />
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
</style>