module.exports = {

    getInventory: (req, res) => {
        const db = req.app.get('db');
        

        db.get_inventory('db')
          .then(inventory => {res.status(200).send(inventory);
          })
          .catch(err => { res.status(500).send(err);
          });
      },

    addProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, image} = req.body;

        db.add_product(name, price, image)
          .then( () => res.sendStatus(200))
          .catch(err => res.status(500).send(err)
        );
      },
    
    updateProduct: (req, res) => {
        const {id} =req.params,
        {inventory} = req.body
         db = req.app.get('db');
       

        db.update_product({inventory, id})
          .then( () => res.sendStatus(200))
          .catch(err => { res.status(500).send(err);
          });
      },
    
      deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product({id})
          .then( () => res.sendStatus(200))
          .catch(err => { res.status(500).send(err);
          });
        }
    };