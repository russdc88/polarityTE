# PolarityTe test

Please clone the PolarityTE project and follow installation instructions.

## Installation

To start, we will need to use node.js to run this application. Please refer to this [link](https://www.npmjs.com/get-npm) to start installation.

1. To get things started, we need to get a mysql setup/connection. 
	- login to mysql local instance.
	- run the following code:

	```
	
	DROP DATABASE IF EXISTS avatar;

	CREATE DATABASE avatar;

	```

	-Go back to Polarity folder and in the config.json file, in the config folder, change password, username, and host to what you have for your mysql password, username, and localhost port. 

2. Now we need to download the appropriate npm packages for our program to run.

	- run the following code:

	```
	cd polarityTE

	npm i

	```
	This will download all the dependencies that are in the package.json file. 

	- From here everything should be setup to go. run the following code:

	```
	npm start

	```

	This will run nodemon, which starts and restarts when you make edits on the code. If you don't want to use that, run the following code:

	```

	node server.js

	```

### Note

Sequelize is setup to where if the server restarts, it will delete datbase avatar and remake it, losing all avatars created. If you plan on changing code, this will occur. To avoid, remove {force:true} under db.sequelize.sync on the bottom of the server.js file. It will keep the current database you have when you restart your server.




