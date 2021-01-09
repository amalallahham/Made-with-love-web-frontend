import React, { Component } from "react";
import $ from "jquery";
import ItemList from "./itemList.js";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavbarBuyer from "./layout/NavbarBuyer.js";

import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
var mapStateToProps = (state) => {
  return {
    gender: state.filterReducer.gender,
    size: state.filterReducer.size,
    food: state.filterReducer.food,
    acc: state.filterReducer.acc,
    babyGender: state.filterReducer.babyGender,
    data: state.categoryReducer.data,
    filteredData: state.filteringReducer.filteredData,
  };
};
class CatBuyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      data: [],
    };
  }
  //helper func to dispatch
  disp(obj) {
    return obj;
  }
  //toggle filter button
  filterToggle = () => {
    console.log("this", this.props);
    const current = this.state.display;
    this.setState({
      display: !current,
    });
  };
  //onchange  filters dispatch actions
  handleClothesGender = (e) => {
    var action = {
      type: this.props.cat,
      text: e.target.value,
      filter: "gender",
    };
    //dispatching gender action
    this.props.store.dispatch(this.disp(action));
  };
  handleClothesSize = (e) => {
    var action = { type: this.props.cat, text: e.target.value, filter: "size" };
    this.props.store.dispatch(this.disp(action));
  };
  handlefood = (e) => {
    var action = { type: this.props.cat, text: e.target.value };
    this.props.store.dispatch(this.disp(action));
  };
  handleacc = (e) => {
    var action = { type: this.props.cat, text: e.target.value };
    this.props.store.dispatch(this.disp(action));
  };
  handlebaby = (e) => {
    var action = { type: this.props.cat, text: e.target.value };
    this.props.store.dispatch(this.disp(action));
  };
  componentDidMount() {
    var cat = this.props.cat;
    var that = this;
    console.log("ajax", cat);
    $.ajax({
      type: "GET",
      url: `http://127.0.0.1:8000/buyer/${cat}`,
      //  url:` http://127.0.0.1:8000/buyer/food`,
      // headers: {"Authorization": localStorage.getItem('token')},
      // headers: { 'x-my-custom-header': 'some value' },
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token"))["token"],
      },

      success: function (data) {
        console.log("data fom get request", data);
        var action = { type: "getdata", text: data };
        that.props.store.dispatch(that.disp(action));
        //  console.log("dataaaa",that.props.store.getState().categoryReducer.data)
        that.setState(
          {
            data: data,
          },
          () => {
            console.log(that.state.data, "staaaaaaaaaaate");
          }
        );
      },
      error: function (err) {
        console.log("error:", err);
      },
    });
  }
  filter = () => {
    var filter;
    var filteredData = [];
    var data = this.props.store.getState().categoryReducer.data;
    console.log(this.props.cat);
    console.log(this.props);
    if (this.props.cat === "food") {
      filter = this.props.food;
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]["fields"].types);
        if (data[i]["fields"].types === filter) filteredData.push(data[i]);
      }
    }
    if (this.props.cat === "clothes") {
      if (this.props.size && this.props.gender) {
        filter = this.props.size;
        var filter2 = this.props.gender;
        for (var i = 0; i < data.length; i++) {
          if (
            data[i]["fields"].size === filter &&
            data[i]["fields"].gender === filter2
          )
            filteredData.push(data[i]);
        }
      } else if (this.props.size) {
        filter = this.props.size;
        for (var i = 0; i < data.length; i++) {
          if (data[i]["fields"].size === filter) filteredData.push(data[i]);
        }
      } else if (this.props.gender) {
        filter = this.props.gender;
        for (var i = 0; i < data.length; i++) {
          if (data[i]["fields"].gender === filter) filteredData.push(data[i]);
        }
      }
    }
    if (this.props.cat === "babyproducts") {
      filter = this.props.babyGender;
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]["fields"].gender);
        if (data[i]["fields"].gender === filter) filteredData.push(data[i]);
      }
    }
    if (this.props.cat === "accessories") {
      console.log("dataaaafilteeer", data);
      filter = this.props.acc;
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]["fields"].material);
        if (data[i]["fields"].material === filter) filteredData.push(data[i]);
      }
    }
    //get data from store
    //filter it depending on page and on filter
    console.log("fixing", filter, filter2, filteredData);
    var action = {
      type: "filtering",
      text: filteredData,
    };
    this.setState(
      {
        data: filteredData,
      },
      () => {
        console.log(this.state.data);
      }
    );
    // this.props.store.dispatch(this.disp(action))
    // console.log("filtereddataaa", this.props)
    // render it
  };
  render() {
    console.log("prooops", this.props.cat);
    var content = null;
    var filter = null;
    if (this.props.cat === "clothes") {
      filter = (
        <div>
          <div
            className=" p-2  bg-light border-right"
            style={{
              marginTop: "70px",
            }}
          >
            <Container>
              <Row>
                <Col>
                  <label style={{ textAlign: "center" }}>
                    Select a Gender{" "}
                  </label>
                </Col>
                <br />
                <ToggleButtonGroup type="radio" name="options">
                  <ToggleButton
                    className="btn-dark"
                    style={{ width: "200px" }}
                    value="Female"
                    onChange={this.handleClothesGender}
                    style={{ marginLeft: "-500px", marginRight: "600px" }}
                  >
                    Women
                  </ToggleButton>

                  <ToggleButton
                    className="btn-dark"
                    value="Male"
                    onChange={this.handleClothesGender}
                    style={{ marginLeft: "-500px", marginRight: "700px" }}
                  >
                    Men
                  </ToggleButton>
                </ToggleButtonGroup>
              </Row>

              <Row style={{ marginTop: "50px" }}>
                <Col>
                  <label style={{ textAlign: "center" }}>Select a Size </label>
                </Col>
                <br />
                <ToggleButtonGroup type="radio" name="options">
                  <ToggleButton
                    className="btn-dark"
                    style={{ width: "200px" }}
                    value="S"
                    onChange={this.handleClothesSize}
                    style={{ marginLeft: "-50px", marginRight: "150px" }}
                  >
                    S
                  </ToggleButton>

                  <ToggleButton
                    className="btn-dark"
                    value="M"
                    onChange={this.handleClothesSize}
                    style={{ marginLeft: "-100px", marginRight: "500px" }}
                  >
                    M
                  </ToggleButton>

                  <ToggleButton
                    className="btn-dark"
                    value="L"
                    onChange={this.handleClothesSize}
                    style={{ marginLeft: "-400px", marginRight: "600px" }}
                  >
                    L
                  </ToggleButton>
                </ToggleButtonGroup>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
    if (this.props.cat === "food") {
      filter = (
        <div>
          <div
            className=" p-2  bg-light border-right"
            style={{
              marginTop: "70px",
            }}
          >
            <Container>
              <Row>
                <Col>
                  <label style={{ textAlign: "center" }}>
                    Select a Category{" "}
                  </label>
                </Col>
                <br />
                <ToggleButtonGroup type="radio" name="options">
                  <ToggleButton
                    className="btn-dark"
                    style={{ width: "200px" }}
                    value="Salty"
                    onChange={this.handlefood}
                    style={{ marginLeft: "-500px", marginRight: "600px" }}
                  >
                    Salty
                  </ToggleButton>

                  <ToggleButton
                    className="btn-dark"
                    value="Sweet"
                    onChange={this.handlefood}
                    style={{ marginLeft: "-500px", marginRight: "700px" }}
                  >
                    Sweet
                  </ToggleButton>
                </ToggleButtonGroup>
              </Row>
            </Container>
          </div>
        </div>
      );
    }

    if (this.props.cat === "accessories") {
      filter = (
        <div>
          <div
            className=" p-2  bg-light border-right"
            style={{
              marginTop: "70px",
            }}
          >
            <Container>
              <Row>
                <Col>
                  <label style={{ textAlign: "center" }}>
                    Select the Material{" "}
                  </label>
                </Col>
                <br />
                <ToggleButtonGroup type="radio" name="options">
                  <ToggleButton
                    className="btn-dark"
                    style={{ width: "200px" }}
                    value="Gold"
                    onChange={this.handleacc}
                    style={{ marginLeft: "-500px", marginRight: "600px" }}
                  >
                    Gold
                  </ToggleButton>

                  <ToggleButton
                    className="btn-dark"
                    value="Silver"
                    onChange={this.handleacc}
                    style={{ marginLeft: "-500px", marginRight: "700px" }}
                  >
                    Silver
                  </ToggleButton>
                </ToggleButtonGroup>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
    if (this.props.cat === "babyproducts") {
      filter = (
        <div>
          <div
            className=" p-2  bg-light border-right"
            style={{
              marginTop: "70px",
            }}
          >
            <Container>
              <Row>
                <Col>
                  <label style={{ textAlign: "center" }}>
                    Select a gender{" "}
                  </label>
                </Col>
                <br />
                <ToggleButtonGroup type="radio" name="options">
                  <ToggleButton
                    className="btn-dark"
                    style={{ width: "200px" }}
                    value="Female"
                    onChange={this.handlebaby}
                    style={{ marginLeft: "-500px", marginRight: "600px" }}
                  >
                    Girle
                  </ToggleButton>

                  <ToggleButton
                    className="btn-dark"
                    value="Male"
                    onChange={this.handlebaby}
                    style={{ marginLeft: "-500px", marginRight: "700px" }}
                  >
                    Boy
                  </ToggleButton>
                </ToggleButtonGroup>
              </Row>
            </Container>
          </div>
        </div>
      );
    }

    console.log(this.state);
    if (this.state.data.length > 0) {
      console.log("i got dataa");
      var z = <ItemList items={this.state.data} cat={this.props.cat} />;
    }
    return (
      <div>
        <NavbarBuyer />
        <div>
          {/* <div  className=" p-2  bg-light border-right" id="sidebar-wrapper" style ={{ width:"20rem"}}> */}
          <div></div>
          <Container>
            <div>
              {filter}
              <br />
              <button
                className="btn btn-danger"
                style={{
                  width: "200px",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                onClick={this.filter}
              >
                filter
              </button>
            </div>
          </Container>

          <div className="p-2 container-fluid" style={{ margin: "0 auto" }}>
            <br />
            <br />
            <div className="row" style={{ margin: "0 auto" }}>
              {z}
              {/* <ItemList items ={ this.state.data} />  */}
              {/* <ItemList items ={[{title:"kjbdljb", _id:2}]} />  */}
            </div>
          </div>
          <div className="d-flex toggled" id="wrapper">
            <div className="p-2"></div>
            {content}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(CatBuyer);
