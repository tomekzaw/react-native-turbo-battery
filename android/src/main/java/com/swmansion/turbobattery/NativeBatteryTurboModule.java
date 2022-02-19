package com.swmansion.turbobattery;

import android.content.Context;
import android.os.BatteryManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;

public class NativeBatteryTurboModule extends NativeBatteryTurboModuleSpec {

    public static final String NAME = "NativeBatteryTurboModule";

    private BatteryManager batteryManager;

    public NativeBatteryTurboModule(ReactApplicationContext reactContext) {
        super(reactContext);
        batteryManager = (BatteryManager) reactContext.getApplicationContext().getSystemService(Context.BATTERY_SERVICE);
    }

    @Override
    public double getBatteryLevel() {
        return batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY) / 100.0;
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }
}
