import WordsAnimation from '../additional/Word';
import Header from '../additional/Header';

export default function Home() {
	return (
		<div className="Home">
			<Header/>
			<div className='opacity-div'>
				<WordsAnimation words_str="INVEST SWAP EARN CLAIM CHILL"/>
				<div className='intro-text'>
					<h1>With <strong>Yuamble</strong>. Stable Income Protocol.</h1>
					<h2>Yuamble is a decentralized investment fund that helps individuals, DAOs and other protocols earn income from their digital assets.</h2>
				</div>
				<form action='/stymb' className='start-invest-form'>
					<button>Start Invest</button>
				</form>
				<table className='table-about'>
					<div className='table-about-in'>
						{/* <h1>Стабильный доход в долгосрок</h1>
						<h2>Получайте высокий доход от вкада, не думая о реинвестировании и диверсификации портфеля</h2> */}
						<h1>Stable income in the long term</h1>
						<h2>Get high income from the deposit, without thinking about reinvesting and portfolio diversification</h2>
					</div>
					<div className='table-about-in'>
						{/* <h1>Первый инвест-фонд в Polygon</h1>
						<h2>Yuamble — первый инвестиционный фонд в Polygon — Layer-2 сети, работающий на EVM</h2> */}
						<h1>The first investment fund in Polygon</h1>
						<h2>Yuamble is the first investment fund in the Polygon — Layer-2 network running on Ethereum Virual Machine</h2>
					</div>
					<div className='table-about-in'>
						{/* <h1>Только безопасные</h1>
						<h2>Yuamble выбирает только безопасные и со стабильным доходом пулы ликвидности и фарминга</h2> */}
						<h1>Only safety</h1>
						<h2>Yuamble chooses only safe and stable pools of liquidity and farming with income</h2>
					</div>
					<div className='table-about-in'>
						{/* <h1>Вывод средств 24/7</h1>
						<h2>В любое время вы можете выводить свои средства. Без комиссий</h2> */}
						<h1>Withdrawal of funds 24/7</h1>
						<h2>You can withdraw your funds at any time. No fees</h2>
					</div>
				</table>
			</div>
		</div>
	)
}

