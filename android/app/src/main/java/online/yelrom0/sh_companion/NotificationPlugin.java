package online.yelrom0.sh_companion;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Notification")
public class NotificationPlugin extends Plugin {

    // @PluginMethod()
    // public void echo(PluginCall call) {
    //     String value = call.getString("value");

    //     JSObject ret = new JSObject();
    //     ret.put("value", value);
    //     call.resolve(ret);
    // }

    @PluginMethod()
    public void listApps(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", "Hello World");
        call.resolve(ret);
    }
}