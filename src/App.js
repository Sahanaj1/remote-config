// import Agreed from './Agreed';
// import Denied from './Denied';
import {initializeApp} from 'firebase/app';
import {fetchAndActivate, getRemoteConfig} from "firebase/remote-config";
import {getValue} from "firebase/remote-config";
import { useState,useEffect } from 'react';


const firebaseConfig = {
  // your firebase keys
};

const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 15000;




function App() {
  
  const [greeting, setGreeting] = useState();
  fetchAndActivate(remoteConfig).then(() => {
    setGreeting(getValue(remoteConfig, "greeting").asString());

  }).catch((error) => {

  });

  useEffect(() => {
    if(greeting==="japan"){
      console.log("japan language detected") 
      }else if(greeting ==="india"){
       console.log("english language detected") 
      }

  }, [greeting])
  
 
  return (
    <div className="App">
      <header className="App-header">
       {greeting}
         <h1>Using firebase remote config for the above component</h1>
  
      </header>
    </div>
  );
}

export default App;
