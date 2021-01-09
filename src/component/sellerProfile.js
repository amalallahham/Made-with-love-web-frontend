import React from "react";
// import ReactDOM from "react-dom";
import $ from "jquery";
import { Container, CardGroup, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import NavbarSeller from "./layout/NavbarSeller";
import ListItems from "./listItems";
const styles = {
  card: {
    backgroundColor: "#B7E0F2",
    borderRadius: 55,
    padding: "3rem",
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
      <Button variant="success" color="#FFFFFF">
        <Link to={"/seller/editProfile" + props.Item.item_id}>edit</Link>
      </Button>
    </td>
    <td>
      <Button variant="danger" color="#FFFFFF">
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
          <Container fluid>
            <CardGroup className="m-5 d-block">
              <Card className="m-5 border-0 shadow" style={styles.card}>
                <Row>
                  <Col>
                    <Card.Img
                      src={this.state.data[0]["fields"].image}
                      style={styles.cardImage}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title as="h1">
                        Store Name :{this.state.data[0]["fields"].store_name}
                      </Card.Title>
                      <Card.Text as="h4" style={styles.cardText}>
                        Description :{this.state.data[0]["fields"].description}
                      </Card.Text>
                      <Card.Text as="h4" style={styles.cardText}>
                        Location :{this.state.data[0]["fields"].location}
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
          {this.state.items ? 
            <ListItems
              items={this.state.items}
              cat={this.state.data[0]["fields"].category}
            />
           : null}
        </div>
      );
    return (
      <div>
        <NavbarSeller />
        {x}
      </div>
    );
  }
}
export default SellerProfile;
