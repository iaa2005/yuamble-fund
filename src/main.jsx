import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import Stake from './routes/Stake'
import Holdings from './routes/Holdings'
import About from './routes/About'

import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
import { Web3Modal, Web3Button, useWeb3Modal } from '@web3modal/react';

import { configureChains, createClient, WagmiConfig, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction, useDisconnect, useAccount, useBalance, useConnect, useEnsAvatar, useEnsName } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { sendTransaction } from '@wagmi/core';

import { BigNumber, utils } from 'ethers';
import styled from 'styled-components';

export const PROJECT_ID = "22eeceb166cdca87afb07e5074b8a2c5";

export const chains = [polygon, mainnet];

// Wagmi client
export const { provider } = configureChains(chains, [
	walletConnectProvider({ projectId: PROJECT_ID }),
]);

export const wagmiClient = createClient({
	autoConnect: true,
	connectors: modalConnectors({ appName: "Yuamble", chains }),
	provider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HashRouter>
			<WagmiConfig client={wagmiClient}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/stymb' element={<Stake />} />
					<Route path='/stymb/holdings' element={<Holdings />} />
					<Route path='/stymb/about' element={<About />} />
				</Routes>
			</WagmiConfig>
			<Web3Modal
				projectId={PROJECT_ID}
				ethereumClient={ethereumClient}
				themeMode="dark"
				themeColor="purple"
				themeBackground="gradient"
			/>
		</HashRouter>
	</React.StrictMode>
)