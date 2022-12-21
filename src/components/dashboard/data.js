// Hospital Dashboard
import d1 from '../../assets/images/dashboard-hospital/d1.jpg'
import d2 from '../../assets/images/dashboard-hospital/d2.jpg'
import d3 from '../../assets/images/dashboard-hospital/d3.jpg'
import d4 from '../../assets/images/dashboard-hospital/d4.jpg'
import d5 from '../../assets/images/dashboard-hospital/d5.jpg'
// Sass Dashboard
import {sassSmallChart1, sassSmallChart2, sassSmallChart3, sassSmallChart4, sassSmallChart5 } from './chartsData/chartist'
import u1 from '../../assets/images/avtar/7.jpg'
import u2 from '../../assets/images/avtar/4.jpg'
import u3 from '../../assets/images/avtar/16.jpg'
import u4 from '../../assets/images/avtar/11.jpg'
import u5 from '../../assets/images/avtar/3.jpg'
import g1 from '../../assets/images/dashboard-sass/graph-1.png'
import g2 from '../../assets/images/dashboard-sass/graph-2.png'
import g3 from '../../assets/images/dashboard-sass/graph-3.png'
import g4 from '../../assets/images/dashboard-sass/graph-4.png'
import g5 from '../../assets/images/dashboard-sass/graph-5.png'


/*===============================================================
                        Default Dashboard Data
=================================================================*/
export const topCardState = [
    { id: 1, cardBg: '', title: "Total Sale", scorr: '841,162', color: 'secondary', bdgeFont: '', bdgeValue: '3.56%', progress: '75%' },
    { id: 2, cardBg: '', title: "Total Purchase", scorr: '123,460', color: 'success', bdgeFont: '', bdgeValue: '3.56%', progress: '80%' },
    { id: 3, cardBg: 'bg-primary', title: "Active Customers", scorr: '1,014,125', color: 'light', bdgeFont: 'font-primary', bdgeValue: '1.36%', progress: '65%' },
    { id: 4, cardBg: '', title: "New Customers", scorr: '900,562', color: 'primary', bdgeFont: '', bdgeValue: '6.23%', progress: '95%' }
  ]


/*===============================================================
                        Hospital Dashboard Data
=================================================================*/
  export const doctorList = [
    {
      id:1,
      imagepath: d1,
      title: 'Ossim Keter',
      position: 'Dental'
    },
    {
      id:2,
      imagepath: d2,
      title: 'Mren Loren',
      position: 'Cardiologist'
    },
    {
      id:3,
      imagepath: d3,
      title: 'Fran Loren',
      position: 'Hospitalist'
    },
    {
      id:4,
      imagepath: d4,
      title: 'Fran Loren',
      position: 'Surgeon'
    },
    {
      id:5,
      imagepath: d5,
      title: 'Loie Fenter',
      position: 'oncologist'
    }
  ]

  export const bookedAppoinment = [
    {
      id: '01',
      name: 'Nick Stone',
      doctor: 'Dr.oliver',
      date: '16/08/2020',
      className: 'secondary',
      time: '10:26'
    },
    {
      id: '02',
      name: 'Milano Esco',
      doctor: 'Dr.George',
      date: '20/09/2020',
      className: 'success',
      time: '12:06'
    },
    {
      id: '03',
      name: 'Wiltor Noice',
      doctor: 'Dr.jack',
      date: '03/09/2020',
      className: 'warning',
      time: '05:55'
    },
    {
      id: '04',
      name: 'Anna Strong',
      doctor: 'Dr.Noah',
      date: '17/11/2020',
      className: 'primary',
      time: '01:18'
    }
  ]

  export const patients= [
    {
      id: '01',
      name: 'Nick Stone',
      diseases: 'INFLUENZA',
      date: '16/08/2020',
      className: 'primary'
    },
    {
      id: '02',
      name: 'Milano Esco',
      diseases: 'TYPHOID',
      date: '20/09/2020',
      className: 'warning'
    },
    {
      id: '03',
      name: 'Wiltor Noice',
      diseases: 'HEPATITIS',
      date: '03/09/2020',
      className: 'danger'
    },
    {
      id: '04',
      name: 'Anna Strong',
      diseases: 'JAUNDICE',
      date: '17/11/2020',
      className: 'success'
    }
  ]


/*===============================================================
                        Sass Dashboard Data
=================================================================*/
export const sassTopCard = [
    { id: 1,title:"Total Visitors",total:"80,00,566",monthly:"80,000",weekly:"566",class:"primary",chartData:sassSmallChart1},
    { id: 2,title:"Total Customers",total:"60,02,52",monthly:"60,000",weekly:"252",class:"secondary",chartData:sassSmallChart2},
    { id: 3,title:"Total Revenue",total:"89,000",monthly:"40,00,00",weekly:"215",class:"info",chartData:sassSmallChart3},
    { id: 4,title:"Total Revenue",total:"45,01,046",monthly:"40,00,00",weekly:"215",class:"warning",chartData:sassSmallChart4},
    { id: 5,title:"Total Shipment",total:"50,000",monthly:"40,000",weekly:"215",class:"success",chartData:sassSmallChart5}
  ]

export const progressData = [
  {id:1, title:"Meeting", value:"85"},
  {id:2, title:"Deals", value:"60"},
  {id:3, title:"Order Value", value:"30"}
]

export const newuser= [
  {
    id:1,
    imagepath:u1,
    title: 'Ossim Keter',
    year: '1',
    rank: '1',
    graphimg:g1
  },
  {
    id:2,
    imagepath:u2,
    title: 'Mren Loren',
    year: '1',
    rank: '2',
    graphimg:g2
  },
  {
    id:3,
    imagepath:u3,
    title: 'Fran Loren',
    year: '1',
    rank: '3',
    graphimg:g3
  },
  {
    id:4,
    imagepath:u4,
    title: 'Fran Loren',
    year: '1',
    rank: '4',
    graphimg:g4
  },
  {
    id:5,
    imagepath:u5,
    title: 'Loie Fenter',
    year: '1',
    rank: '5',
    graphimg:g5
  }
]

/*===============================================================
                        CRM Dashboard Data
=================================================================*/
export const category = [
  {
    title: "User",
    className1: "icofont-ui-user crm-dashboard-icon-primary",
    className2: "icofont-ui-user",
    classHover: "crm-hover-primary"
  },
  {
    title: "Map",
    className1: "icofont-social-google-map crm-dashboard-icon-secondary",
    className2: "icofont-social-google-map",
    classHover: "crm-hover-secondary"
  },
  {
    title: "Done",
    className1: "icofont-verification-check crm-dashboard-icon-success",
    className2: "icofont-verification-check",
    classHover: "crm-hover-success"
  },
  {
    title: "Delivery",
    className1: "icofont-paper-plane crm-dashboard-icon-warning",
    className2: "icofont-paper-plane",
    classHover: "crm-hover-warning"
  },
  {
    title: "Chart",
    className1: "icofont-pie crm-dashboard-icon-info",
    className2: "icofont-pie",
    classHover: "crm-hover-info"
  },
  {
    title: "Comment",
    className1: "icofont-chat crm-dashboard-icon-primary",
    className2: "icofont-chat",
    classHover: "crm-hover-primary"
  },
  {
    title: "Article",
    className1: "icofont-ebook crm-dashboard-icon-secondary",
    className2: "icofont-ebook",
    classHover: "crm-hover-secondary"
  },
  {
    title: "Support",
    className1: "icofont-repair crm-dashboard-icon-success",
    className2: "icofont-ui-user",
    classHover: "crm-hover-success"
  },
  {
    title: "Done",
    className1: "icofont-verification-check crm-dashboard-icon-success",
    className2: "icofont-verification-check",
    classHover: "crm-hover-success"
  }
]

export const clients= [
  {
    id: "01",
    imagepath: require("../../assets/images/user/2.jpg"),
    title: "Nick Stone",
    country: "flag-icon-gb",
    date: "10 may 2020",
    payment: require("../../assets/images/ecommerce/card.png"),
    total: "8652.00",
    status: "success",
    statusClass: "font-success",
    progress: "100%",
    progressColor: "progress-gradient-success"
  },
  {
    id: "02",
    imagepath: require("../../assets/images/user/5.jpg"),
    title: "Milano Esco",
    country: "flag-icon-lr",
    date: "20 sep 2020",
    payment: require("../../assets/images/ecommerce/visa.png"),
    total: "102.00",
    status: "Bug Error",
    statusClass: "font-secondary",
    progress: "35%",
    progressColor: "progress-gradient-secondary"
  },
  {
    id: "03",
    imagepath: require("../../assets/images/user/3.jpg"),
    title: "Wiltor Noice",
    country: "flag-icon-za",
    date: "03 sep 2020",
    payment: require("../../assets/images/ecommerce/paypal.png"),
    total: "2315.00",
    status: "Pending",
    statusClass: "font-warning",
    progress: "75%",
    progressColor: "progress-gradient-warning"
  },
  {
    id: "04",
    imagepath: require("../../assets/images/user/4.jpg"),
    title: "Anna Strong",
    country: "flag-icon-ye",
    date: "17 nov 2020",
    payment: require("../../assets/images/ecommerce/mastercard.png"),
    total: "4513.00",
    status: "Waiting",
    statusClass: "font-primary",
    progress: "60%",
    progressColor: "progress-gradient-primary"
  }
]

export const task = [
  {
    id:1,
    classname:"primary",
    name:"James Anderson",
    task:"Lorem Ipsum is simply dummy text of the printing and type.",
    status:"Done"
  },
  {
    id:2,
    classname:"success",
    name:"Michael Jorden",
    task:"Lorem Ipsum is simply dummy text of the printing and type.",
    status:"Done"
  },
  {
    id:3,
    classname:"warning",
    name:"Johnathan Doeting",
    task:"Lorem Ipsum is simply dummy text of the printing and type.",
    status:"Pending"
  },
  {
    id:4,
    classname:"secondary",
    name:"James Anderson",
    task:"Lorem Ipsum is simply dummy text of the printing and type.",
    status:"Failed"
  }
]

/*===============================================================
                        Crypto Dashboard Data
=================================================================*/

export const marketData = [
  {
    coin: "Bitcoin (BTC)",
    price: "$ 50.65",
    date: "19 Jan",
    change: "+2.6%",
    className: "pill-badge-primary"
  },
  {
    coin: "Ethereum (ETH)",
    price: "$ 9.65",
    date: "14 Feb",
    change: "-3.7%",
    className: "pill-badge-secondary"
  },
  {
    coin: "Ripple (XRP)",
    price: "$ 30.48",
    date: "21 March",
    change: "+2.6%",
    className: "pill-badge-primary"
  },
  {
    coin: "Bitcoin Case (BCH)",
    price: "$ 102.56",
    date: "1 April",
    change: "+5.9%",
    className: "pill-badge-light font-primary"
  },
  {
    coin: "EOS (EOS)",
    price: "$ 5.48",
    date: "8 May",
    change: "-2.3%",
    className: "pill-badge-primary"
  },
  {
    coin: "Litecoin (LTC)",
    price: "$ 40.78",
    date: "20 Sep",
    change: "+4.3%",
    className: "pill-badge-secondary"
  }
]

export const buyCoin = [
  {
    title:"Price:",
    value:"30.633.30",
    btn:"USD"
  },
  {
    title:"Amount:",
    value:"2",
    btn:"BTC"
  },
  {
    title:"Total",
    value:"41.266.60",
    btn:"USD"
  }
]

export const sellCoin = [
  {
    title:"Price:",
    value:"22.165.70",
    btn:"USD"
  },
  {
    title:"Amount:",
    value:"2",
    btn:"BTC"
  },
  {
    title:"Total",
    value:"22.165.70",
    btn:"USD"
  }
]

export const stopCoin = [
  {
    title:"Price:",
    value:"43.167.20",
    btn:"USD"
  },
  {
    title:"Amount:",
    value:"2",
    btn:"BTC"
  },
  {
    title:"Total",
    value:"19.446.00",
    btn:"USD"
  }
]

export const  sellOrders= [
  {
    id:1,
    price: "0.98422432",
    eth: "0.0953744",
    btc: "8.64923753",
    usd: "0.00718167"
  },
  {
    id:2,
    price: "0.88422432",
    eth: "0.0253744",
    btc: "4.64923753",
    usd: "0.00711167"
  },
  {
    id:3,
    price: "0.18422432",
    eth: "0.0153744",
    btc: "5.64923753",
    usd: "0.11718167"
  },
  {
    id:4,
    price: "0.98922932",
    eth: "0.9953744",
    btc: "9.64923753",
    usd: "0.90718167"
  },
  {
    id:5,
    price: "0.28429439",
    eth: "0.5953744",
    btc: "6.04123753",
    usd: "0.59718167"
  },
  {
    id:6,
    price: "0.48422432",
    eth: "0.0353144",
    btc: "3.64553753",
    usd: "0.30718167"
  },
  {
    id:7,
    price: "0.78922432",
    eth: "0.6953744",
    btc: "5.64989753",
    usd: "0.20718167"
  },
  {
    id:8,
    price: "0.91732032",
    eth: "0.7050744",
    btc: "7.60123115",
    usd: "0.85718526"
  }
]

export const buyOrders = [
  {
    id:1,
    price: "0.98422432",
    eth: "5.09537441",
    btc: "8.64923753",
    usd: "0.00718167"
  },
  {
    id:2,
    price: "0.88422432",
    eth: "4.64923753",
    btc: "4.64923753",
    usd: "0.00711167"
  },
  {
    id:3,
    price: "0.18422432",
    eth: "2.01537444",
    btc: "5.64923753",
    usd: "0.11718167"
  },
  {
    id:4,
    price: "0.98922932",
    eth: "7.99537441",
    btc: "9.64923753",
    usd: "0.90718167"
  },
  {
    id:5,
    price: "0.48422432",
    eth: "3.03531449",
    btc: "6.64553753",
    usd: "0.30718167"
  },
  {
    id:6,
    price: "0.78922432",
    eth: "4.69537441",
    btc: "5.64989753",
    usd: "0.20718167"
  },
  {
    id:7,
    price: "0.28429439",
    eth: "9.59537441",
    btc: "6.04123753",
    usd: "0.59718167"
  },
  {
    id:8,
    price: "0.91732032",
    eth: "4.70507448",
    btc: "7.60123115",
    usd: "0.85718526"
  }
]
