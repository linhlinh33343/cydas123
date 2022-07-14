<template>
  <div class="content-cydas">
    <div class="nav-menu">
      <div class="nav-menu-item" v-for="step in getListfields" :key="step">
            <img :src="step[0].iconStep" alt="" />
            <div class="item-active" ></div>
      </div>
       <div class="prevStep"><img src="../assets/prevIcon.svg" alt=""></div>
    </div>
    <div v-for="item in getListfield" :key="item" class="sub-nav-menu">
      <div v-for="el in item.subStep" :key="el" class="sub-nav-item">
        <div class="sub-config">
          <img :src="el.iconSubNav" alt="" /><span>{{ el.subNavHeading }}</span>
        </div>
        <span class="sub-title">{{ el.subNavTitle }}</span>
        <div
          class="subcontent"
          :class="[!element.toggleMenu ? 'hiddenSubMenu' : '']"
          v-for="element in el.content"
          :key="element"
        >
          <div
            class="sub-list-menu"
            @click="toggleSubMenu(element.nameContent)"
          >
            <i
              class="sub-list-menu-icon fa-solid fa-angle-down"
              v-if="!element.toggleMenu"
            ></i>
            <i
              class="sub-list-menu-icon fa-solid fa-angle-up"
              v-if="element.toggleMenu"
            ></i>
            <span>{{ element.titleContent }}</span>
          </div>
          <div v-if="element.toggleMenu" class="sub-item-menu-box">
            <p
              class="sub-item-menu"
              v-for="itemcontent in element.listContent"
              :key="itemcontent"
            >
              {{ itemcontent.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-for="item in getListfield" :key="item" class="content">
      <div v-for="el in item.subStep" :key="el" class="content-menu">
        <div v-for="element in el.content" :key="element" class="content-list">
          <div class="contentTitle">{{ element.titleContent }}</div>
          <div class="content-items-wrapper">
            <div
              v-for="itemcontent in element.listContent"
              :key="itemcontent"
              class="content-items"
            >
              <div class="content-item">
                <div class="content-item-title">
                  <img class="content-item-logo" :src="itemcontent.icon" />
                  <span>{{ itemcontent.name }}</span>
                </div>
                <p class="content-item-heading">
                  最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行までの説明最大３行まで
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ContentVue",
  data() {
    return {
      toggleMenu: false,
    };
  },
  computed: {
    ...mapState(["currentStep"]),
    ...mapGetters([
      "getListfield",
      "getListfields",
      "getListfieldsLength",
      "getStepfield",
    ]),
  },
  methods: {
    toggleSubMenu(name) {
      this.$store.dispatch("toggleSubMenu", { name });
      // this.toggleMenu=!this.toggleMenu;
    },
  },
};
</script>

<style>
.nav-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-menu-item {
    position: relative;
  padding: 18px 18px;
  cursor: pointer;
  
}
.item-active{
    position: absolute;
    content: "";
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:hsl(0, 16%, 73%);
    width: 100%;
    transition:all ease 0.4s;
    transform:scaleX(0);
    transform-origin:bottom right;
    transition: all 0.5s ease;
    transition-delay: 0.1s;
}
.nav-menu-item:hover .item-active{
    transform-origin: bottom left;
    transform:scaleX(1);

}
.nav-menu-item:hover {
  background-color: rgb(234, 241, 241);
}
.sub-nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.content-cydas {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.sub-nav-menu {
  width: 240px;
  background-color: #f8f8f8;
  /* box-shadow: 0 0 2px 2px #eae1e1; */
  padding: 12px 20px 0 12px;
}
.content {
  flex: 5;
}
.sub-config {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.sub-config span {
  font-size: 18px;
  margin: 24px 0;
}
.sub-title {
  font-size: 16px;
  margin-bottom: 16px;
  color: #007bc3;
  cursor: pointer;
}
.sub-list-menu {
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
}
.subcontent {
  width: 100%;
  border-top: 1px solid rgb(187, 180, 180);
  margin-bottom: 20px;
}
.sub-list-menu {
  font-size: 16px;
  padding: 10px;
}
.sub-item-menu {
  text-align: start;
  font-size: 16px;
  cursor: pointer;
  padding: 12px;
  margin: 0 -20px 0 -12px;
  transition: all 0.25s;
  border-top: 1px solid #e6d4d4;
  background-color: #f8ecf3;
}

.sub-item-menu:hover {
  background-color: pink;
  border-top: 1px solid #f0eaea;
}
.sub-list-menu img {
  margin-right: 5px;
}
.content {
  padding: 45px 100px;
}
.content-list {
  display: flex;
  flex-direction: column;
  align-items: start;
  /* background: #b69ab6; */
}
.contentTitle {
  font-size: 20px;
  margin-bottom: 24px;
}
.content-items-wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
}
.content-item {
  text-align: left;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px #deced1;
  overflow: hidden;
  cursor: pointer;
  margin: 0 12px;
  transition: transform linear 0.3s,opacity linear 0.3s;
  will-change: transform;
  opacity: 0.9;
}
.content-item:hover {
  transform: scale(1.05);
  opacity: 1;

}
.content-item-title {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eae6e6;
}
.content-item-title span {
  font-size: 16px;
  font-weight: 500;
}
img.content-item-logo {
  margin-right: 8px;
}
.content-item-heading {
  padding: 16px;
  font-size: 12px;
}
.content-items {
  width: calc(100% / 3);
  margin-bottom: 32px;
}

.subcontent.hiddenSubMenu {
  margin-bottom: 0;
}
.subcontent.hiddenSubMenu .sub-list-menu {
  margin: 0;
  padding: 10px;
}
i.sub-list-menu-icon {
  margin-right: 10px;
  font-size: 13px;
}
.prevStep {
    margin-top: 195px;
    cursor: pointer;
}
</style>
