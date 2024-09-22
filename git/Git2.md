
### 1. **Download and Install Git**
   - Download Git from [git-scm.com](https://git-scm.com/).
   - Follow the installation instructions for your operating system (Windows, macOS, or Linux).
   - Verify installation by running:
     ```bash
     git --version
     ```

### 2. **Initialize a Repository in a Folder**
   - Navigate to your project folder or create a new one:
     ```bash
     cd /path/to/your/project
     ```
   - Initialize a Git repository:
     ```bash
     git init
     ```

### 3. **Add Files**
   - After creating or modifying files in the folder, check the status of files:
     ```bash
     git status
     ```
   - To add specific files:
     ```bash
     git add filename.txt
     ```
   - To add all files:
     ```bash
     git add .
     ```

### 4. **Commit Changes**
   - Commit the added files with a message:
     ```bash
     git commit -m "Initial commit"
     ```

### 5. **Modify and Commit**
   - Make changes to files, then check status:
     ```bash
     git status
     ```
   - Add modified files to staging area:
     ```bash
     git add filename.txt
     ```
   - Commit the changes:
     ```bash
     git commit -m "Updated file"
     ```

### 6. **Checkout**
   - To view a specific commit or switch between branches:
     ```bash
     git checkout branch_name_or_commit_hash
     ```

### 7. **Use Branches**
   - Create a new branch:
     ```bash
     git branch new-branch
     ```
   - Switch to the new branch:
     ```bash
     git checkout new-branch
     ```
   - Or create and switch to a branch in one step:
     ```bash
     git checkout -b new-branch
     ```

### 8. **Diff**
   - To see changes between commits or uncommitted changes:
     ```bash
     git diff
     ```

### 9. **Merge**
   - Switch back to the main branch:
     ```bash
     git checkout main
     ```
   - Merge the changes from another branch:
     ```bash
     git merge new-branch
     ```

### 10. **Push**
   - Link your local repository to a remote (like GitHub):
     ```bash
     git remote add origin https://github.com/username/repo.git
     ```
   - Push your local commits to the remote repository:
     ```bash
     git push -u origin main
     ```
