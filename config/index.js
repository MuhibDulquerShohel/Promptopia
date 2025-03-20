import { cookieStorage, createStorage, http } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, arbitrum } from '@reown/appkit/networks';

// Get projectId from https://cloud.reown.com
const projectId = "2cca2410aa0ba1d8a172daba4c777920";

if (!projectId) {
  throw new Error('Project ID is not defined');
}

const networks = [mainnet, arbitrum];

// Set up the Wagmi Adapter (Config)
const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

const config = wagmiAdapter.wagmiConfig;

export { projectId, networks, wagmiAdapter, config };
