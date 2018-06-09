import React, { Component } from 'react'
import { Table, Badge, Divider } from 'antd'
import { Link } from 'react-router'
import superagent from 'superagent'

const ws = new WebSocket('ws://edptest.sparklog.com/edp/data/rt/')
ws.onopen = () => ws.send(JSON.stringify({ 'Authorization': localStorage.getItem('token') }))

export function extractDevicesList(source) {
  const devices = []
  for (let n of source.data) {
    for (let device of n.device) {
      devices.push({
        uniq_key: `${n.eda.sn}^${device.devid}`,
        eda_sn: n.eda.sn,
        ...device
      })
    }
  }
  return devices
}

export default class Device extends Component {
  constructor(props) {
    super(props)
    this.state = {
      devices: []
    }
  }

  componentDidMount() {
    ws.onmessage = (_) => this.onMessage(_)
    this.intervalId = setInterval(() => {
      this.setState({ updated_at: +new Date() })
    }, 1000 * 5)
    superagent.get('http://edptest.sparklog.com/dev/conf/').set('Authorization', localStorage.getItem('token')).then(response => {
      const devices = extractDevicesList(response.body)
      this.setState({ devices: devices.map(item => {
        return { ...item, created_at: +new Date(), updated_at: +new Date() }
      }) })
    }).catch(errors => {
    })
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onMessage({ data }) {
    const deviceObject = JSON.parse(data)
    const deviceMap = { uniq_key: `${deviceObject.eda_sn}^${deviceObject.dev_id}` }
    this.setState({
      devices: this.state.devices.map(device => {
        if (device.uniq_key === deviceMap.uniq_key) {
          return { ...device, updated_at: +new Date() }
        }
        return device
      })
    })
  }

  render() {
    return <Table rowKey="uniq_key" columns={[
      {
        title: 'ID',
        dataIndex: 'uniq_key'
      },
      {
        title: '设备名',
        dataIndex: 'devid'
      },
      {
        title: '所属 EDA',
        dataIndex: 'eda_sn'
      },
      {
        title: '时间戳',
        dataIndex: 'updated_at'
      },
      {
        title: '状态',
        render(text, record) {
          return <span>
            {
              record.active ? <Badge status="success" /> : <Badge status="error" />
            }
          </span>
        }
      }
    ]} dataSource={this.state.devices.map(item => {
      return { ...item, active: Math.abs(this.state.updated_at - item.updated_at) < (4 * 1000) }
    })} />
  }
}
