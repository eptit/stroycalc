<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
// import { useLayout } from '@/layout/composables/layout';
import TopMenu from '@/layout/TopMenu.vue'

// const { layoutConfig, onMenuToggle } = useLayout();

// const outsideClickListener = ref(null);
// const topbarMenuActive = ref(false);
// const router = useRouter()

// onMounted(() => {
//     bindOutsideClickListener();
// });

// onBeforeUnmount(() => {
//     unbindOutsideClickListener();
// });

// const logoUrl = computed(() => {
//     return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
// });

// const onTopBarMenuButton = () => {
//     topbarMenuActive.value = !topbarMenuActive.value;
// };
// const onSettingsClick = () => {
//     topbarMenuActive.value = false;
//     router.push('/documentation');
// };
// const topbarMenuClasses = computed(() => {
//     return {
//         'layout-topbar-menu-mobile-active': topbarMenuActive.value
//     };
// });

// const bindOutsideClickListener = () => {
//     if (!outsideClickListener.value) {
//         outsideClickListener.value = (event) => {
//             if (isOutsideClicked(event)) {
//                 topbarMenuActive.value = false;
//             }
//         };
//         document.addEventListener('click', outsideClickListener.value);
//     }
// };
// const unbindOutsideClickListener = () => {
//     if (outsideClickListener.value) {
//         document.removeEventListener('click', outsideClickListener);
//         outsideClickListener.value = null;
//     }
// };
// const isOutsideClicked = (event) => {
//     if (!topbarMenuActive.value) return;

//     const sidebarEl = document.querySelector('.layout-topbar-menu');
//     const topbarEl = document.querySelector('.layout-topbar-menu-button');

//     return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
// };
</script>

<template>
  <div class="layout-topbar border border-b-sky-600 bg-gradient-to-t from-slate-100 to-slate-200 shadow shadow-sky-800">
    <div class="w-full flex flex-auto flex-row h-16 my-3 mx-1.5 justify-between items-center">
      <div class="shrink-0 flex gap-2 items-center">
        <img class="w-16 h-16 flex-none" src="@/img/logo14.svg" alt="" />
        <h1 class="text-3xl font-normal ml-6 text-sky-600">Кисонькин калькулятор</h1>
      </div>
      <top-menu></top-menu>
      <div>Hello blyat</div>
      <div>Hello blyat</div>
    </div>
  </div>
</template>

<style scoped></style>
<!-- <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button> -->

<!-- <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button> -->

<!-- <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
            <button @click="onSettingsClick()" class="p-link layout-topbar-button">
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button>
        </div> -->
