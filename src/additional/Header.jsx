import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
import { Web3Modal, Web3Button, useWeb3Modal } from '@web3modal/react';

import { configureChains, createClient, WagmiConfig, usePrepareSendTransaction, useSendTransaction, useWaitForTransaction, useDisconnect, useAccount, useBalance, useConnect, useEnsAvatar, useEnsName } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { sendTransaction } from '@wagmi/core';

import { BigNumber, utils } from 'ethers';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ButtonTextConnect = () => {
	const { address, connector, isConnected } = useAccount()
	const { data: ensName } = useEnsName({ address: address, chainId: 1 });
	const { open } = useWeb3Modal()

	let buttonText = '';
	if (isConnected) {
		if (ensName == undefined) {
			buttonText = `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`;
		} else {
			buttonText = `${ensName}`;
		}
	} else {
		buttonText = 'Connect wallet';
	}

	return (
		<a>
			{buttonText}
		</a>
	)
}

export default function Header() {
	const { address, connector, isConnected } = useAccount()
	const { open } = useWeb3Modal()
    const { disconnect } = useDisconnect();

    const pathname = window.location.pathname;

	return (
        <header>
            <div className='header-in'>
                <Link className='header-in-a' to="/">{pathname === "/" ? (<strong className='white'>Home</strong>) : `Home`}</Link>
                <Link className='header-in-a' to="/stymb">{pathname === "/stymb" ? (<strong className='white'>stYMB</strong>) : `stYMB`}</Link>
                <Link className='header-in-a' to="/stymb/holdings">{pathname === "/stymb/holdings" ? (<strong className='white'>Holdings</strong>) : `Holdings`}</Link>
                <Link className='header-in-a' to='/stymb/about'>{pathname === "/stymb/about" ? (<strong className='white'>About</strong>) : `About`}</Link>
            </div>
            <span className="header-logo"><a href='/'>Yuamble</a></span>
            <div>
                <button className="connect-wallet" onClick={() => {
                    if (isConnected) {
                        disconnect()
                    } else {
                        open()
                    }
                }}>
                <ButtonTextConnect />
                </button>
            </div>
        </header>
	)
}

