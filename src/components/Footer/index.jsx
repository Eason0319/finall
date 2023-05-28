import { theme } from 'antd';
import { Col, Row } from 'antd';
import styles from './footer.module.css';

export default function Footer() {
    const {
        token: { colorBgFooter, colorTextFooter },
    } = theme.useToken();
    return (
        <div>
            <Row justify="center" className="footer">
                <div className="footer-content">
                    <Col span={4} className="col-2"></Col>
                    <Col span={6} className="col-3 head">
                        <h1>越氣樂器行</h1>
                        <h3>TEL : 02 5719 3946</h3>
                        <h1>地址</h1>
                        <h3>台北市小安區和平西路87段87號</h3>
                    </Col>
                    <Col span={8} className="col-4">
                        <h1>營業時間/Open Time</h1>
                        <h3>週一至週日 12:00-21:00<br />Mon. - Sunday, 12pm - 9pm</h3>
                    </Col>
                    <Col span={6} className="col-3 info">
                        <h1>更多資訊</h1>
                        <a className="fb" href="#">
                            <img src="public/images/fb.jpg" alt="" />
                            <h3>Facebook粉絲專頁</h3>
                        </a>
                        <a className="yt" href="#">
                            <img src="public/images/yt.jpg" alt="" />
                            <h3>Youtube頻道</h3>
                        </a>
                    </Col>
                </div>
            </Row>
        </div>

    );
}