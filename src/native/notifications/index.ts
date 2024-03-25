import { registerPlugin } from "@capacitor/core";
import type { NotificationPlugin } from "./types";

const Notification = registerPlugin<NotificationPlugin>("Notification");

export default Notification;
export { NotificationPlugin };