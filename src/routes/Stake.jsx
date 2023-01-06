import Header from '../additional/Header';
import WordsAnimation from '../additional/Word';

import { mainnet, useAccount, useBalance } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { useContractRead } from 'wagmi'
import usdtABI from '../assets/usdtABI.json'
import React from 'react';

import { Web3Modal, Web3Button, useWeb3Modal } from '@web3modal/react';

const Balance = () => {
	const { address, connector, isConnected } = useAccount()

	const { data: usdtBalance, isError, isLoading } = useContractRead({
		address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
		abi: usdtABI,
		args: [address],
		functionName: 'balanceOf',
		chainId: polygon.id,
	})

	const { data: ymbBalance, _isError, _isLoading } = useBalance({
		address: address,
		chainId: mainnet.id,
		token: '0x17A8f6EaD7256E6620109bB02CB21A29b6BD7D3E'
	})

	return (
		<>
			<span className='window-balance'>{(parseFloat(usdtBalance == undefined ? 0 : usdtBalance) / 10 ** 6).toFixed(2).replace(".", ",")} <a className='window-balance-symbol'>USDT</a></span>
			<span className='window-balance'>{parseFloat(ymbBalance?.formatted == undefined ? 0 : ymbBalance?.formatted).toFixed(2).replace(".", ",")} <a className='window-balance-symbol'>YMB</a></span>
		</>
	)
}

export default function Stake() {
	const { address, connector, isConnected } = useAccount()

	const { open } = useWeb3Modal()

	let swap_text = (isConnected ? 'Swap' : 'Connect wallet');

	return (
		<div>
			<Header />
			<div className='opacity-div'>
				{/* <span className='h1'>STAKING</span> */}
				<WordsAnimation words_str="GIGANTIC SEISMIC COLOSSAL HUMONGOUS SUBSTANTIAL" />
				<div className='intro-text'>
					<h1>Whatever word you choose, get supercharged yields with the stYMB token.</h1>
				</div>
				<div className='table-stake'>
					<div className='window'>
						<h1>Supercharge your yield with stYMB</h1>
						<br />
						<h2>Swap USDT token within the Yuamble ecosystem for <strong>stYMB</strong>. It's enough to buy. The new received income from the protocol will be reinvested. This will affect the price of stYMB.</h2>
						<br />
						<h2>After swaping stYMB token, you will activate USDT. Every 2-3 days there will be a harvest, and price will change. Keep in mind that the stYMB token will be frozen for at least one day.</h2>
						<br />
						<div className='swap-div'>
							<div>
								<h3>Swap from</h3>
								<div>
									<img src='/src/assets/usdt-token.png'></img>
									<span>USDT</span>
								</div>
							</div>
							<div>
								<h3>Amount</h3>
								<input type='number'></input>
							</div>
							<div>
								<svg class="text-neutral-900" width="16" height="49" viewBox="0 0 16 49" fill="var(--black-bg)" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 48.7071C7.68342 49.0976 8.31658 49.0976 8.7071 48.7071L15.0711 42.3431C15.4616 41.9526 15.4616 41.3195 15.0711 40.9289C14.6805 40.5384 14.0474 40.5384 13.6569 40.9289L8 46.5858L2.34314 40.9289C1.95262 40.5384 1.31945 40.5384 0.92893 40.9289C0.538406 41.3195 0.538406 41.9526 0.92893 42.3431L7.29289 48.7071ZM7 -4.37114e-08L7 48L9 48L9 4.37114e-08L7 -4.37114e-08Z" fill="var(--black-bg)"></path></svg>
							</div>
							<div>
								<svg class="text-neutral-900" width="16" height="49" viewBox="0 0 16 49" fill="var(--black-bg)" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 48.7071C7.68342 49.0976 8.31658 49.0976 8.7071 48.7071L15.0711 42.3431C15.4616 41.9526 15.4616 41.3195 15.0711 40.9289C14.6805 40.5384 14.0474 40.5384 13.6569 40.9289L8 46.5858L2.34314 40.9289C1.95262 40.5384 1.31945 40.5384 0.92893 40.9289C0.538406 41.3195 0.538406 41.9526 0.92893 42.3431L7.29289 48.7071ZM7 -4.37114e-08L7 48L9 48L9 4.37114e-08L7 -4.37114e-08Z" fill="var(--black-bg)"></path></svg>
							</div>
							<div>
								<h3>Swap to</h3>
								<div>
									<img src='/src/assets/stymb-token.png'></img>
									<span>stYMB</span>
								</div>
							</div>
							<div>
								<h3>You will receive approximately</h3>
								<input type='number'></input>
							</div>
						</div>
						<br />
						<br />
						<button className='light-button' onClick={() => {
							if (isConnected) {

							} else {
								open()
							}
						}}>{swap_text}</button>
					</div>
					<div className='window-dark'>
						<h1>You have</h1>
						<Balance />
						<br /><br />
						<h1>You invested</h1>
						<span className='window-balance'>0,00 <a className='window-balance-symbol'>stYMB</a></span>
						<br /><br />
						<h1>Price</h1>
						<span className='window-balance'>1 <a className='window-balance-symbol'>stYMB</a> ≈ 1.01 <a className='window-balance-symbol'>USDT</a></span>
						<a href='/stymb/holdings' className='a-dark-button'>
							<button className='dark-button'>More about holdings and strategy</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
