import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
// var componentDidMount=() =>{
//   this.deleteItems();
// }
const ListItems = (props) => {
  var deleteItems = (pk, i) => {
    console.log(i);
    axios
      .delete(" http://127.0.0.1:8000/seller/profile/deleteitems/" + pk)
      .then((response) => {
        console.log(response.data);
      });
    props.items.splice(i, 1);
    // this.setState({
    //   items: this.props.items.filter(item => item['pk'] !== pk)
    // })
    console.log(pk);
    // window.location = 'http://127.0.0.1:8000/seller/profile/'+props.id
    // window.location.reload();
    // loadData()
  };
  var getDerivedStateFromProps = () => {
    deleteItems();
  };
  // var loadData = (id) => {
  //   var that = this;
  //   console.log(id)
  //   console.log(1111111111111111)
  //  $.ajax({
  //    url:('http://127.0.0.1:8000/seller/profile/items/1'),
  //    type:'GET',
  //    success:function(data){
  //      console.log(data, 'Fetch the data')
  //      var data1 = JSON.parse(data)
  //     // var data1 = data
  //     //  that.setState({ items:data1},()=>{console.log("itemsss",that.state)})
  //      // that.setState(data
  //      // console.log(that.state,'staaate')
  //    },
  //    error : function(error){
  //      console.log(error, 'error in fetch the data')
  //    }
  //  })
  //  console.log("hhhhhhhhhhhh")
  // }
  console.log(props);
  return (
    <div>
      <Row>
        {props.items.map((item, i) => {
          console.log(props.cat, "Liiiiiiiiis");
          return (
            <Col key={i}>
              <Card
                style={{
                  width: "400px",
                  marginTop: "50px",
                  marginLeft: "90px",
                  padding: "0px 20px 0px 20px",
                }}
              >
                <br />
                <Link
                  to={{
                    pathname: "/buyer/item",
                    info: { item: item, cat: props.cat },
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item["fields"]["image"]}
                    width="200px"
                    height="200px"
                  />
                </Link>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "normal" }}>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      Product Name :
                    </label>{" "}
                    {item["fields"]["productname"]}
                  </Card.Title>
                  <Card.Text style={{ fontWeight: "normal" }}>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      Description :
                    </label>{" "}
                    {item["fields"]["description"]}
                  </Card.Text>
                  <Card.Text style={{ fontWeight: "normal" }}>
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      Product Price :
                    </label>{" "}
                    {item["fields"]["price"]}
                  </Card.Text>
                  <Link
                    to={{
                      pathname: "/seller/profile/1",
                    }}
                  >
                    <Button
                      variant="primary"
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        deleteItems(item["pk"], i);
                      }}
                    >
                      Delete
                    </Button>
                  </Link>
                  <Link
                    to={{
                      pathname: "/seller/editProfile/" + item["pk"],
                      info: {
                        id: item["pk"],
                        category: item["fields"]["category"],
                        product: item["fields"]["productname"],
                        desc: item["fields"]["description"],
                        price: item["fields"]["price"],
                      },
                    }}
                  >
                    <Button
                      variant="primary"
                      style={{ backgroundColor: "green", marginLeft: "100px" }}
                    >
                      Edit
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ListItems;
