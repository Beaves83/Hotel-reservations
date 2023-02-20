<template>
    <header>
        <div class="menu-header">
            <a href="#" class="menu-btn">Home</a>
            <a href="#" class="menu-btn">Rooms</a>
            <a href="#" class="menu-btn">Restaurant</a>
        </div>
        <div class="menu-logo">
            <img 
                src="@/assets/img/logo-cocos.png" 
                alt="Hotel Los Cocos" 
                class="logo" />
        </div>
        <div class="menu-header">
            <a href="#" class="menu-btn">Weedings</a>
            <a href="#" class="menu-btn">Membership</a>
            <a href="#" class="menu-btn">Contact</a>
        </div>
    </header>
</template>
<style scoped>
header {
  @apply flex justify-between max-w-6xl px-8 py-4 mx-auto
}

.menu-header {
  @apply flex justify-between w-1/3
}

.menu-logo{
  @apply flex justify-center w-1/3
}
.logo {
  width: 125px;
  height: auto;
}
.menu-btn {
  @apply transition-colors duration-300;
}
.menu-btn:hover {
  @apply text-primary;
}
</style>