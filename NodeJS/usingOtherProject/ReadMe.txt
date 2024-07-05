When sharing a project, we dont have to share the 
node_module folder with it because, it contains a lot of files.

The modules and libraries can be installed using a 
different approach.

So the file will be shared without all external libraries.

To demonstrate, I am copying the external-modules project
from /home/prince/MyLinux/MEAN/NodeJS/external-modules
without node_modules folder.

So, the folder will look like : 

- usingOtherProject
    - index.js
    - package-lock.json
    -package.json

Here, we don't have the node modules folder. So normally,
I would check the package.json and install dependencies.

Which would work. But there is an alternative method for that :

+ move to the application directory and type just "npm install"
+ It will install all the dependencies along with node_modules 
automatically for the current folder.