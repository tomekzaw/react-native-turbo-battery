#import "NativeBatteryTurboModule.h"

#import "rnturbobattery/rnturbobattery.h"

using namespace facebook::react;

@interface NativeBatteryTurboModule () <NativeBatteryTurboModuleSpec>
@end

@implementation NativeBatteryTurboModule

RCT_EXPORT_MODULE()

- (NSNumber *)getBatteryLevel
{
  return @(UIDevice.currentDevice.batteryLevel);
}

- (std::shared_ptr<TurboModule>)getTurboModule:(const ObjCTurboModule::InitParams &)params
{
  return std::make_shared<NativeBatteryTurboModuleSpecJSI>(params);
}

@end
