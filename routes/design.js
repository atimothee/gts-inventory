//couchdb design documents and map reduce functions

{
   "_id": "_design/products",
   "views": {
       "all": {
           "map": "function(doc){if(doc.product_name){emit(doc._id, [doc._id, doc.product_name]);}}"
       }
   }
}

var products = function(doc){if(doc.product_name){emit(doc._id, [doc._id, doc.product_name]);}}

{
   "_id": "_design/records",
   "views": {
       "all": {
           "map": "function(doc){if(doc.product_id){emit(doc._id, [doc._id, doc.product_id, doc.customer_id]);}};"
       }
   }
}

var records = function(doc){if(doc.product_id && doc.customer_id){emit(doc._id, [doc._id, doc.product_id, doc.customer_id]);}};