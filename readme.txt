# McDonald's Employee ID Card - Responsive Web Design

## 📋 Project Overview
A fully responsive McDonald's employee ID card design with front/back flip functionality, optimized for mobile, tablet, and desktop devices.

## ✅ Requirements Met

### Technical Stack
- ✅ HTML5 (semantic structure)
- ✅ CSS3 (Flexbox, Grid, animations)
- ✅ JavaScript (flip functionality, touch support)

### Responsiveness
- ✅ Mobile: 360px-480px
- ✅ Tablet: 768px-1024px
- ✅ Desktop: 1025px and up
- ✅ No horizontal scrolling
- ✅ Proper image scaling
- ✅ Readable text at all breakpoints

### Content Included
- ✅ McDonald's branding (logo, colors)
- ✅ Company name
- ✅ Branch address (4026 | MACABLING BRANCH)
- ✅ Employee photo placeholder
- ✅ Employee full name (KIM MIN JI)
- ✅ Employee number (2022-6767)
- ✅ Terms and conditions
- ✅ Emergency contact information
- ✅ Employee signature placeholder

### Bonus Feature
- ✅ **Front/Back ID toggle** with smooth flip animation
- ✅ Touch swipe support for mobile devices
- ✅ Keyboard accessibility (press 'F' to flip)
- ✅ Print-friendly CSS styles included

## 📁 File Structure

```
mcdonalds-employee-id/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Flip functionality and interactions
├── README.md           # This file
│
└── assets/             # Image assets folder
    ├── mcdonalds-logo.webp (optional)
    ├── employee-photo.webp (optional)
    └── signature.webp (optional)
```

## 🎨 Design Features

### Front Card
- McDonald's iconic yellow and red branding
- Yellow barcode stripe on the right edge
- Employee photo with frame
- Name and employee number fields
- Decorative McDonald's arches background
- Lanyard hole at the top

### Back Card
- Bold red background (#DA291C)
- Employee signature section
- Terms and conditions
- Emergency contact information
- Branch information
- McDonald's text logo
- Large watermark "M" in background
- Footer disclaimer text

## 🔄 Interactive Features

### Flip Button
- Click the "Flip Card" button to toggle between front and back
- Button text changes based on card state
- Smooth 3D flip animation

### Touch Support
- Swipe left to show back card
- Swipe right to show front card
- Works on all touch devices

### Keyboard Shortcut
- Press 'F' key to flip the card
- Improves accessibility

## 📱 Responsive Breakpoints

### Mobile (≤480px)
- Single card view
- Optimized spacing
- Smaller photo and text sizes
- Touch-friendly buttons

### Tablet (768px-1024px)
- Medium-sized card
- Balanced proportions
- Touch and mouse support

### Desktop (≥1025px)
- Full-sized card display
- Maximum detail visibility
- Hover effects on button

## 🎯 How to Use

1. **Replace Placeholder Images**:
   - Add your McDonald's logo to `/assets/mcdonalds-logo.webp`
   - Add employee photo to `/assets/employee-photo.webp`
   - Add signature image to `/assets/signature.webp`

2. **Customize Employee Data**:
   - Edit the name in HTML (line: `<div class="info-value">KIM MIN JI</div>`)
   - Edit employee number (line: `<div class="info-value">2022-6767</div>`)
   - Edit emergency contact information
   - Edit branch information

3. **Test Responsiveness**:
   - Open in browser
   - Use DevTools to test different screen sizes
   - Test on actual mobile/tablet devices

## 🖨️ Print Support
The CSS includes print-friendly styles that automatically:
- Remove the flip button
- Display both cards for printing
- Optimize card size for standard paper
- Add page breaks between cards

To print: Press Ctrl+P (or Cmd+P on Mac) while viewing the page.

## 🎨 Color Palette
- **McDonald's Red**: #DA291C
- **McDonald's Yellow**: #FFC72C
- **Dark Red**: #c41e1a
- **Golden Yellow**: #FFAA00
- **Background Gradient**: Purple gradient (#667eea to #764ba2)

## 🔧 Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Deployment
1. Ensure all files are in the correct structure
2. Test all three breakpoints
3. Verify images load correctly
4. Test flip functionality
5. Test print view
6. ZIP the entire folder for submission

## 🐛 Troubleshooting

**Images not showing?**
- Make sure images are in the `/assets` folder
- Check file paths in HTML
- Verify image file formats (webp, jpg, png)

**Flip not working?**
- Ensure JavaScript file is linked correctly
- Check browser console for errors
- Make sure script.js loads after DOM

**Layout issues on mobile?**
- Clear browser cache
- Test in incognito/private mode
- Verify viewport meta tag is present

## 📸 Screenshots Required for Submission
1. Mobile view (360px-480px)
2. Tablet view (768px-1024px)
3. Desktop view (1280px+)
4. Front card displayed
5. Back card displayed

## 🎓 Grading Criteria Checklist
- [x] Semantic HTML structure
- [x] CSS Flexbox/Grid layouts
- [x] Media queries for all breakpoints
- [x] Relative units (rem, %)
- [x] No horizontal scrolling
- [x] Readable text at all sizes
- [x] Proper image scaling
- [x] Matches brand style
- [x] Bonus feature implemented
- [x] Clean file structure
- [x] Proper documentation

## 👨‍💻 Author
Created for McDonald's Employee ID Front-End Challenge

---

**Note**: This is a sample/template design. Replace placeholder content with actual employee information and official McDonald's assets for production use.