import React, { Component } from 'react';
import css from './UserFollower.module.css';
import { ButtonOffClick, ButtonOnClick, LogoItem } from './UserFollower.styled';

export class UserFollower extends Component {
  state = {
    numbers: 500,
    isOnClick: true,
  };

  handleCountFollowers = () => {
    this.setState(prevState => {
      return { numbers: prevState.numbers + 1, isOnClick: false };
    });
  };

  handleUnCountFollowers = () => {
    this.setState(prevState => {
      return { numbers: prevState.numbers - 1, isOnClick: true };
    });
  };

  render() {
    return (
      <form className={css.form}>
        <LogoItem />
        <div className={css.line}> </div>{' '}
        <div className={css.circle}>
          {' '}
          <div className={css.avatarBackground}>
            {' '}
            <div className={css.ellipce}>
              {' '}
              <div className={css.avatar}></div>
            </div>
          </div>
        </div>
        <div className={css.pictures}></div>
        <h2 className={css.text}> 777 tweets</h2>
        <h2 className={css.text2}>100,{this.state.numbers} Followers</h2>
        {this.state.isOnClick ? (
          <ButtonOffClick type="button" onClick={this.handleCountFollowers}>
            <h3 className={css.buttonText}> Follow</h3>
          </ButtonOffClick>
        ) : (
          <ButtonOnClick type="button" onClick={this.handleUnCountFollowers}>
            {' '}
            <h3 className={css.buttonText}> Following</h3>
          </ButtonOnClick>
        )}
      </form>
    );
  }
}
