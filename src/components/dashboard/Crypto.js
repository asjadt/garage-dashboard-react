import React,{Fragment} from 'react'
import BreadCrumb from '../../layout/Breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Table} from 'reactstrap'
import {TrendingUp} from 'react-feather'
import Chart from 'react-apexcharts'
import { bitcoinBtc, litecoinLtc, ethereumEtc, candleStick, apexMixedCharts } from './chartsData/apexChart'
import { marketData, buyCoin, sellCoin, stopCoin, sellOrders, buyOrders } from './data'
import { YourCurrentBalance,Withdraw,CardNumber,Amount,ExpireDate,OurDistributed,OurContributed,OurGrowth,BitcoinBTC,LitecoinLTC,EthereumETH,BitcoinExchange,BuyBitcoin,BuyOrders,SellOrders,SellBitcoin,Value,DatatableTableMarkets,StopLimit,MarketChart } from "../../constant";
const Crypto = () => {
    return (
      <Fragment>
        <BreadCrumb parent="Home" subparent="Dashboard" title="Crypto"/>
        <Container fluid={true}>
        <Row>
          <Col xl="7" className="xl-100 box-col-12">
            <Card className="o-hidden">
              <CardBody className="crypto-current">
                <Row>
                  <Col xl="4" sm="6">
                    <div className="current-balance"><span className="f-12 f-w-600">{YourCurrentBalance}</span>
                      <h2><span className="mr-2"><i className="icofont icofont-cur-dollar"></i></span><span>{"6,00,566"}</span></h2>
                      <div className="btn-vertical-align d-flex">
                        <button className="btn btn-pill btn-gradient-custom">{Withdraw}<span className="round-shape"><i className="icofont icofont-arrow-right"></i></span></button>
                        <div className="setting-dot d-inline-block">
                          <div className="setting-bg"><i className="fa fa-spin fa-cog font-primary"></i></div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="3" sm="6">
                    <div className="crypto-amount">
                      <div className="amount-detail">
                        <label className="f-w-600 f-12">{CardNumber} {"*"}</label>
                        <div className="amount-inner"><span>{"486*******"}</span></div>
                      </div>
                      <div className="amount-detail">
                        <label className="f-w-600 f-12">{Amount} {"*"}</label>
                        <div className="amount-inner"><span>{"500,000,000"}</span></div>
                      </div>
                    </div>
                  </Col>
                  <Col xl="5">
                    <div className="crypto-amount">
                      <div className="amount-detail">
                        <label className="f-w-600 f-12">{ExpireDate}</label>
                        <div className="amount-inner">
                          <Row>
                            <Col className="text-center">{"02"}</Col>
                            <Col className="text-center">{"October"}</Col>
                            <Col className="text-center">{"2019"}</Col>
                          </Row>
                        </div>
                      </div>
                      <div className="amount-detail">
                        <label className="f-w-600 f-12">{"Cvv"}</label>
                        <div className="number-amount">
                          <div className="amount-inner d-inline-block"><span>{"4"}</span></div>
                          <div className="amount-inner d-inline-block ml-1"><span>{"8"}</span></div>
                          <div className="amount-inner d-inline-block ml-1"><span>{"*"}</span></div>
                          <button className="btn btn-gradient-custom pull-right">{"Deposite"}</button>
                        </div>
                      </div>
                      <div className="shape-right">
                        <div className="shape-create"></div><i className="icofont icofont-rounded-left"></i>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="5" className="xl-100 box-col-12">
                <Card>
                  <CardBody className="distributed-crypto">
                    <Row>
                      <Col sm="6"><span className="f-12">{OurDistributed}</span>
                        <h5 className="mb-0">{"6,235,125"}<span> {"CIC"}</span><span className="d-inline-block distributed-arrow-square"><span className="square-crypto"><TrendingUp className="font-primary"/></span></span></h5>
                      </Col>
                      <Col sm="6" className="text-right"><span className="f-12">{OurContributed}</span>
                        <h5 className="mb-0">{"5478 ETH |"} <span>{"80 BTH"}</span></h5>
                      </Col>
                    </Row>
                    <div className="distributed-bottom">
                      <div className="progress sm-progress-bar progress-animate">
                        <div className="progress-gradient-primary" role="progressbar" style={{'width': '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span className="progress-tooltip">{"3.5"}</span><span className="animate-circle"></span></div>
                      </div>
                    </div><span className="font-primary"><i className="icofont icofont-cur-dollar"></i>0</span><span className="font-primary pull-right"><i className="icofont icofont-cur-dollar"></i>{"5M"}    </span>
                  </CardBody>
                </Card>
            </Col>
          <Col xl="4" className="xl-50">
              <Card className="crypto-graph-card sales-overview">
                <CardHeader>
                  <div className="media">
                    <div className="media-body d-flex">
                      <div className="rounded-icon bck-gradient-primary"><i className="fa fa-btc"></i></div>
                      <div className="bitcoin-graph-content">
                        <h5>{BitcoinBTC}</h5><span className="d-block f-12 f-w-600">{"0.00000112 BTC $0.05"}</span>
                      </div>
                    </div><span className="pull-right badge badge-pill"><span className="font-primary"><span className="d-inline-block"><i className="fa fa-sort-up"></i></span> {"7.8%"}</span></span>
                  </div>
                </CardHeader>
                <CardBody className="p-0 crm-dashboard-chart">
                  <div className="apex-chart-container">
                    <div id="btc-apex">
                    <Chart options={bitcoinBtc.options} series={bitcoinBtc.series} height="205" type="area" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          <Col xl="4" className="xl-50">
            <Card className="crypto-graph-card sales-overview secondary-crypto">
              <CardHeader>
                <div className="media">
                  <div className="media-body d-flex">
                    <div className="rounded-icon bck-gradient-secondary"><i className="fa fa-try"></i></div>
                    <div className="bitcoin-graph-content">
                      <h5>{LitecoinLTC}</h5><span className="d-block f-12 f-w-600">{"0.00000348 LTC $0.02"}</span>
                    </div>
                  </div>
                  <div className="right-setting">
                    <div className="setting-dot d-inline-block mr-3">
                      <div className="setting-bg"><i className="fa fa-spin fa-cog font-secondary"></i></div>
                    </div><span className="pull-right badge badge-pill"><span className="font-secondary"><span className="d-inline-block"><i className="fa fa-sort-up"></i></span> {"4.1%"}</span></span>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="p-0 crm-dashboard-chart">
                <div className="apex-chart-container">
                  <div id="ltc-apex">
                  <Chart options={litecoinLtc.options} series={litecoinLtc.series} height="205" type="area" />
                  </div>
                </div>
              </CardBody>
            </Card>
            </Col>
          <Col xl="4" className="xl-100">
              <Card className="crypto-graph-card sales-overview warning-crypto">
                <CardHeader>
                  <div className="media">
                    <div className="media-body d-flex">
                      <div className="rounded-icon bck-gradient-warning"><i className="fa fa-eur"></i></div>
                      <div className="bitcoin-graph-content">
                        <h5>{EthereumETH}</h5><span className="d-block f-12 f-w-600">{"0.00000686 LTC $0.07"}</span>
                      </div>
                    </div><span className="pull-right badge badge-pill"><span className="font-warning"><span className="d-inline-block"><i className="fa fa-sort-up"></i></span> {"4.1%"}</span></span>
                  </div>
                </CardHeader>
                <CardBody className="p-0 crm-dashboard-chart">
                  <div className="apex-chart-container">
                    <div id="eth-apex">
                    <Chart options={ethereumEtc.options} series={ethereumEtc.series} height="205" type="area" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          <Col xl="7" className="xl-100 box-col-12">
                <Card>
                  <CardHeader className="crypto-header">
                    <h5>{BitcoinExchange}</h5>
                    <div className="chart-value-box pull-right">
                      <div className="value-square-box-primary"></div><span className="f-12 f-w-600">{Value}</span>
                      <div className="value-square-box-secondary ml-3"></div><span className="f-12 f-w-600">{Value}</span>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="apex-chart-container">
                      <div id="candlestick-chart">
                       <Chart options={candleStick.options} series={candleStick.series} height="385" type="candlestick" />
                      </div>
                      <div className="our-growth-bottom crypto-graph-card">
                        <div className="media"><span className="f-12 f-w-600">{OurGrowth}</span>
                         <span className="pull-right badge badge-pill ml-3"><span className="font-primary">
                         <span className="d-inline-block"><i className="fa fa-sort-up"></i></span> {"9.4%"}</span></span></div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
          <Col xl="5" className="xl-100 box-col-12">
            <div className="card sales-overview">
              <CardHeader>
                <h5>{DatatableTableMarkets}</h5>
              </CardHeader>
              <CardBody className="p-0">
                <div className="sales-product-table crypto-table-market table-responsive">
                  <Table borderless>
                    <thead>
                      <tr>
                        <th scope="col">{"Coin"}</th>
                        <th scope="col">{"Price"}</th>
                        <th scope="col">{"Date"}</th>
                        <th scope="col">{"Change%"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketData.map(data => (
                        <tr key={data.coin}>
                        <td>{ data.coin }</td>
                          <td><span>{ data.price }</span></td>
                          <td><span>{ data.date }</span></td>
                          <td><span className={`badge badge-pill f-14 ${data.className}`}>{ data.change }</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                  </CardBody>
                </div>
              </Col>
          <Col xl="4" sm="6">
            <Card>
              <CardHeader>
                <h5>{BuyBitcoin}</h5>
              </CardHeader>
              <CardBody>
                <div className="bitcoin-table table-responsive">
                  <Table borderless>
                    <tbody>
                      {buyCoin.map(data=>(
                        <tr key={data.title}>
                          <td className="f-w-600">{data.title}</td>
                          <td> <span className="f-w-600">{data.value}</span></td>
                          <td className="text-right">
                            <Button color="light" className={`btn-pill font-primary f-w-600 ${data.title==='Total'?'btn-gradient-custom':''}`}>{data.btn}</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" sm="6">
            <Card>
              <CardHeader>
                <h5>{SellBitcoin}</h5>
              </CardHeader>
              <CardBody>
                <div className="bitcoin-table sell-bitcoin table-responsive">
                  <Table borderless>
                    <tbody>
                    {sellCoin.map(data=>(
                      <tr key={data.title}>
                        <td className="f-w-600">{data.title}</td>
                        <td> <span className="f-w-600">{data.value}</span></td>
                        <td className="text-right">
                        <Button color="light" className={`btn-pill font-secondary f-w-600 ${data.title==='Total'?'bck-gradient-secondary':''}`}>{data.btn}</Button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5>{StopLimit}</h5>
              </CardHeader>
              <CardBody>
                <div className="bitcoin-table stop-bitcoin table-responsive">
                  <Table borderless>
                    <tbody>
                      {stopCoin.map(data => (
                        <tr key={data.title}>
                        <td className="f-w-600">{data.title}</td>
                        <td> <span className="f-w-600">{data.value}</span></td>
                        <td className="text-right">
                        <Button color="light" className={`btn-pill font-warning f-w-600 ${data.title==='Total'?'bck-gradient-warning':''}`}>{data.btn}</Button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="12">
            <Card>
              <CardHeader className="crypto-header">
                <h5>{MarketChart}</h5>
              </CardHeader>
              <CardBody>
                <div className="crypto-depth-container">
                  <div className="ct-chart flot-chart-container">
                   <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="line" height="350"  />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
                <Card className="sales-overview">
                  <CardHeader className="card-header">
                    <h5>{SellOrders}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="sales-product-table crypto-table-market table-responsive">
                      <Table borderless>
                        <thead>
                          <tr>
                            <th scope="col">{"Price"}</th>
                            <th scope="col">{"ETH"}</th>
                            <th scope="col">{"BTC"}</th>
                            <th scope="col">{"USD"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sellOrders.map(data => (
                             <tr key={data.id} className={`${data.id === 4?'btn-gradient-custom':''}`}>
                              <td>{data.price}</td>
                              <td><span>{data.eth}</span></td>
                              <td><span>{data.btc}</span></td>
                              <td><span>{data.usd}</span></td>
                            </tr>
                          ))}
                    
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
          <Col xl="6">
                <Card className="sales-overview">
                  <CardHeader>
                    <h5>{BuyOrders}</h5>
                  </CardHeader>
                  <CardBody className="p-0">
                    <div className="sales-product-table crypto-table-market table-responsive">
                      <Table borderless>
                        <thead>
                          <tr>
                            <th scope="col">{"Price"}</th>
                            <th scope="col">{"ETH"}</th>
                            <th scope="col">{"BTC"}</th>
                            <th scope="col">{"USD"}</th>
                          </tr>
                        </thead>
                        <tbody>
                        {buyOrders.map(data => (
                             <tr key={data.id} className={`${data.id === 7?'gradient-table-line-danger':''}`}>
                              <td>{data.price}</td>
                              <td><span>{data.eth}</span></td>
                              <td><span>{data.btc}</span></td>
                              <td><span>{data.usd}</span></td>
                            </tr>
                          ))}                      
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
        </Row>
        </Container>
        </Fragment>
    )
}

export default Crypto
