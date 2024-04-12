<template>
  <div>
    <a-menu
      @click="handleClick"
      :v-model:selectedKeys="current"
      mode="horizontal"
      :items="items"
    />
    <router-view v-show="!isSpinning" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
import { computed, defineComponent, h, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {},
  setup() {
    const current = ref(["mail"]);
    const selectedKeys = ref(["1"]);
    const router = useRouter();
    const route = useRoute();
    console.log("router", route);
    const layout = computed(() => route.meta.layout || "blank-layout");
    const items = ref([
      {
        key: "contact-us",
        icon: () => h(MailOutlined),
        label: "contact",
        title: "Navigation One",
        route: "/contact-us",
      },
      {
        key: "home",
        icon: () => h(AppstoreOutlined),
        label: "Home",
        title: "Home",
        route: "/home",
      },
    ]);

    const handleClick = (menuInfo) => {
      console.log("menuInfo", menuInfo.key);
      router.push({ name: menuInfo.key });
    };
    return {
      current,
      selectedKeys,
      items,
      handleClick,
      layout,
    };
  },
});
</script>
