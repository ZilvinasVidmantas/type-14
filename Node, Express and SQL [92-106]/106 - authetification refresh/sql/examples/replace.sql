update house
set address = 'atnaujinta', title= 'atnaujinta', price=777, cityId=1
where houseId = 12;

set @houseImagesIds = (
	select group_concat(imageId) 
    from house_image 
    where houseId = 12
    group by houseId);

delete from house_image
where houseId = 12;

delete from image
where find_in_set(imageId, @houseImagesIds);

insert into image (src) values
('nuotrauka 1'),
('nuotrauka 2'),
('nuotrauka 3'),
('nuotrauka 4'),
('nuotrauka 5');

set @first_image_id = last_insert_id();

insert into house_image(imageId, houseId)
select imageId, 12 as houseId
from image
where imageId >= @first_image_id;