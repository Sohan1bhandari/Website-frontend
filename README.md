# E-Commerce Website - Frontend

A fully functional, standalone e-commerce website frontend built with HTML, CSS, and JavaScript. This project features a modern UI, shopping cart functionality, user authentication (localStorage-based), and responsive design.

## Features

- 🛍️ **Product Catalog**: Browse and view detailed product information
- 🛒 **Shopping Cart**: Add products to cart with localStorage persistence
- 👤 **User Authentication**: Sign up and login functionality (client-side only)
- 📱 **Responsive Design**: Mobile-friendly interface
- 🎨 **Modern UI**: Clean and intuitive user interface
- ✨ **No Backend Required**: Works completely standalone

## Tech Stack

- **HTML5**: Structure
- **CSS3**: Styling and responsive design
- **JavaScript (Vanilla)**: Functionality and interactivity
- **localStorage**: Client-side data persistence

## Getting Started

### Option 1: Open Directly in Browser

1. Simply open `index.html` in your web browser
2. That's it! No installation or setup required

### Option 2: Using a Local Server (Recommended)

For best experience, use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
npx http-server
```

#### Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then open `http://localhost:8000` in your browser.

## Project Structure

```
frontend/
├── index.html              # Homepage
├── shop.html               # Product listing page
├── cart.html               # Shopping cart page
├── login.html              # Login page
├── signup.html             # Signup page
├── about.html              # About page
├── contact.html            # Contact page
├── privacy.html            # Privacy policy
├── terms.html              # Terms & conditions
├── forget-password.html    # Password recovery page
├── sproduct*.html          # Individual product detail pages
├── style.css               # Main stylesheet
├── script.js               # Main JavaScript file
├── image/                  # Image assets (icons, logos)
├── img/                    # Product images and banners
└── [Product folders]/      # Individual product image folders
```

## How It Works

### Shopping Cart
- Products can be added to cart from product pages
- Cart data is stored in browser's localStorage
- Cart persists across page reloads
- Cart can be managed (add, remove, update quantity) on the cart page

### User Authentication
- Users can sign up and login
- User data is stored in localStorage (client-side only)
- No backend server required
- **Note**: This is for demonstration only. In production, use a proper backend with server-side authentication.

### Product Pages
- Multiple product detail pages (sproduct.html, sproduct1.html, etc.)
- Image gallery functionality
- Add to cart functionality
- Responsive product displays

## Features in Detail

### Homepage (index.html)
- Hero section with call-to-action
- Featured products showcase
- New arrivals section
- Navigation menu

### Shop Page (shop.html)
- Grid layout of all products
- Product cards with images, names, prices
- Quick add to cart functionality

### Product Detail Pages
- Large product images
- Image gallery (click small images to change main image)
- Size selection
- Quantity selector
- Add to cart button
- Product description

### Shopping Cart (cart.html)
- View all cart items
- Update quantities
- Remove items
- View subtotal and total
- Apply coupon code (UI ready)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Notes

- This is a frontend-only project
- All data is stored in browser localStorage
- Data will be cleared if browser cache is cleared
- No actual payment processing is implemented
- No backend API calls are made

## Customization

### Changing Product Information
- Edit product pages (sproduct*.html) to change product details
- Modify `script.js` to customize cart functionality
- Update `style.css` to change the design

### Adding New Products
1. Create a new product detail page (copy from existing sproduct.html)
2. Update product information in the HTML
3. Add product to shop.html and index.html
4. Add product images to appropriate folder

## Deployment

### GitHub Pages

1. Push this frontend folder to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be live at `https://[username].github.io/[repository-name]/`

### Other Hosting Options
- Netlify: Drag and drop the frontend folder
- Vercel: Connect GitHub repository
- Any static hosting service

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please open an issue on the GitHub repository.

---

