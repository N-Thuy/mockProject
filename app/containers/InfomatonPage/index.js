import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/header';
import './styles.css';

const images = [
  {
    url:
      'https://s18670.pcdn.co/wp-content/uploads/2016/07/great-teachers-great-schools.jpg',
    title: 'Giảng Viên',
    width: '47.2%',
    path: '/teacher',
  },
  {
    url:
      'https://www.oratoryprepomega.org/wp-content/uploads/2019/03/Screenshot-2019-03-13-09.24.49.png',
    title: 'Học Viên',
    width: '47.2%',
    path: '/student',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minWidth: 300,
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'relative',
    flexGrow: 1,
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
}));

export default function InfomatonPage() {
  const classes = useStyles();
  return (
    <div className="manager">
      <Header />
      <h2 className="manager-text">QUẢN LÝ THÔNG TIN GIẢNG VIÊN VÀ HỌC VIÊN</h2>
      <div className={classes.root}>
        {images.map(image => (
          <Link to={image.path} className={classes.link}>
            <Button
              // to={image.path}
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
