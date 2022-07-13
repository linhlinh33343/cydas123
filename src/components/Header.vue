<template>
  <div class="header">
    <div class="header-group">
        <div class="header-logo">
            <div class="header-item logo" ><img src="../assets/logo.svg"/></div>
            <div class="header-search"><img class="header-search-link" src="../assets/searchIcon.svg" alt=""><input class="header-search-input"  type="text" placeholder="メンバーを検索"></div>
        </div>
        <div class="header-nav">
            <div class="header-nav-item header-noti"><img src="../assets/notiIcon.svg" alt=""></div>
            <div class="header-nav-item header-menu"><img src="../assets/menuIcon.svg" alt=""></div>
            <div class="header-nav-item header-brand"><img src="../assets/brandIcon.svg" alt=""></div>
            <div class="header-nav-item header-nickname"><span>石原 由梨</span><img src="../assets/nicknameIcon.svg" alt=""></div>
        </div>
        
        
    </div>
</div>
</template>

<script>
export default {
    name:'HeaderVue'
}
</script>

<style scope>
.header{
    width:100%;
    height:var(--heightHeader);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 4px 2px -2px #e9e3e3;
    z-index: 1;
    background-color: white;
}

.header-group {
    display: flex;
    /* justify-content: start;
    align-items: center; */
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.header-item.logo {
    cursor: pointer;
    margin: 0 20px;
}
.header-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    background-color: #F4F7FB;
    border-radius: 25px;
    /* overflow: hidden; */
    box-shadow: 0 0 2px 2px #f1f0f0;
    
}
.header-search-link {
    padding: 8px 10px 8px 14px;
    cursor: pointer;
}
.header-search-link:hover{
    opacity: 0.8;
}
input.header-search-input {
    width: 100%;
    padding: 8px 0px;
    border: none;
    outline: none;
    background-color: transparent;
}
.header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
        margin: 0 20px
}

.header-nickname {
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
}
.header-nickname::after{
    position: absolute;
    content: "";
    width: 1px;
    background-color:#DCDCDC;
    top: 0;
    left: 0;
    height: 90%
}
span {
    font-size: 14px;
    font-weight: 700;
}
.header-nav-item {
    margin: 0 8px;
    cursor: pointer;
}
.header-nickname span {
    margin: 0 9px;
}

/*  */
.header-brand {
    margin: 0 18px;
    transform: translateY(2px);
}
/*  */

</style>