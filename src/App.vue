<template>
  <div>
    <component :is="layout" />
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
import MainLayout from "./Layouts/MainLayout.vue";
import BlankLayout from "./Layouts/BlankLayout.vue";
export default defineComponent({
  components: {
    MainLayout,
    BlankLayout,
  },
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
        key: "app",
        icon: () => h(AppstoreOutlined),
        label: "Navigation Two",
        title: "Navigation Two",
        route: "/contact-us",
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
