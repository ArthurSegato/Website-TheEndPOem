<script lang="ts" setup>
const name = useName();

const poem = usePoem();
</script>

<template>
    <main class="w-full min-h-screen bg-[#F2F2F2] text-[#333333] font-['Open_Sans'] flex items-center justify-center">
        <section class="w-fit flex flex-col gap-4 items-center" v-if="poem.length == 0">
            <HomeTitle />
            <LazyHomeForm />
        </section>
        <section v-else>
        </section>
    </main>
</template>