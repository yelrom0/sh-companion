import { useState } from 'react'
import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core';
import './App.css'
import { CapNotify } from '../cap-notification-listener'
import { AppListReturn, ProcessedPackageInfo } from './typings'
import { AppInfoDisplay } from './components/app-info-display'


function App() {
  const [apps, setApps] = useState<AppListReturn>({appList: ""})
  const [processedPackageInfo, setProcessedPackageInfo] = useState<ProcessedPackageInfo[]>([])
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Call native method to list device apps then set the apps state
      CapNotify.listApps(false).then(apps => setApps(apps))
    }
  }, [])

  useEffect(() => {
    // console.log(`Apps: ${JSON.stringify(apps)}`)
    if (apps.appList.length > 0) {
      console.log(`Apps in if: ${apps.appList}`)
      const appList: ProcessedPackageInfo[] = JSON.parse(apps.appList)
      setProcessedPackageInfo(appList)
    }
  }, [apps])

  useEffect(() => { 
    // console.log(`Processed package info: ${JSON.stringify(processedPackageInfo)}`);
  }, [processedPackageInfo])

  return (
    <>
      <AppInfoDisplay packageList={processedPackageInfo} />
    </>
  )
}

export default App
