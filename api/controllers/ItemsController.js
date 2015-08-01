/**
 * ItemsController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 var ItermsController = {
 	index: function(req,res) {

         // This will render the view: /var/www/sails-test/views/user/index.ejs
         res.view();

   },

   // To trigger this action locally, visit: 'http://localhost:port/user/show'
   show: function(req,res) {

         // This will render the view: /var/www/sails-test/views/user/show.ejs
         res.view();

   },

   // To trigger this action locally, visit: 'http://localhost:port/user/edit'
   edit: function(req,res) {

         // This will render the view: /var/www/sails-test/views/user/edit.ejs
         res.view();

   },

   // To trigger this action locally, visit: 'http://localhost:port/user/delete'
   delete: function(req,res) {

         // This will render the view: /var/www/sails-test/views/user/delete.ejs
         res.view();

   }
 };
 module.exports = ItermsController;
