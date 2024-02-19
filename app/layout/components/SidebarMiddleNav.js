import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboards"
        >
            <SidebarMenu.Item title="Funnel" to='/dashboards/projects' exact />
            <SidebarMenu.Item title="Rebates" to='/dashboards/system' exact />
            <SidebarMenu.Item title="Contracts & Rebate Agreements" to='/dashboards/monitor' exact />
            <SidebarMenu.Item title="Price Lists" to='/dashboards/financial' exact />
            <SidebarMenu.Item title="Other" to='/dashboards/stock' exact />
            <SidebarMenu.Item title="Reports" to='/dashboards/reports' exact />
        </SidebarMenu.Item>
 
        { /* -------- Layouts ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Manage"
        >
            <SidebarMenu.Item title="Funnel Items" to='/layouts/navbar' exact />
            <SidebarMenu.Item title="Rebates" to='/layouts/sidebar' exact />
            <SidebarMenu.Item title="Contracts & Agreements" to='/layouts/sidebar-a' exact />
            <SidebarMenu.Item title="Price lists" to="/layouts/sidebar-with-navbar" exact />
            <SidebarMenu.Item title="Other" to='/layouts/dnd-layout' exact />
        </SidebarMenu.Item>
        { /* -------- Cards ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-clone"></i>}
            title="Cards"
        >
            <SidebarMenu.Item title="Cards" to='/cards/cards' exact />
            <SidebarMenu.Item title="Cards Headers" to='/cards/cardsheaders' exact />
        </SidebarMenu.Item>
       

    </SidebarMenu >
);
