<template>
  <div>
    <nav class="h-16 border-b flex justify-between items-center px-3 mb-10">
      <h2 class="font-bold text-xl">Recipe app</h2>
      <button
        class="
          text-sm
          font-bold
          bg-cyan-900
          hover:bg-cyan-700
          text-white
          rounded
          px-5
          py-2
        "
        @click="handleModal(true)"
      >
        Create
      </button>
    </nav>
    <section class="flex justify-center">
      <ul class="w-full lg:w-2/4">
        <li class="px-4 py-2 border rounded-lg">
          <div class="border-b h-8 mb-4">
            <h3 class="text-gray-700 font-bold">Jollof Rice</h3>
          </div>
          <div class="mb-4">
            <p class="text-xs text-gray-500 mb-2">Ingredients:</p>
            <p class="text-xs ml-2">
              Rice, Cheese, Groundnut oil, Onions, Seasoning,
            </p>
          </div>
          <div class="bg-cyan-50 p-4 rounded">
            <p class="text-xs text-gray-700 mb-2">Instruction:</p>
            <p class="text-xs text-gray-700 ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              magnam laudantium quo ab tempore deserunt fugiat dignissimos
              tempora eius reiciendis quas, aperiam error nihil, corporis
              necessitatibus, ducimus quod autem asperiores!:
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
  <Modal v-if="isModal" :handleModal="handleModal" />
</template>

<script setup>
//state
const isLoading = ref(false);
const isError = ref(false);
const isModal = ref(false);

const handleModal = (state) => {
  isModal.value = state;
};
</script>