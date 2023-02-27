<template>
  <div class="footer">
    <div class="footer-links">
      <div>
        <img
          src="../assets/img/los-cocos-iso-footer.png"
          alt="Hotel Los Cocos"
          width="45"
        />
      </div>
      <a href="#">Terms and Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">About us</a>
      <a href="#">Partners</a>
    </div>
    <div class="footer-links">
      <a href="#">reservations@loscocosbungalows.com</a>
      <a href="#">Tlf: +34 555 555 555</a>
      <div>
        <img
          src="../assets/img/footer_icons.png"
          alt="Social media icons"
          width="125"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  @apply flex justify-between mx-auto text-sm p-4 border-t border-gray-light;
  max-width: 80rem;
}
.footer-links {
  @apply flex items-center space-x-4;
}
</style>
