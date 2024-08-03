<script setup>
import {inject} from "vue";

const api = inject('$api')

const func1 = async () => {
  try {
    const response = await api.getUserInfo()
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
    <div>
      <button @click="func1">func 1</button>
      <button @click="func2">fucn 2</button>
      <button>func 3</button>
    </div>
</template>

<style scoped>
div{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>