import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends PureComponent {
  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={this.handleClick} data-notification-type={type}
          className={css(styles.datadefault, type === 'default' && styles.datadefault)}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li onClick={this.handleClick} data-urgent 
          className={css(styles.dataurgent )}dangerouslySetInnerHTML={{ __html: html }}></li>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  datadefault: {
    color: '#0d0563',
  },
  dataurgent: {
    color: '#e0354b',
    fontWeight: 'bold',
  },
})

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log("Empty func");
  },
};

export default NotificationItem;
