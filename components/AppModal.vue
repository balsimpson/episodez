<template>
  <transition name="slide-in-up">
    <div
      class="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen p-2 bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none "
      id="modal-id"
    >
      <div class="absolute inset-0 z-0 bg-black opacity-80"></div>
      <div
        class="relative w-full max-w-3xl mx-auto my-auto transition duration-1000 transform bg-white shadow-lg rounded-xl "
      >
        <div class="absolute cursor-pointer right-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 hover:text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <!--content-->
          <!--body-->
          <div class="justify-center flex-auto p-2 text-center">
            <div
              class="flex flex-col items-center justify-center mb-4 text-2xl"
            >
              <!-- <div> -->
              <slot name="header"> </slot>

              <!-- body -->
              <div class="container items-center px-5 py-12 mx-auto lg:px-20">
                <div class="flex flex-col w-full mb-12 text-center">
                  <h2
                    class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font "
                  >
                    a great header right here
                  </h2>
                  <h1
                    class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-4xl title-font "
                  >
                    A Long headline to switch your visitors into users.
                  </h1>
                  <a
                    class="mx-auto text-sm font-semibold text-blue-600 hover:text-black "
                    title="read more"
                  >
                    Read more about the offer »
                  </a>
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style>
</style>