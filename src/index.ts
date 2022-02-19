// @ts-ignore
import { TurboModuleRegistry } from 'react-native';

const NativeBatteryTurboModule = TurboModuleRegistry.get(
  'NativeBatteryTurboModule'
);

export function getBatteryLevel(): number {
  return NativeBatteryTurboModule.getBatteryLevel();
}
