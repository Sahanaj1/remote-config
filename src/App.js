// import Agreed from './Agreed';
// import Denied from './Denied';
import {initializeApp} from 'firebase/app';
import {fetchAndActivate, getRemoteConfig} from "firebase/remote-config";
import {getValue} from "firebase/remote-config";
import { useState,useEffect } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyBsxxOV0D8RNNxsc6DZUEL2KCfZ6ZgjEtU",
  authDomain: "remote-config-4709d.firebaseapp.com",
  projectId: "remote-config-4709d",
  storageBucket: "remote-config-4709d.appspot.com",
  messagingSenderId: "628669430412",
  appId: "1:628669430412:web:f92efe8910634aa454d9a9",
  measurementId: "G-23KVN64PKM"
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
