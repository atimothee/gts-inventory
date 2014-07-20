//couchdb design documents and map reduce functions

var products = function(doc){if(doc.product_name){emit(doc._id, {_id:doc._id, product_name:doc.product_name});}}

{
   "_id": "_design/products",
   "_rev": "5-12bc3c2402128e0d4a87eea66d83e5af",
   "views": {
       "all": {
           "map": "function(doc){if(doc.product_name){emit(doc._id, {_id:doc._id, product_name:doc.product_name,model_number:doc.model_number});}}"
       }
   }
}

var records = function(doc){if(doc.product_id&&doc.customer_id){emit(doc._id, {_id:doc._id, product_id:doc.product_id,customer_id:doc.customer_id});}};

{
   "_id": "_design/records",
   "_rev": "13-2f5e4e0c7278d93570366c239e3e8ac4",
   "views": {
       "all": {
           "map": "function(doc){if(doc.f_product_id&&doc.f_customer_id){emit(doc._id, {_id:doc._id, f_product_id:doc.f_product_id,f_product_name:doc.f_product_name,f_product_model_number:doc.f_product_model_number,f_customer_id:doc.f_customer_id,f_customer_name:doc.f_customer_name,quantity:doc.quantity, date:doc.date, comment:doc.comment});}};"
       }
   }
}

var customers = function(doc){if(doc.customer_name){emit(doc._id, {_id:doc._id, customer_name:doc.customer_name, location: doc.location});}};

{
   "_id": "_design/customers",
   "_rev": "2-fb90fb3d577ceaf257a1794c624103dd",
   "views": {
       "all": {
           "map": "function(doc){if(doc.customer_name){emit(doc._id, {_id:doc._id, _rev:doc._rev, customer_name:doc.customer_name, location: doc.location});}};"
       }
   }
}



  