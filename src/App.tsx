import { useState, useMemo } from 'react'
import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core';
import './App.css'
import { CapNotify } from '../cap-notification-listener'

interface ProcessedPackageInfo {
  packageName: string;
  name: string;
  icon: Blob;
}

interface AppListReturn {
  appList: string;
}

function App() {
  const [apps, setApps] = useState<AppListReturn>({appList: ""})
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Call native method to list device apps then set the apps state
      CapNotify.listApps(false).then(apps => setApps(apps))
    }

    
  }, [])

  const appList = useMemo(() => {
    // console.log(`apps: ${JSON.stringify(apps)}`)
    if (apps.appList.length === 0) {
      return "No apps found."
    } else {
      console.log(typeof apps)
      console.log(typeof apps.appList)
      const appList: ProcessedPackageInfo[] = JSON.parse(apps.appList)
      // for (let i = 0; i < appList.length; i++) {
      //   console.log(appList[i].name)
      //   console.log(appList[i].packageName)
      //   return (
      //     <div key={i}>
      //       {/* <img src={URL.createObjectURL(apps.appList[i].icon)}></img> */}
      //       <div>{appList[i].name}</div>
      //       <div>{appList[i].packageName}</div>
      //     </div>
      //   )
      // }
      return (
        <div>
          
          {
            
            // JSON.stringify(apps.appList)
            // apps.appList
            // JSON.stringify(apps)
            
            appList.map((app, index) => {
              console.log(index)
              console.log(JSON.stringify(app))
              return (
                <div key={index}>
                  {/* <img src={URL.createObjectURL(app.icon)}></img> */}
                  <div>{app.name}</div>
                  <div>{app.packageName}</div>
                </div>
              )
            })
            // JSON.stringify(apps.appList)
            // JSON.stringify(apps.appList) 
            // apps.appList
            
          }
        </div>
      )
    }

    
    // return apps.map((app, index) => {
    //   return (
    //     <div key={index}>
    //       <div>{JSON.stringify(app)}</div>
    //       {/* <h3>{app.name}</h3>
    //       <p>{app.packageName}</p>
    //       <p>{app.versionName}</p>
    //       <p>{app.versionCode}</p> */}
    //     </div>
    //   )
    // })
    // return apps.map((app, index) => {
    //   return (
    //     <div key={index}>
    //       <div>{JSON.stringify(app)}</div>
    //       {/* <h3>{app.name}</h3>
    //       <p>{app.packageName}</p>
    //       <p>{app.versionName}</p>
    //       <p>{app.versionCode}</p> */}
    //     </div>
    //   )
    // })
  }, [apps]) // Add a comma here

  return (
    <>
      {appList}
    </>
  )
}

export default App
