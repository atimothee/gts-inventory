//couchdb design documents and map reduce functions

var products = function(doc){if(doc.product_name){emit(doc._id, {_id:doc._id, product_name:doc.product_name});}}

{
   "_id": "_design/products",
   "views": {
       "all": {
           "map": "function(doc){if(doc.product_name){emit(doc._id, {_id:doc._id, product_name:doc.product_name});}}"
       }
   }
}

var records = function(doc){if(doc.product_id&&doc.customer_id){emit(doc._id, {_id:doc._id, product_id:doc.product_id,customer_id:doc.customer_id});}};

{
   "_id": "_design/records",
   "views": {
       "all": {
           "map": "function(doc){if(doc.product_id&&doc.customer_id){emit(doc._id, {_id:doc._id, product_id:doc.product_id,customer_id:doc.customer_id});}};"
       }
   }
}

var customers = function(doc){if(doc.customer_name){emit(doc._id, {_id:doc._id, customer_name:doc.customer_name, location: doc.location});}};

{
  "_id": "_design/customers",
  "views":{
    "all":{
      "map":"function(doc){if(doc.customer_name){emit(doc._id, {_id:doc._id, customer_name:doc.customer_name, location: doc.location});}};"
    }
  }
}