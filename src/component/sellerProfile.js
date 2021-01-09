import React from "react";
// import ReactDOM from "react-dom";
import $ from "jquery";
import {
  Container,
  CardGroup,
  Card,
  Row,
  Col,
  Button,
  NavDropdown,
} from "react-bootstrap";
import logo11 from "../images/logo11.png";
import heart from "../images/heart.jpg";
import back3 from "../images/back3.jpg";
import { Link } from "react-router-dom";
import down from "../images/down.jpg";
// import { useDispatch } from "react-redux";
import ListItems from "./listItems";
var signout = () => {
  localStorage.removeItem("token");
};
var id = JSON.parse(localStorage.getItem("token"))["id"];
var url = `/seller/profile/${id}`;
const styles = {
  card: {
    borderRadius: 55,
    padding: "4rem",
    marginLeft: "-100px",

    width: "1600px",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 55,
  },
};
const Items = (props) => (
  <Card>
    <td>{props.Item.product_Name}</td>
    <td>{props.Item.price}</td>
    <td>{props.Item.description}</td>
    <td>
      <Button variant="success" color="#ffffff">
        <Link to={"/seller/editProfile" + props.Item.item_id}>edit</Link>
      </Button>
    </td>
    <td>
      <Button variant="danger" color="#ffffff">
        {" "}
        <a
          href="#"
          onClick={() => {
            props.deleteItem(props.Item.item_id);
          }}
        >
          delete
        </a>
      </Button>
    </td>
  </Card>
);
class SellerProfile extends React.Component {
  constructor(props) {
    super(props);
    //  this.state={
    //    store_name: '',
    //    image:'',
    //    title:'',
    //    location:'',
    //    delivery_time:'',
    //    items:[]
    //  }
    this.state = { data: [], items: [] };
  }
  fetchData = (id) => {
    var that = this;
    console.log(id);
    console.log(1111111111111111);
    // console.log(this.props.id,'iiiidddd')
    $.ajax({
      url: ` http://127.0.0.1:8000/seller/profile/${this.props.match.params.id}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        var data1 = JSON.parse(data);
        //  window.location =`/seller/profile/${JSON.parse(localStorage.getItem('token')['id'])}`
        // var data1 = data
        that.setState({ data: data1 }, () => {
          console.log("22222222222222", that.state);
        });
        // that.setState(data
        // console.log(that.state,'staaate')
      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  fetchItems = (id) => {
    var that = this;
    console.log(id);
    console.log(1111111111111111);
    $.ajax({
      url: `http://127.0.0.1:8000/seller/profile/items/${this.props.match.params.id}`,
      type: "GET",
      success: function (data) {
        console.log(data, "Fetch the data");
        //  var data1 = JSON.parse(data)
        // var data1 = data
        that.setState({ items: data }, () => {
          console.log("itemsss", that.state);
        });
        // that.setState(data
        // console.log(that.state,'staaate')
      },
      error: function (error) {
        console.log(error, "error in fetch the data");
      },
    });
    console.log("hhhhhhhhhhhh");
  };
  componentDidMount = () => {
    this.fetchData();
    this.fetchItems();
  };
  upState = (data) => {
    this.setState({
      store_name: data["fields"],
    });
  };

  // ItemList(){
  //   return this.state.items.map(item => {

  //     return
  //     <Items item={item} deleteItem={this.deleteItem} key={item.item_id}/>;
  //   })
  // }
  render() {
    console.log(this.state, "staaaaaaaate");
    if (this.state.data[0])
      var x = (
        <div>
          {" "}
          <Container fluid style={{ marginTop: "-500px" }}>
            <CardGroup className="m-5 d-block">
              <Card className=" shadow" style={styles.card}>
                <Row>
                  <Col>
                    <Card.Img
                      src={this.state.data[0]["fields"].image}
                      style={styles.cardImage}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text as="h2">
                        <span style={{ fontWeight: "bold" }}>Store Name :</span>
                        {this.state.data[0]["fields"].store_name}
                      </Card.Text>
                      <Card.Text as="h2">
                        <span style={{ fontWeight: "bold" }}>
                          Description :
                        </span>
                        {this.state.data[0]["fields"].description}
                      </Card.Text>

                      <Card.Text as="h2">
                        <span style={{ fontWeight: "bold" }}>Location :</span>
                        {this.state.data[0]["fields"].location}
                      </Card.Text>

                      <Card.Text as="h4" style={styles.cardText}>
                        Delievery Time :
                        {this.state.data[0]["fields"].delivery_time}
                      </Card.Text>
                      <Link
                        to={{
                          pathname: "/seller/addItem",
                          info: {
                            id: this.state.data[0]["fields"]["category"],
                          },
                        }}
                      >
                        <Button
                          style={{
                            margin: "50px 0px 0px 400px",
                            backgroundColor: "#800000",
                          }}
                          bg="#80000"
                        >
                          Add Item
                        </Button>
                      </Link>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Container>
          <Container>
            <Row style={{ marginTop: "25px" }}>
              <Col>
                <hr
                  style={{
                    color: "black",
                    marginLeft: "-5px",
                    width: "100%",
                    borderWidth: "2px",
                    height: "5px",
                  }}
                />
              </Col>
              <Col>
                <h2 style={{ marginLeft: "50px" }}>Your Products</h2>
              </Col>

              <Col>
                {" "}
                <hr
                  style={{
                    color: "black",
                    marginRight: "-5px",
                    width: "90%",
                    borderWidth: "2px",
                    height: "5px",
                  }}
                />
              </Col>
            </Row>
          </Container>
          <ListItems
            items={this.state.items}
            cat={this.state.data[0]["fields"].category}
          />
        </div>
      );

    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "1030px",
            backgroundImage: `url(${back3})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Row className="justify-content-md-center">
              {/* <Col xs lg="3">
    1 of 3
  </Col> */}
              <div
                style={{
                  float: "none",
                  marginLeft: "450px",
                  marginRight: "100px",
                  marginBottom: "20px",
                  marginTop: "0",
                  paddingTop: "10px",
                }}
              >
                <a href="/">
                  <img src={logo11} width="200" height="180" />
                </a>
              </div>

              <hr
                style={{
                  border: "0",
                  borderTop: "1px solid red",
                }}
              />
            </Row>
            <hr
              style={{ marginLeft: "170px", border: "0.5px solid white" }}
            ></hr>
            <Row style={{ marginLeft: "90px" }}>
              <Col style={{ padding: "0px 20px 0px 150px" }}>
                <a
                  href="/home"
                  style={{
                    color: "#FCFBED",
                    fontSize: "25px",
                    fontFamily: "Yanone Kaffeesatz",
                  }}
                >
                  Home
                </a>
              </Col>
              <Col style={{ padding: "0px 20px 0px 20px" }}>
                <a
                  href={url + ""}
                  style={{
                    color: "#FCFBED",
                    fontSize: "25px",
                    fontFamily: "Yanone Kaffeesatz",
                  }}
                >
                  Profile
                </a>
              </Col>

              <Col style={{ padding: "0px 20px 0px 20px" }}>
                <a
                  href="/orderList"
                  style={{
                    color: "#FCFBED",
                    fontSize: "25px",
                    fontFamily: "Yanone Kaffeesatz",
                  }}
                >
                  View Orders
                </a>
              </Col>
            </Row>
            <Row style={{ padding: "40px" }}>
              <Col>
                {/* <div
                  style={{
                    float: "none",
                    marginLeft: "360px",
                    marginRight: "100px",
                    marginTop: "100px",
                  }}
                >
                  <a href="/">
                    <img src={heart} width="200" height="180" />
                  </a>
                </div> */}
              </Col>{" "}
              <NavDropdown
                style={{
                  padding: "15px",
                  color: "#FCFBED",
                  marginTop: "-100px",
                  textDecoration: "none",
                }}
              >
                <NavDropdown.Item href="/settings" style={{ color: "#826105" }}>
                  Setting
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/"
                  style={{ color: "#826105" }}
                  onClick={signout}
                >
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Row>
          </Container>
        </div>
        {x}
        <div
          style={{
            width: "100%",
            marginTop: "150px",
            height: "600px",
            backgroundImage: `url(${down})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row>
              <Col style={{ padding: "130px" }}>
                <h3 style={{ color: "#fcfbed" }}>Have a Question?</h3>
                <br />

                <i
                  className="far fa-clock fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  Saturday - Thursday: 09:00AM - 18:30PM
                </i>
                <br />
                <br />
                <i
                  class="fas fa-map-marker-alt fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  Jordan,Amman
                </i>
                <br />
                <br />
                <i
                  class="fas fa-phone-alt fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  {" "}
                  +962796720978
                </i>
                <br />
                <br />
                <i
                  class="fas fa-envelope fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
                >
                  <a
                    href="mailto:lovemadewith817@gmail.com"
                    style={{ color: "#fcfbed" }}
                  >
                    {" "}
                    Made_With_Love
                  </a>
                </i>
              </Col>
              <Col style={{ padding: "130px" }}>
                <h3 style={{ color: "#fcfbed" }}>Informations</h3>
                <br />
                <Link to="/about">
                  <i
                    class="far fa-sticky-note fa-2x"
                    style={{ fontSize: "20px", color: "#fcfbed" }}
                  >
                    {" "}
                    About Us
                  </i>
                </Link>
                <br />
                <br />
                <Link to="/contactUs">
                  <i
                    class="far fa-sticky-note fa-2x"
                    style={{ fontSize: "20px", color: "#fcfbed" }}
                  >
                    {" "}
                    Contact Us
                  </i>
                </Link>
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default SellerProfile;
