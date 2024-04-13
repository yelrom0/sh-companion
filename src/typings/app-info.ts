export interface ProcessedPackageInfo {
    packageName: string;
    name: string;
    icon: Blob;
}
  
export interface AppListReturn {
    appList: string;
}

export interface AppInfoItemProps extends ProcessedPackageInfo {
    id: number;
}