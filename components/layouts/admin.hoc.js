//rcc จะได้ทั้งหมดนี้เลย เยี่ยมไปเลย ติดตั้งก่อน เด้อ
import React, { Component } from 'react'
import AdminHeader from './admin.header'
import AdminSidebar from './admin.menu'
import AdminFooter from './admin.footer'
import AdminContent from './admin.content'

export default class AdminHOC extends Component {
    render() {
        return (
            <div>
                <AdminHeader />
                <AdminSidebar />
                <AdminContent title={this.props.contentTitle}>
                    {this.props.children}
                </AdminContent>
                <AdminFooter />
            </div>
        )
    }
}
