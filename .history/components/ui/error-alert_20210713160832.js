import classes from './error-alert.module.css';

export defaultfunction ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

