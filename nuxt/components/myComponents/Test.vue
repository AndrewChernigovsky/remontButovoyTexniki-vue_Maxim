<script setup>
const props = defineProps({
  review: {
    type: Object,
    required: true,
  },
});
const { review } = props;
</script>

<template>
    <h1>Author # {{ review.author }}</h1>
    <div>Comment: {{ review.comment }}</div>
</template>
