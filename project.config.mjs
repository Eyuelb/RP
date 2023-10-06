// cloneAndInstall.mjs
import { execSync } from 'child_process';



try {
  // Clone the Git repository and merge its contents into the existing directory
  execSync(`git clone https://github.com/Eyuelb/redux-toolkit.git ./ex/store`);

  // Install the required packages using npm
  //execSync('npm install redux react-redux @reduxjs/toolkit');

  console.log('Repository cloned and packages installed successfully.');
} catch (error) {
  console.error('An error occurred:', error.message);
}
