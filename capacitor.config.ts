import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: '79f733f9',
  appName: 'photo_test',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '79f733f9',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;