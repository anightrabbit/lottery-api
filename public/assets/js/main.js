const root = document.getElementById('app');

const { Fragment, useState, useEffect,memo } = React;
const prizeData = [{
	level:1,
	text:'奖品',
	img: "/img/1.svg",
	order:1,
},{
	level:2,
	text:'奖品',
	img: "/img/2.svg",
	order:2,
},{
	level:3,
	text:'奖品',
	img: "/img/3.svg",
	order:3,
},{
	level:4,
	text:'奖品',
	img: "/img/4.svg",
	order:4,
},{
	level:5,
	text:'奖品',
	img: "/img/5.svg",
	order:12,
},{
	level: 'center',
	text: '立即抽奖',
	img: "/img/13.svg"
},{
	level:6,
	text:'奖品',
	img: "/img/6.svg",
	order:5,
},{
	level:7,
	text:'奖品',
	img: "/img/7.svg",
	order:11,
},{
	level:8,
	text:'奖品',
	img: "/img/8.svg",
	order:6
},{
	level:9,
	text:'奖品',
	img: "/img/9.svg",
	order:10,

},{
	level:10,
	text:'奖品',
	img: "/img/10.svg",
	order:9,
},{
	level:11,
	text:'奖品',
	img: "/img/11.svg",
	order:8,
},{
	level:12,
	text:'奖品',
	img: "/img/12.svg",
	order:7,
}];

// 容器组件
const App = () => <Fragment>
	<Title>1、九宫格型抽奖</Title>
	<Pool data={prizeData} />
</Fragment>;

// 标题
const Title = (props) => <h2 className="title">{props.children}</h2>;

// 奖池
const Pool = (props) => {
	const data = props.data;
	const [loading, setLoading] = useState(false); // 按钮状态
	const [selectedLevel,updateSelectedLevel] = useState(0);// 奖品选择
	const orderList = data.filter(item => typeof item.level === 'number'); // 过滤中间的button
	orderList.sort((a,b) => a.order > b.order ? 1 : a.order < b.order ? -1 : 0); // 排序
	const orderListLength = orderList.length;

	let timerId = null;
	let level = 0;
	const animationActionStart = (orderLength, loop) => {
		timerId = setInterval(()=>{
			level = level < orderLength ? level += 1 : !loop ? 1 : level;
			updateSelectedLevel(level);
		},150); 
	};
	const animationActionEnd = (randomLevel) => {
		clearInterval(timerId);
		setLoading(false);
		console.log(`🎉恭喜中奖：${randomLevel}等奖`);
	}
	const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max)) + 1;
	const fetchPrize = () => {
		setLoading(true);
		animationActionStart(orderListLength);
		const randomLevel = getRandomNumber(11);
		setTimeout(()=>{
			animationActionEnd(randomLevel);
		},150 * randomLevel + 150 * orderListLength * 3);
	};
	return <div className="container">
		<div className="container-inner">
			{
				prizeData.map(item => item.level === 'center'
					? <ClickMe className={`inner-item item-${item.level}`} loading={loading} text={item.text} buttonAction={fetchPrize} />
					: <PrizeItem className={item.order === selectedLevel ? 'highlight' :''} key={item.level} {...item} />
				)
			}
		</div>
	</div>;
}

// 奖品
const PrizeItem = (props) => {
	const className = `inner-item item-${props.level} ${props.className}`;
	const style = {
		backgroundImage: `url(assets${props.img})`,
	}
	return <div className={className} data-order={props.order} style={style}><p className="text">{props.text}</p></div>
}

// 抽奖按钮
const ClickMe = (props) => {
	const btnClassName = props.loading ? 'click-me disable' : 'click-me';
	return <div className={props.className}>
		<button className={btnClassName} onClick={props.buttonAction}>{props.text}</button>
		<p>50积分/次</p>
	</div>;
}

ReactDOM.render(<App />,root);