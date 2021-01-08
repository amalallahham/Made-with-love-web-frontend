import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import NavbarSeller from "./layout/NavbarSeller.js";
export default class CategorySeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  clicked(id) {
    console.log(id);
  }
  componentDidMount() {
    // var cat = this.props.cat
    var that = this;
    $.ajax({
      type: "GET",
      url: `http://127.0.0.1:8000/seller/${this.props.cat}`,
      //  url:`http://127.0.0.1:8000/seller/food`,
      // headers: {"Authorization": localStorage.getItem('token')},
      // headers: { 'x-my-custom-header': 'some value' },
      success: function (data) {
        console.log("data fom get request", data);
        //  var action ={type:'getdata', text:data}
        //  that.props.store.dispatch(that.disp(action))
        //  console.log("dataaaa",that.props.store.getState().categoryReducer.data)
        that.setState(
          {
            data: data,
          },
          () => {
            console.log(that.state.data, "statee");
          }
        );
      },
      error: function (err) {
        console.log("error:", err);
      },
    });
  }
  render() {
    return (
      <div>
        <NavbarSeller />
        <br />
        <br />
        <div className="row" style={{ margin: "0 auto" }}>
          {this.state.data.map((item, i) => {
            return (
              <div className="col-sm-6" key={item["pk"]}>
                <div
                  className="card"
                  style={{
                    border: "solid  black 2px",
                    width: "700px",
                    cursor: "pointer",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    src={item["fields"].image}
                    alt="car"
                    style={{
                      width: "100%",
                      height: "500px",
                      margin: " 0 auto",
                    }}
                  />
                  <div className="card-body">
                    <h2 className="card-title">
                      Store Name : {item["fields"].store_name}
                    </h2>
                    <h3 className="card-text">
                      Description: {item["fields"].description}{" "}
                    </h3>
                    <h5 className="card-text">
                      Location : {item["fields"].location}
                    </h5>

                    <Link
                      to={{
                        pathname: `/seller/visit/${item["pk"]}`,
                        id: item["pk"],
                      }}
                    >
                      <button
                        onClick={() => {
                          this.clicked(item["pk"], item.name, item.url);
                        }}
                      >
                        Visit
                      </button>
                    </Link>
                  </div>
                </div>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
