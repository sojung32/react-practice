import { Tabs } from 'antd';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: `Tab 4`,
    children: `Content of Tab Pane 4`,
  },
  {
    key: '5',
    label: `Tab 5`,
    children: `Content of Tab Pane 5`,
  },
  {
    key: '6',
    label: `Tab 6`,
    children: `Content of Tab Pane 6`,
  },
  {
    key: '7',
    label: `Tab 7`,
    children: `Content of Tab Pane 7`,
  },
  {
    key: '8',
    label: `Tab 8`,
    children: `Content of Tab Pane 8`,
  },
  {
    key: '9',
    label: `Tab 9`,
    children: `Content of Tab Pane 9`,
  },
  {
    key: '10',
    label: `Tab 10`,
    children: `Content of Tab Pane 10`,
  },
];
export default function TabCpnt() {
    return (
        <Tabs 
            defaultActiveKey="1" 
            tabPosition="top"
            items={items} 
            onChange={onChange} 
        />
    );
}