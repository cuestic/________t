import React, { Component, Fragment } from 'react'
import { Form, Input, Icon, Button } from 'antd'
import random from 'lodash/random'
import sum from 'lodash/sum'

export class DynamicFieldsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dynamicFields: []
    }
  }

  componentDidMount() {
    const { dynamicFields } = this.state
    const uuid = random(10000, 99999)
    this.setState({
      dynamicFields: dynamicFields.concat([{ uuid, name: '', fee: 0 }])
    })
  }

  render() {
    const { dynamicFields } = this.state
    const { getFieldDecorator, getFieldValue, validateFields } = this.props.form
    return <Form onSubmit={(event) => {
      event.preventDefault()
      validateFields((errors, values) => {
        console.log(dynamicFields)
        console.log(values)
        console.log(sum(dynamicFields.map(_ => ~~_.fee)))
      })
    }}>
      {
        dynamicFields.map((item, index) => {
          return <Fragment key={index}>
            <Form.Item>
              {
                getFieldDecorator(`name_${item.uuid}`, {
                  initialValue: item.name
                })(<Input placeholder="名称" onChange={() => {}} />)
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator(`fee_${item.uuid}`, {
                  initialValue: item.fee
                })(<Input placeholder="费用" onChange={({ target }) => {
                  this.setState({
                    dynamicFields: dynamicFields.map(feeItem => {
                      if (feeItem.uuid === item.uuid) {
                        return { ...feeItem, fee: target.value }
                      }
                      return feeItem
                    })
                  })
                }} />)
              }
            </Form.Item>
            <Button onClick={() => {
              this.setState({
                dynamicFields: dynamicFields.filter(_item => _item.uuid !== item.uuid)
              })
            }}>减一个</Button>
          </Fragment>
        })
      }
      <div>
        <Button onClick={() => {
          const uuid = random(10000, 99999)
          this.setState({
            dynamicFields: dynamicFields.concat([{ uuid, name: '', fee: 0 }])
          })
        }}>加一个</Button>
        <Button type="primary" htmlType="submit">提交</Button>
        <span>{sum(dynamicFields.map(_ => ~~_.fee))}</span>
      </div>
    </Form>
  }
}
const DynamicFieldsComponentForm = Form.create()(DynamicFieldsComponent)

export default class __404__ extends Component {
  render() {
    return <DynamicFieldsComponentForm />
  }
}
