<template>
<b-container fluid>
  <div class="admin-navbar py-3 ">
    <div class="admin-nav shadow-sm flex-between ">
      <div class="  w-100 px-2  align-center ">
        <h6>tool box</h6>
      </div>

      <div class="   align-center px-2 py-2 main-light">
        <b-avatar rounded="circle"></b-avatar>
        <b-nav-item-dropdown
          class="p-0 text-main-dark"
          text="اسم المستخدم"
          right
        >
          <b-dropdown-item href="">الملف الشخصي</b-dropdown-item>
          <b-dropdown-item href="">تسجيل الخروج</b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
    </div>
  </div>
</b-container>

</template>

<script>
export default {};
</script>

<style lang="scss">
.admin-navbar {
  .admin-nav{
  border-radius: 20px;
  }
  .b-nav-dropdown {
    a {
      span {
        color: #2b2b2b !important;
      }
      &::after {
        color: #2b2b2b !important;
        margin: 0 10px;
      }
    }
  }
}

.dropdown-menu {
  background-color: var(--main-light) !important;
  background: var(--main-light) !important;
  border-radius: 20px !important;
}
</style>
