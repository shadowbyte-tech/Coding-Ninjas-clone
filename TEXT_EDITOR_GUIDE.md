# Website Text Editor Guide

## 📝 How to Access and Use the Text Editor

### 🚀 Access the Text Editor

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open the text editor:**
   - Go to: `http://localhost:5173/edit-texts`
   - Or navigate to your website and add `/edit-texts` to the URL

### 🎯 What You Can Edit

The text editor gives you complete control over all text content on the website:

#### **Main Sections:**
- **Navbar** - Logo, menu items, buttons
- **Hero** - Main heading, subheading, CTAs
- **Courses** - Section titles, descriptions
- **Stats** - Numbers and labels
- **Why Us** - Features and benefits
- **Placement** - All placement-related text
- **Testimonials** - Section titles and categories
- **Footer** - All footer content
- **And more...**

#### **Common Elements:**
- Button text
- Labels and descriptions
- Error messages
- Loading text
- Navigation items

### 🛠️ How to Use

1. **Select a Section:**
   - Click on any section in the left sidebar
   - Each section contains related text elements

2. **Edit Text:**
   - Type directly in the input fields
   - Use text areas for longer content
   - Changes are auto-saved locally

3. **Save Changes:**
   - Click "Save Changes" button
   - Changes are saved to browser's local storage
   - Green checkmark confirms successful save

4. **Reset if Needed:**
   - Click "Reset to Default" to restore original text
   - This will undo all your changes

### 💾 How Changes Apply

**Important:** The text editor currently saves changes to browser local storage. To make changes permanent in the code:

1. **Edit the source file directly:**
   - Open `src/config/texts.js`
   - Modify the values there
   - Changes will be reflected immediately

2. **Or use the editor to preview:**
   - Use the editor to test changes
   - Copy the final values to `texts.js`
   - This gives you a visual preview before committing

### 🔧 Technical Details

**File Structure:**
```
src/
├── config/
│   └── texts.js           # Main text configuration
├── components/
│   └── TextEditor.jsx     # Editor interface
└── App.jsx               # Route handling
```

**Integration:**
To use these texts in your components:

```jsx
import { WEBSITE_TEXTS } from '../config/texts';

// Use in your component
<h1>{WEBSITE_TEXTS.hero.mainHeading}</h1>
<button>{WEBSITE_TEXTS.hero.ctaButton}</button>
```

### 🎨 Benefits

- **Centralized Management:** All text in one place
- **Easy Updates:** Change text without touching components
- **Consistency:** Ensure consistent terminology
- **Multi-language Ready:** Structure supports future translations
- **Non-technical Friendly:** Easy for content editors to use

### 🚀 Future Enhancements

- **Live Preview:** See changes in real-time
- **Multi-language Support:** Add translations
- **Cloud Sync:** Save changes to backend
- **Version History:** Track and revert changes
- **Role-based Access:** Different permissions for different users

### 📞 Support

If you need help:
1. Check this guide first
2. Look at the `texts.js` file structure
3. Test changes in the editor before applying
4. Save frequently to avoid losing work

---

**Happy Editing! 🎉**
