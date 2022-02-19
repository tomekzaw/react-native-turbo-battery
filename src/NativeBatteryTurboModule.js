'use strict';

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  +getConstants: () => {||};
  +getBatteryLevel: () => number;
}

export default (TurboModuleRegistry.get<Spec>('NativeBatteryTurboModule'): Spec);
