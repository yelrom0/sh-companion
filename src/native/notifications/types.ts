export interface NotificationPlugin {
    listApps(): Promise<{ apps: string[] }>;
}