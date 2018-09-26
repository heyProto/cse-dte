import React from 'react';
import { formatDate } from './utility';
import {getCardStatus} from './manipulation';

import '../css/List.css';

class ListCards extends React.Component {

  constructor (props) {
    super(props);

    let stateVar = {
      no_of_cards: 30,
      cardsInRow: window.innerWidth <= 500 ? 1 : 3,
      cardsVisible: this.props.dataJSON.slice(0, 30)
    };

    this.state = stateVar;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cardsVisible: nextProps.dataJSON.slice(0, this.state.no_of_cards)
    });
  }

  loadMoreCard() {
    let size = this.props.dataJSON.length;
    let x = (this.state.no_of_cards + this.state.no_of_cards <= size) ? this.state.no_of_cards + this.state.no_of_cards : size;

    this.setState({
      no_of_cards : x,
      cardsVisible: this.props.dataJSON.slice(0, x)
    })
  }

  getCardStatusClass(status) {
    switch(status) {
      case "Cancelled": return "proto-card-status-cancel";
      case "Ongoing": return "proto-card-status-ongoing";
      case "Done": return "proto-card-status-done";
      default: return "proto-card-status-none";
    }
  }

  render() {
      if (this.props.dataJSON.length === 0) {
      return(<h2>No cards to display</h2>)
    } else {
      let cards = this.state.cardsVisible.map((card, i) => {
        let class_name = (((i+1)% this.state.cardsInRow) == 0) ? "protograph-card div-without-margin-right" : "protograph-card";
        return(
            <div
              id={`protograph-grid-card-${card.state}-${card.date}`}
              onClick={this.props.showModal}
              data-viewcast_id={card.view_cast_id}
              className={`protograph-grid-card protograph-trigger-modal ${class_name}`}
              data-iframe_url={card.iframe_url}
              >
              <div className="proto-card-content" >
                <div className="proto-card-tag">
                <div className={`proto-card-status ${this.getCardStatusClass(getCardStatus(card.case_status))}`} />
                  <div className="proto-card-date">{card.date? formatDate(card.date) : "Date: Unknown"}</div>
                </div>
                <div className="proto-card-title">{card.title.length <= 150? card.title : card.title.replace(/^(.{150}[^\s]*).*/, "$1 ...")}</div>
                <div className="proto-context-div">
                  <div className="proto-context-title">Subject :</div>
                  <div className="proto-context">{card.subject? card.subject: "Unknown"}</div>
                </div>
              </div>
          </div>
        )
      })
      return (
        <div id="cards-list" className="protograph-card-area">
          {cards}
          <div className="clearfix"></div>
          {this.state.no_of_cards < this.props.dataJSON.length ? <button id="show-more-cards" onClick={(e) => this.loadMoreCard()}>Show more</button> : null}
        </div>
      );
    }
  }
}

export default ListCards;