import $ from "jquery";
import React, { useState } from "react";
import { Control, Form } from "react-redux-form";
import NavbarSeller from "./layout/NavbarSeller";
import {storage} from "./fireConfig.js";


function ItemForm(props) {
  console.log("caaaat", props.location.info);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  var obj1 = { category: props.location.info.id, url: "", user: {} };
  const ajax = (user) => {
    var tokenObj = JSON.parse(localStorage.getItem("token"));
    obj1 = Object.assign({}, user);
    console.log(url);
    obj1["url"] = url;
    obj1.category = props.location.info.id;
    obj1.user = tokenObj["id"];
    console.log(obj1);
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/addItem", //fix it later
      data: JSON.stringify(obj1),
      contentType: "application/json",
      success: function () {
        console.log(obj1, "success");
        window.location = `/seller/profile/${
          JSON.parse(localStorage.getItem("token"))["id"]
        }`;
        //  console.log(`${JSON.parse(localStorage.getItem('token')['id'])}`)
        // window.location = `/seller/profile/:id`
      },
      error: function (err) {
        console.log(err);
      },
    });
  };

  const handleUpload = (e) => {
    console.log(this);
    const uploadTask = storage.ref(`imagee/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error ,'lll');
      },
      () => {
        storage
          .ref("imagee")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };
  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const tr2 = () => {
    console.log(url);
    if (image !== "") {
      return (
        <div>
          <img src={url} />
          <input type="button" value="Upload" onClick={handleUpload} />
        </div>
      );
    }
  };
  const food = () => {
    if (obj1.category === "food") {
      return (
        <div>
          <Form model="user" onSubmit={(user) => ajax(user)}>
            <div className="col-md-3">
              <label className="form-label">Category:</label>
              <br></br>
              <Control.select
                model="user.type"
                className="form-select"
                required
              >
                <option selected disabled value="">
                  Choose The Type
                </option>
                <option value="Salty">Salty</option>
                <option value="Sweet">Sweet</option>
              </Control.select>
            </div>
            <br></br>
            <div className="col-md-4">
              <label htmlFor="user.product" className="form-label">
                Name Of The Product:
              </label>
              <Control.text
                model="user.product"
                id="user.product"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.description" className="form-label">
                Description:
              </label>
              <Control.text
                model="user.description"
                id="user.description"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.price" className="form-label">
                Price:
              </label>
              <Control.text
                model="user.price"
                id="user.price"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user.image" className="form-label">
                Add Picture:
              </label>
              <Control.file
                model="user.image"
                className="form-control"
                aria-label="file example"
                onChange={uploadImage}
                required
              />
              {tr2()}
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      );
    }
  };
  const clothes = () => {
    if (obj1.category === "clothes") {
      return (
        <div>
          <NavbarSeller />
          <Form model="user" onSubmit={(user) => ajax(user)}>
            <div className="col-md-3">
              <label className="form-label">Gender:</label>
              <br></br>
              <Control.select
                model="user.gender"
                className="form-select"
                required
              >
                <option selected disabled value="">
                  Choose the gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Control.select>
            </div>
            <br></br>
            <div className="col-md-3">
              <label className="form-label">Size:</label>
              <br></br>
              <Control.select
                model="user.size"
                className="form-select"
                required
              >
                <option selected disabled value="">
                  Choose the size
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </Control.select>
            </div>
            <br></br>
            <div className="col-md-4">
              <label htmlFor="user.product" className="form-label">
                Name Of Product:
              </label>
              <Control.text
               autocomplete="off"
                model="user.product"
                id="user.product"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.description" className="form-label">
                Description:
              </label>
              <Control.text
               autocomplete="off"
                model="user.description"
                id="user.description"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.price" className="form-label">
                Price:
              </label>
              <Control.text
               autocomplete="off"
                model="user.price"
                id="user.price"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user.image" className="form-label">
                Add Picture:
              </label>
              <Control.file
                model="user.image"
                className="form-control"
                aria-label="file example"
                onChange={uploadImage}
                required
              />
              {tr2()}
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      );
    }
  };
  const babyproducts = () => {
    if (obj1.category === "babyproducts") {
      return (
        <div>
          <Form model="user" onSubmit={(user) => ajax(user)}>
            <div className="col-md-3">
              <label className="form-label">Gender:</label>
              <br></br>
              <Control.select
                model="user.gender"
                className="form-select"
                required
              >
                <option selected disabled value="">
                  Choose the gender
                </option>
                <option value="Male">Boy</option>
                <option value="Female">Girl</option>
              </Control.select>
            </div>
            <br></br>
            <div className="col-md-4">
              <label htmlFor="user.product" className="form-label">
                Name Of Product:
              </label>
              <Control.text
                model="user.product"
                id="user.product"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.description" className="form-label">
                Description:
              </label>
              <Control.text
                model="user.description"
                id="user.description"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.price" className="form-label">
                Price:
              </label>
              <Control.text
                model="user.price"
                id="user.price"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user.image" className="form-label">
                Add Picture:
              </label>
              <Control.file
                model="user.image"
                className="form-control"
                aria-label="file example"
                onChange={uploadImage}
                required
              />
              {tr2()}
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      );
    }
  };
  const accessories = () => {
    if (obj1.category === "accessories") {
      return (
        <div>
          <Form model="user" onSubmit={(user) => ajax(user)}>
            <div className="col-md-3">
              <label className="form-label">Material:</label>
              <br></br>
              <Control.select
                model="user.material"
                className="form-select"
                required
              >
                <option selected disabled value="">
                  Choose the material
                </option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
              </Control.select>
            </div>
            <br></br>
            <div className="col-md-4">
              <label htmlFor="user.product" className="form-label">
                Name Of Product:
              </label>
              <Control.text
                model="user.product"
                id="user.product"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.description" className="form-label">
                Description:
              </label>
              <Control.text
                model="user.description"
                id="user.description"
                className="form-control"
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="user.price" className="form-label">
                Price:
              </label>
              <Control.text
                model="user.price"
                id="user.price"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user.image" className="form-label">
                Add Picture:
              </label>
              <Control.file
                model="user.image"
                className="form-control"
                aria-label="file example"
                onChange={uploadImage}
                required
              />
              {tr2()}
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </div>
      );
    }
  };
  return (
    <div>
      <div>{food()}</div>
      <div>{clothes()}</div>
      <div>{babyproducts()}</div>
      <div>{accessories()}</div>
    </div>
  );
}
export default ItemForm;
