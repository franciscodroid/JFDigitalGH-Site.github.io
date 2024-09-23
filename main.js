<script>
    const clientNames = ['Maria', 'João', 'Ana', 'Carlos', 'Beatriz', 'Pedro', 'Luísa', 'Fernando'];
    const clientTicker = document.getElementById('clientTicker');

    function updateClientTicker() {
      const randomName = clientNames[Math.floor(Math.random() * clientNames.length)];
      clientTicker.textContent = `${randomName} acabou de comprar um site!`;
      clientTicker.style.opacity = 1;

      setTimeout(() => {
        clientTicker.style.opacity = 0;
      }, 2000);
    }

    setInterval(updateClientTicker, 4000);
    updateClientTicker();

    function toggleSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    }
  </script>
</body></html>