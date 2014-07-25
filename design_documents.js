//couchdb design documents and map reduce functions

{
   "_id": "_design/products",
   "views": {
       "all": {
           "map": "function(doc){if(doc.product_name){emit(doc._id, {_id:doc._id, product_name:doc.product_name,model_number:doc.model_number});}}"
       },
       "quantityin": {
           "map": "function(doc){if(doc.f_product_id&&doc.f_customer_id&&doc.type=='In'){emit([doc.f_product_id, doc.date],doc.quantity);}}",
           "reduce": "function(keys,values){return sum(values);}"
       }
   }
}

{
   "_id": "_design/records",
   "views": {
       "all": {
           "map": "function(doc){if(doc.f_product_id&&doc.f_customer_id){emit([doc._id, doc.date], {_id:doc._id, f_product_id:doc.f_product_id,f_product_name:doc.f_product_name,f_product_model_number:doc.f_product_model_number,f_customer_id:doc.f_customer_id,f_customer_name:doc.f_customer_name,quantity:doc.quantity, date:doc.date, comment:doc.comment});}};"
       }
   }
}

{
   "_id": "_design/customers",
   "views": {
       "all": {
           "map": "function(doc){if(doc.customer_name){emit(doc._id, {_id:doc._id, _rev:doc._rev, customer_name:doc.customer_name, location: doc.location});}};"
       }
   }
}


  