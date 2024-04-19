<template>
  <div class="card">
    <TabMenu :model="items" class="flex items-center">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </TabMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useRoute } from 'vue-router'


const items = ref([
  { label: 'Калькулятор', items: [{ label: 'home', icon: 'pi-pi-home', route: '/' }] },
  { label: 'Смета', items: [{ label: 'estimates', icon: 'pi-pi-home', route: 'estimates' }] },
  { label: 'Документация', items: [{ label: 'documentation', icon: 'pi-pi-home', route: 'documentation' }] },
])
</script>
