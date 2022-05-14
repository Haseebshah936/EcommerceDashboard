import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { AccountBalance, AccountBalanceWallet, Home, House, Menu} from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppBar, IconButton, Typography } from '@mui/material';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  type: string;
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window,type } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <LogoBox>
        <Image src='../../logo.png'/>
        <Title>E Commerce</Title>
      </LogoBox>
      <List>
          <ListItem key={"dashboard"} disablePadding>
                <ListItemButton onClick={() => navigate("/")}>
                    <ListItemIcon sx={{maxWidth: '30px', minWidth: '2rem', marginLeft: '.5rem'}}>
                      <House fontSize='small' htmlColor={type=== 'dashboard'?'#008000':'#1B1D4E'}/>
                    </ListItemIcon>
                    <ListItemText  sx={{color: type=== 'dashboard'?'#008000':'#8A8B9F'}} primary={"Dashboard"} />
                </ListItemButton>
          </ListItem>
          <ListItem key={"notification"} disablePadding>
                <ListItemButton onClick={() => navigate("/notifications")}>
                    <ListItemIcon sx={{maxWidth: '30px', minWidth: '2rem', marginLeft: '.5rem'}}>
                      <AccountBalanceWallet fontSize='small' htmlColor={type=== 'notifications'?'#008000':'#1B1D4E'}/>
                    </ListItemIcon>
                    <ListItemText sx={{color: type=== 'notifications'?'#008000':'#8A8B9F'}} primary={"Notifications"} />
                </ListItemButton>
          </ListItem>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{alignSelf: 'flex-start',   padding: 0, margin: 0, marginLeft: '1.5rem'}}
          >
            <Menu />
          </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
            </>
  );
}


const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 6rem;
`

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: .8rem;
`

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  color: #4E36FC
`;
