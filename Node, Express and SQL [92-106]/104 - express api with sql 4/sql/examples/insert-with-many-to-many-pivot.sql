insert into house (address, title, price, cityId) values
('Raudongrutu g.', 'Vitalijaus menė', 200, 4, 2);

set @created_house_id = last_insert_id();

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),
('nuotrauka 4'),
('nuotrauka 5');

set @first_image_id = last_insert_id();

insert into house_image(imageId, houseId)
select imageId, @created_house_id as houseId
from image
where imageId >= @first_image_id;
