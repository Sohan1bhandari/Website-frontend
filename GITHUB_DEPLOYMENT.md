# How to Deploy Frontend to GitHub

This guide will help you upload only the frontend folder to GitHub and deploy it using GitHub Pages.

## Step 1: Prepare Your Frontend Folder

Make sure you're in the `frontend` directory:
```bash
cd frontend
```

## Step 2: Initialize Git Repository

1. Open Git Bash or Terminal in the `frontend` folder
2. Initialize git repository:
```bash
git init
```

## Step 3: Create .gitignore File

Create a `.gitignore` file in the frontend folder (if it doesn't exist) with:
```
node_modules/
.DS_Store
*.log
.env
```

## Step 4: Add All Files

```bash
git add .
```

## Step 5: Create Initial Commit

```bash
git commit -m "Initial commit: E-commerce frontend"
```

## Step 6: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Give it a name (e.g., `ecommerce-frontend` or `my-ecommerce-website`)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 7: Connect Local Repository to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

## Step 9: Access Your Live Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take a few minutes for the site to go live after enabling GitHub Pages.

---

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. File > Add Local Repository
4. Navigate to your `frontend` folder
5. Click **Publish repository**
6. Choose a name and make it public
7. Click **Publish repository**
8. Go to repository Settings > Pages and enable GitHub Pages

---

## Troubleshooting

### Images Not Showing
- Make sure all image paths are relative (not absolute)
- Check that all image folders are included in the repository

### Styles Not Loading
- Ensure `style.css` is in the same directory as your HTML files
- Check file paths in HTML files

### JavaScript Not Working
- Verify `script.js` is in the repository
- Check browser console for errors

### Page Not Updating
- GitHub Pages may take a few minutes to update
- Clear your browser cache
- Check the repository Settings > Pages to ensure it's enabled

---

## Quick Reference Commands

```bash
# Navigate to frontend folder
cd frontend

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git push -u origin main
```

---

## Next Steps

- Customize your README.md
- Add more products
- Update styling in style.css
- Add more features to script.js

**Happy coding! 🚀**

