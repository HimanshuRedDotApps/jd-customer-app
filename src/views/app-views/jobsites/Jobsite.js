import { DashboardOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined, EyeOutlined, MoreOutlined, SearchOutlined, TeamOutlined, UserSwitchOutlined } from '@ant-design/icons'
import Icon from '@ant-design/icons/lib/components/Icon'
import { Avatar, Button, Checkbox, Dropdown, Input, Menu, Space, Table, Tag, Modal, Select, Form, Radio, message, Popconfirm } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { AccountStatusIcon, AssignDashboardIcon, CsvIcon, FilterIcon, SuccessTickIcon } from 'assets/svg/icon'
import Filter from 'components/shared-components/Filter'
import React, { useState, useEffect } from 'react'
import Alert from '../../../assets/images/Alert.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosInstance } from 'App'
import moment from 'moment'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const { Option } = Select;

const Jobsites = () => {

  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false)
  const [alertModal, setAlertModal] = useState(false)
  const [searchText, setSearchText] = useState('');
  // const [data, setData] = useState([]);
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleCancelConfirmation = () => {
    setDeleteConfirmationModal(false)
  }
  const handleYesConfirmation = () => {
    setDeleteConfirmationModal(false)
    handleOpenAlert()
    setTimeout(() => {
      handleCloseAlert()
    }, 1500);
  }
  const handleOpenAlert = () => {
    setAlertModal(true)
  }
  const handleCloseAlert = () => {
    setAlertModal(false)
  }
  const handleSave = (selectedDashboards) => {
    // Handle save logic here
    console.log('Selected Dashboards:', selectedDashboards);
    setModalVisible(false);
  };
  const handleSelectChange = (selectedValues) => {
    if (selectedValues.includes('all')) {
      setSelectedDashboards(['all', 'Vibratory Sensor Dashboard', 'Solar Sensor Dashboard']);
    } else {
      setSelectedDashboards(selectedValues);
    }
  };
  const [data, setData] = useState([]);

  const getData = async (search="",status = '', workshop = '') => {
    // ?search=${search}&status=${status!='all'?status:''}&area=${workshop!='all'?workshop:''}
    let url = `?search=${search}`
    //for 0 it is not handling
    if((status !== '' && status != 'all')) {
      url += `&status=${status}`
    }
   
    try {
      const resp = await axiosInstance.get(`/api/web/jobsites${url}`);
      setData(resp.data.items);
    } catch (err) {
      console.log(err)
      message.error('Something went wrong')
    }
  }

  useEffect(() => {
    getData();
  }, [])



  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    // {
    //   // title: 'Image',
    //   dataIndex: 'image',
    //   key: 'image',
    //   render: (text, record) => <Avatar src={text} alt={`Avatar for ${record.organization}`} />,
    // },
    {
      title: 'Jobsite Name',
      dataIndex: 'jobsite_name',
      key: 'jobsite_name',
    },
    {
      title: 'Area',
      dataIndex: 'operational_area',
      key: 'operational_area',
      render: (text, record) => <span>{record.operational_area.area_name}</span>
    },
    {
      title: 'Mobile Number',
      dataIndex: 'phone_no',
      key: 'phone_no',
        render: (text, record) => <span>{record.phone_code + " " +record.phone_no}</span>
    },
    // {
    //   title: 'Email ID',
    //   dataIndex: 'email',
    //   key: 'email',
    // },
    {
      title: 'Created On',
      dataIndex: 'created_at',
      key: 'created_at',
        render: (text) => moment(text).format('DD-MM-YYYY')
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (active) => (active ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Dropdown overlay={getMenu(record.id)} placement="bottomRight" trigger={['hover']}>
            <MoreOutlined />
          </Dropdown>
        </Space>
      ),
    },
  ];


  const getMenu = (record) => (
    <Menu>
     
      <Menu.Item key="edit" onClick={() => {
        // history.push(`/app/operator-master/operational-areas/edit/${record}`)
        // /operator-master/jobsites/edit/:id
        history.push(`/app/operator-master/jobsites/edit/${record}`)
      }}>
        <EditOutlined /> Edit
      </Menu.Item>
      <Popconfirm
        title={"Are you sure you want to delete this item?"}
        description={"This action cannot be undone."}
        okText="Yes"
        cancelText="No"
        onConfirm={() => deleteRow(record)}
      >
        <Menu.Item key="delete">
          <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <DeleteOutlined /> Delete
          </span>
        </Menu.Item>
      </Popconfirm>
      {/* <Menu.Item onClick={() => setModalVisible(true)}>
        <AccountStatusIcon /> Account Status
      </Menu.Item> */}
    </Menu>
  );
  const deleteRow = async (id) => {
    console.log(id);
    try {
      const response = await axiosInstance.delete(
        `api/web/jobsites/${id}`
      );
      if (response.status === 200) {
        message.success("Area deleted successfully");
        // setData((prevData) => prevData.filter((item) => item.id !== id));
        getData()
      }
    } catch (error) {
      console.error("Error deleting row:", error);
    }
  };

  var timeout = ""
  const onSearch = (value) => {
    setSearchText(value.target.value)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      getData(value.target.value, selectedStatus)
    }, 500)
  }

  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedWorkshop, setSelectedWorkshop] = useState('all');
  const handleStatusChange = (filter) => {
    setSelectedStatus(filter);
    getData(searchText,filter=='active'?1:filter=='inactive'?0:'all', selectedWorkshop);
    // Trigger the data fetch or update logic here for status
    console.log(`Applied status filter: ${filter}`);
  };

  const handleWorkshopChange = (filter) => {
    setSelectedWorkshop(filter);
    getData(searchText,selectedStatus=='active'?1:selectedStatus=='inactive'?0:'all', filter);
    // Trigger the data fetch or update logic here for workshop
    console.log(`Applied workshop filter: ${filter}`);
  };
  const FilterMenu = (
    <Menu mode="horizontal">
      {/* Status Filter */}
      <SubMenu key="status" title="Status">
        <Menu.Item key="status-all">
          <Checkbox
            checked={selectedStatus === 'all'}
            onChange={() => handleStatusChange('all')}
          >
            All
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="status-active">
          <Checkbox
            checked={selectedStatus === 'active'}
            onChange={() => handleStatusChange('active')}
          >
            Active
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="status-inactive">
          <Checkbox
            checked={selectedStatus === 'inactive'}
            onChange={() => handleStatusChange('inactive')}
          >
            Inactive
          </Checkbox>
        </Menu.Item>
      </SubMenu>

   
      {/* <SubMenu key="workshop" title="Area">
        <Menu.Item key="area-all">
          <Checkbox
            checked={selectedWorkshop === 'all'}
            onChange={() => handleWorkshopChange('all')}
          >
            All
          </Checkbox>
        </Menu.Item>
        {workshopData.map((item, i) => (
          <Menu.Item key={`workshop-${i}`}>
            <Checkbox
              checked={selectedWorkshop === item.id}
              onChange={() => handleWorkshopChange(item.id)}
            >
              {item.workshop_name}
            </Checkbox>
          </Menu.Item>
        ))}
      </SubMenu> */}
    </Menu>
  );



  return (
    <div>
      <h4> <UserSwitchOutlined /><span style={{
        color: '#6a6a6a',
        fontWeight: '300'
      }}> Operational Master </span>/ Jobsites  </h4>
      <div className="d-flex justify-content-between mb-3">
        <div className="" style={{ display: "flex" }}>
          <Space direction="vertical">
            <Input
              placeholder="Search"
              allowClear
              value={searchText}
              onChange={onSearch}
              style={{
                width: 200,
              }}
              prefix={<SearchOutlined style={{ marginRight: 8 }} />}
            />
          </Space>
          <Filter filters={FilterMenu}>
            <Button
              icon={<Icon component={FilterIcon} />}
              className="d-flex align-items-center ml-2"
            >
              Filters
            </Button>
          </Filter>
          {/* <Button icon={<Icon component={CsvIcon} />} className="d-flex align-items-center ml-2" >Export</Button> */}
        </div>
        <div className="mb-2 d-flex align-items-center">
          <Button
            // onClick={showModal}
            className="ml-3 bg-primary d-flex align-items-center rounded text-white font-weight-semibold px-4"
          >
            <Link to={'jobsites/add-new'}>
              + Add New</Link>
          </Button>
        </div>
      </div>
      <div>
        <Table
        
          columns={columns} dataSource={data} />
      </div>
      <Modal
        // title={<div className='d-flex align-items-center'><span className='d-block ml-2' > User Account Status </span></div>}
        visible={deleteConfirmationModal}
        onCancel={() => setDeleteConfirmationModal(false)}
        footer={false}
      >
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img style={{ width: '60px' }} src={Alert} alt={'...'} />
          <h4 style={{ fontWeight: '300', width: '250px' }} className='text-center'>Are you sure you want to delete
            user records?</h4>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <Button className='' onClick={() => handleCancelConfirmation()}>
            No
          </Button>
          <Button className='bg-primary text-white ml-2' onClick={handleYesConfirmation}>
            Yes
          </Button>
        </div>

      </Modal>
      <Modal
        visible={alertModal}
        onCancel={() => setAlertModal(false)}
        footer={false}
      >
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <SuccessTickIcon />
          <h4 style={{ fontWeight: '300', width: '250px' }} className='text-center'>Admin account deleted successfully!</h4>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <Button className='bg-primary text-white ml-2' onClick={handleCloseAlert}>
            Close
          </Button>
        </div>
      </Modal>

    </div>
  )
}

export default Jobsites