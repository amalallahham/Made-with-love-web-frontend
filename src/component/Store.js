import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { createForms} from 'react-redux-form';



var signUpSeller = {

    email :"",
    password : "",
    storeName : "",
    category : "",
    description : "",
    location : "",
    deliveryOrder : "",
    image:""
   };
   
   var signUpBuyer = {
       email:"",
       password:"",
       userName:"",
       location:"",
       phoneNumber:""
   } 
   var settingsBuyer ={
    email:"",
    password:"",
    userName:"",
    location:"",
    phoneNumber:""
   }
   
  var loginState={
    email:"",
    password:""
 }

 var category = {
    name:""
 }

  var sellerProfile = {

    email: "",
    password: "",
    storeName: "",
    category: "",
    description: "",
    location: "",
    deliveryOrder: "",
    image: ""
};

var signUpBuyer = {
    email: "",
    password: "",
    userName: "",
    location: "",
    phoneNumber: ""
}

var loginState = {
    email: "",
    password: ""
}
var settingsBuyer ={
    email:"",
    password:"",
    userName:"",
    location:"",
    phoneNumber:""
   }

var category = {
    name: ""
}

var sellerProfile = {
    id: "",
    name: "",
    image: "",
    product_Name: "",
    description: "",
    items: []

}

var filters = {
    gender: '',
    size: '',
    food: '',
    acc: '',
    babyGender: ''
}

var categoryData = {
    data: []
}

var filteredData = {
    filteredData: categoryData.data
}

var filteringReducer = (state = filteredData, action) => {
    console.log('default', filteredData)
    switch (action.type) {
        case 'filtering':
            var obj = {}
            obj.filteredData = action.text
            filteredData = Object.assign({}, state, obj)
            console.log('filteredData', filteredData)
            return Object.assign({}, state, obj)
        default:
            return categoryData;
    }
}

var categoryReducer = (state = categoryData, action) => {
    switch (action.type) {
        case 'getdata':
            var obj = {}
            obj.data = action.text
            categoryData = Object.assign({}, state, obj)
            console.log('categoryData', categoryData)
            return Object.assign({}, state, obj)
        default:
            return state;
    }
}

var filterReducer = (state = filters, action) => {

    switch (action.type) {
        case 'food':
            var obj = {}
            obj.food = action.text
            filters = Object.assign({}, state, obj)
            console.log(filters)
            return Object.assign({}, state, obj)
        case 'accessories':
            var obj = {}
            obj.acc = action.text
            filters = Object.assign({}, state, obj)
            console.log(filters)
            return Object.assign({}, state, obj)
        case 'babyproducts':
            var obj = {}
            obj.babyGender = action.text
            filters = Object.assign({}, state, obj)
            console.log(filters)
            return Object.assign({}, state, obj)
        case 'clothes':
            console.log("iiiiiin")
            var obj = {}
            if (action.filter === 'size')
                obj.size = action.text
            else if (action.filter === 'gender')
                obj.gender = action.text

            filters = Object.assign({}, state, obj)
            console.log("filters", filters)
            return Object.assign({}, state, obj)
        default:
            return state;
    }
}

var reducerBuyer = (state = signUpBuyer, action) => {
    switch (action.type) {
        case 'INPUT_BUYER':
            var obj = {}
            obj[action.name] = action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj)


        default:
            return state;
    }
}

var reducerSettings = (state =settingsBuyer, action) =>{
    switch (action.type) {
        case 'SETTINGS':
            var obj = {}
            obj[action.name]= action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj) 
          
    
        default:
           return state;
    }
}




var reducer = (state = signUpSeller, action) => {
    // console.log('reducer', state);
    switch (action.type) {
        case 'INPUT_CANGE':
            //console.log("object", Object.assign( {},state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text}))
            // var x = action.name; 
            var obj = {}
            obj[action.name] = action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj)


        default:
            return state;
    }

}

var catReducer = (state = category, action) => {
    console.log(action)
    switch (action.type) {
        case 'food_category':

            // console.log("objj",obj)
            category = Object.assign({}, state, { name: 'food' })
            console.log(state, 'state')
            console.log('cat', category)

            return Object.assign({}, state, { name: 'food' })

        case 'clothes_category':
            category = Object.assign({}, state, { name: 'clothes' })
            console.log(state, 'state')
            console.log('cat', category)

            return Object.assign({}, state, { name: 'clothes' })
        case 'babyshower_category':
            category = Object.assign({}, state, { name: 'babyproducts' })
            console.log(state, 'state')
            console.log('cat', category)

            return Object.assign({}, state, { name: 'babyproducts' })
        case 'accesories_category':
            category = Object.assign({}, state, { name: 'accessories' })
            console.log(state, 'state')
            console.log('cat', category)

            return Object.assign({}, state, { name: 'accessories' })
        default:
            return category;
    }

}


// const allReducers = combineReducers({
//     reducer,
//     // addItem: reducerAddItem
//     reducerBuyer,
//     catReducer

//  })
var initialState = {
    product: "",
    description: "",
    price: "",
    type: "",
    size: "",
    gender: "",
    material: ""
}
var orderForm = {
    quantity: "",
    location: "",
    phoneNumber: "",
}
var editProfile ={
    product: "" ,
    description:"",
    price:"",
    type:"",
    size:"",
    gender:"",
    material:""
}
var password ={
    newPassword:"",
    oldPassword :"",

}

var reducerAddItem = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return Object.assign({}, state, { product: action.product }, { description: action.description }, { price: action.price }, { image: action.image })
        default:
            return state

    }
}

var resducerProfile = (state = sellerProfile, action) => {
    switch (action.type) {
        case 'fetch_seller':
            return Object.assign({}, state, { name: action.name }, { image: action.image }, { product_Name: action.product_Name }, { description: action.description }, { item_image: action.image })
        case 'delete_item':
            return Object.assign({}, state, { name: action.name }, { image: action.image }, { product_Name: action.product_Name }, { description: action.description }, { item_image: action.image })
        // let newItems = [...state.sellerProfile.items[]]
        // newItems = newItems.filter(item=>item.id != action.id)
        // return newItems;
        default:
            return state
    }
}


var order = {

}



var orderFormReducer = (state = {}, action) => {
    switch (action.types) {
        case 'RECEIVE_DATA':
          order=  Object.assign({},...state,{ data: action.data}) 
          console.log(order,"gshdjgkh")
        return Object.assign({},...state,{ data: action.data}) 
        default:
            return state
    }
}


// const allReducers = 
const store = createStore(combineReducers({
    reducer: reducer,
    addItem: reducerAddItem,
    reducerBuyer: reducerBuyer,
    catReducer: catReducer,
    orderFormReducer:orderFormReducer,
    categoryReducer:categoryReducer,
    filterReducer:filterReducer,
    filteringReducer:filteringReducer,
    reducerSettings:reducerSettings

   
    ,
    ...createForms({
        user: initialState,
        login:loginState,
        order:orderForm,
        edit : editProfile,
        password:password,
        signUpSeller:signUpSeller,
        signUpBuyer:signUpBuyer


     } )
})
);
export default store;