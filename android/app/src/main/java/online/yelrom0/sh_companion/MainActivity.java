package online.yelrom0.sh_companion;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(NotificationPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
