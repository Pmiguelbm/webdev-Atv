import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const Menu = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
  }

  const items = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  const [item, setItem] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setItem(res.data)
      })
  }, []);

  return (
    <div className='App'>
      <h1 id='titulo'>
        Produtos
      </h1>
      <ul id ='lista'>
        {item.map((item) => {
          return <li key={item.id}>
            <img src = {item.image}/>
            <span id='letra'>Titulo: {item.title}</span>
            <span id='letra2'>Preço: R$ {item.price}</span>
          </li>
        })}
      </ul>
    </div>

  );
}

export default App;
