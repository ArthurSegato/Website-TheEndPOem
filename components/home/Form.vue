<script lang="ts" setup>
const name = useName();

const poem = usePoem();

const handleSubmit = async () => {
    const res = await $fetch("/api/poem", {
        method: "POST",
        body: { name: name.value },
    });

    poem.value = res;

}
</script>

<template>
    <form autocomplete="off" @submit.prevent="handleSubmit"
        class="flex items-center bg-[#DADADA]/50 rounded-3xl w-1/2 shadow-sm border-2 focus-within:border-current transition-all duration-200 ease-in-out">
        <input type="text" name="name" id="name" v-model="name" placeholder="Name"
            class="bg-transparent rounded-l-3xl pl-3 py-2 w-full h-full text-sm outline-none placeholder:italic">
        <button type="submit"
            class="h-full bg-transparent outline-none disabled:opacity-40 disabled:cursor-not-allowed transition-all ease-in-out duration-200"
            :disabled="name.length == 0">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="w-5 h-5 mx-3">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="16" stroke-dashoffset="16" d="M5 12h13.5">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" />
                    </path>
                    <path stroke-dasharray="10" stroke-dashoffset="10" d="M19 12l-5 5M19 12l-5 -5">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s"
                            values="10;0" />
                    </path>
                </g>
            </svg>
        </button>
    </form>
</template>
