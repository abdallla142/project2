# How to Upload to GitHub

## Option 1: Using Git LFS (Recommended - Already Set Up)

Your repository is already configured to use Git LFS for video files. Follow these steps:

### Step 1: Create a GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., "soccer-skills" or "skill-sphere")
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Add and Commit Files
Run these commands in your project folder:

```bash
git add .
git commit -m "Initial commit: Soccer Skills website"
```

### Step 3: Connect to GitHub and Push
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

If prompted, enter your GitHub username and password (or use a Personal Access Token).

---

## Option 2: Exclude Videos (If Git LFS Doesn't Work)

If you prefer not to use Git LFS, you can exclude videos and host them elsewhere:

1. **Add videos to .gitignore** (already done)
2. **Host videos on:**
   - YouTube (unlisted videos)
   - Google Drive
   - Dropbox
   - Or any free video hosting service

3. **Update your HTML files** to use the hosted video URLs instead of local files

---

## Troubleshooting

### If you get "file too large" error:
- Make sure Git LFS is installed: `git lfs install`
- Check that `.gitattributes` exists and has `*.mp4 filter=lfs`
- Try: `git lfs track "*.mp4"` then `git add .gitattributes`

### If Git LFS isn't working:
- You may need to install it: https://git-lfs.github.com/
- Or use Option 2 above

