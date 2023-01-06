import Header from '../additional/Header';

export default function About() {
	return (
		<div>
			<Header />
			<div className='opacity-div'>
				{/* <span className='h1'>ABOUT</span> */}
				<div className='table-about'>
					<div className='table-about-in'>
						<h1>Do I need to stake stYMB?</h1>
						<h2>No. You don't need to stake a stYMB token. During the swapping, the protocol automatically invests the invested funds in different pools and exchanges using a special strategy.</h2>
					</div>
					<div className='table-about-in'>
						<h1>Why does the token price change?</h1>
						<h2>Since the fund receives income from investing, the market capitalization of the fund increases. Therefore, there are more funds for each stYMB token, which is why the price increases.</h2>
						<br />
						<h2>The same can happen when the price drops. So the fund is incurring a temporary loss.</h2>
					</div>
					<div className='table-about-in'>
						<h1>Why are new invested tokens frozen?</h1>
						{/* <h2>Why</h2> */}
					</div>
					<div className='table-about-in'>
						<h1>What is a Strategy?</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
