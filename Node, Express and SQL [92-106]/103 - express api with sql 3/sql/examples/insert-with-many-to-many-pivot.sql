insert into house (address, title, price, cityId, userId) values
('Vilniaus g.', 'Irenos kotedžas', 200, 3, 2);

set @created_house_id = last_insert_id();

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),
('nuotrauka 4'),
('nuotrauka 5');

set @image_id = last_insert_id();

insert into house_image (imageId, houseId) values
(@image_id, @created_house_id),
(@image_id + 1, @created_house_id),
(@image_id + 2, @created_house_id),
(@image_id + 3, @created_house_id),
(@image_id + 4, @created_house_id);