# some commands that might help you while coding with node.js
node -v # check node version
npm -v # check npm version if using npm
npm init # initialize a new node.js project
npm install <package_name> # install a package
npm uninstall <package_name> # uninstall a package
npm update <package_name> # update a package
npm list # list installed packages
npm run <script_name> # run a script defined in package.json
npm start # start the application (usually defined in package.json)
npm test # run tests defined in package.json
node --watch <file.js> # run a file in watch mode (re-runs on changes)
node <file.js> # run a JavaScript file
## detailed explanation of those if not clear enough :
### node -v
This command checks the version of Node.js installed on your system. It helps ensure you are using the correct version for your project.
### npm -v
This command checks the version of npm (Node Package Manager) installed on your system. npm is used to manage packages in Node.js projects.
### npm init
This command initializes a new Node.js project by creating a `package.json` file. It prompts you for information about your project, such as name, version, description, entry point, etc.
### npm install <package_name>
This command installs a package from the npm registry and adds it to your project. It updates the `package.json` file and creates a `node_modules` directory where the package is stored.
### npm uninstall <package_name>
This command removes a package from your project. It updates the `package.json` file and deletes the package from the `node_modules` directory.
### npm update <package_name>
This command updates a specific package to the latest version. It modifies the `package.json` file
and updates the package in the `node_modules` directory.
### npm list
This command lists all the installed packages in your project, including their versions. It helps you keep track of your project's dependencies.
### npm run <script_name>
This command runs a script defined in the `package.json` file. Scripts can be used to automate tasks like building, testing, or starting your application.
### npm start
This command runs the `start` script defined in the `package.json` file. It is commonly used to start your application.
### npm test
This command runs the `test` script defined in the `package.json` file. It is
commonly used to run tests for your application.
### node --watch <file.js>
This command runs a JavaScript file in watch mode, meaning it will automatically re-run the file whenever changes are detected. This is useful for development to see changes in real-time.
it helps when developing applications, as it allows you to see the effects of your code changes without manually restarting the application.
defined usually in the `package.json` file.
### node <file.js>
This command runs a specific JavaScript file using Node.js. It executes the code in the file, allowing you to run scripts or applications written in JavaScript.
# did you like this lesson?
If you found this lesson helpful, please consider giving it a thumbs up or sharing it with others who might benefit from it. Your support helps us create more content like this!
### by Ouweis Wail Sari Bey
