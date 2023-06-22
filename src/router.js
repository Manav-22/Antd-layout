import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Progress, Space, Rate } from 'antd';
import {
    ContainerOutlined,
    PieChartOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
    AppstoreOutlined,
    UserOutlined,

} from '@ant-design/icons';

import { Button, Menu, Calendar, Col, Radio, Row, Select, Typography, theme, } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';

dayjs.extend(dayLocaleData);

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Dashbord', '1', <PieChartOutlined />),
    getItem('Profile', '2', <DesktopOutlined />),
    getItem('Subscription', '3', <ContainerOutlined />),
    getItem('Customizition', '4', <MailOutlined />),
];
export const Routerr = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const { token } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <>
            <div>
                <div>
                    <div className="raw" style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                        <div className="col-3">
                            <div style={{ backgroundColor: "lightcoral", padding: 10, border: "2px solid lightcoral", borderRadius: '15px' }}>
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="hy" height="100px" width="100px" style={{ borderRadius: "50%" }} />
                                <h3>Tohamy</h3>
                                <p>tohamy99@yahoo.com</p>
                            </div>
                            <div>

                                <Button
                                    type="primary"
                                    onClick={toggleCollapsed}
                                    style={{
                                        marginBottom: 16,
                                    }}
                                >
                                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                </Button>
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="dark"
                                    inlineCollapsed={collapsed}
                                    items={items}
                                />

                                <div style={wrapperStyle}>
                                    <Calendar
                                        fullscreen={false}
                                        headerRender={({ value, type, onChange, onTypeChange }) => {
                                            const start = 0;
                                            const end = 12;
                                            const monthOptions = [];
                                            let current = value.clone();
                                            const localeData = value.localeData();
                                            const months = [];
                                            for (let i = 0; i < 12; i++) {
                                                current = current.month(i);
                                                months.push(localeData.monthsShort(current));
                                            }
                                            for (let i = start; i < end; i++) {
                                                monthOptions.push(
                                                    <Select.Option key={i} value={i} className="month-item">
                                                        {months[i]}
                                                    </Select.Option>,
                                                );
                                            }
                                            const year = value.year();
                                            const month = value.month();
                                            const options = [];
                                            for (let i = year - 10; i < year + 10; i += 1) {
                                                options.push(
                                                    <Select.Option key={i} value={i} className="year-item">
                                                        {i}
                                                    </Select.Option>,
                                                );
                                            }
                                            return (
                                                <div
                                                    style={{
                                                        padding: 8,
                                                    }}
                                                >
                                                    {/* <Typography.Title level={4}>Custom header</Typography.Title> */}
                                                    <Row gutter={8}>
                                                        <Col>
                                                            <Radio.Group
                                                                size="small"
                                                                onChange={(e) => onTypeChange(e.target.value)}
                                                                value={type}
                                                            >
                                                                <Radio.Button value="month">Month</Radio.Button>
                                                                <Radio.Button value="year">Year</Radio.Button>
                                                            </Radio.Group>
                                                        </Col>
                                                        <Col>
                                                            <Select
                                                                size="small"
                                                                dropdownMatchSelectWidth={false}
                                                                className="my-year-select"
                                                                value={year}
                                                                onChange={(newYear) => {
                                                                    const now = value.clone().year(newYear);
                                                                    onChange(now);
                                                                }}
                                                            >
                                                                {options}
                                                            </Select>
                                                        </Col>
                                                        <Col>
                                                            <Select
                                                                size="small"
                                                                dropdownMatchSelectWidth={false}
                                                                value={month}
                                                                onChange={(newMonth) => {
                                                                    const now = value.clone().month(newMonth);
                                                                    onChange(now);
                                                                }}
                                                            >
                                                                {monthOptions}
                                                            </Select>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            );
                                        }}
                                        onPanelChange={onPanelChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "lightsteelblue", border: "2px solid lightsteelblue", borderRadius: '15px', width: 300, height: 202 }}>
                                    <div style={{ marginTop: 45 }}>
                                        <h5>Total balance</h5>
                                        <h3>$2256</h3>
                                        <p>update hour ago</p>
                                    </div>
                                    <div style={{ marginTop: 45 }}>
                                        <UserOutlined />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "grey", width: 300, border: "2px solid grey", borderRadius: '15px' }}>
                                    <div style={{ marginTop: 45 }}>
                                        <h5>Total sales</h5>
                                        <h3>24</h3>
                                        <p>update hour ago</p>
                                    </div>
                                    <div style={{ marginTop: 45 }}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/3144/3144573.png" alt="hy" height="40px" width="40px" />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "salmon", width: 300, border: "2px solid salmon", borderRadius: '15px' }}>
                                    <div style={{ marginTop: 45 }}>
                                        <h5>Total expenses</h5>
                                        <h3>$12</h3>
                                        <p>update hour ago</p>
                                    </div>
                                    <div style={{ marginTop: 45 }}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/2488/2488980.png" alt="hy" height="40px" width="40px" />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "lightskyblue", width: 300, border: "2px solid lightskyblue", borderRadius: '15px' }}>
                                    <div style={{ marginTop: 45 }}>
                                        <h5>Total visitors</h5>
                                        <h3>3</h3>
                                        <p>update hour ago</p>
                                    </div>
                                    <div style={{ marginTop: 45 }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/634/634013.png" alt="hy" height="40px" width="40px" />
                                    </div>
                                </div>
                            </div>

                            <div className="raw">
                                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5%" }}>
                                    <div >
                                        <div style={{ width: 500, padding: 5, border: "2px solid darkturquoise", borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Space wrap>
                                                    <Progress type="circle" percent={30} size={50} />
                                                </Space>
                                            </div>
                                            <div>
                                                <h6>Taylor Swift</h6>
                                                <p>24 April,2023 | 04:00 PM</p>
                                            </div>
                                            <div>
                                                <Rate allowHalf defaultValue={2} />
                                            </div>
                                            <div>
                                                <button className="button 2">2 days left </button>
                                            </div>
                                        </div><br />
                                        <div style={{ width: 500, padding: 5, border: "2px solid darkslateblue", borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Space wrap>
                                                    <Progress type="circle" percent={50} size={50} />
                                                </Space>
                                            </div>
                                            <div>
                                                <h6>Well Smith</h6>
                                                <p>24 April,2023 | 04:00 PM</p>
                                            </div>
                                            <div>
                                                <Rate allowHalf defaultValue={3} />
                                            </div>
                                            <div>
                                                <button className="button 2">4 days left </button>
                                            </div>
                                        </div><br />
                                        <div style={{ width: 500, padding: 5, border: "2px solid darkturquoise", borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Space wrap>
                                                    <Progress type="circle" percent={70} size={50}  />
                                                </Space>
                                            </div>
                                            <div>
                                                <h6>Johnson</h6>
                                                <p>24 April,2023 | 04:00 PM</p>
                                            </div>
                                            <div>
                                                <Rate allowHalf defaultValue={4} />
                                            </div>
                                            <div>
                                                <button className="button 3">6 days left </button>
                                            </div>
                                        </div><br />
                                    </div>
                                    <div className="col-6" style={{ backgroundColor: "darkviolet", color: "white", padding: 20, border: "2px solid darkviolet", borderRadius: '15px' }}>
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div>
                                                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="hy" height="60px" width="60px" />
                                            </div>
                                            <div>
                                            <Progress strokeLinecap="butt" percent={10} style={{width:"600px"}}  />Shopping
                                            </div>
                                        </div><br />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div>
                                                <img src="https://cdn-icons-png.flaticon.com/512/2432/2432572.png" alt="hy" height="60px" width="60px" />
                                            </div>
                                            <div>
                                            <Progress strokeLinecap="butt" percent={20} style={{width:"600px"}}  />Electronics
                                            </div>
                                        </div><br />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div>
                                                <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" alt="hy" height="60px" width="60px" />
                                            </div>
                                            <div>
                                            <Progress strokeLinecap="butt" percent={40} style={{width:"600px"}}  />Travels
                                            </div>
                                        </div><br />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div>
                                                <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" alt="hy" height="60px" width="60px" />
                                            </div>
                                            <div>
                                            <Progress strokeLinecap="butt" percent={60} style={{width:"600px"}}  />Travels
                                            </div>
                                        </div><br />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <div>
                                                <img src="https://www.iconbolt.com/preview/facebook/voyage-icons/international-travel.svg" alt="hy" height="60px" width="60px" />
                                            </div>
                                            <div>
                                            <Progress strokeLinecap="butt" percent={80} style={{width:"600px"}}  />Travels
                                            </div>
                                        </div><br />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-around", marginTop: 40 }}>
                                <div style={{ border: '5px solid black', borderRadius: '5px' }}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR902Z3x4eH0Xl1jbdJ_1aBxhFoLu9AaKiFwg&usqp=CAU" alt="hy" height="450px" width="850px" />
                                </div>
                                <div>
                                    <ul style={{ listStyleType: "none", backgroundColor: "lightpink", padding: 10, border: "2px solid lightpink", borderRadius: '15px' }}>
                                        <li><img src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG.jpg"
                                            height="60px" width="60px" alt="hy" />Google</li><hr></hr>
                                        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1Cca6aLpNOu4WQkIg8C150bnYSZyEZ6gtQ&usqp=CAU"
                                            alt="hy" height="60px" width="60px" />Foursqure</li> <hr></hr>
                                        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sPuQrwuubeVhnlt9d9WEzyHyn74uaW2XwA&usqp=CAU"
                                            alt="hy" height="45px" width="60px" />Kickstarter</li><hr></hr>
                                        <li><img src="https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg"
                                            alt="hy" height="60px" width="60px" />Talk</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <button className="btn btn-warning">
                            <Link to="./login">login</Link>
                        </button><br />
                        {/* <button className="btn btn-warning">
                        <Link to="./signup">Signup</Link>
                    </button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
