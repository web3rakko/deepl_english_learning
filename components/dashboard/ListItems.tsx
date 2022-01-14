import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from 'next/link';

interface Props {
    closeMenu: () => void;
}
export const MainListItems = (props: Props) => {
    return (
        <div>
            <Link href="/home">
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="勉強する" />
                </ListItem>
            </Link>

            <Link href="/dashboard" >
                <ListItem button onClick={props.closeMenu}>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="ダッシュボード" />
                </ListItem>
            </Link>

        </div>
    )
}

export const SecondaryMainListItems = () => {
    return (
        <div>
            {/* <ListSubheader inset>Saved reports</ListSubheader> */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScbacRgBLm8sw_s28KEQOJWUqB5M8mV4xFBt3Br25WM2KpKuA/viewform?usp=sf_link">
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Questionリクエスト" />
                </ListItem>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiBErG8O7zFEZYlODFk4p27GjwbFjV4ehp9SO8OZ3cffuMcA/viewform?usp=sf_link">
                <ListItem button >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="追加機能リクエスト" />
                </ListItem>
            </Link>
        </div>);
}