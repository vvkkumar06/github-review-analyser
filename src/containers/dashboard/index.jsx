import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Constants from './../../utils/constants';
import DashboardWidgetsContainer from './../../components/dashboard-widgets-container';
import OnlineAvatar from './../../components/shared/avatar';
import { connect } from 'react-redux';
import { actionGetReviews } from './../../actions/reviews';
import { actionGetUser } from './../../actions/user';
import { actionGetRepositories, actionSetCurrentRepository } from './../../actions/repositories';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  select: {
    borderBottom: '#fff'
  },
  icon: {
    color: '#fff'
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [repository, setRepository] = React.useState('');
  const username = props.user.data && props.user.data.login;
  useEffect(() => {
    props.actionGetReviews(repository, username, 'all');
    props.actionGetUser();
    props.actionGetRepositories();
  }, [repository])
  const handleDrawerOpen = () => {
    props.actionGetReviews(repository, username, 'all');
    setOpen(true);
  };

  const handleDrawerClose = () => {
    props.actionGetReviews(repository, username, 'all');
    setOpen(false);
  };

  const onRepositoryChange = event => {
    setRepository(event.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ display: 'flex', justifyContent: 'flex-end', minWidth: '220px' }}>
            {Constants.APP_NAME}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <FormControl className={classes.formControl} style={{ width: '300px', marginLeft: '20px' }}>
              <Select
                value={repository}
                classes={{
                  icon: classes.icon
                }}
                style={{ borderBottom: '1px solid #fff', color: '#fff' }}
                labelId="repository-select-label"
                id="repository-select"
                onChange={onRepositoryChange}
              >
                {
                  props.repos.data && props.repos.data.map(repo => {
                    return <MenuItem value={repo.name} key={repo.id}>{repo.name}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h6" noWrap >
            {props.user.data && props.user.data.name}
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <OnlineAvatar image={props.user.data && props.user.data.avatar_url} large={open} />
        </div>
        {open && <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
          {props.user.data && props.user.data.bio}
        </Typography>}
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DashboardWidgetsContainer reviews={props.reviews} />
      </main>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    user: state.user,
    repos: state.repos,
    currentRepo: state.currentRepo
  }
}
export default connect(mapStateToProps, { actionGetReviews, actionGetUser, actionGetRepositories, actionSetCurrentRepository })(Dashboard);