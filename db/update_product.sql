UPDATE shelfie_products

SET (name, price, image) = 
$2, $3, $4

WHERE shelfie_products_id = ${id}