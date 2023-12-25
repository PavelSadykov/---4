function generateFooter(contacts, siteName, bgColor, fontColor) {
    document.write(`
    <footer style="background-color: ${bgColor}; color: ${fontColor};">
    <ul class="contact-list">
      ${contacts.map(contact => `<li>${contact}</li>`).join('')}
    </ul>
    <br> 
    <p><br>${siteName} &copy; 2000 г</p>
  </footer>
    `);
  }
  
  // Example usage
  const contacts = ['Email: example@gmail.com', 'Phone: +7(999)-999-99-99', 'Address: 123 Main St'];
  const siteName = 'SiteName';
  const bgColor = ' rgb(47, 16, 2)';
  const fontColor = 'rgb(240, 236, 235)';
  
  generateFooter(contacts, siteName, bgColor, fontColor);
  
