import "./App.css";
import logo from "./ivory studio.png";

import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  Row,
  Col,
  Avatar,
  Badge,
  Space,
  Table,
  Button,
} from "antd";
import {
  UserOutlined,
  AreaChartOutlined,
  MessageOutlined,
  BellOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const columns = [
  {
    title: "Họ tên",
    dataIndex: "firstName",
    key: "firstName",

    render: (text) => <a>{text}</a>,
  },
  {
    title: "Lớp",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "Khóa học",
    dataIndex: "course",
    key: "course",
    responsive: ["md"],
  },
  {
    title: "Trình độ",
    dataIndex: "educationLevel",
    key: "educationLevel",
    responsive: ["md"],
  },
  {
    title: "Hình thức đào tạo",
    dataIndex: "typeOfEducation",
    key: "typeOfEducation",
    responsive: ["md"],
  },
  {
    title: "Thao tác",
    key: "action",
    responsive: ["lg"],
    render: (text, record) => (
      <Space size="middle">
        <Button icon={<EditOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </Space>
    ),
  },
];

const data = [
  {
    studentCode: 92858,
    firstName: "Meghan",
    lastName: "Rice",
    birthday: "2021-10-18T18:45:21.417Z",
    class: "class 1",
    course: "course 1",
    educationLevel: "educationLevel 1",
    typeOfEducation: "typeOfEducation 1",
    phone: "475.821.8161",
    address: "1414 Morgan Cape",
    avatar: "https://cdn.fakercloud.com/avatars/michzen_128.jpg",
    key: "1",
  },
  {
    studentCode: 98260,
    firstName: "Jarrod",
    lastName: "Osinski",
    birthday: "2021-09-01T11:54:37.200Z",
    class: "class 2",
    course: "course 2",
    educationLevel: "educationLevel 2",
    typeOfEducation: "typeOfEducation 2",
    phone: "(930) 214-3621",
    address: "5190 Goldner Fall",
    avatar: "https://cdn.fakercloud.com/avatars/karlkanall_128.jpg",
    key: "2",
  },
  {
    studentCode: 2984,
    firstName: "Florine",
    lastName: "Nicolas",
    birthday: "2021-08-29T04:15:43.489Z",
    class: "class 3",
    course: "course 3",
    educationLevel: "educationLevel 3",
    typeOfEducation: "typeOfEducation 3",
    phone: "354-647-9290",
    address: "214 Cormier Road",
    avatar: "https://cdn.fakercloud.com/avatars/hfalucas_128.jpg",
    key: "3",
  },
  {
    studentCode: 7402,
    firstName: "Braden",
    lastName: "Frami",
    birthday: "2021-08-31T15:40:34.628Z",
    class: "class 4",
    course: "course 4",
    educationLevel: "educationLevel 4",
    typeOfEducation: "typeOfEducation 4",
    phone: "678-439-2489",
    address: "083 Botsford Village",
    avatar: "https://cdn.fakercloud.com/avatars/ipavelek_128.jpg",
    key: "4",
  },
  {
    studentCode: 74509,
    firstName: "Austen",
    lastName: "Wuckert",
    birthday: "2021-04-20T16:44:33.877Z",
    class: "class 5",
    course: "course 5",
    educationLevel: "educationLevel 5",
    typeOfEducation: "typeOfEducation 5",
    phone: "475.796.7576",
    address: "65456 Dusty Lodge",
    avatar: "https://cdn.fakercloud.com/avatars/dawidwu_128.jpg",
    key: "5",
  },
  {
    studentCode: 23618,
    firstName: "Candace",
    lastName: "Bogisich",
    birthday: "2021-06-04T19:00:25.949Z",
    class: "class 6",
    course: "course 6",
    educationLevel: "educationLevel 6",
    typeOfEducation: "typeOfEducation 6",
    phone: "(477) 241-1204 x60775",
    address: "297 Wilma Shoals",
    avatar: "https://cdn.fakercloud.com/avatars/we_social_128.jpg",
    key: "6",
  },
  {
    studentCode: 82039,
    firstName: "Kendall",
    lastName: "Skiles",
    birthday: "2022-02-03T01:02:36.131Z",
    class: "class 7",
    course: "course 7",
    educationLevel: "educationLevel 7",
    typeOfEducation: "typeOfEducation 7",
    phone: "(230) 262-2730",
    address: "369 Cummerata View",
    avatar: "https://cdn.fakercloud.com/avatars/jcubic_128.jpg",
    key: "7",
  },
  {
    studentCode: 83992,
    firstName: "Claud",
    lastName: "Wisoky",
    birthday: "2022-01-18T11:40:07.173Z",
    class: "class 8",
    course: "course 8",
    educationLevel: "educationLevel 8",
    typeOfEducation: "typeOfEducation 8",
    phone: "1-305-225-7020",
    address: "258 Nash Station",
    avatar: "https://cdn.fakercloud.com/avatars/wiljanslofstra_128.jpg",
    key: "8",
  },
  {
    studentCode: 18548,
    firstName: "Haven",
    lastName: "Beahan",
    birthday: "2021-10-16T16:57:24.311Z",
    class: "class 9",
    course: "course 9",
    educationLevel: "educationLevel 9",
    typeOfEducation: "typeOfEducation 9",
    phone: "1-633-543-8867 x435",
    address: "73804 Schuppe Ford",
    avatar: "https://cdn.fakercloud.com/avatars/brajeshwar_128.jpg",
    key: "9",
  },
  {
    studentCode: 35450,
    firstName: "Arnold",
    lastName: "Tromp",
    birthday: "2022-01-05T15:41:41.676Z",
    class: "class 10",
    course: "course 10",
    educationLevel: "educationLevel 10",
    typeOfEducation: "typeOfEducation 10",
    phone: "1-751-285-6842 x31955",
    address: "1901 Hoeger Motorway",
    avatar: "https://cdn.fakercloud.com/avatars/chaensel_128.jpg",
    key: "10",
  },
  {
    studentCode: 18747,
    firstName: "Kaycee",
    lastName: "Bauch",
    birthday: "2021-10-27T18:58:59.824Z",
    class: "class 11",
    course: "course 11",
    educationLevel: "educationLevel 11",
    typeOfEducation: "typeOfEducation 11",
    phone: "484.218.0207 x103",
    address: "5525 Sawayn Unions",
    avatar: "https://cdn.fakercloud.com/avatars/itskawsar_128.jpg",
    key: "11",
  },
  {
    studentCode: 11513,
    firstName: "Kane",
    lastName: "Dietrich",
    birthday: "2021-07-08T08:01:54.970Z",
    class: "class 12",
    course: "course 12",
    educationLevel: "educationLevel 12",
    typeOfEducation: "typeOfEducation 12",
    phone: "1-557-486-4725 x404",
    address: "5923 Jesse Cape",
    avatar: "https://cdn.fakercloud.com/avatars/linkibol_128.jpg",
    key: "12",
  },
  {
    studentCode: 88676,
    firstName: "Kevin",
    lastName: "Robel",
    birthday: "2021-08-09T18:32:33.744Z",
    class: "class 13",
    course: "course 13",
    educationLevel: "educationLevel 13",
    typeOfEducation: "typeOfEducation 13",
    phone: "697-525-2363 x357",
    address: "9631 Eleonore Stream",
    avatar: "https://cdn.fakercloud.com/avatars/tumski_128.jpg",
    key: "13",
  },
  {
    studentCode: 46022,
    firstName: "Jordane",
    lastName: "Kirlin",
    birthday: "2021-06-13T11:05:27.436Z",
    class: "class 14",
    course: "course 14",
    educationLevel: "educationLevel 14",
    typeOfEducation: "typeOfEducation 14",
    phone: "977.823.5921 x530",
    address: "14076 Abshire Route",
    avatar: "https://cdn.fakercloud.com/avatars/arthurholcombe1_128.jpg",
    key: "14",
  },
];

function App() {
  return (
    <Layout>
      <Header className="header">
        <Row justify="space-between">
          <Col className="gutter-row" span={4}>
            <div style={{ position: "relative", width: "60%", height: "100%" }}>
              <img
                className="logo"
                src={logo}
                alt="logo"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <Space size="middle">
              <Badge count={5}>
                <Avatar
                  shape="square"
                  size={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  icon={<MessageOutlined />}
                />
              </Badge>
              <Badge count={0} showZero>
                <Avatar
                  shape="square"
                  size={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  icon={<BellOutlined />}
                />
              </Badge>
              <Avatar
                shape="square"
                size={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                icon={<UserOutlined />}
              />
            </Space>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="Quản lý sinh viên"
            >
              <Menu.Item key="1">Danh sách sinh viên</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AreaChartOutlined />}
              title="Thống kê kết quả"
            >
              <Menu.Item key="5">Theo niên khóa</Menu.Item>
              <Menu.Item key="6">Theo ngành</Menu.Item>
              <Menu.Item key="7">Theo lớp</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Input.Group size="large">
              <Row>
                <Col span={5}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      marginBottom: 16,
                    }}
                  >
                    Thêm sinh viên
                  </Button>
                </Col>
                <Col span={8}>
                  <Search placeholder="Tìm kiếm" allowClear size="large" />
                </Col>
              </Row>
            </Input.Group>
            <Table
              rowSelection={{
                type: "checkbox",
              }}
              columns={columns}
              dataSource={data}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
