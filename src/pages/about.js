import React from 'react';
import Layout from '@theme/Layout';
import { Row, Typography, Divider, Image, Col, Tag, Popover } from 'antd';
import { BarcodeOutlined } from "@ant-design/icons"
import useBaseUrl from '@docusaurus/useBaseUrl';
const { Title, Text } = Typography;
import "antd/dist/antd.css";

function Hello() {
    return (
        <Layout title="关于我们">
            <div style={{ padding: "40px 10% 40px 10%" }}>
                <Row gutter={16}>
                    <Title level={3}>框架交流</Title>
                </Row>
                <Row gutter={16}>
                    <Text><span style={{ color: "#25c2a0", fontWeight: 800 }}>gf-vue-admin</span>采用Apache Licene 2.0 协议，闭源项目不受影响，开源项目需保留原协议。无需商业授权即可商用。</Text>
                </Row>
                <Row gutter={16}>
                    <Text>qq交流群群号：1040044540</Text>
                </Row>
                <Row gutter={16}>
                    <Text>微信：SliverHorn</Text>
                </Row>
                <Row gutter={16}>
                    <Popover content={<Image
                        width={200}
                        src={useBaseUrl('guanwang/image-20210224215502041.jpg')}
                    />} title="加群备注（加入gf-vue-admin交流群）" trigger="hover">
                        <Text style={{ color: "#25c2a0", fontWeight: 800,cursor:"pointer" }}>点我获取微信加群二维码 <BarcodeOutlined /></Text>
                    </Popover>
                </Row>
                <Divider orientation="left"></Divider>

                <Row gutter={16}>
                    <Title level={3}>作者简介</Title>
                </Row>
                <Row gutter={16}>
                    <Text><span style={{ color: "#25c2a0", fontWeight: 800 }}>SliverHorn</span>,匿名银族，目前工作于广州某公司。</Text>
                </Row>
                <Row gutter={16}>
                    <Text>个人本职为公司后端开发者，业余时间会做一些开源的小东西，<span style={{ color: "#25c2a0", fontWeight: 800 }}>gf-vue-admin</span>是<span style={{ color: "#25c2a0", fontWeight: 800 }}>gin-vue-admin</span> 的孪生兄dei项目。 </Text>
                </Row>
                <Row gutter={16}>
                    <Text>个人技术栈 后端 golang python java php rust </Text>
                </Row>
                <Row gutter={16}>
                    <Text>期待更多小伙伴加入Gf-Vue-Admin的大家庭</Text>
                </Row>

                <Divider orientation="left"></Divider>
                <Row gutter={16}>
                    <Title level={3}>研发小组</Title>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/jjz.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**奇淼**</Title>
                        </div>
                        <Text type="secondary">全栈开发 · 北京</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍: 用魔法打败魔法，用代码打败代码，一个普普通通的IT从业者，一台<del>se</del>无情的编码机器。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责: gin-vue-admin项目发起者，团队一块砖，随便用，随便搬，负责gin-vue-admin的整体功能开发，基础设施建设。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">VUE</Tag>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">NODE</Tag>
                            <Tag color="red">豪火球之术</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/sh.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**SliverHorn**</Title>
                        </div>
                        <Text type="secondary">后端开发 · 广州</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍: 热爱编程,对代码有洁癖,好的代码就是気持ちいい。任何时候，绝不骄傲，绝不轻敌，摸清对方心里，使劲浑身解数，保持笑容和品行，无论发生什么，千万不要忘记扑克脸。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责: 负责gin-vue-admin的新功能研发测试与改进,gf-vue-admin的后端开发及维护,社区日常维护管理等工作。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">Python</Tag>
                            <Tag color="#25c2a0">Docker</Tag>
                            <Tag color="#66ccff">Gram Dispersion</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/sc2.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**krank**</Title>
                        </div>
                        <Text type="secondary">前端开发 · 北京</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍: 风暴中出生的krank， vue使用者，go学习者，前端开发，奇淼的马仔。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责: 负责gin-vue-admin的前端页面开发，功能完善，基础前端工具开发。辅助进行前端基础架构建设，通用功能组件封装。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">VUE</Tag>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">UNIAPP</Tag>
                            <Tag color="blue">德鲁伊</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/LL.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**LLemonGreen**</Title>
                        </div>
                        <Text type="secondary">创业 · 深圳</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：敲代码，做潮牌，<del>玩音乐，拍视频。</del>目前在代码外包、潮牌同步发展阶段。github缝合怪。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：参与gin-vue-admin的一些功能测试和文档维护，参与社区吹水</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">Flutter</Tag>
                            <Tag color="#25c2a0">UI设计</Tag>
                            <Tag color="#ffcc33">千年杀</Tag>
                        </div>
                    </div>
                    </Row>
                    <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/djl.jpg')}
                        />
                    </div>
                    
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**LeonardWang**</Title>
                        </div>
                        <Text type="secondary">开发 · 杭州</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：跟着gva大佬们打怪升级，喜欢搞一些底层骚操作，乐于“折腾”的垃圾佬。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责： 负责gin-vue-admin的静态文件打包功能开发，搬砖工程师。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">C++</Tag>
                            <Tag color="volcano">闪现</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/cbz.png')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**cbz**</Title>
                        </div>
                        <Text type="secondary">服务器开发·广州</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：在校学生，萌新一枚，带带弟弟。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：编写部分服务端代码。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">php</Tag>
                            <Tag color="#25c2a0">vue</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/bin.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**彬**</Title>
                        </div>
                        <Text type="secondary">Go后端开发•深圳</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：永远不要高看自己</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：负责gin-vue-admin的新功能研发测试与改进</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">Python</Tag>
                            <Tag color="volcano">嘴遁</Tag>
                        </div>
                    </div>
                </Row>

                
                <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Title level={3}>未来展望</Title>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text><span style={{ color: "#25c2a0", fontWeight: 800 }}>gf-vue-admin单体版</span>将会秉持开源精神，免费到底，一群活跃的小伙伴也会不断进行日常维护，目前项目可以稳定进入生产环境，日后还会根据用户需求增加更多的便于开发的基础功能,将Gf-Vue-Admin做得更加完善，更加强大，非常期待有更多的小伙伴们加入我们Gf-Vue-Admin的团队。</Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>团队所有成员均可在<span style={{ color: "#25c2a0", fontWeight: 800 }}>Gf-Vue-Admin官网</span>增加个人简介并且附带<span style={{ color: "#25c2a0", fontWeight: 800 }}>专属技能</span></Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Title level={3}>广告赞助</Title>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>目前<span style={{ color: "#25c2a0", fontWeight: 800 }}>Gf-Vue-Admin</span>Github已经拥有<span style={{ color: "#25c2a0", fontWeight: 800 }}></span><a href="https://github.com/flipped-aurora/gf-vue-admin"> <img class="dom-center" src="https://img.shields.io/github/stars/flipped-aurora/gf-vue-admin.svg?style=social" alt=""/></a >，项目官网以及github页面每天都有大量的访问量，您可以成为Gf-Vue-Admin的赞助商，我们会在适当的位置，悬挂您的推广内容</Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>赞助请加微信：<span style={{ color: "#25c2a0", fontWeight: 800 }}>SliverHorn</span>标明<span style={{ color: "#25c2a0", fontWeight: 800 }}>广告赞助</span></Text>
                </Row>
            </div>
        </Layout>
    );
}

export default Hello;